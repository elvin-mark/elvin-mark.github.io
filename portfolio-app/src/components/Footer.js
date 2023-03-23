import React from 'react';
import "devicon"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-links">
        <a href="https://github.com/elvin-mark" target="_blank" rel="noopener noreferrer" class="social-media-icon"><i class="devicon-github-plain"></i></a>
        <a href="https://www.linkedin.com/in/elvin-mark-munoz-vega-572a1b1ba/" target="_blank" rel="noopener noreferrer" class="social-media-icon"><i class="devicon-linkedin-plain"></i></a>
        <a href="https://twitter.com/ElvinMarkMunoz1" target="_blank" rel="noopener noreferrer" class="social-media-icon"><i class="devicon-twitter-plain"></i></a>
      </div>
      <p className="footer-text">© 2023 Elvin. All rights reserved.</p>
    </div>
  );
};

export default Footer;
