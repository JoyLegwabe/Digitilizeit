import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/style.css';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
}

export default Loader;
