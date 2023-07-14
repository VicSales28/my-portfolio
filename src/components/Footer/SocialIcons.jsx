import React, { Component } from 'react';

import LinkedinIcon from '../../styles/Images/linkedin.svg';
import GitHubIcon from '../../styles/Images/github.svg';
import EmailIcon from '../../styles/Images/mail.svg';
import DiscordIcon from '../../styles/Images/discord.svg';

class SocialIcons extends Component {
  render() {
    return (
      <div className="social-footer">
        <a
          href="https://github.com/VicSales28"
          target="_blank"
          rel="noreferrer"
          className="social-links"
        >
          <img alt="GitHub Icon" className="social-icons" src={ GitHubIcon } />
        </a>

        <a
          href="mailto:contatovictoriasales@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="social-links"
        >
          <img alt="E-mail Icon" className="social-icons" src={ EmailIcon } />
        </a>

        <a
          href="https://www.linkedin.com/in/victoria-sales-dev/"
          target="_blank"
          rel="noreferrer"
          className="social-links"
        >
          <img alt="Linkedin Icon" className="social-icons" src={ LinkedinIcon } />
        </a>

        <a
          href="https://www.discord.com/"
          target="_blank"
          rel="noreferrer"
          className="social-links"
        >
          <img alt="Discord Icon" className="social-icons" src={ DiscordIcon } />
        </a>

      </div>
    );
  }
}

export default SocialIcons;
