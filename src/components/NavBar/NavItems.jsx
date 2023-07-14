import React, { Component } from 'react';
import { Link } from 'react-scroll';

class NavItems extends Component {
  render() {
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
}

export default NavItems;
