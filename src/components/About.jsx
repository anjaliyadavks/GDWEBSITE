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
          
          {/* Left: Text from Slide 2 in Glass Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(5, 14, 24, 0.75)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: '1.75rem',
              padding: '2.5rem',
              boxShadow: '0 20px 45px rgba(0,0,0,0.7), inset 0 0 30px rgba(6, 182, 212, 0.05)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', color: '#67e8f9' }}>STEALTH STATUS: VERIFIED</span>
            </div>

            <h2 className="h2" style={{ marginBottom: '2rem', color: '#ffffff' }}>
              Currently operating in <span className="text-gradient-cyan">stealth mode</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'rgba(2, 10, 18, 0.6)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#5af493', marginTop: '0.55rem', boxShadow: '0 0 10px #5af493', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                  Over two years of customer validation,
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'rgba(2, 10, 18, 0.6)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#06b6d4', marginTop: '0.55rem', boxShadow: '0 0 10px #06b6d4', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                  Building an IP portfolio and technology verifications,
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'rgba(2, 10, 18, 0.6)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#38bdf8', marginTop: '0.55rem', boxShadow: '0 0 10px #38bdf8', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: 1.6 }}>
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
            style={{
              background: 'rgba(5, 14, 24, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1.75rem',
              padding: '2.5rem',
              boxShadow: '0 20px 45px rgba(0,0,0,0.7)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#94a3b8', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Founded by people from:
            </h3>

            {/* 4 Brand Circles Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem', maxWidth: '300px', width: '100%' }}>
              
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
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginTop: '2.5rem' }}
            >
              <img
                src="/assets/floating_cubes.png"
                alt="Floating Cubes"
                style={{ width: '150px', height: 'auto', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.85))' }}
              />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
