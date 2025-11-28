import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="about-section">
      <div className="section-container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/profile.jpg"
              alt="À propos"
              className="about-img"
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title">À propos de moi</h2>
            
            <p className="about-paragraph">
              Bienvenue ! Je suis un développeur Full-Stack passionné par la création d'expériences web 
              exceptionnelles. Avec plusieurs années d'expérience dans le développement web, je combine 
              créativité et expertise technique pour transformer vos idées en réalité.
            </p>
            
            <p className="about-paragraph">
              Mon approche se concentre sur la création de solutions scalables, performantes et 
              centrées sur l'utilisateur. J'aime travailler avec les dernières technologies et 
              participer à des projets qui font une différence.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Projets complétés</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Clients satisfaits</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">2+</h3>
                <p className="stat-label">Années d'expérience</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Travaillons ensemble</a>
          </div>
        </div>
      </div>
    </section>
  );
};
