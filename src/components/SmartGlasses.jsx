import React from 'react';
import { motion } from 'framer-motion';

const SmartGlasses = () => {
  return (
    <section className="section" id="glasses" style={{ borderTop: '1px solid rgba(6,182,212,0.15)', background: 'linear-gradient(180deg, rgba(2,14,20,0.4) 0%, rgba(20,18,35,0.85) 100%)' }}>
      <div className="container">
        
        {/* Header from Slide 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left', marginBottom: '3.5rem' }}
        >
          <div className="tag-pill" style={{ color: '#818cf8', borderColor: 'rgba(129, 140, 248, 0.4)', background: 'rgba(129, 140, 248, 0.1)' }}>
            WEARABLE EMBODIED AI
          </div>
          <h2 className="h2" style={{ maxWidth: '900px', lineHeight: 1.15 }}>
            We are building complete Ai systems around <span style={{ color: '#38bdf8' }}>smart glasses</span>
          </h2>
        </motion.div>

        {/* Main Content Layout matching Slide 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: The 2 High-Tech HUD & Schematic Panels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            
            {/* AI Triage System UI Card */}
            <div className="glass-card" style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(6, 182, 212, 0.35)', background: 'rgba(3, 16, 26, 0.9)' }}>
              <img
                src="/assets/glasses_ai_triage.png"
                alt="AI Triage System Dark - Facial Recognition & MedGemma"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', display: 'block' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>MedGemma™ Multimodal Clinical AI</span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Real-time 50ms</span>
              </div>
            </div>

            {/* ANC Technology Schematic Card */}
            <div className="glass-card" style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(6, 182, 212, 0.35)', background: 'rgba(3, 16, 26, 0.9)' }}>
              <img
                src="/assets/glasses_anc_tech.png"
                alt="ANC Technology - 3-Microphone Beamforming Array"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', display: 'block' }}
              />
              <div style={{ padding: '0.75rem 0.5rem 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>3-Microphone Beamforming Array</span>
                <span style={{ fontSize: '0.75rem', color: '#5af493', background: 'rgba(90, 244, 147, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>42dB Noise Suppression</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: The Fashion Model Wearing Smart Glasses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div className="glass-card" style={{
              overflow: 'hidden',
              borderRadius: '1.5rem',
              border: '1px solid rgba(129, 140, 248, 0.35)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(120, 126, 231, 0.2)',
              position: 'relative',
              maxWidth: '480px',
              width: '100%'
            }}>
              <img
                src="/assets/glasses_model.jpg"
                alt="Glass Data Smart Glasses Wearer"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2rem 1.5rem 1.5rem',
                background: 'linear-gradient(to top, rgba(2,10,18,0.95), transparent)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Embodied Ambient Vision</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>High-fidelity optical waveguide integration with sub-watt neural compute.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SmartGlasses;
