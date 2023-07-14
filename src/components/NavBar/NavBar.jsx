import React, { Component } from 'react';

import Signature from './Signature';
import NavItems from './NavItems';
import '../../styles/NavBar/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header className="header-menu">
        <Signature />
        <NavItems />
      </header>
    );
  }
}

export default NavBar;
