import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Bienvenue sur ARCHYVE PORTFOLIO</h1>
          <p className="hero-subtitle">
            Développeur Full-Stack | Création de sites internet modernes et performants
          </p>
          <p className="hero-description">
            Je transforme vos idées en solutions web professionnelles. Spécialisé dans le développement de sites modernes, 
            performants et adaptés à vos besoins. Basé au Cameroun, je travaille avec des clients du monde entier.
          </p>
          <div className="hero-cta">
            <a href="#projets" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Discutons de votre projet</a>
          </div>
        </div>
        
        <div className="hero-avatar">
          <img 
            src="/images/profile.jpg"
            alt="Manuel"
            className="avatar-image"
          />
        </div>
      </div>
    </section>
  );
};
