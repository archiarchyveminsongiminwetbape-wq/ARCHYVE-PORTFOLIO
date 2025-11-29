import React from 'react';
import './About.css';
import { useCounter } from '../hooks/useCounter';

const StatCounter: React.FC<{ target: number; label: string }> = ({ target, label }) => {
  const { count, ref } = useCounter({ target, duration: 2000, suffix: '+' });

  return (
    <div className="stat" ref={ref}>
      <h3 className="stat-number">{count}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

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
              exceptionnelles. Avec plusieurs années d'expérience dans le développement web, je développe 
              des sites internet modernes, performants et sur mesure. Je combine créativité et expertise 
              technique pour transformer vos idées en réalité.
            </p>
            
            <p className="about-paragraph">
              Mon approche se concentre sur la création de solutions scalables, performantes et 
              centrées sur l'utilisateur. Je développe également des sites internet de qualité professionnelle 
              qui vous aideront à atteindre vos objectifs commerciaux. J'aime travailler avec les dernières technologies et 
              participer à des projets qui font une différence.
            </p>
            
            <div className="about-stats">
              <StatCounter target={10} label="Projets complétés" />
              <StatCounter target={10} label="Clients satisfaits" />
              <StatCounter target={2} label="Années d'expérience" />
            </div>
            
            <a href="#contact" className="btn btn-primary">Travaillons ensemble</a>
          </div>
        </div>
      </div>
    </section>
  );
};
