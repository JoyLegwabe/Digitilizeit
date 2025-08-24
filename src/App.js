import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import About from './components/About';
import Quotation from './components/Quotation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Footer /></>} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/quotation" element={<Quotation />} />
      </Routes>
    </Router>
  );
}

export default App;
