import React from 'react';

import { dashboardsData } from '../../data/Dashboards';
import SingleDashboard from './SingleDashboard';
import Footer from '../Footer/Footer';
import '../../styles/Projects/Projects.css';

function Dashboards() {
  return (
    <section
      className="projects-container"
      id="projects"
    >

      <div>
        <h2 className="projects-title">
          <strong>Dashboards</strong>
          {' '}
          and other projects
        </h2>
      </div>

      <div className="external-cards-box">
        {dashboardsData.map((project) => (
          <SingleDashboard
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

export default Dashboards;
