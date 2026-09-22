import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const Navbar = ({ scrolled, theme, setTheme }) => {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {/* Top Presence, Comparison Switcher & Contact Utility Banner */}
      <div style={{
        background: 'var(--topbar-bg)',
        borderBottom: '1px solid var(--topbar-border)',
        padding: '0.4rem 1.5rem',
        fontSize: '0.78rem',
        color: '#475569',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#475569' }}>
            <MapPin size={13} color="var(--color-primary)" />
            We are based in <strong style={{ color: '#0f172a', fontWeight: 600 }}>Silicon Valley, USA</strong> and <strong style={{ color: '#0f172a', fontWeight: 600 }}>Hyderabad, India</strong>.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {/* Real-time Theme Comparison Switcher */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 4px',
            borderRadius: '9999px',
            border: '1px solid rgba(203, 213, 225, 0.8)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
          }}>
            <button
              onClick={() => setTheme && setTheme('green')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: theme === 'green' ? 'linear-gradient(135deg, #059669, #10b981)' : 'transparent',
                color: theme === 'green' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
                boxShadow: theme === 'green' ? '0 1px 4px rgba(5, 150, 105, 0.3)' : 'none'
              }}
            >
              🌿 Green & White
            </button>
            <button
              onClick={() => setTheme && setTheme('sunrise')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: theme === 'sunrise' ? 'linear-gradient(135deg, #ea580c, #f59e0b)' : 'transparent',
                color: theme === 'sunrise' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
                boxShadow: theme === 'sunrise' ? '0 1px 4px rgba(234, 88, 12, 0.3)' : 'none'
              }}
            >
              🌅 Sunrise White
            </button>
          </div>

          <a
            href="mailto:info@glassdata.ai"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.78rem',
              transition: 'color 0.2s ease'
            }}
          >
            <Mail size={13} color="var(--color-primary)" />
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
            <a href="#focus" className="nav-link" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Our Focus</a>
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
