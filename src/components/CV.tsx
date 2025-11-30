import React from 'react';
import './CV.css';

export const CV: React.FC = () => {
  return (
    <section id="cv" className="cv-section">
      <div className="section-container">
        <h2 className="section-title">Mon CV Complet</h2>
        
        <div className="cv-content">
          <p className="cv-description">
            Télécharge mon CV complet pour consulter mes expériences, formations et compétences en détail.
          </p>
          
          <div className="cv-actions">
            <a 
              href="/cv.pdf" 
              download="Manuel-Amin-CV.pdf"
              className="btn btn-primary cv-download"
              title="Télécharger mon CV en PDF"
            >
              📄 Télécharger mon CV (PDF)
            </a>
            
            <a 
              href="#contact" 
              className="btn btn-secondary"
            >
              💬 Discutons de votre projet
            </a>
          </div>

          <div className="cv-preview">
            <h3>Aperçu des sections du CV :</h3>
            <ul className="cv-sections-list">
              <li>👤 <strong>Informations personnelles</strong> - Coordonnées et profil</li>
              <li>🎓 <strong>Formation</strong> - Diplômes et certifications</li>
              <li>💼 <strong>Expérience professionnelle</strong> - Projets et postes antérieurs</li>
              <li>🛠️ <strong>Compétences techniques</strong> - Technologies maîtrisées</li>
              <li>🏆 <strong>Réalisations et projets</strong> - Portfolio de travaux</li>
              <li>🌐 <strong>Langues</strong> - Langues parlées et niveaux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
