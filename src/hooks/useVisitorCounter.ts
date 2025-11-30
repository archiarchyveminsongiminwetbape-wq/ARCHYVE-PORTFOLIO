import { useEffect, useState } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

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

        // Enregistrer la visite dans localStorage
        if (shouldCount) {
          localStorage.setItem('lastPortfolioVisit', now.toString());
          
          // Appel API pour enregistrer le visiteur (optionnel - voir commentaire ci-dessous)
          // fetch('/api/visitors', { method: 'POST' }).catch(err => console.log('Visitor tracking:', err));
        }

        // Récupérer le nombre total de visiteurs depuis localStorage
        // Note: Ceci est une approche simple. Pour une vraie persistance, utilise une API backend
        const storedCount = localStorage.getItem('portfolioVisitorCount');
        const currentCount = storedCount ? parseInt(storedCount) : 0;
        
        if (shouldCount) {
          const newCount = currentCount + 1;
          localStorage.setItem('portfolioVisitorCount', newCount.toString());
          setVisitorCount(newCount);
        } else {
          setVisitorCount(currentCount);
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
