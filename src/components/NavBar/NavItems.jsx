import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function NavItems() {
  const navigate = useNavigate();

  const redirectToPage = () => {
    navigate('/my-portfolio/dashboards');
  };

  return (
    <nav className="header-nav">
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
          onClick={redirectToPage}
          className="dashboards-page-btn"
          >
          dashboards
        </button>
      </span>

      <span>
        <a
          href="https://www.linkedin.com/in/victoria-sales-dev/"
          target="_blank"
          rel="noreferrer"
          id="tolinkedin"
        >
          find me
        </a>
      </span>
    </nav>
  );
}

export default NavItems;
