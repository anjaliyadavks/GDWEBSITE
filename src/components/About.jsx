import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about" style={{ borderTop: '1px solid rgba(6,182,212,0.15)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Pill from Slide 2 */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="tag-pill" style={{ color: '#5af493', borderColor: 'rgba(90, 244, 147, 0.4)', background: 'rgba(90, 244, 147, 0.08)' }}>
            About
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Text from Slide 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="h2" style={{ marginBottom: '2rem', color: '#ffffff' }}>
              Currently operating in <span className="text-gradient-cyan">stealth mode</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#06b6d4', marginTop: '0.6rem', boxShadow: '0 0 10px #06b6d4' }} />
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  Building an IP portfolio and technology verifications,
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#38bdf8', marginTop: '0.6rem', boxShadow: '0 0 10px #38bdf8' }} />
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  Assembling a world class team, has led to the creation of Glass Data
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right: Founded by people from: (Slide 2 4-logos) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#94a3b8', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Founded by people from:
            </h3>

            {/* 4 Brand Circles Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '320px', width: '100%' }}>
              
              <div className="company-circle-badge" title="Amazon">
                <img src="/assets/logo_amazon.png" alt="Amazon" />
              </div>

              <div className="company-circle-badge" title="Tesla">
                <img src="/assets/logo_tesla.png" alt="Tesla" />
              </div>

              <div className="company-circle-badge" title="Google">
                <img src="/assets/logo_google.png" alt="Google" />
              </div>

              <div className="company-circle-badge" title="Apple">
                <img src="/assets/logo_apple.png" alt="Apple" />
              </div>

            </div>

            {/* Floating Metallic Cubes in About section */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginTop: '3rem' }}
            >
              <img
                src="/assets/floating_cubes.png"
                alt="Floating Cubes"
                style={{ width: '140px', height: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.8))' }}
              />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
