import React, { Component } from 'react';

import InfoCardImg from '../../styles/Images/info-card-img.png';
import Return from './Return';

import '../../styles/InfoCard/InfoCard.css';

class InfoCard extends Component {
  render() {
    return (
      <section className="infocard-container">

        <Return />

        <div className="infocard-info">

        <h1 className="infocard-title">
          Know My Skills in
          {' '}
          <strong>Data Analysis </strong>
        </h1>

          <p className="infocard-text">
            I&apos;m deeply passionate about data analysis 
            and I have experience with tools such as
            <strong className="infocard-text-tools">
              {' '}
              Power BI and MySQL
            </strong>
            . 
            My goal is to turn raw data into meaningful and practical
            <strong className="infocard-text-insights">
              {' '}
              insights
            </strong>
            . 
            Take a look at the projects below:
          </p>

        </div>

        <div className="infocard-image">
          <img
            alt="Dashboard Illustration"
            className="infocard-img"
            src={ InfoCardImg }
          />
          <a href="http://www.iconscout.com"> Image by IconScout Store</a>
        </div>

      </section>
    );
  }
}

export default InfoCard;
