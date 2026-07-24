import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.a 
          href="#" 
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {/* Using the actual image file instead of SVG to guarantee perfect accuracy */}
          <img 
            src="/logo.png" 
            alt="Glass Data Logo" 
            style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9' rx='10'/%3E%3Ctext x='50' y='50' font-family='sans-serif' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%2394a3b8'%3EAdd logo.png%3C/text%3E%3Ctext x='50' y='65' font-family='sans-serif' font-size='10' text-anchor='middle' alignment-baseline='middle' fill='%2394a3b8'%3Eto /public%3C/text%3E%3C/svg%3E";
            }}
          />
        </motion.a>
        
        <motion.div 
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <a href="#about" className="nav-link">About Us</a>
          <a href="#operate" className="nav-link">Platform</a>
          <a href="#leadership" className="nav-link">Company</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Get Started</a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
