import React from 'react';
import { skills } from '../data/projects';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <section id="competences" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">Technologie et outils que je maîtrise</p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((item) => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
