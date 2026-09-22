import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Tv, ShoppingBag, Bot, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

const verticals = [
  {
    id: 'medical',
    title: 'Medical',
    icon: <Stethoscope size={20} color="#38bdf8" />,
    image: '/assets/focus_medical.png',
    tag: 'Clinical Intelligence',
    headline: 'Sub-millimeter diagnostic precision & real-time surgical triage',
    desc: 'Multimodal foundation models ingest stereoscopic surgical video, acoustic heart sounds, and macro anatomical keypoints to augment clinicians in sterile operative environments.',
    metrics: [
      { label: 'Latency', val: '< 14 ms' },
      { label: 'Diagnostic Accuracy', val: '97.3%' },
      { label: 'Deployment', val: 'On-Body Wearables' }
    ]
  },
  {
    id: 'advertising',
    title: 'Advertising',
    icon: <Tv size={20} color="#a855f7" />,
    image: '/assets/focus_advertising.png',
    tag: 'Spatial Attention',
    headline: 'Real-time contextual visual intent & spatial audience engagement',
    desc: 'Zero-shot gaze tracking and environmental perception models that understand real-world consumer intent in physical retail and digital outdoor displays.',
    metrics: [
      { label: 'Gaze Sampling', val: '120 Hz' },
      { label: 'Semantic Extraction', val: 'Zero-Shot' },
      { label: 'Conversion Lift', val: '+38.4%' }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: <ShoppingBag size={20} color="#10b981" />,
    image: '/assets/focus_ecommerce.png',
    tag: 'Autonomous Logistics',
    headline: 'Autonomous inventory perception & warehouse item localization',
    desc: 'High-throughput visual parsing and 6-DoF item pose estimation for automated order fulfillment, robotic picking, and hyper-personalized retail inventory prediction.',
    metrics: [
      { label: 'Scan Throughput', val: '2,400 pk/hr' },
      { label: 'Pick Accuracy', val: '99.8%' },
      { label: 'Edge Footprint', val: '< 4W NPU' }
    ]
  },
  {
    id: 'robots',
    title: 'Humanoid Robots',
    icon: <Bot size={20} color="#f43f5e" />,
    image: '/assets/focus_robots.png',
    tag: 'Embodied Kinematics',
    headline: 'Visuomotor manipulation policies & compliant tactile dexterity',
    desc: 'End-to-end transformer policies running natively on humanoid robotic hands, providing viscoelastic deformability control for fragile objects and high-speed assembly.',
    metrics: [
      { label: 'Control Frequency', val: '500 Hz' },
      { label: 'Tactile Array', val: '1,024 Nodes' },
      { label: 'Edge Execution', val: 'On-Device NPU' }
    ]
  }
];

const OurFocus = () => {
  const [activeVertical, setActiveVertical] = useState('medical');
  const selected = verticals.find(v => v.id === activeVertical) || verticals[0];

  return (
    <section className="section" id="focus" style={{
      borderTop: '1px solid rgba(6,182,212,0.15)',
      background: 'linear-gradient(180deg, rgba(3,7,13,0.95) 0%, rgba(4,14,24,0.92) 50%, rgba(3,7,13,0.98) 100%)',
      position: 'relative',
      padding: '5.5rem 0 6rem'
    }}>
      <div className="container">
        
        {/* Header matching user's exact screenshot */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '980px' }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #c084fc 0%, #f472b6 60%, #fda4af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            Our focus
          </h2>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            color: '#cbd5e1',
            lineHeight: 1.7,
            maxWidth: '920px'
          }}>
            Glassdata's multimodal AI models are purpose-built to unlock transformative capabilities across the industries where <strong style={{ color: '#ffffff', fontWeight: 700 }}>intelligent perception</strong> and <strong style={{ color: '#ffffff', fontWeight: 700 }}>real-time decision-making</strong> matter most. Each vertical represents a distinct deployment context — and a massive addressable opportunity.
          </p>
        </div>

        {/* 4 Interactive Vertical Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {verticals.map((item) => {
            const isSelected = activeVertical === item.id;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveVertical(item.id)}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: isSelected 
                    ? 'linear-gradient(180deg, rgba(6, 182, 212, 0.16) 0%, rgba(5, 18, 30, 0.92) 100%)' 
                    : 'rgba(5, 14, 24, 0.7)',
                  border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isSelected 
                    ? '0 15px 35px rgba(0,0,0,0.8), 0 0 25px rgba(56, 189, 248, 0.25)' 
                    : '0 10px 25px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image Container with smooth zoom */}
                <div style={{
                  width: '100%',
                  height: '150px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#02070d'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      transform: isSelected ? 'scale(1.08)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: isSelected
                      ? 'linear-gradient(to top, rgba(5,18,30,0.95) 0%, transparent 60%)'
                      : 'linear-gradient(to top, rgba(5,14,24,0.9) 0%, transparent 60%)'
                  }} />

                  {/* Top Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '12px',
                    background: 'rgba(2, 8, 14, 0.85)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    backdropFilter: 'blur(6px)'
                  }}>
                    {item.tag}
                  </div>
                </div>

                {/* Card Title & Content */}
                <div style={{ padding: '1.25rem 1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: isSelected ? '#ffffff' : '#e2e8f0',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#94a3b8',
                      lineHeight: 1.45,
                      marginBottom: '1rem'
                    }}>
                      {item.headline}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isSelected ? '#38bdf8' : '#64748b'
                  }}>
                    <span>{isSelected ? 'Active Deep Dive' : 'Click to Inspect'}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Vertical Interactive Deep Dive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'rgba(4, 16, 26, 0.85)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '1.5rem',
              padding: '2rem 2.25rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7), inset 0 0 30px rgba(6, 182, 212, 0.06)',
              backdropFilter: 'blur(20px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)', padding: '0.3rem 0.85rem', borderRadius: '9999px', marginBottom: '1rem' }}>
                {selected.icon}
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#67e8f9', textTransform: 'uppercase' }}>
                  {selected.tag} Architecture
                </span>
              </div>

              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                {selected.headline}
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {selected.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}>
                  Partner in {selected.title}
                </a>
                <a href="#glasses" className="btn btn-secondary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}>
                  Inspect Sensors & Models
                </a>
              </div>
            </div>

            {/* Live Benchmarks & Specs for Selected Vertical */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1.25rem',
              background: 'rgba(2, 10, 18, 0.7)',
              padding: '1.5rem',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {selected.metrics.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default OurFocus;
