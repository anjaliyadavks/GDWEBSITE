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
    </div>
  );
}

export default App;
