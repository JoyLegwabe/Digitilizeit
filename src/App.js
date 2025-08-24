import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import About from './components/About';
import Quotation from './components/Quotation';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<><Hero /><Footer /></>} />
          <Route path="/technologies" element={<><Technologies /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
          <Route path="/quotation" element={<><Quotation /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
