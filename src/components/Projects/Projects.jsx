import React from 'react';

import { projectsData } from '../../data/Projects';
import SingleProject from './SingleProject';
import Footer from '../Footer/Footer';
import '../../styles/Projects/Projects.css';

function Projects() {
  return (
    <section
      className="projects-container"
      id="projects"
    >

      <div>
        <h1 className="projects-title">
          Some of my
          <strong> projects</strong>
        </h1>
      </div>

      <div className="external-cards-box">
        {projectsData.map((project) => (
          <SingleProject
            key={ project.id }
            id={ project.id }
            name={ project.projectName }
            desc={ project.projectDesc }
            tags={ project.tags }
            code={ project.code }
            deploy={ project.deploy }
            image={ project.image }
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
