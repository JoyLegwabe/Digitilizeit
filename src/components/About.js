import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About DigitalizeIT</h2>
      <p>
        At DigitalizeIT, we specialize in bringing ideas to life through technology. From web and mobile development to software support and cutting-edge design, our mission is to empower individuals and businesses to succeed digitally.
      </p>

      <div className="about-highlights">
        <div className="highlight-box">
          🧠 <h3>Innovative</h3>
          <p>We create solutions that solve real-world problems with modern tech.</p>
        </div>
        <div className="highlight-box">
          🤝 <h3>Client-Focused</h3>
          <p>We work hand-in-hand with clients to achieve their vision.</p>
        </div>
        <div className="highlight-box">
          🚀 <h3>Growth-Driven</h3>
          <p>We focus on digital solutions that deliver measurable growth.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
