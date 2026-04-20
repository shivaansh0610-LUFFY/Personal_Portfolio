import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="contact-title">Let's work together</h2>
            <p className="contact-description">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or visions to be part of.
            </p>
            <a href="mailto:shivaansh0610@gmail.com" className="btn-primary contact-btn">
              <Mail size={20} style={{ marginRight: '8px' }} />
              Say Hello
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Shivaansh. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/shivaansh0610-LUFFY" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shivaansh-pandey-7099b7305/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
