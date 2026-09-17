import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SmartGlasses from './components/SmartGlasses';
import HumanoidRobotics from './components/HumanoidRobotics';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <SmartGlasses />
        <HumanoidRobotics />
        <Contact />
      </main>
    </div>
  );
}

export default App;
