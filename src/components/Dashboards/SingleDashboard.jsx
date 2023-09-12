import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataIcon from '../../styles/Images/data-link.png';
import LinkIcon from '../../styles/Images/arrow-link.png';

class SingleDashboard extends Component {
  handleDatasetClick = (code) => {
    !code
      ? alert("Dataset not available")
      : window.open(code, '_blank');
  };

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
              <button
                onClick={ () => this.handleDatasetClick(code) }
                className="project-dataset-btn"
              >
                <img alt="Data Icon" className="project-icons" src={ DataIcon } />
              </button>

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

SingleDashboard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleDashboard;
