import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies-page">
      <h2>🚀 Our Services</h2>
      <div className="service-list">
        <div className="service-box"> Web Development</div>
        <div className="service-box"> Mobile App Development</div>
        <div className="service-box"> UI/UX Design</div>
        <div className="service-box"> IT Support</div>
        <div className="service-box"> Software Maintenance</div>
      </div>

      <div className="our-work-section">
        <h2> Our Work</h2>
        <p>Check out the websites and designs we’ve created for our amazing clients.</p>
        
        <div className="video-container">
          <video controls width="100%">
            <source src="/assets/Digi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="image-gallery">
          <img src="/assets/sample1.png" alt="Project 1" />
          <img src="/assets/sample2.png" alt="Project 2" />
          <img src="/assets/sample3.png" alt="Project 3" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
