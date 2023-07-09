import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsphlyv', 'template_sc5v4xi', form.current, 'UN7cRIJtuc3Y6CAmc');
    toast('Message sent successfully');
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">         Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon" />

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">odai.alazzeh@gmail.com</span>

              <a href="mailto:odai.alazzeh@gmail.com.com" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon" />
              </a>
            </div>
            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon" />

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+972598560564</span>

              <a href="https://api.whatsapp.com/send?phone=+972598560564&text=Hello, more information!" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label htmlFor="name">
                <i className="contact_form-tag">Name</i>
                <input
                  type="text"
                  name="name"
                  className="contact_form-input"
                  placeholder="Insert your name"
                />
              </label>

            </div>
            <div className="contact_form-div">
              <label htmlFor="name">
                <i className="contact_form-tag">Mail</i>

                <input
                  type="email"
                  name="email"
                  className="contact_form-input"
                  placeholder="Insert your email"
                />
              </label>

            </div>
            <div className="contact_form-div contact_form-area">
              <label htmlFor="name">
                <i className="contact_form-tag">Project</i>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact_form-input contact_form-area"
                  placeholder="Write your project"
                />
              </label>
            </div>
            <button type="submit" className="button button-flex">
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
