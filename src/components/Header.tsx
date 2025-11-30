import React, { useState } from 'react';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#accueil" className="nav-logo" onClick={closeMenu}>
            <span className="logo-icon">🚀</span>
            ARCHYVE PORTFOLIO
          </a>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#accueil" className="nav-link" onClick={closeMenu}>
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#projets" className="nav-link" onClick={closeMenu}>
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a href="#competences" className="nav-link" onClick={closeMenu}>
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a href="#cv" className="nav-link" onClick={closeMenu}>
                CV
              </a>
            </li>
            <li className="nav-item">
              <a href="#a-propos" className="nav-link" onClick={closeMenu}>
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link nav-cta" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
