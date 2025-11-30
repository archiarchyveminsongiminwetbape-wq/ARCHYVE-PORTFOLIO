import { useEffect, useState } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        // Vérifier si c'est une nouvelle visite (pas visitée dans les 24 dernières heures)
        const lastVisit = localStorage.getItem('lastPortfolioVisit');
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        let shouldCount = true;
        if (lastVisit) {
          const timeSinceLastVisit = now - parseInt(lastVisit);
          if (timeSinceLastVisit < twentyFourHours) {
            shouldCount = false;
          }
        }

        // Si c'est une nouvelle visite, appeler notre endpoint backend pour incrémenter
        if (shouldCount) {
          localStorage.setItem('lastPortfolioVisit', now.toString());
          try {
            // POST increments and returns the new value
            const resp = await fetch('/api/visitors', { method: 'POST' });
            const data = await resp.json();
            if (data && typeof data.value === 'number') {
              localStorage.setItem('portfolioVisitorCount', data.value.toString());
              setVisitorCount(data.value);
            }
          } catch (err) {
            console.warn('Visitor increment failed, falling back to local count', err);
            // fallback to local increment
            const storedCount = localStorage.getItem('portfolioVisitorCount');
            const currentCount = storedCount ? parseInt(storedCount) : 0;
            const newCount = currentCount + 1;
            localStorage.setItem('portfolioVisitorCount', newCount.toString());
            setVisitorCount(newCount);
          }
        } else {
          // Not a new visit — fetch current global count to display
          try {
            const resp = await fetch('/api/visitors');
            const data = await resp.json();
            if (data && typeof data.value === 'number') {
              localStorage.setItem('portfolioVisitorCount', data.value.toString());
              setVisitorCount(data.value);
            } else {
              const storedCount = localStorage.getItem('portfolioVisitorCount');
              setVisitorCount(storedCount ? parseInt(storedCount) : 0);
            }
          } catch (err) {
            console.warn('Fetch visitor count failed, using local count', err);
            const storedCount = localStorage.getItem('portfolioVisitorCount');
            setVisitorCount(storedCount ? parseInt(storedCount) : 0);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error('Error tracking visitor:', error);
        setLoading(false);
      }
    };

    recordVisit();
  }, []);

  return { visitorCount, loading };
};
