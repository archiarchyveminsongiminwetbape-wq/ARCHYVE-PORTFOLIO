import React from 'react';
import './Services.css';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Création de sites web modernes, responsifs et performants avec les dernières technologies React, TypeScript et Node.js.',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'Applications Web',
    description: 'Développement d\'applications web complètes avec authentification, bases de données et intégrations API.',
    icon: '⚙️'
  },
  {
    id: 3,
    title: 'Optimisation & Maintenance',
    description: 'Amélioration de la performance, optimisation SEO, sécurité et maintenance continue de vos projets existants.',
    icon: '🚀'
  },
  {
    id: 4,
    title: 'Consultation Technique',
    description: 'Conseils et assistance pour architécture de projets, choix technologiques et bonnes pratiques de développement.',
    icon: '💡'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <h2 className="section-title">Mes Services</h2>
        <p className="section-subtitle">Solutions complètes pour vos projets numériques</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
