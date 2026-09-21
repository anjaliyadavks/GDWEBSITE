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
  // Waveguide hotspot inspection
  const [activeHotspot, setActiveHotspot] = useState(null);

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
      color: '#10b981',
      rate: '48 kHz / 24-bit',
      latency: '14 ms',
      detail: 'Conversational intent extraction & natural phoneme synthesis.',
      tokens: '8,192 token stream'
    },
    {
      id: 'sounds',
      label: 'Sounds',
      icon: <Volume2 size={20} />,
      color: '#06b6d4',
      rate: '3-Mic Beamforming Array',
      latency: '8 ms',
      detail: 'Active acoustic scene segmentation & environmental noise fingerprinting.',
      tokens: '42 dB suppression'
    },
    {
      id: 'video',
      label: 'Video',
      icon: <Video size={20} />,
      color: '#38bdf8',
      rate: '4K Stereo @ 60 FPS',
      latency: '22 ms',
      detail: 'Real-time spatial bounding boxes, optical flow, and depth mesh mapping.',
      tokens: '120° FoV Spatial'
    },
    {
      id: 'image',
      label: 'Image',
      icon: <ImageIcon size={20} />,
      color: '#a855f7',
      rate: 'Sub-millimeter Macro',
      latency: '18 ms',
      detail: 'Zero-shot semantic instance segmentation & anatomical keypoint detection.',
      tokens: '30M Parameter ViT'
    },
    {
      id: 'text',
      label: 'Text',
      icon: <FileText size={20} />,
      color: '#f59e0b',
      rate: '1M Context Window',
      latency: '10 ms',
      detail: 'Long-horizon clinical reasoning & multi-turn contextual dialog memory.',
      tokens: 'MedGemma Foundation'
    }
  ];

  const hotspots = [
    {
      id: 'waveguide',
      title: 'Micro-OLED Waveguide',
      x: '38%',
      y: '32%',
      desc: '4,000 nits daylight-readable optical engine with true RGB color fidelity.'
    },
    {
      id: 'array',
      title: '3-Mic Beamforming Array',
      x: '48%',
      y: '22%',
      desc: 'Tri-directional spatial beamformer isolating target speaker audio.'
    },
    {
      id: 'npu',
      title: 'Sub-Watt Neural Silicon',
      x: '62%',
      y: '40%',
      desc: '8 TOPS on-device NPU running local transformer weights without cloud tether.'
    }
  ];

  const currentInputData = sensoryInputs.find(s => s.id === activeInput) || sensoryInputs[0];

  return (
    <section className="section" id="glasses" style={{
      borderTop: '1px solid rgba(6,182,212,0.15)',
      background: 'linear-gradient(180deg, rgba(2,12,18,0.95) 0%, rgba(4,24,32,0.92) 35%, rgba(14,12,28,0.95) 75%, rgba(2,10,16,0.98) 100%)',
      padding: '5.5rem 0 6.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="tag-pill" style={{ color: '#5af493', borderColor: 'rgba(90, 244, 147, 0.4)', background: 'rgba(90, 244, 147, 0.1)', marginBottom: '0.85rem' }}>
            MULTIMODAL EMBODIED AI
          </div>
          <h2 className="h2" style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.4rem)', lineHeight: 1.15, color: '#ffffff', maxWidth: '1100px' }}>
            We are building complete Ai systems around <span style={{ color: '#38bdf8' }}>smart glasses</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '750px', marginTop: '1rem', color: '#94a3b8' }}>
            End-to-end multimodal perception, acoustic spatial beamforming, and sub-watt clinical-grade diagnostic foundation models worn on the body.
          </p>
        </div>

        {/* ================================================================== */}
        {/* 1. INTERACTIVE MULTIMODAL AI FUSION CONSOLE                         */}
        {/* ================================================================== */}
        <div style={{
          borderRadius: '1.75rem',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 50px rgba(6, 182, 212, 0.12)',
          background: 'rgba(3, 14, 22, 0.92)',
          padding: '2.5rem',
          marginBottom: '4.5rem',
          backdropFilter: 'blur(20px)'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(6,182,212,0.15)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#06b6d4', fontWeight: 700 }}>
                Interactive Architecture Simulation
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                Multimodal Input-to-Experience Pipeline
              </h3>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(5, 20, 30, 0.8)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(6,182,212,0.2)' }}>
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
                    color: activeInput === input.id ? '#020e14' : '#94a3b8',
                    boxShadow: activeInput === input.id ? `0 0 15px ${input.color}88` : 'none'
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
                background: 'rgba(5, 18, 28, 0.85)',
                borderRadius: '1.25rem',
                border: `1px solid ${currentInputData.color}44`,
                padding: '1.75rem',
                boxShadow: `inset 0 0 30px ${currentInputData.color}11, 0 10px 30px rgba(0,0,0,0.5)`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '10px', background: `${currentInputData.color}22`, color: currentInputData.color }}>
                      {currentInputData.icon}
                    </div>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700 }}>{currentInputData.label} Ingestion Stream</h4>
                      <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Direct hardware DMA bus</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: currentInputData.color, background: `${currentInputData.color}15`, padding: '0.25rem 0.65rem', borderRadius: '4px', border: `1px solid ${currentInputData.color}44` }}>
                    Active 1,000 Hz
                  </span>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentInputData.detail}
                </p>

                {/* Animated Sensor Signal Visualizer */}
                <div style={{ height: '55px', background: 'rgba(2, 9, 14, 0.95)', borderRadius: '8px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Sample Rate</span>
                    <p style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.rate}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Inference Latency</span>
                    <p style={{ color: '#5af493', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.latency}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Bandwidth</span>
                    <p style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 600 }}>{currentInputData.tokens}</p>
                  </div>
                </div>
              </div>

              {/* Connecting Neural Pulse Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1.25rem', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', border: '1px dashed rgba(6, 182, 212, 0.3)' }}>
                <Cpu size={18} color="#06b6d4" />
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Fused into <strong style={{ color: '#ffffff' }}>Glassdata Foundation Model</strong> with sub-watt quantization.
                </span>
              </div>

            </div>

            {/* Right: The High-Res Architecture Diagram with Active State Overlay */}
            <div style={{
              position: 'relative',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(6,182,212,0.3)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
              background: '#020b10'
            }}>
              <img
                src="/assets/multimodal_ai_models.png"
                alt="Multimodal AI Models Slide Architecture"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              
              {/* Dynamic Interactive Scanner Overlay */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(2, 10, 16, 0.85)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(90, 244, 147, 0.4)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5af493', boxShadow: '0 0 10px #5af493' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#5af493' }}>
                  Active Sensory Pipeline: {currentInputData.label.toUpperCase()}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ================================================================== */}
        {/* 2. INTERACTIVE SMART GLASSES HUD SIMULATOR & WEARABLE DISPLAY      */}
        {/* ================================================================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(340px, 1fr)', gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Interactive Mode Switcher & Technical Displays */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* HUD Mode Switcher Tabs */}
            <div style={{ display: 'flex', gap: '1rem', background: 'rgba(4, 18, 26, 0.8)', padding: '0.5rem', borderRadius: '1rem', border: '1px solid rgba(6,182,212,0.25)' }}>
              <button
                onClick={() => setHudMode('clinical')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease',
                  background: hudMode === 'clinical' ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'transparent',
                  color: hudMode === 'clinical' ? '#ffffff' : '#94a3b8',
                  boxShadow: hudMode === 'clinical' ? '0 0 20px rgba(6,182,212,0.4)' : 'none'
                }}
              >
                <Activity size={18} />
                Medical / Clinical Triage HUD
              </button>

              <button
                onClick={() => setHudMode('acoustic')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease',
                  background: hudMode === 'acoustic' ? 'linear-gradient(135deg, #10b981, #059669)' : 'transparent',
                  color: hudMode === 'acoustic' ? '#ffffff' : '#94a3b8',
                  boxShadow: hudMode === 'acoustic' ? '0 0 20px rgba(16,185,129,0.4)' : 'none'
                }}
              >
                <Volume2 size={18} />
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
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 35px rgba(6, 182, 212, 0.15)',
                  background: 'rgba(3, 14, 22, 0.95)',
                  position: 'relative'
                }}>
                  <img
                    src="/assets/glasses_ai_triage.png"
                    alt="AI Triage System Dark - Facial Recognition and MedGemma"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  {/* Interactive Live Telemetry Bar */}
                  <div style={{
                    padding: '1.25rem 1.75rem',
                    background: 'rgba(2, 10, 16, 0.95)',
                    borderTop: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Heart Rate</span>
                        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Activity size={16} /> {ecgHeartRate} BPM
                        </p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Oxygen Saturation</span>
                        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>SpO₂ 98.4%</p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Model Confidence</span>
                        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#5af493' }}>97.3%</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setTriageUrgent(!triageUrgent)}
                      style={{
                        padding: '0.45rem 1rem',
                        borderRadius: '6px',
                        border: triageUrgent ? '1px solid #ef4444' : '1px solid #10b981',
                        background: triageUrgent ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        color: triageUrgent ? '#f87171' : '#5af493',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer'
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
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 35px rgba(16, 185, 129, 0.15)',
                  background: 'rgba(3, 14, 22, 0.95)',
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
                    background: 'rgba(2, 10, 16, 0.95)',
                    borderTop: '1px solid rgba(16,185,129,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Interactive Acoustic Tuning Slider
                        </span>
                        <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600 }}>Active Noise Cancellation Depth</h4>
                      </div>
                      <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#5af493' }}>
                        -{ancLevel} dB
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="42"
                      value={ancLevel}
                      onChange={(e) => setAncLevel(Number(e.target.value))}
                      style={{
                        width: '100%',
                        accentColor: '#10b981',
                        cursor: 'pointer',
                        height: '6px'
                      }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8' }}>
                      <span>0 dB (Raw Ambient Noise)</span>
                      <span>Target Voice Beam: <strong>Isolate Patient</strong></span>
                      <span>-42 dB (Full Hospital Isolation)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Full-Height Fashion Model with Interactive Hardware Pins */}
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

              {/* Interactive Hardware Inspection Hotspots */}
              {hotspots.map((hs) => (
                <div
                  key={hs.id}
                  onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                  style={{
                    position: 'absolute',
                    top: hs.y,
                    left: hs.x,
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 20
                  }}
                  title={hs.title}
                >
                  <motion.div
                    animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: activeHotspot === hs.id ? '#67e8f9' : '#06b6d4',
                      border: '2px solid #ffffff',
                      boxShadow: '0 0 20px #06b6d4, inset 0 0 8px #ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#020b10',
                      fontWeight: 800,
                      fontSize: '0.75rem'
                    }}
                  >
                    +
                  </motion.div>

                  {/* Hotspot Floating Tooltip */}
                  {activeHotspot === hs.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(2, 10, 18, 0.95)',
                        border: '1px solid #06b6d4',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 25px rgba(6,182,212,0.3)',
                        borderRadius: '10px',
                        padding: '0.75rem 1rem',
                        width: '220px',
                        zIndex: 30,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <h5 style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>{hs.title}</h5>
                      <p style={{ color: '#cbd5e1', fontSize: '0.75rem', lineHeight: 1.4 }}>{hs.desc}</p>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Bottom Caption Overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1.75rem 1.75rem',
                background: 'linear-gradient(to top, rgba(2,10,18,0.95) 0%, rgba(2,10,18,0.7) 60%, transparent 100%)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      Embodied Ambient Vision
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Click the glowing pins (+) on the frame to inspect embedded waveguides & sub-watt neural sensors.
                    </p>
                  </div>
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
