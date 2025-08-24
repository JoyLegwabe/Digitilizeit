import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Reach out to us on any of these platforms:</p>

      <div className="contact-icons">
        <a href="tel:+27712345678" target="_blank" rel="noopener noreferrer">
          📞
          <span>Call Us</span>
        </a>
        <a href="mailto:support@digitalizeit.com" target="_blank" rel="noopener noreferrer">
          ✉️
          <span>Email</span>
        </a>
        <a href="https://wa.me/27712345678" target="_blank" rel="noopener noreferrer">
          📱
          <span>WhatsApp</span>
        </a>
        <a href="https://instagram.com/digitalizeit" target="_blank" rel="noopener noreferrer">
          📷
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
