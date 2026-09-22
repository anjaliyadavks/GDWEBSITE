import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" id="hero" style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8rem',
      paddingBottom: '6rem',
      position: 'relative',
      background: 'var(--hero-glow)',
      transition: 'background 0.3s ease'
    }}>
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
                border: '1px dashed var(--color-primary-light)',
                animation: 'spin 40s linear infinite'
              }} />

              {/* Inner Orbit Ring */}
              <div style={{
                position: 'absolute', inset: '40px', borderRadius: '50%',
                border: '1px solid var(--color-primary-light)',
                boxShadow: 'inset 0 0 30px var(--color-primary-light)'
              }} />

              {/* Center Tech Core */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #ffffff, var(--card-highlight-bg))',
                border: '1px solid var(--color-primary)',
                boxShadow: '0 8px 25px var(--color-primary-light)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                zIndex: 6
              }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--color-primary)', fontWeight: 800 }}>GLASS</span>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.08em', color: '#64748b' }}>DATA AI</span>
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
                style={{ position: 'absolute', top: '15px', right: '30px', zIndex: 10 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Tech
              </motion.a>

              {/* 'Our Focus' Button */}
              <motion.a
                href="#focus"
                className="circle-nav-btn"
                style={{ position: 'absolute', bottom: '25px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Focus
              </motion.a>
            </div>

            {/* Floating 3D Metallic Cubes (Rendered Cleanly in Light Space) */}
            <motion.div
              style={{ position: 'absolute', bottom: '-20px', right: '-15px', zIndex: 15, pointerEvents: 'none' }}
              animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/assets/floating_cubes.png"
                alt="3D Floating Tech Cubes"
                style={{ width: '130px', height: 'auto', filter: 'drop-shadow(0 15px 25px var(--color-primary-light))' }}
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
