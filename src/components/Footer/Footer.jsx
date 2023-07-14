import React, { Component } from 'react';

import SocialIcons from './SocialIcons';

import '../../styles/Footer/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <p>Designed and Developed by Victoria Sales</p>
        <p>Copyright © 2023 VicSales28</p>
        <SocialIcons />
      </footer>
    );
  }
}

export default Footer;
