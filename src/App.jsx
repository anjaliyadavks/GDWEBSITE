import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurFocus from './components/OurFocus';
import SmartGlasses from './components/SmartGlasses';
import HumanoidRobotics from './components/HumanoidRobotics';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gd_theme') || 'green';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gd_theme', theme);
  }, [theme]);

  return (
    <div className="app-container" data-theme={theme}>
      <Navbar scrolled={scrolled} theme={theme} setTheme={setTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <OurFocus theme={theme} />
        <SmartGlasses theme={theme} />
        <HumanoidRobotics theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Floating Quick Mode Changer Pill (Bottom-Right) */}
      <aside 
        aria-label="Theme mode switcher"
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          zIndex: 999,
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(203, 213, 225, 0.9)',
          borderRadius: '9999px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          padding: '4px 6px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <button
          onClick={() => setTheme('green')}
          title="Switch to Green Mode"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 13px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 700,
            background: theme === 'green' ? 'linear-gradient(135deg, #059669, #10b981)' : 'transparent',
            color: theme === 'green' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease',
            boxShadow: theme === 'green' ? '0 2px 8px rgba(5, 150, 105, 0.35)' : 'none'
          }}
        >
          🌿 Green
        </button>
        <button
          onClick={() => setTheme('orange')}
          title="Switch to Orange Mode"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 13px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 700,
            background: theme === 'orange' ? 'linear-gradient(135deg, #ea580c, #f59e0b)' : 'transparent',
            color: theme === 'orange' ? '#ffffff' : '#64748b',
            transition: 'all 0.2s ease',
            boxShadow: theme === 'orange' ? '0 2px 8px rgba(234, 88, 12, 0.35)' : 'none'
          }}
        >
          🍊 Orange
        </button>
      </aside>
    </div>
  );
}

export default App;
