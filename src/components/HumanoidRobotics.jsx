import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hand, Cpu, ShieldCheck, Gauge, Zap, Crosshair, 
  Layers, ChevronRight, CheckCircle2, RotateCw, Activity
} from 'lucide-react';

const HumanoidRobotics = () => {
  // Active manipulation skill: 'apple' | 'baseball' | 'tea' | 'screwdriver'
  const [activeSkill, setActiveSkill] = useState('apple');
  // Active anatomy hotspot on the hand
  const [activeAnatomy, setActiveAnatomy] = useState('npu');

  const skillsData = {
    apple: {
      name: 'Delicate Fruit Grip',
      target: 'Organic Apple Picking',
      complianceForce: '0.42 N',
      slipMargin: '98.6%',
      tactileArray: '1,024 pressure nodes active',
      desc: 'Soft compliance grip with real-time viscoelastic deformability estimation. Prevents bruising on soft organic produce.',
      metrics: [
        { label: 'Deformation Target', val: '< 0.8 mm' },
        { label: 'Surface Friction', val: '0.72 µ' },
        { label: 'Grip Latency', val: '4 ms' }
      ]
    },
    baseball: {
      name: 'Dynamic Object Grasp',
      target: 'Fast Trajectory Catch',
      complianceForce: '14.8 N',
      slipMargin: '99.4%',
      tactileArray: 'Full palm enveloping lock',
      desc: 'High-speed Coriolis compensation and rapid angular momentum dissipation for erratic dynamic trajectories.',
      metrics: [
        { label: 'Impact Absorption', val: '12 ms' },
        { label: 'Enveloping Torque', val: '18.5 Nm' },
        { label: 'Lock Rigidity', val: '99.9%' }
      ]
    },
    tea: {
      name: 'Fluid Surface Stabilization',
      target: 'Hot Liquid Glass Handling',
      complianceForce: '1.25 N',
      slipMargin: '99.8%',
      tactileArray: 'Thermal gradient sensors active',
      desc: 'Real-time anti-slosh damping maintaining vessel equilibrium to within 0.02° of horizontal plane under rapid motion.',
      metrics: [
        { label: 'Anti-Slosh Gyro', val: '1,000 Hz' },
        { label: 'Liquid Tilt Error', val: '< 0.02°' },
        { label: 'Thermal Shield', val: '85°C rated' }
      ]
    },
    screwdriver: {
      name: 'High-Precision Tool Use',
      target: 'Precision Fastener Fastening',
      complianceForce: '6.4 N',
      slipMargin: '99.9%',
      tactileArray: 'Micro-slip shear feedback',
      desc: 'Sub-millimeter axial alignment with tactile shear feedback to detect thread engagement pitch without cross-threading.',
      metrics: [
        { label: 'Torque Precision', val: '2.4 ± 0.05 Nm' },
        { label: 'Axial Alignment', val: '99.8%' },
        { label: 'Thread Feedback', val: '2,000 Hz' }
      ]
    }
  };

  const anatomyHotspots = [
    {
      id: 'npu',
      name: 'Embedded Edge NPU',
      spec: '45 TOPS int8 real-time tactile inference engine running at 4.2W directly in the palm.',
      type: 'Compute'
    },
    {
      id: 'proximity',
      name: 'Proximity Sensor Node',
      spec: 'Sub-millimeter optical time-of-flight approach detection on each fingertip pad.',
      type: 'Perception'
    },
    {
      id: 'actuator',
      name: 'Micro Servo Actuators',
      spec: 'Miniature brushless high-torque joint drives delivering 3.8 Nm per knuckle.',
      type: 'Actuation'
    },
    {
      id: 'tendons',
      name: 'Tension Cable Routing System',
      spec: 'Kevlar-reinforced bio-mimetic synthetic tendons with closed-loop strain gauge feedback.',
      type: 'Biomechanics'
    },
    {
      id: 'thermal',
      name: 'Thermal Dissipation Mesh',
      spec: 'Micro-channeled copper vapor cooling envelope dissipating sustained high-current grasp heat.',
      type: 'Thermal'
    },
    {
      id: 'wrist',
      name: 'Wrist Rotary Joint Bearing',
      spec: '3-DoF spherical ceramic bearing with integrated multi-axis torque-vectoring encoders.',
      type: 'Motion'
    }
  ];

  const currentSkill = skillsData[activeSkill];
  const currentAnatomy = anatomyHotspots.find(a => a.id === activeAnatomy) || anatomyHotspots[0];

  return (
    <section className="section" id="robots" style={{
      borderTop: '1px solid rgba(6,182,212,0.15)',
      background: 'linear-gradient(180deg, rgba(8,12,20,0.95) 0%, rgba(38,10,24,0.95) 45%, rgba(18,7,16,0.98) 100%)',
      padding: '5.5rem 0 6.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="tag-pill" style={{ color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.4)', background: 'rgba(244, 63, 94, 0.1)', marginBottom: '0.85rem' }}>
            EMBODIED FOUNDATION MODELS
          </div>
          <h2 className="h2" style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.4rem)', lineHeight: 1.15, color: '#ffffff', maxWidth: '1100px' }}>
            We are building <span style={{ color: '#38bdf8' }}>AI Skills</span> for humanoid robots
          </h2>
          <p className="text-lead" style={{ maxWidth: '750px', marginTop: '1rem', color: '#94a3b8' }}>
            ASIN Platform: Autonomous Skill & Intuition Network powering dexterous multi-domain manipulation, factory automation, and human-level physical intelligence.
          </p>
        </div>

        {/* ================================================================== */}
        {/* 1. INTERACTIVE DEXTEROUS MANIPULATION & ANATOMY LAB                */}
        {/* ================================================================== */}
        <div style={{
          borderRadius: '1.75rem',
          border: '1px solid rgba(244, 63, 94, 0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 50px rgba(244, 63, 94, 0.15)',
          background: 'rgba(12, 4, 10, 0.94)',
          padding: '2.5rem',
          marginBottom: '4.5rem',
          backdropFilter: 'blur(20px)'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(244, 63, 94, 0.2)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#f43f5e', fontWeight: 700 }}>
                Tactile Kinematics & Manipulation Console
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                Proprietary Rare Multimodal Annotated Data & Hardware
              </h3>
            </div>
            
            {/* Interactive Skill Selector Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(25, 8, 16, 0.8)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(244, 63, 94, 0.25)' }}>
              {Object.keys(skillsData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSkill(key)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    transition: 'all 0.25s ease',
                    background: activeSkill === key ? 'linear-gradient(135deg, #f43f5e, #e11d48)' : 'transparent',
                    color: activeSkill === key ? '#ffffff' : '#94a3b8',
                    boxShadow: activeSkill === key ? '0 0 15px rgba(244, 63, 94, 0.5)' : 'none'
                  }}
                >
                  {skillsData[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Split View: Live Telemetry vs High-Res Slide */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.35fr)', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Interactive Telemetry Gauges & Anatomy Callouts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Active Skill Telemetry Box */}
              <div style={{
                background: 'rgba(18, 6, 14, 0.9)',
                borderRadius: '1.25rem',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                padding: '1.75rem',
                boxShadow: 'inset 0 0 30px rgba(244, 63, 94, 0.1), 0 10px 30px rgba(0,0,0,0.6)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#fb7185', fontWeight: 700, textTransform: 'uppercase' }}>
                      Selected Manipulation Task
                    </span>
                    <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700 }}>
                      {currentSkill.target}
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#5af493', background: 'rgba(90, 244, 147, 0.15)', padding: '0.3rem 0.75rem', borderRadius: '4px', border: '1px solid rgba(90, 244, 147, 0.3)' }}>
                    Tactile Loop: 2,000 Hz
                  </span>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentSkill.desc}
                </p>

                {/* Real-time Telemetry Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: 'rgba(5, 2, 4, 0.8)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Compliance Force</span>
                    <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800 }}>{currentSkill.complianceForce}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Slip Margin</span>
                    <p style={{ color: '#5af493', fontSize: '1.1rem', fontWeight: 800 }}>{currentSkill.slipMargin}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Tactile Grid</span>
                    <p style={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: 800 }}>1,024 Nodes</p>
                  </div>
                </div>

                {/* Sub-Metrics list */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                  {currentSkill.metrics.map((m, idx) => (
                    <div key={idx} style={{ padding: '0.5rem', background: 'rgba(244, 63, 94, 0.08)', borderRadius: '6px', border: '1px solid rgba(244, 63, 94, 0.15)' }}>
                      <span style={{ fontSize: '0.65rem', color: '#fb7185', display: 'block' }}>{m.label}</span>
                      <strong style={{ fontSize: '0.85rem', color: '#ffffff' }}>{m.val}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anatomy Hotspot Explorer Bar */}
              <div style={{
                background: 'rgba(18, 6, 14, 0.7)',
                borderRadius: '1.25rem',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '1.25rem'
              }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem' }}>
                  Click to inspect Robotic Hand Anatomy:
                </span>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {anatomyHotspots.map((ah) => (
                    <button
                      key={ah.id}
                      onClick={() => setActiveAnatomy(ah.id)}
                      style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: '6px',
                        border: activeAnatomy === ah.id ? '1px solid #f43f5e' : '1px solid rgba(255,255,255,0.1)',
                        background: activeAnatomy === ah.id ? 'rgba(244, 63, 94, 0.25)' : 'rgba(255,255,255,0.04)',
                        color: activeAnatomy === ah.id ? '#ffffff' : '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {ah.name}
                    </button>
                  ))}
                </div>

                <div style={{ padding: '0.75rem 1rem', background: 'rgba(5, 2, 4, 0.9)', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
                  <strong style={{ color: '#fb7185', fontSize: '0.85rem' }}>{currentAnatomy.name} ({currentAnatomy.type}):</strong>
                  <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '0.2rem' }}>{currentAnatomy.spec}</p>
                </div>
              </div>

            </div>

            {/* Right: The High-Res Slide with Interactive Overlay */}
            <div style={{
              position: 'relative',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 30px rgba(244, 63, 94, 0.15)',
              background: '#040203'
            }}>
              <img
                src="/assets/humanoid_hand_skills.jpg"
                alt="Skills for Humanoid Robots Architecture Slide"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              <div style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(4, 2, 6, 0.85)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(244, 63, 94, 0.4)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f43f5e', boxShadow: '0 0 10px #f43f5e' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fb7185' }}>
                  Task Selected: {currentSkill.name}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ================================================================== */}
        {/* 2. ASIN PLATFORM, MUSK COLLAGE, DATASET CASCADE & ROBOT PORTRAIT   */}
        {/* ================================================================== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 0.8fr)', gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left / Center Content Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2.5rem' }}>
            
            {/* Top Row: Musk Article & Robot Assembly Sequence (Left) + ASIN Platform Architecture (Right) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.35fr)', gap: '1.75rem', alignItems: 'center' }}>
              
              {/* Left Top: Musk Article & Robot Action Sequence */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(244, 63, 94, 0.35)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                  background: 'rgba(5, 12, 18, 0.8)'
                }}>
                  <img
                    src="/assets/musk_robots.jpg"
                    alt="Musk: 1 Billion Robots Could Outproduce Humanity"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

                {/* 6-Photo Robotic Movement Array */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num} style={{
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: '#020b10'
                    }}>
                      <img
                        src={`/assets/robot_action_${num}.png`}
                        alt={`Humanoid Kinematics ${num}`}
                        style={{ width: '100%', height: '62px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Top: ASIN Platform (6 Multi-Domain Applications) */}
              <div style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.7), 0 0 30px rgba(244, 63, 94, 0.12)',
                background: 'rgba(5, 12, 18, 0.85)',
                padding: '0.5rem'
              }}>
                <img
                  src="/assets/asin_platform.png"
                  alt="Glass Data - ASIN Platform Architecture"
                  style={{ width: '100%', height: 'auto', borderRadius: '0.85rem', display: 'block' }}
                />
              </div>

            </div>

            {/* Stepped Cascading Stack of Skill Datasets */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fb7185', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    ASIN Skill Training Libraries
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    Hover over the stepped cascade to examine multi-domain kinesthetic policy datasets.
                  </p>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#5af493', background: 'rgba(90, 244, 147, 0.12)', padding: '0.3rem 0.75rem', borderRadius: '4px', border: '1px solid rgba(90, 244, 147, 0.3)' }}>
                  120,000+ Verified Trajectories
                </span>
              </div>

              <div style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(244, 63, 94, 0.15)',
                background: 'rgba(4, 10, 16, 0.9)',
                padding: '0.5rem'
              }}>
                <img
                  src="/assets/asin_skills_cascading_hd.png"
                  alt="Glass Data - ASIN Skill Training Datasets Stepped Cascade"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.85rem',
                    display: 'block',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.015)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(244, 63, 94, 0.4))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'none';
                  }}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Full-Height Android Robot Portrait */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: '100%',
              minHeight: '700px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 50px rgba(89, 9, 71, 0.45)',
              position: 'relative',
              background: 'radial-gradient(ellipse at 50% 35%, rgba(244, 63, 94, 0.15) 0%, rgba(10, 4, 16, 0.95) 70%, #030106 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Animated Live Status Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(5, 2, 8, 0.8)',
                border: '1px solid rgba(244, 63, 94, 0.4)',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                backdropFilter: 'blur(8px)',
                zIndex: 20
              }}>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f43f5e', boxShadow: '0 0 10px #f43f5e' }}
                />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: '#fda4af' }}>
                  KINEMATICS: ONLINE
                </span>
              </div>

              {/* Luminous Cybernetic Scanning Beam */}
              <motion.div
                animate={{ top: ['4%', '82%', '4%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.8), rgba(244, 63, 94, 1), rgba(6, 182, 212, 0.8), transparent)',
                  boxShadow: '0 0 12px rgba(244, 63, 94, 0.9), 0 0 24px rgba(6, 182, 212, 0.7)',
                  zIndex: 15,
                  pointerEvents: 'none'
                }}
              />

              {/* Complete Full-Body Robot with Idle Breathing & Dynamic Glow */}
              <motion.img
                src="/assets/robot_portrait.png"
                alt="Humanoid Cybernetic Android Portrait"
                animate={{ 
                  y: [0, -6, 0],
                  filter: [
                    'drop-shadow(0 15px 30px rgba(244, 63, 94, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.15))',
                    'drop-shadow(0 20px 40px rgba(244, 63, 94, 0.5)) drop-shadow(0 0 25px rgba(6, 182, 212, 0.3))',
                    'drop-shadow(0 15px 30px rgba(244, 63, 94, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.15))'
                  ]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  display: 'block',
                  padding: '1rem 0.5rem 5.5rem'
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1.75rem 1.75rem',
                background: 'linear-gradient(to top, rgba(5,2,8,0.95) 0%, rgba(5,2,8,0.7) 60%, transparent 100%)',
                zIndex: 20
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Embodied Humanoid Intelligence
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Real-time multi-sensory kinesthetic policy networks running natively on edge silicon.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HumanoidRobotics;
