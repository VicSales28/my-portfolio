import React, { Component } from 'react';

import Tools from './Tools';

import photo from '../../styles/Images/profile-photo.png';

import '../../styles/About/About.css';

class About extends Component {
  render() {
    return (
      <section
        className="about-container"
        id="about"
      >

        <h1 className="about-title">
          Know Who
          {' '}
          <strong>I&apos;M</strong>
        </h1>

        <div className="about-pic">
          <img
            alt="Developer"
            className="about-photo"
            src={ photo }
          />
        </div>

        <div className="about-text-container">
          <p>
            My name is
            {' '}
            <strong>Victoria</strong>
            {' '}
            and I&apos;m a web developer. I used to work as a Quality Analyst,
            but I was always curious about
            {' '}
            <strong>how websites and web applications work</strong>
            . One day I decided to sign up for a course with more than
            {' '}
            <strong>1500 hours</strong>
            {' '}
            of training at Trybe and I
            {' '}
            <strong>fell in love with programming</strong>
            .
          </p>
          <br />
          <p>
            I realized that I could use my
            {' '}
            <strong>creativity and logic to create amazing, interactive web pages</strong>
            .
            I dedicated myself to study more and to do personal projects.
            Today, as a web developer, I am very happy with my
            {' '}
            <strong>career transition</strong>
            {' '}
            and
            {' '}
            <strong>I don&apos;t regret my choice</strong>
            .
          </p>
          <br />
          <p>
            <strong>
              Some languages and technologies I know:
            </strong>
          </p>
          <br />
          <Tools />
          <br />
        </div>

      </section>
    );
  }
}

export default About;
