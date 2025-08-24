import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DigitalizeIT</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/quotation">Quotation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
