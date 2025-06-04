import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => setExpanded(prev => !prev);
  const closeNavbar = () => setExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        scrolled ? 'navbar-scrolled' : ''
      } navbar-dark`}
    >
      <div className="container">
        <NavLink className="navbar-brand fs-3 fw-bold" to="/" onClick={closeNavbar}>
          <img
            src='/public/images/logo.png'
            alt="SEO Peterman logo"
            className="img-fluid"
            style={{ maxHeight: '50px', objectFit: 'contain' }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          {['Home', 'About Me', 'Services', 'FAQ', 'News', 'Contact'].map((text) => (
            <li className="nav-item" key={text}>
              <NavLink
                to={`/${
                  text === 'Home' ? '' : text === 'About Me' ? 'about-me' : text.toLowerCase()
                }`}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
                end={text === 'Home'}
              >
                {text}
              </NavLink>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
