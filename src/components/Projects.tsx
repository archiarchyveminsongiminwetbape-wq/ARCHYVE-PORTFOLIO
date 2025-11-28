import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <section id="projets" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">Découvrez mes réalisations et projets les plus récents</p>
        </div>

        {/* Projets en vedette */}
        {featuredProjects.length > 0 && (
          <div className="featured-projects">
            <h3 className="subsection-title">⭐ Projets en vedette</h3>
            <div className="projects-grid featured-grid">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Tous les projets */}
        <div className="all-projects">
          <h3 className="subsection-title">Tous les projets</h3>
          <div className="projects-grid">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
