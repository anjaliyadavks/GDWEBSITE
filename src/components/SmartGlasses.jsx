import React from 'react';
import { motion } from 'framer-motion';

const SmartGlasses = () => {
  return (
    <section className="section" id="glasses" style={{
      borderTop: '1px solid rgba(6,182,212,0.15)',
      background: 'linear-gradient(180deg, rgba(4,14,22,0.6) 0%, rgba(18,16,36,0.92) 50%, rgba(8,12,20,0.98) 100%)',
      padding: '5rem 0 6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Full-Width Cinematic Widescreen Container */}
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Main Grid: Left/Center Content (68%) vs Right High-Fashion Model (32%) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(340px, 1fr)', gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Headline and Technical HUD / Schematic Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
            
            {/* Header matching Slide 3 */}
            <div>
              <div className="tag-pill" style={{ color: '#818cf8', borderColor: 'rgba(129, 140, 248, 0.4)', background: 'rgba(129, 140, 248, 0.1)', marginBottom: '0.75rem' }}>
                WEARABLE EMBODIED AI
              </div>
              <h2 className="h2" style={{ fontSize: 'clamp(2rem, 3.2vw, 3.25rem)', lineHeight: 1.15, color: '#ffffff' }}>
                We are building complete Ai systems around <span style={{ color: '#38bdf8' }}>smart glasses</span>
              </h2>
            </div>

            {/* AI Triage System Dark - Facial Recognition & MedGemma Diagnostic HUD */}
            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 35px rgba(6, 182, 212, 0.15)',
              background: 'rgba(3, 14, 22, 0.9)',
              padding: '0.5rem'
            }}>
              <img
                src="/assets/glasses_ai_triage.png"
                alt="AI Triage System Dark - Facial Recognition and MedGemma"
                style={{ width: '100%', height: 'auto', borderRadius: '0.85rem', display: 'block' }}
              />
            </div>

            {/* ANC Technology - 3-Microphone Beamforming Array Schematic */}
            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 35px rgba(6, 182, 212, 0.15)',
              background: 'rgba(3, 14, 22, 0.9)',
              padding: '0.5rem'
            }}>
              <img
                src="/assets/glasses_anc_tech.png"
                alt="ANC Technology - 3-Microphone Beamforming Array and Medical Audio Pipeline"
                style={{ width: '100%', height: 'auto', borderRadius: '0.85rem', display: 'block' }}
              />
            </div>

          </div>

          {/* Right Column: Full-Height Fashion Model Wearing Smart Glasses */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: '100%',
              minHeight: '700px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 45px rgba(120, 126, 231, 0.35)',
              position: 'relative',
              background: '#000000'
            }}>
              <img
                src="/assets/glasses_model.jpg"
                alt="Glass Data Smart Glasses Model"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1.75rem 1.75rem',
                background: 'linear-gradient(to top, rgba(2,10,18,0.95) 0%, rgba(2,10,18,0.7) 60%, transparent 100%)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Embodied Ambient Vision
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  High-fidelity optical waveguide integration with sub-watt on-device neural compute.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmartGlasses;
