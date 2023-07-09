import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [frontendToggleState, setFrontendToggleState] = useState(0);
  const [backendToggleState, setBackendToggleState] = useState(0);

  const toggleFrontendTab = (index) => {
    setFrontendToggleState(index);
  };

  const toggleBackendTab = (index) => {
    setBackendToggleState(index);
  };

  const handleFrontendKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleFrontendTab(tab);
    }
  };

  const handleBackendKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleBackendTab(tab);
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon" />
            <h3 className="services_title">Front-End Development</h3>
          </div>

          <span
            className="services_button"
            onClick={() => toggleFrontendTab(1)}
            onKeyDown={(e) => handleFrontendKeyDown(e, 1)}
            role="button"
            tabIndex={0}
            aria-label="open service"
          >
            View More
            {' '}
            <i className="uil uil-arrow-right services_button-icon" />
          </span>

          <div className={frontendToggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleFrontendTab(0)}
                onKeyDown={(e) => handleFrontendKeyDown(e, 0)}
                role="button"
                tabIndex={0}
                aria-label="open service"
              />
              {/* <h3 className="services_modal-title" /> */}
              <p className="services_modal-description">Providing quality work to clients and companies.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">I develop the user interface.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Web page development.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">I create UX element interactions.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Mobile Responsive Design.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-database services_icon" />
            <h3 className="services_title">Back-End Development</h3>
          </div>

          <span
            className="services_button"
            onClick={() => toggleBackendTab(1)}
            onKeyDown={(e) => handleBackendKeyDown(e, 1)}
            role="button"
            tabIndex={0}
            aria-label="open service"
          >
            View More
            {' '}
            <i className="uil uil-arrow-right services_button-icon" />
          </span>

          <div className={backendToggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleBackendTab(0)}
                onKeyDown={(e) => handleBackendKeyDown(e, 0)}
                role="button"
                tabIndex={0}
                aria-label="open service"
              />
              {/* <h3 className="services_modal-title" /> */}
              <p className="services_modal-description">Providing quality work to clients and companies.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Creating the structure and logic of the server-side of web applications.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Writing server-side code.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Integrating back-end functionality such as APIs with front-end.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p className="services_modal-info">Creating and maintaining APIs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
