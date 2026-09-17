import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.a 
          href="#" 
          className="logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Exact Logo preserved as requested */}
          <img 
            src="/logo.png" 
            alt="Glass Data Logo" 
            style={{ height: '58px', width: 'auto', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9' rx='10'/%3E%3Ctext x='50' y='50' font-family='sans-serif' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%2394a3b8'%3EGlassData%3C/text%3E%3C/svg%3E";
            }}
          />
        </motion.a>
        
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#glasses" className="nav-link">Smart Glasses</a>
          <a href="#robots" className="nav-link">Humanoid AI</a>
          <a href="https://careers.glassdata.ai" target="_blank" rel="noreferrer" className="nav-link" style={{ color: '#5af493' }}>Careers</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.9rem' }}>Contact</a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
