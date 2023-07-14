import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GitHubIcon from '../../styles/Images/git-link.png';
import LinkIcon from '../../styles/Images/arrow-link.png';

class SingleProject extends Component {
  render() {
    const {
      name,
      desc,
      tags,
      code,
      deploy,
      image,
    } = this.props;

    return (
      <div className="project-card">

        <div className="project-img-container">

          <img
            src={ image }
            alt={ name }
            className="project-pic"
          />

        </div>

        <div className="project-info">

          <div className="project-header">

            <h3>{name}</h3>

            <div className="project-icons-box">
              <a
                href={ code }
                target="_blank"
                rel="noreferrer"
              >
                <img alt="GitHub Icon" className="project-icons" src={ GitHubIcon } />
              </a>

              <a
                href={ deploy }
                target="_blank"
                rel="noreferrer"
              >
                <img alt="Link to deploy" className="project-icons" src={ LinkIcon } />
              </a>
            </div>

          </div>

          <p className="project-tags">{tags}</p>

          <p className="project-desc">{desc}</p>

        </div>

      </div>
    );
  }
}

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleProject;
