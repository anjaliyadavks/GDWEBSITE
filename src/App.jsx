import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Operate from './components/Operate'
import Wearables from './components/Wearables'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

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
        <Operate />
        <Wearables />
        <Leadership />
        <Contact />
      </main>
    </div>
  )
}

export default App
