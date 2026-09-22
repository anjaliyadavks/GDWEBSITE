import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {/* Top Presence & Contact Utility Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #fff7ed 0%, #ffedd5 50%, #fef3c7 100%)',
        borderBottom: '1px solid rgba(251, 146, 60, 0.25)',
        padding: '0.4rem 1.5rem',
        fontSize: '0.78rem',
        color: '#475569',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#475569' }}>
            <MapPin size={13} color="#ea580c" />
            We are based in <strong style={{ color: '#0f172a', fontWeight: 600 }}>Silicon Valley, USA</strong> and <strong style={{ color: '#0f172a', fontWeight: 600 }}>Hyderabad, India</strong>.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="mailto:info@glassdata.ai"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#ea580c',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.78rem',
              transition: 'color 0.2s ease'
            }}
          >
            <Mail size={13} color="#ea580c" />
            info@glassdata.ai
          </a>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ position: 'relative' }}>
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
              style={{ height: '56px', width: 'auto', objectFit: 'contain' }} 
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
            <a href="#focus" className="nav-link" style={{ color: '#ea580c', fontWeight: 700 }}>Our Focus</a>
            <a href="#glasses" className="nav-link">Smart Glasses</a>
            <a href="#robots" className="nav-link">Humanoid AI</a>
            <a href="https://careers.glassdata.ai" target="_blank" rel="noreferrer" className="nav-link" style={{ color: '#059669' }}>Careers</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.9rem' }}>Contact</a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
