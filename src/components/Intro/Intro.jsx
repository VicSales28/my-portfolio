import React, { Component } from 'react';

import Type from './Type';

import '../../styles/Intro/Intro.css';

import IntroImg from '../../styles/Images/intro-img.png';

class Intro extends Component {
  render() {
    return (
      <section className="intro-container">

        <div className="intro-info">

          <p className="intro-name">
            Hi all, I&apos;m
            {' '}
            <span>Victoria Sales</span>
            !
            {' '}
            <span
              className="wave"
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
          </p>

          <p className="intro-describe">
            I
            {' '}
            <span><Type /></span>
            {' '}
            web applications.
          </p>

          <p className="intro-text">
            I&apos;m a brazilian Full Stack Web Developer,
            living in Lisbon, Portugal. I&apos;m currently studying at
            <a
              href="https://www.betrybe.com/"
              className="trybe-link"
            >
              {' '}
              Trybe Programming School
            </a>
            ,
            exploring technologies like React, Docker, MySQL and Node.js.
          </p>

          <a
            href="https://www.linkedin.com/in/victoria-sales-dev/"
            target="_blank"
            rel="noreferrer"
            className="intro-link"
          >
            Send me a message
          </a>

        </div>

        <div className="intro-image">
          <img
            alt="Code Illustration"
            className="intro-img"
            src={ IntroImg }
          />
          <a href="http://www.iconscout.com"> Designed by Vektora Studio</a>
        </div>

      </section>
    );
  }
}

export default Intro;
