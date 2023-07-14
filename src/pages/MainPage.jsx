import React, { Component } from 'react';

import NavBar from "../components/NavBar/NavBar";
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <About />
        <Projects />
      </div>
    );
  }
}

export default MainPage;