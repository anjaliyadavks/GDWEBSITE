import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" id="hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: '6rem', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Core Headline from Slide 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tag-pill">
              Applied Artificial Intelligence
            </div>

            <h1 className="h1" style={{ marginBottom: '1.75rem', fontWeight: 800 }}>
              Building next-generation <br />
              <span className="text-gradient-cyan">AI models</span>
            </h1>

            <p className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '580px' }}>
              Glass Data is engineering the intelligence layers for a world where compute lives on the body and autonomous machines operate with human intuition.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="#glasses" className="btn btn-primary">Explore Platform</a>
              <a href="#contact" className="btn btn-secondary">Request Access</a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Circular Nav Buttons & Floating Cubes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative', minHeight: '460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Concentric Precision HUD Tech Rings */}
            <div style={{ position: 'relative', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Outer Subtle Orbit */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '1px dashed rgba(6, 182, 212, 0.2)',
                animation: 'spin 40s linear infinite'
              }} />

              {/* Inner Orbit Ring */}
              <div style={{
                position: 'absolute', inset: '40px', borderRadius: '50%',
                border: '1px solid rgba(6, 182, 212, 0.12)',
                boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.05)'
              }} />

              {/* Center Tech Core */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, rgba(6, 182, 212, 0.25), rgba(2, 10, 16, 0.95))',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                boxShadow: '0 0 35px rgba(6, 182, 212, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                zIndex: 6
              }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: '#38bdf8', fontWeight: 800 }}>GLASS</span>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.08em', color: '#94a3b8' }}>DATA AI</span>
              </div>

              {/* 'About' Button */}
              <motion.a
                href="#about"
                className="circle-nav-btn"
                style={{ position: 'absolute', top: '15px', left: '30px', zIndex: 10 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>

              {/* 'Tech' Button */}
              <motion.a
                href="#glasses"
                className="circle-nav-btn"
                style={{ position: 'absolute', top: '85px', right: '15px', zIndex: 10 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Tech
              </motion.a>

              {/* 'Contact' Button */}
              <motion.a
                href="#contact"
                className="circle-nav-btn"
                style={{ position: 'absolute', bottom: '30px', right: '35px', zIndex: 10 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>

              {/* Floating Metallic Cubes with smooth physics */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '-45px', left: '15px', zIndex: 15, pointerEvents: 'none' }}
              >
                <img
                  src="/assets/floating_cubes.png"
                  alt="Floating Cubes"
                  style={{ width: '190px', height: 'auto', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.85))' }}
                />
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
