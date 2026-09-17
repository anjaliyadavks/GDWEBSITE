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
              Building next generation <br />
              <span className="text-gradient-cyan">Ai models</span>
            </h1>

            <p className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '580px' }}>
              Glass Data is engineering the intelligence layers for a world where compute lives on the body and autonomous machines operate with human intuition.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="#glasses" className="btn btn-primary">Explore Platform</a>
              <a href="#contact" className="btn btn-secondary">Request Access</a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Circular Nav Buttons & Floating Cubes from Slide 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative', minHeight: '440px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Circular Glowing Buttons Orbit Array */}
            <div style={{ position: 'relative', width: '380px', height: '380px' }}>
              
              {/* Subtle tech orbital ring */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '1px dashed rgba(6, 182, 212, 0.25)',
                animation: 'spin 30s linear infinite'
              }} />

              {/* 'About' Button */}
              <motion.a
                href="#about"
                className="circle-nav-btn"
                style={{ position: 'absolute', top: '15px', left: '30px' }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>

              {/* 'Tech' Button */}
              <motion.a
                href="#glasses"
                className="circle-nav-btn"
                style={{ position: 'absolute', top: '90px', right: '15px' }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Tech
              </motion.a>

              {/* 'Contact' Button */}
              <motion.a
                href="#contact"
                className="circle-nav-btn"
                style={{ position: 'absolute', bottom: '25px', right: '20px' }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>

              {/* Floating Metallic Cubes (Bottom-Right from PPT Slide 1) */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '-40px', left: '20px', zIndex: 5, pointerEvents: 'none' }}
              >
                <img
                  src="/assets/floating_cubes.png"
                  alt="Floating Cubes"
                  style={{ width: '180px', height: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.8))' }}
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
