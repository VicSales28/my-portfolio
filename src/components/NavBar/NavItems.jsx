import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function NavItems() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const redirectToPage = () => {
    navigate('/my-portfolio/dashboards');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`header-nav ${menuOpen ? 'menu-open' : 'menu-close'}`}>
      <span>
        <Link activeClass="active" smooth spy to="about">
          about
        </Link>
      </span>

      <span>
        <Link activeClass="active" smooth spy to="projects">
          projects
        </Link>
      </span>

      <span>
        <button
          id="dashboards-page-btn"
          onClick={redirectToPage}
        >
          dashboards
        </button>
      </span>

      <span>
        <a
          id="tolinkedin"
          href="https://www.linkedin.com/in/victoria-sales-dev/"
          target="_blank"
          rel="noreferrer"
        >
          find me
        </a>
      </span>

      <button
        id="hamburger-btn"
        onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
}

export default NavItems;
