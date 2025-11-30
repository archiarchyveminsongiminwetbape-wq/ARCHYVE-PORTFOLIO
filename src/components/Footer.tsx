import React from 'react';
import './Footer.css';
import { useVisitorCounter } from '../hooks/useVisitorCounter';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { visitorCount } = useVisitorCounter();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h3>ARCHYVE PORTFOLIO</h3>
            <p>Développeur passionné par la création d'applications web modernes et performantes.</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#competences">Compétences</a></li>
              <li><a href="#cv">CV</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="visitor-counter">
          👁️ <strong>{visitorCount}</strong> visiteur{visitorCount !== 1 ? 's' : ''} ont consulté ce portfolio
        </div>

        <div className="copyright">
          &copy; {currentYear} ARCHYVE PORTFOLIO - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};
