import React from 'react';
import './Quotation.css';

const Quotation = () => {
  return (
    <div className="quotation-page">
      <h2> Our Pricing</h2>

      <div className="quote-list">
        <div className="quote-box">
          <h3> Project Call Out</h3>
          <p>Starting from <span className="price">R250</span></p>
        </div>

        <div className="quote-box">
          <h3> Project Mapping</h3>
          <p>Starting from <span className="price">R250</span></p>
        </div>

        <div className="quote-box">
          <h3> Project Guidelines</h3>
          <p>Starting from <span className="price">R300</span></p>
        </div>

        <div className="quote-box">
          <h3>🐛 Code Debugging</h3>
          <p>Starting from <span className="price">R500</span></p>
        </div>

        <div className="quote-box">
          <h3> Website Styling</h3>
          <p>Starting from <span className="price">R750</span></p>
        </div>

        <div className="quote-box">
          <h3> Simple Website Design</h3>
          <p>Starting from <span className="price">R1,000</span></p>
        </div>

        <div className="quote-box">
          <h3> Backend Support</h3>
          <p>Starting from <span className="price">R1,500</span></p>
        </div>

        <div className="quote-box">
          <h3> School Projects</h3>
          <p>Starting from <span className="price">R2,000</span></p>
        </div>

        <div className="quote-box">
          <h3> Complex Website Design</h3>
          <p>Starting from <span className="price">R2,000</span></p>
        </div>

        <div className="quote-box">
          <h3> Trading Software</h3>
          <p>Starting from <span className="price">R7,000</span></p>
        </div>
      </div>

      <div className="quote-footer">
        <p>📩 Contact us to know more about what we can offer.</p>
        <p>Let’s get your digital needs resolved!</p>
      </div>
    </div>
  );
};

export default Quotation;
