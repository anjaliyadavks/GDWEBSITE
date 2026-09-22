import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Volume2, Video, Image as ImageIcon, FileText, 
  Activity, Shield, Sliders, Eye, Sparkles, Cpu, Radio,
  CheckCircle2, AlertTriangle, Play, Pause, Layers
} from 'lucide-react';

const SmartGlasses = () => {
  // Multimodal sensory inputs
  const [activeInput, setActiveInput] = useState('voice');
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

  const sensoryInputs = [
    {
      id: 'voice',
      label: 'Voice',
      icon: <Mic size={20} />,
      color: '#059669',
      rate: '48 kHz / 24-bit',
      latency: '14 ms',
      detail: 'Conversational intent extraction & natural phoneme synthesis.',
      tokens: '8,192 token stream'
    },
    {
      id: 'sounds',
      label: 'Sounds',
      icon: <Volume2 size={20} />,
      color: '#10b981',
      rate: '3-Mic Beamforming Array',
      latency: '8 ms',
      detail: 'Active acoustic scene segmentation & environmental noise fingerprinting.',
      tokens: '42 dB suppression'
    },
    {
      id: 'video',
      label: 'Video',
      icon: <Video size={20} />,
      color: '#0284c7',
      rate: '4K Stereo @ 60 FPS',
      latency: '22 ms',
      detail: 'Real-time spatial bounding boxes, optical flow, and depth mesh mapping.',
      tokens: '120° FoV Spatial'
    },
    {
      id: 'image',
      label: 'Image',
      icon: <ImageIcon size={20} />,
      color: '#7c3aed',
      rate: 'Sub-millimeter Macro',
      latency: '18 ms',
      detail: 'Zero-shot semantic instance segmentation & anatomical keypoint detection.',
      tokens: '30M Parameter ViT'
    },
    {
      id: 'text',
      label: 'Text',
      icon: <FileText size={20} />,
      color: '#047857',
      rate: '1M Context Window',
      latency: '10 ms',
      detail: 'Long-horizon clinical reasoning & multi-turn contextual dialog memory.',
      tokens: 'MedGemma Foundation'
    }
  ];

  const currentInputData = sensoryInputs.find(s => s.id === activeInput) || sensoryInputs[0];

  return (
    <section className="section" id="glasses" style={{
      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      background: 'radial-gradient(ellipse 75% 50% at 50% 10%, rgba(209, 250, 229, 0.22) 0%, rgba(255, 255, 255, 0) 70%)',
      padding: '5.5rem 0 6.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="tag-pill">
            MULTIMODAL EMBODIED AI
          </div>
          <h2 className="h2" style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.4rem)', lineHeight: 1.15, color: '#0f172a', maxWidth: '1100px' }}>
            We are building complete AI systems around <span style={{ color: '#059669' }}>smart glasses</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '750px', marginTop: '1rem', color: '#475569' }}>
            End-to-end multimodal perception, acoustic spatial beamforming, and sub-watt clinical-grade diagnostic foundation models worn on the body.
          </p>
        </div>

        {/* ================================================================== */}
        {/* 1. INTERACTIVE MULTIMODAL AI FUSION CONSOLE                         */}
        {/* ================================================================== */}
        <div style={{
          borderRadius: '1.75rem',
          border: '1px solid rgba(226, 232, 240, 0.95)',
          boxShadow: '0 20px 50px rgba(16, 185, 129, 0.08), 0 2px 10px rgba(0,0,0,0.03)',
          background: '#ffffff',
          padding: '2.5rem',
          marginBottom: '4.5rem'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(226,232,240,0.9)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#059669', fontWeight: 700 }}>
                Interactive Architecture Simulation
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 700, marginTop: '0.25rem' }}>
                Multimodal Input-to-Experience Pipeline
              </h3>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', background: '#f8fafc', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(226,232,240,0.9)' }}>
              {sensoryInputs.map((input) => (
                <button
                  key={input.id}
                  onClick={() => setActiveInput(input.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    background: activeInput === input.id ? input.color : 'transparent',
                    color: activeInput === input.id ? '#ffffff' : '#64748b',
                    boxShadow: activeInput === input.id ? `0 4px 12px ${input.color}55` : 'none'
                  }}
                >
                  {input.icon}
                  {input.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Fusion Diagram */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.4fr)', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Interactive Radial Nodes & Signal Router */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{
                background: '#f0fdf4',
                borderRadius: '1.25rem',
                border: `1.5px solid ${currentInputData.color}33`,
                padding: '1.75rem',
                boxShadow: `0 8px 24px ${currentInputData.color}0d, 0 2px 6px rgba(0,0,0,0.02)`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '10px', background: `${currentInputData.color}18`, color: currentInputData.color }}>
                      {currentInputData.icon}
                    </div>
                    <div>
                      <h4 style={{ color: '#0f172a', fontSize: '1.15rem', fontWeight: 700 }}>{currentInputData.label} Ingestion Stream</h4>
                      <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Direct hardware DMA bus</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: currentInputData.color, background: `${currentInputData.color}15`, padding: '0.25rem 0.65rem', borderRadius: '4px', border: `1px solid ${currentInputData.color}44` }}>
                    Active 1,000 Hz
                  </span>
                </div>

                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentInputData.detail}
                </p>

                {/* Animated Sensor Signal Visualizer */}
                <div style={{ height: '55px', background: '#f1f5f9', borderRadius: '8px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden', border: '1px solid rgba(226,232,240,0.8)' }}>
                  {[...Array(32)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ['20%', `${25 + Math.sin(i * 0.4) * 65}%`, '20%'] }}
                      transition={{ duration: 0.8 + (i % 5) * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        flex: 1,
                        background: currentInputData.color,
                        borderRadius: '2px',
                        opacity: 0.85
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.25rem', borderTop: '1px solid rgba(226,232,240,0.8)', paddingTop: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Sample Rate</span>
                    <p style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.rate}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Inference Latency</span>
                    <p style={{ color: '#059669', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.latency}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Bandwidth</span>
                    <p style={{ color: '#059669', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.tokens}</p>
                  </div>
                </div>
              </div>

              {/* Connecting Neural Pulse Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1.25rem', background: '#f0fdf4', borderRadius: '12px', border: '1px dashed #a7f3d0' }}>
                <Cpu size={18} color="#059669" />
                <span style={{ fontSize: '0.82rem', color: '#475569' }}>
                  Continuous hardware DMA bypasses kernel interrupt stack for <strong style={{ color: '#0f172a' }}>sub-2ms dispatch</strong>.
                </span>
              </div>
            </div>

            {/* Right: Fusion Flow Architecture */}
            <div style={{
              background: '#f0fdf4',
              borderRadius: '1.25rem',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              padding: '2rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={18} color="#059669" />
                  Cross-Modal Attention Fusion Core
                </h4>
                <span style={{ fontSize: '0.72rem', background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                  Active Pipeline
                </span>
              </div>

              {/* 3 Pipeline Stages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Stage 1 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h5 style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.25rem' }}>Temporal Alignment & Tokenization</h5>
                    <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      Asynchronous audio, stereo video, and bio-signals are normalized onto a shared 1,000 Hz timeline using causal time-delay neural embeddings.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h5 style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.25rem' }}>Sub-Watt Neural Transformer Weights</h5>
                    <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      Locally compiled INT4 quantized vision-language-action foundation models execute on-device without telemetry leakage or cloud reliance.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(226, 232, 240, 0.85)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0fdf4', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h5 style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.25rem' }}>Micro-OLED & Spatial Audio Projection</h5>
                    <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      Output tokens are rendered as 4,000 nits AR glyphs onto the optical waveguide alongside binaural directional audio in sub-14ms.
                    </p>
                  </div>
                </div>

              </div>
            </div>

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
                  border: hudMode === 'clinical' ? '1px solid #059669' : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: hudMode === 'clinical' ? '#ffffff' : 'transparent',
                  color: hudMode === 'clinical' ? '#059669' : '#64748b',
                  boxShadow: hudMode === 'clinical' ? '0 2px 10px rgba(5, 150, 105, 0.15)' : 'none'
                }}
              >
                <Activity size={18} color={hudMode === 'clinical' ? '#059669' : '#64748b'} />
                Medical / Clinical Triage HUD
              </button>

              <button
                onClick={() => setHudMode('acoustic')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  border: hudMode === 'acoustic' ? '1px solid #059669' : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: hudMode === 'acoustic' ? '#ffffff' : 'transparent',
                  color: hudMode === 'acoustic' ? '#059669' : '#64748b',
                  boxShadow: hudMode === 'acoustic' ? '0 2px 10px rgba(5, 150, 105, 0.15)' : 'none'
                }}
              >
                <Volume2 size={18} color={hudMode === 'acoustic' ? '#059669' : '#64748b'} />
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
                  boxShadow: '0 20px 50px rgba(16, 185, 129, 0.08), 0 2px 10px rgba(0,0,0,0.03)',
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
                    background: '#f0fdf4',
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
                        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669' }}>97.3%</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setTriageUrgent(!triageUrgent)}
                      style={{
                        padding: '0.55rem 1.15rem',
                        borderRadius: '9999px',
                        border: triageUrgent ? '1px solid #ef4444' : '1px solid #10b981',
                        background: triageUrgent ? '#fef2f2' : '#ecfdf5',
                        color: triageUrgent ? '#dc2626' : '#059669',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        boxShadow: triageUrgent ? '0 2px 8px rgba(239, 68, 68, 0.2)' : '0 2px 8px rgba(16, 185, 129, 0.2)',
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
                  boxShadow: '0 20px 50px rgba(16, 185, 129, 0.08), 0 2px 10px rgba(0,0,0,0.03)',
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
                    background: '#f0fdf4',
                    borderTop: '1px solid rgba(226,232,240,0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                                background: ancLevel > 30 ? 'linear-gradient(to top, #059669, #0284c7)' : 'linear-gradient(to top, #f59e0b, #ef4444)'
                              }}
                            />
                          );
                        })}
                        <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#059669', marginLeft: '0.75rem' }}>
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
                        accentColor: '#059669',
                        cursor: 'pointer',
                        height: '7px'
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                      <span>0 dB (Raw Ambient Noise)</span>
                      <span style={{ color: '#059669', fontWeight: 600 }}>Target Voice Beam: <strong>Isolate Patient</strong></span>
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
