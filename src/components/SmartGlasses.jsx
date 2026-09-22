import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Volume2, Sparkles } from 'lucide-react';

const SmartGlasses = () => {
  // HUD mode: 'clinical' | 'acoustic' | 'ambient'
  const [hudMode, setHudMode] = useState('clinical');
  // Noise cancellation slider (0 to 42 dB)
  const [ancLevel, setAncLevel] = useState(38);
  // ECG simulation tick
  const [ecgHeartRate, setEcgHeartRate] = useState(72);
  const [triageUrgent, setTriageUrgent] = useState(true);

  // Heart rate pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setEcgHeartRate(prev => 70 + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="glasses" style={{
      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      background: 'var(--section-glow)',
      padding: '5.5rem 0 6.5rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="tag-pill">
            MULTIMODAL EMBODIED AI
          </div>
          <h2 className="h2" style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.4rem)', lineHeight: 1.15, color: '#0f172a', maxWidth: '1100px' }}>
            We are building complete AI systems around <span style={{ color: 'var(--color-primary)' }}>smart glasses</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '750px', marginTop: '1rem', color: '#475569' }}>
            End-to-end multimodal perception, acoustic spatial beamforming, and sub-watt clinical-grade diagnostic foundation models worn on the body.
          </p>
        </div>

        {/* ================================================================== */}
        {/* 1. MULTIMODAL AI MODELS ARCHITECTURE (Slide 3 Diagram)            */}
        {/* ================================================================== */}
        <div style={{
          borderRadius: '1.75rem',
          border: '1px solid rgba(226, 232, 240, 0.95)',
          boxShadow: '0 20px 50px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.03)',
          background: '#ffffff',
          padding: '2rem',
          marginBottom: '4.5rem',
          position: 'relative'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem', borderBottom: '1px solid rgba(226,232,240,0.9)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-primary)', fontWeight: 700 }}>
                Foundation Model Architecture
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 700, marginTop: '0.25rem' }}>
                Multimodal AI Models
              </h3>
            </div>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--card-highlight-bg)',
              border: '1px solid var(--card-highlight-border)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--color-primary)'
            }}>
              <Sparkles size={15} />
              <span>Voice · Sounds · Video · Image · Text → AI Experience</span>
            </div>
          </div>

          {/* Full-width Diagram Frame */}
          <div style={{
            position: 'relative',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 10px 35px rgba(0,0,0,0.06)',
            background: '#04160d'
          }}>
            <img
              src="/assets/multimodal_ai_models.png"
              alt="Multimodal AI Models - Voice, Sounds, Video, Image, Text to Glassdata Model to Smart Glasses to AI Experience"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>

        </div>

        {/* ================================================================== */}
        {/* 2. TWO-COLUMN INTERACTIVE TECHNICAL SHOWCASE                      */}
        {/* ================================================================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(340px, 1fr)', gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Interactive Mode Switcher & Technical Displays */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* HUD Mode Switcher Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              background: '#f1f5f9',
              padding: '0.4rem',
              borderRadius: '9999px',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <button
                onClick={() => setHudMode('clinical')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  border: hudMode === 'clinical' ? '1px solid var(--color-primary)' : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: hudMode === 'clinical' ? '#ffffff' : 'transparent',
                  color: hudMode === 'clinical' ? 'var(--color-primary)' : '#64748b',
                  boxShadow: hudMode === 'clinical' ? '0 2px 10px var(--color-primary-light)' : 'none'
                }}
              >
                <Activity size={18} color={hudMode === 'clinical' ? 'var(--color-primary)' : '#64748b'} />
                Medical / Clinical Triage HUD
              </button>

              <button
                onClick={() => setHudMode('acoustic')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  border: hudMode === 'acoustic' ? '1px solid var(--color-primary)' : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: hudMode === 'acoustic' ? '#ffffff' : 'transparent',
                  color: hudMode === 'acoustic' ? 'var(--color-primary)' : '#64748b',
                  boxShadow: hudMode === 'acoustic' ? '0 2px 10px var(--color-primary-light)' : 'none'
                }}
              >
                <Volume2 size={18} color={hudMode === 'acoustic' ? 'var(--color-primary)' : '#64748b'} />
                3-Mic Acoustic ANC Control
              </button>
            </div>

            {/* TAB CONTENT 1: Clinical / Medical Triage HUD */}
            {hudMode === 'clinical' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {/* Visual HUD Card */}
                <div style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  boxShadow: '0 20px 50px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.03)',
                  background: '#ffffff',
                  position: 'relative'
                }}>
                  <img
                    src="/assets/glasses_ai_triage.png"
                    alt="AI Triage System Dark - Facial Recognition and MedGemma"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  {/* Interactive Live Telemetry Bar */}
                  <div style={{
                    padding: '1.5rem 1.75rem',
                    background: 'var(--color-bg-alt)',
                    borderTop: '1px solid rgba(226,232,240,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div>
                          <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Heart Rate</span>
                          <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#e11d48', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Activity size={18} /> {ecgHeartRate} BPM
                          </p>
                        </div>
                        {/* Animated ECG Heartbeat Wave SVG */}
                        <svg width="90" height="24" viewBox="0 0 90 24" style={{ opacity: 0.85 }}>
                          <path
                            d="M 0 12 L 20 12 L 25 3 L 30 21 L 35 12 L 55 12 L 60 3 L 65 21 L 70 12 L 90 12"
                            fill="none"
                            stroke="#e11d48"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Oxygen Saturation</span>
                        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0284c7' }}>SpO₂ 98.4%</p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Model Confidence</span>
                        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>97.3%</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setTriageUrgent(!triageUrgent)}
                      style={{
                        padding: '0.55rem 1.15rem',
                        borderRadius: '9999px',
                        border: triageUrgent ? '1px solid #ef4444' : '1px solid var(--color-accent)',
                        background: triageUrgent ? '#fef2f2' : 'var(--tag-bg)',
                        color: triageUrgent ? '#dc2626' : 'var(--color-primary)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        boxShadow: triageUrgent ? '0 2px 8px rgba(239, 68, 68, 0.2)' : '0 2px 8px var(--color-primary-light)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {triageUrgent ? 'TRIAGE STATUS: URGENT (CLICK TO TOGGLE)' : 'TRIAGE STATUS: STABLE (NORMAL)'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT 2: 3-Mic Acoustic ANC Interactive Control */}
            {hudMode === 'acoustic' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {/* Visual Schematic Card */}
                <div style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  boxShadow: '0 20px 50px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.03)',
                  background: '#ffffff',
                  position: 'relative'
                }}>
                  <img
                    src="/assets/glasses_anc_tech.png"
                    alt="ANC Technology - 3-Microphone Beamforming Array and Medical Audio Pipeline"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  {/* Interactive Slider Bar for Active Noise Cancellation */}
                  <div style={{
                    padding: '1.5rem 1.75rem',
                    background: 'var(--color-bg-alt)',
                    borderTop: '1px solid rgba(226,232,240,0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Interactive Acoustic Tuning Slider
                        </span>
                        <h4 style={{ color: '#0f172a', fontSize: '1.15rem', fontWeight: 700, marginTop: '0.15rem' }}>Active Noise Cancellation Depth</h4>
                      </div>
                      
                      {/* Dynamic Frequency Wave Visualizer reacting to slider */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '28px', padding: '0 0.5rem' }}>
                        {[30, 55, 80, 95, 65, 45, 90, 100, 75, 40, 85, 60, 35, 70].map((h, i) => {
                          const dampFactor = Math.max(0.18, (42 - ancLevel) / 42);
                          const barH = Math.round(h * dampFactor);
                          return (
                            <motion.div
                              key={i}
                              animate={{ height: [`${Math.max(4, barH * 0.4)}px`, `${barH}px`, `${Math.max(4, barH * 0.5)}px`] }}
                              transition={{ duration: 0.6 + (i % 4) * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                              style={{
                                width: '4px',
                                borderRadius: '2px',
                                background: ancLevel > 30 ? 'linear-gradient(to top, var(--color-primary), #0284c7)' : 'linear-gradient(to top, #f59e0b, #ef4444)'
                              }}
                            />
                          );
                        })}
                        <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)', marginLeft: '0.75rem' }}>
                          -{ancLevel} dB
                        </span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="42"
                      value={ancLevel}
                      onChange={(e) => setAncLevel(Number(e.target.value))}
                      style={{
                        width: '100%',
                        accentColor: 'var(--color-primary)',
                        cursor: 'pointer',
                        height: '7px'
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                      <span>0 dB (Raw Ambient Noise)</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Target Voice Beam: <strong>Isolate Patient</strong></span>
                      <span>-42 dB (Full Hospital Isolation)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Red Saree Model Framed Gracefully */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: '100%',
              minHeight: '700px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              boxShadow: '0 20px 50px rgba(225, 29, 72, 0.08), 0 2px 10px rgba(0,0,0,0.03)',
              position: 'relative',
              background: 'radial-gradient(ellipse at 50% 30%, rgba(254, 205, 211, 0.35) 0%, rgba(255, 241, 242, 0.9) 75%, #ffffff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Floating Top Telemetry Pill */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 25,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(244, 63, 94, 0.4)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e11d48', boxShadow: '0 0 10px rgba(225, 29, 72, 0.5)' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: '#be123c' }}>
                  WEARABLE OPTICS: ACTIVE
                </span>
              </div>

              {/* Red Saree Woman - Positioned Upward, Elegant Saree Showcase */}
              <motion.img
                src="/assets/glasses_model.jpg"
                alt="Glass Data Smart Glasses Model in Red Saree"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 14%',
                  display: 'block'
                }}
              />

              {/* Bottom Telemetry Caption Bar */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.75rem 1.5rem 1.25rem',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.65) 60%, transparent 100%)',
                backdropFilter: 'blur(4px)',
                zIndex: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Embodied Ambient Vision & Audio
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.45, margin: 0 }}>
                    Integrated micro-OLED optical waveguides & sub-watt neural silicon in designer frames.
                  </p>
                </div>
                <div style={{
                  background: 'rgba(254, 205, 211, 0.85)',
                  border: '1px solid rgba(244, 63, 94, 0.45)',
                  color: '#be123c',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  flexShrink: 0,
                  whiteSpace: 'nowrap'
                }}>
                  38g Ultra-Light
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmartGlasses;
