import React, { Component } from 'react';

import NavBar from "../components/NavBar/NavBar";
import InfoCard from '../components/InfoCard/InfoCard';
import Dashboards from '../components/Dashboards/Dashboards';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InfoCard />
        <Dashboards />
      </div>
    );
  }
}

export default MainPage;