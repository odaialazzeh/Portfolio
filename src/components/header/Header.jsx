import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      showMenu(!Toggle);
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">Odai</a>

          <div className={Toggle ? 'nav_menu show_menu' : 'nav_menu'}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active-link">
                  <i className="uil uil-estate nav_icon" />
                  Home
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon" />
                  About
                </a>
              </li>

              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file nav_icon" />
                  Skills
                </a>
              </li>

              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon" />
                  Services
                </a>
              </li>

              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon" />
                  Portfolio
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon" />
                  Contact
                </a>
              </li>

            </ul>

            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
              aria-label="Close Menu"
            />
          </div>

          <div
            className="nav_toggle"
            onClick={() => showMenu(!Toggle)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            <i className="uil uil-apps" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
