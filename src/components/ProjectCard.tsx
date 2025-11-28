import React from 'react';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        {project.featured && <span className="featured-badge">Mis en avant</span>}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {project.longDescription && (
          <p className="project-long-description">{project.longDescription}</p>
        )}
        
        <div className="project-tags">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.links.website && (
            <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="link-btn website">
              Visiter
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo">
              Démo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
