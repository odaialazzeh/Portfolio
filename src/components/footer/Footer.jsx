import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer_container">
      <h1 className="footer_title">Alazzeh</h1>
      <ul className="footer_list">
        <li>
          <a href="#about" className="footer_link">About</a>
        </li>
        <li>
          <a href="#portfolio" className="footer_link">Projects</a>
        </li>
        <li>
          <a href="#skills" className="footer_link">Skills</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="https://www.facebook.com/odai.alazzeh/" className="footer_social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-facebook" />
        </a>

        <a href="https://github.com/odaialazzeh" className="footer_social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-github" />
        </a>

        <a href="https://www.linkedin.com/in/odaialazzeh/" className="footer_social-link" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin" />
        </a>
      </div>

      <span className="footer_copy">&#169; 2023 OdaiAlazzeh. All rigths reserved</span>
    </div>
  </footer>
);

export default Footer;
