import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about" style={{
      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      background: 'var(--section-glow)',
      position: 'relative',
      transition: 'background 0.3s ease'
    }}>
      <div className="container">
        
        {/* Section Pill from Slide 2 */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="tag-pill">
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
              background: '#ffffff',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              borderRadius: '1.75rem',
              padding: '2.5rem',
              boxShadow: '0 15px 35px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary-light)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--tag-color)' }}>STEALTH STATUS: VERIFIED</span>
            </div>

            <h2 className="h2" style={{ marginBottom: '2rem', color: '#0f172a' }}>
              Currently operating in <span className="text-gradient-cyan">stealth mode</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'var(--color-bg-alt)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#059669', marginTop: '0.55rem', boxShadow: '0 0 10px rgba(5, 150, 105, 0.4)', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.6 }}>
                  Over two years of customer validation,
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'var(--color-bg-alt)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '0.55rem', boxShadow: '0 0 10px var(--color-primary-light)', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.6 }}>
                  Building an IP portfolio and technology verifications,
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', background: 'var(--color-bg-alt)', padding: '1.1rem 1.35rem', borderRadius: '1rem', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-accent)', marginTop: '0.55rem', boxShadow: '0 0 10px var(--color-primary-light)', flexShrink: 0 }} />
                <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.6 }}>
                  Assembling a world-class team has led to the creation of Glass Data.
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
              background: '#ffffff',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              borderRadius: '1.75rem',
              padding: '2.5rem',
              boxShadow: '0 15px 35px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#64748b', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
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
                style={{ width: '150px', height: 'auto', filter: 'drop-shadow(0 15px 25px var(--color-primary-light))' }}
              />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
