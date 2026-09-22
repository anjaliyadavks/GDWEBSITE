import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hand, Cpu, ShieldCheck, Gauge, Zap, Crosshair, 
  Layers, ChevronRight, CheckCircle2, RotateCw, Activity,
  HeartHandshake, Wrench, Utensils, Store, ShieldAlert,
  X, Play, Maximize2, Sparkles, Check
} from 'lucide-react';

const HumanoidRobotics = () => {
  // Active manipulation skill: 'apple' | 'baseball' | 'tea' | 'screwdriver'
  const [activeSkill, setActiveSkill] = useState('apple');
  // Active anatomy hotspot on the hand
  const [activeAnatomy, setActiveAnatomy] = useState('npu');
  // Active ASIN Robot Helper domain modal: null or domain id
  const [activeAsinDomain, setActiveAsinDomain] = useState(null);
  const [simulatingAction, setSimulatingAction] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const asinDomains = {
    assembly: {
      id: 'assembly',
      num: 1,
      title: 'Precision Factory Assembly',
      tag: 'Industrial Kinematics',
      image: '/assets/asin_help_assembly.png',
      icon: <Wrench size={20} color="#059669" />,
      desc: 'High-resolution stereo vision & sub-millimeter micro-assembly. Auto-calibrating optics with 0.05mm alignment precision for semiconductor, PCB, and precision optics handling.',
      helpingRole: 'Assisting manufacturing technicians with high-precision micro-soldering, optical sensor calibration, and zero-defect quality inspection.',
      workflows: [
        'Sub-Millimeter Micro-Soldering — 0.05mm positioning precision for delicate PCB electronics.',
        'Zero-Defect Quality Inspection — Real-time 99.9% zero-shot AI verification of micro-components.',
        'High-Speed Fastener Installation — Fastens micro-threaded screws without cross-threading.',
        'Collaborative Safe Operation — Instantly pauses movement upon detecting human technician proximity.'
      ],
      sensors: [
        'Micro-Optical Alignment Camera',
        '300° High-Torque Wrist Rotation',
        'Multi-Axis Force Strain Gauges',
        'Auto-Calibration Feedback Engine'
      ],
      metrics: [
        { label: 'Position Precision', val: '± 0.05 mm' },
        { label: 'Tactile Sampling', val: '2,000 Hz' },
        { label: 'Defect Detection', val: '99.9% Zero-Shot' }
      ]
    },
    eldercare: {
      id: 'eldercare',
      num: 2,
      title: 'Elder Care Companion',
      tag: 'Viscoelastic Tactile Care',
      image: '/assets/asin_help_eldercare.png',
      icon: <HeartHandshake size={20} color="#e11d48" />,
      desc: 'Soft-touch force-controlled joint actuators providing gentle physical support, gait tracking, thermal balance sensing, and empathetic conversational AI.',
      helpingRole: 'Helping elderly individuals stand, walk safely, monitor vital signs, administer timely medication reminders, and provide warm empathetic company.',
      workflows: [
        'Physical Gait & Balance Support — Assists standing & walking using ultra-soft compliance joints (< 0.5N force).',
        'Continuous Vitals & Thermal Monitor — Real-time telemetry tracking body temperature, heart rate, and SpO2.',
        'Predictive Fall Prevention — Gaze and balance models detect loss of stability 500ms before a potential fall.',
        'Empathetic Voice Companion — Friendly multi-language conversational AI for medication & daily check-ins.'
      ],
      sensors: [
        'Soft-Touch Surface Compliance',
        'Gait Stability Force-Torque Sensors',
        'Thermal Balance System',
        'Empathetic Multilingual Voice AI'
      ],
      metrics: [
        { label: 'Compliance Force', val: '< 0.5 N (Ultra Soft)' },
        { label: 'Fall Prevention', val: '99.7% Predictive' },
        { label: 'Thermal Sensor', val: '36.5°C Monitor' }
      ]
    },
    cooking: {
      id: 'cooking',
      num: 3,
      title: 'Home Cooking Assistant',
      tag: 'Visuomotor Cooking & Prep',
      image: '/assets/asin_help_cooking.png',
      icon: <Utensils size={20} color="#d97706" />,
      desc: 'Articulated multi-finger grasping for kitchen tools, precise thermal management, auto-recipe adaptation, and fire/gas safety monitoring.',
      helpingRole: 'Preparing meals safely, chopping ingredients with precision, stirring hot vessels without spilling, and monitoring kitchen thermal safety.',
      workflows: [
        'Precision Knife & Food Prep — Sub-millimeter blade guidance for uniform slicing of organic produce.',
        'Anti-Slosh Vessel Damping — Stabilizes hot liquids and soups during rapid stove transfers.',
        'Thermal Armor Operation — Operates safely near open flames and hot cookware up to 120°C.',
        'Gas & Smoke Hazard Prevention — Detects gas leaks or excessive smoke instantly to prevent accidents.'
      ],
      sensors: [
        'Heat-Resistant Finger Armor',
        'Viscoelastic Anti-Slosh Damping',
        'Auto-Recipe Adaptation Engine',
        'Gas & Thermal Hazard Detector'
      ],
      metrics: [
        { label: 'Tool Control', val: '5 Fingers Synced' },
        { label: 'Liquid Stabilization', val: '< 0.02° Slosh' },
        { label: 'Heat Protection', val: '120°C Rated' }
      ]
    },
    retail: {
      id: 'retail',
      num: 4,
      title: 'Luxury Retail Specialist',
      tag: 'Spatial Retail Engagement',
      image: '/assets/asin_help_retail.png',
      icon: <Store size={20} color="#7c3aed" />,
      desc: 'Multilingual natural voice interaction, high-end product presentation protocols, zero-shot customer recognition, and high-dexterity tray serving.',
      helpingRole: 'Welcoming store guests, presenting luxury items with smooth gesture protocols, answering detailed product inquiries, and managing inventory.',
      workflows: [
        'Multilingual Guest Assistance — Converses naturally across 42 native languages.',
        'High-Dexterity Item Presentation — Serves delicate jewelry, watches, and items on luxury trays.',
        'Spatial Attention & Gaze Tracking — Identifies customer interest in real time to offer relevant advice.',
        'Real-time Inventory Sync — Automatically tracks handled merchandise and updates store stock.'
      ],
      sensors: [
        '360° Spatial Customer Radar',
        'Multi-Language Voice Synthesizer',
        'Sub-Millimeter Tray Balance',
        'Premium Presentation Protocol'
      ],
      metrics: [
        { label: 'Languages Supported', val: '42 Native' },
        { label: 'Grasp Elegance', val: 'Fluid Motion' },
        { label: 'Customer Satisfaction', val: '98.9%' }
      ]
    },
    medical: {
      id: 'medical',
      num: 5,
      title: 'Medical Support Assistant',
      tag: 'Clinical Triage & Ward Support',
      image: '/assets/asin_help_medical.png',
      icon: <Activity size={20} color="#059669" />,
      desc: 'Autonomous patient vitals monitoring (ECG, SpO2, Temp), sterile field assistance, emergency call triage, and real-time medical AI guidance.',
      helpingRole: 'Assisting hospital nurses and doctors, continuously reading patient vitals, sanitizing instruments, and responding to emergency alarms.',
      workflows: [
        'Sterile Instrument Handover — Hands surgical instruments to physicians with clinical precision.',
        '24/7 Patient Vitals Telemetry — Continuous ECG heart rate sync and alert triage in < 4ms.',
        'Emergency Ward Navigation — Navigates crowded hospital hallways autonomously with patient priority.',
        'HIPAA-Compliant AI Logs — Records patient notes and care updates safely into hospital EMRs.'
      ],
      sensors: [
        'Patient Radar Vitals Telemetry',
        'Sterile Field Instrument Handler',
        'Real-Time ECG Heart Rate Sync',
        'HIPAA-Compliant MedGemma AI'
      ],
      metrics: [
        { label: 'Vitals Sync', val: '100 ms Real-Time' },
        { label: 'Sterile Rating', val: 'Clinical Grade' },
        { label: 'Alarm Triage', val: '< 4 ms Alert' }
      ]
    },
    security: {
      id: 'security',
      num: 6,
      title: 'Security Patrol & Surveillance',
      tag: 'Autonomous Defense & Navigation',
      image: '/assets/asin_help_security.png',
      icon: <ShieldAlert size={20} color="#0284c7" />,
      desc: 'Night-vision thermal optics, perimeter autonomous navigation, real-time anomaly threat detection, and encrypted multi-agent relay.',
      helpingRole: 'Patrolling facility perimeters at night, detecting thermal leaks or unauthorized intrusions, and notifying security teams in real time.',
      workflows: [
        'Perimeter Infrared Patrol — Navigates unlit facility grounds using sub-lux thermal optics.',
        'Predictive Anomaly Threat Detection — AI flags unauthorized movement or gas/heat anomalies in 2ms.',
        'Encrypted Multi-Agent Relay — Streams encrypted 5G video feed directly to security control rooms.',
        'All-Weather Ruggedized Guidance — Operates continuously in darkness, rain, or smoke.'
      ],
      sensors: [
        'Infrared Thermal Night Vision',
        'Autonomous LiDAR Navigation',
        'Threat Analysis AI Engine',
        'Encrypted 5G/Mesh Relay'
      ],
      metrics: [
        { label: 'Patrol Coverage', val: '100% Perimeter' },
        { label: 'Night Vision', val: 'Sub-Lux Thermal' },
        { label: 'Response Latency', val: '2 ms Anomaly' }
      ]
    }
  };

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
      label: 'On-Hand Neural Silicon (NPU)',
      x: '82%',
      y: '48.5%',
      detail: '8 TOPS sub-watt NPU running local visuomotor transformers natively at 500 Hz inside the palm.'
    },
    {
      id: 'tactile',
      label: 'Tactile Proximity & Piezoresistive Skin',
      x: '78%',
      y: '10%',
      detail: '1,024-node piezoresistive array and optical proximity nodes measuring micro-slip shear & normal force vectors at fingertips.'
    },
    {
      id: 'tendon',
      label: 'Synthesized Tendon Drive & Hydraulics',
      x: '67.5%',
      y: '59%',
      detail: 'High-tensile Dyneema tendon cables and hydraulic micro-tubes with sub-millimeter axial strain encoders.'
    },
    {
      id: 'wrist',
      label: 'Rotary Joint Bearing & Forearm Conduit',
      x: '81.7%',
      y: '73.5%',
      detail: 'Low-backlash high-torque harmonic drive wrist rotary bearing with 300° range of motion and integrated sensor conduit.'
    }
  ];

  const currentSkill = skillsData[activeSkill];
  const currentAnatomy = anatomyHotspots.find(a => a.id === activeAnatomy) || anatomyHotspots[0];

  const triggerSimulation = () => {
    setSimulatingAction(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1400);
    setTimeout(() => setSimulationStep(4), 2100);
    setTimeout(() => {
      setSimulatingAction(false);
      setSimulationStep(0);
    }, 3200);
  };

  return (
    <section className="section" id="robots" style={{
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
            EMBODIED FOUNDATION MODELS
          </div>
          <h2 className="h2" style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.4rem)', lineHeight: 1.15, color: '#0f172a', maxWidth: '1100px' }}>
            We are building <span style={{ color: 'var(--color-primary)' }}>AI Skills</span> for humanoid robots
          </h2>
          <p className="text-lead" style={{ maxWidth: '750px', marginTop: '1rem', color: '#475569' }}>
            ASIN Platform: Autonomous Skill & Intuition Network powering dexterous multi-domain manipulation, factory automation, and human-level physical intelligence.
          </p>
        </div>

        {/* ================================================================== */}
        {/* 1. INTERACTIVE DEXTEROUS MANIPULATION & ANATOMY LAB                */}
        {/* ================================================================== */}
        <div style={{
          borderRadius: '1.75rem',
          border: '1px solid rgba(226, 232, 240, 0.95)',
          boxShadow: '0 20px 50px var(--color-primary-light), 0 2px 10px rgba(0,0,0,0.03)',
          background: '#ffffff',
          padding: '2.5rem',
          marginBottom: '4.5rem'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(226,232,240,0.9)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-primary)', fontWeight: 700 }}>
                Kinesthetic Skill Simulator
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 700, marginTop: '0.25rem' }}>
                Dexterous Hand Kinematics & Tactile Feedback
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', background: '#f8fafc', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(226,232,240,0.9)' }}>
              {Object.keys(skillsData).map((skillKey) => (
                <button
                  key={skillKey}
                  onClick={() => setActiveSkill(skillKey)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'capitalize',
                    transition: 'all 0.25s ease',
                    background: activeSkill === skillKey ? 'var(--gradient-btn)' : 'transparent',
                    color: activeSkill === skillKey ? '#ffffff' : '#64748b',
                    boxShadow: activeSkill === skillKey ? '0 4px 15px var(--color-primary-light)' : 'none'
                  }}
                >
                  {skillKey}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.3fr)', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Column: Active Dexterous Skill Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'var(--card-highlight-bg)',
                borderRadius: '1.25rem',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                padding: '1.75rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {currentSkill.name}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#059669', background: '#ecfdf5', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                    TARGET: {currentSkill.target}
                  </span>
                </div>

                <h4 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Compliance Force: <span style={{ color: '#059669' }}>{currentSkill.complianceForce}</span>
                </h4>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {currentSkill.desc}
                </p>

                {/* Live Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(226,232,240,0.85)' }}>
                  {currentSkill.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>{m.label}</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tactile Sensor Array Telemetry Bar */}
              <div style={{
                background: '#f0fdf4',
                borderRadius: '1rem',
                border: '1px solid #a7f3d0',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Slip Margin Safety Factor</span>
                  <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669' }}>{currentSkill.slipMargin}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tactile Node Array</span>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#059669' }}>{currentSkill.tactileArray}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Robotic Hand Anatomy Inspector */}
            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              background: '#ffffff',
              position: 'relative',
              padding: '1rem'
            }}>
              <div style={{ position: 'relative', borderRadius: '0.85rem', overflow: 'hidden' }}>
                <img
                  src="/assets/humanoid_hand_skills.jpg"
                  alt="Robotic Hand Anatomy & Tactile Node Inspector"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />

                {/* Hotspot Pins on Hand Anatomy */}
                {anatomyHotspots.map((hs) => (
                  <div
                    key={hs.id}
                    onClick={() => setActiveAnatomy(hs.id)}
                    style={{
                      position: 'absolute',
                      top: hs.y,
                      left: hs.x,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      zIndex: 20
                    }}
                  >
                    <motion.div
                      animate={{ scale: activeAnatomy === hs.id ? [1, 1.4, 1] : 1 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: activeAnatomy === hs.id ? 'var(--color-primary)' : '#0284c7',
                        border: '2px solid #ffffff',
                        boxShadow: activeAnatomy === hs.id ? '0 0 15px var(--color-primary)' : '0 0 10px #0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: '#ffffff'
                      }}
                    >
                      +
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Anatomy Inspection Readout */}
              <div style={{
                marginTop: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--card-highlight-bg)',
                borderRadius: '0.85rem',
                border: '1px solid var(--card-highlight-border)'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Click to inspect Robotic Hand Anatomy: {currentAnatomy.label}
                </span>
                <p style={{ fontSize: '0.88rem', color: '#334155', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  {currentAnatomy.detail}
                </p>
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
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  background: '#ffffff'
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
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      background: '#f8fafc'
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

              {/* Right Top: Interactive ASIN Platform (Using New Aligned Robot Helper Architecture) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveAsinDomain('eldercare')}
                style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1.5px solid #059669',
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.12), 0 2px 10px rgba(0,0,0,0.03)',
                  background: '#ffffff',
                  padding: '0.5rem',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {/* Floating Interactive Prompt Pill */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #059669',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 10px rgba(16, 185, 129, 0.2)'
                }}>
                  <Maximize2 size={13} color="#059669" />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#047857', letterSpacing: '0.04em' }}>
                    CLICK TO INSPECT ROBOT HELPERS
                  </span>
                </div>

                <img
                  src="/assets/glass_data_platform.png"
                  alt="Glass Data - ASIN Platform Architecture"
                  style={{ width: '100%', height: 'auto', borderRadius: '0.85rem', display: 'block' }}
                />

                {/* Bottom Quick-Launch Bar for the 6 Robot Helper Domains */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '0.4rem',
                  padding: '0.5rem 0.25rem 0.25rem'
                }}>
                  {Object.values(asinDomains).map((domain) => (
                    <button
                      key={domain.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveAsinDomain(domain.id);
                      }}
                      style={{
                        background: '#f0fdf4',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        borderRadius: '8px',
                        padding: '2px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#dcfce7';
                        e.currentTarget.style.borderColor = '#059669';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0fdf4';
                        e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      title={`Inspect ${domain.title}`}
                    >
                      <img
                        src={domain.image}
                        alt={domain.title}
                        style={{
                          width: '100%',
                          height: '38px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          display: 'block'
                        }}
                      />
                      <span style={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        padding: '2px 0 1px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%'
                      }}>
                        #{domain.num} {domain.title.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Stepped Cascading Stack of Skill Datasets */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    ASIN Skill Training Libraries
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    Hover over the stepped cascade to examine multi-domain kinesthetic policy datasets.
                  </p>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#059669', background: '#ecfdf5', padding: '0.3rem 0.75rem', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                  120,000+ Verified Trajectories
                </span>
              </div>

              <div style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.08)',
                background: '#ffffff',
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
                    e.currentTarget.style.filter = 'drop-shadow(0 8px 20px rgba(16, 185, 129, 0.25))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'none';
                  }}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Full-Height Android Robot Portrait (Kept as Frame Highlight) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: '100%',
              minHeight: '700px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              boxShadow: '0 20px 50px rgba(16, 185, 129, 0.08)',
              position: 'relative',
              background: 'radial-gradient(ellipse at 50% 35%, rgba(209, 250, 229, 0.35) 0%, rgba(240, 253, 244, 0.9) 70%, #ffffff 100%)',
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
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                zIndex: 20
              }}>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', boxShadow: '0 0 10px rgba(5, 150, 105, 0.5)' }}
                />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: '#047857' }}>
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
                  background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 1), rgba(16, 185, 129, 0.8), transparent)',
                  boxShadow: '0 0 12px rgba(5, 150, 105, 0.8), 0 0 24px rgba(16, 185, 129, 0.6)',
                  zIndex: 15,
                  pointerEvents: 'none'
                }}
              />

              {/* Complete Full-Body Robot with Idle Breathing & Dynamic Glow */}
              <motion.img
                src="/assets/robot_portrait.png"
                alt="Humanoid Cybernetic Android Portrait"
                animate={{ 
                  y: [0, -6, 0]
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
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 60%, transparent 100%)',
                zIndex: 20
              }}>
                <h4 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Embodied Humanoid Intelligence
                </h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Real-time multi-sensory kinesthetic policy networks running natively on edge silicon.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Screen Interactive ASIN Humanoid Robot Helper Showcase Modal */}
      <AnimatePresence>
        {activeAsinDomain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveAsinDomain(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1050px',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                borderRadius: '1.75rem',
                boxShadow: '0 30px 90px rgba(0,0,0,0.25)',
                padding: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveAsinDomain(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: '#f1f5f9',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  color: '#0f172a',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#dcfce7';
                  e.currentTarget.style.color = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(209, 250, 229, 0.85)', border: '1px solid rgba(16, 185, 129, 0.35)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '0.85rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', boxShadow: '0 0 10px rgba(5, 150, 105, 0.5)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#047857', textTransform: 'uppercase' }}>
                    ASIN PLATFORM // HUMAN ASSISTANCE WORKFLOW
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0f172a', fontWeight: 800 }}>
                  How the Humanoid Robot Helps People
                </h2>
                <p style={{ color: '#475569', fontSize: '0.98rem', maxWidth: '750px', marginTop: '0.35rem' }}>
                  Select any domain below to inspect the step-by-step real-world assistance workflows, hardware perception sensors, and physical safety policies.
                </p>
              </div>

              {/* 6 Domain Selector Tabs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.6rem',
                marginBottom: '2.25rem',
                background: '#f8fafc',
                padding: '0.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(226, 232, 240, 0.9)'
              }}>
                {Object.values(asinDomains).map((domain) => {
                  const isActive = activeAsinDomain === domain.id;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => {
                        setActiveAsinDomain(domain.id);
                        setSimulatingAction(false);
                        setSimulationStep(0);
                      }}
                      style={{
                        padding: '0.65rem 0.75rem',
                        borderRadius: '0.75rem',
                        border: isActive ? '1.5px solid #059669' : '1px solid transparent',
                        background: isActive ? '#dcfce7' : 'transparent',
                        color: isActive ? '#059669' : '#64748b',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {domain.icon}
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {domain.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Selected Domain Detail Showcase - 100% Focused on How It Helps */}
              {(() => {
                const current = asinDomains[activeAsinDomain] || asinDomains.eldercare;
                return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'flex-start' }}>
                    
                    {/* Left Column: 📸 Real Visual Image of the Robot Helping & Visual Gallery */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      
                      {/* Active Domain Hero Helping Scene Image */}
                      <div style={{
                        position: 'relative',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        border: '1px solid rgba(226, 232, 240, 0.95)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                        background: '#f8fafc'
                      }}>
                        <img
                          src={current.image}
                          alt={`${current.title} - Robot Helping People`}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '430px',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'all 0.4s ease'
                          }}
                        />

                        {/* Top Live Operational Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          background: 'rgba(255, 255, 255, 0.95)',
                          border: '1px solid rgba(226, 232, 240, 0.9)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                          zIndex: 10,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', boxShadow: '0 0 10px rgba(5, 150, 105, 0.5)' }} />
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', color: '#0f172a', textTransform: 'uppercase' }}>
                            ACTIVE ASSISTANCE: {current.title}
                          </span>
                        </div>

                        {/* Floating HUD Caption Overlay over the Image */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '1.75rem 1.25rem 1rem',
                          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 60%, transparent 100%)',
                          zIndex: 10
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#059669', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                            <Sparkles size={14} />
                            🤝 Robot Helping Mission
                          </div>
                          <p style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
                            "{current.helpingRole}"
                          </p>
                        </div>
                      </div>

                      {/* Visual Clickable Domain Image Gallery (6 Thumbnails) */}
                      <div style={{
                        background: '#f0fdf4',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        borderRadius: '1.25rem',
                        padding: '1rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            📸 Click Any Image to Inspect Robot Helping in Other Domains:
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                            6 Real-World Roles
                          </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.55rem' }}>
                          {Object.values(asinDomains).map((domain) => {
                            const isSelected = activeAsinDomain === domain.id;
                            return (
                              <button
                                key={domain.id}
                                onClick={() => {
                                  setActiveAsinDomain(domain.id);
                                  setSimulatingAction(false);
                                  setSimulationStep(0);
                                }}
                                style={{
                                  padding: '2px',
                                  borderRadius: '0.75rem',
                                  border: isSelected ? '2px solid #059669' : '1px solid rgba(226, 232, 240, 0.9)',
                                  background: isSelected ? '#dcfce7' : '#ffffff',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                                  position: 'relative',
                                  transform: isSelected ? 'scale(1.06)' : 'scale(1)',
                                  boxShadow: isSelected ? '0 4px 14px rgba(16, 185, 129, 0.25)' : 'none',
                                  transition: 'all 0.25s ease'
                                }}
                                title={domain.title}
                              >
                                <img
                                  src={domain.image}
                                  alt={domain.title}
                                  style={{
                                    width: '100%',
                                    height: '56px',
                                    objectFit: 'cover',
                                    borderRadius: '0.6rem',
                                    display: 'block'
                                  }}
                                />
                                <div style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  background: isSelected ? 'rgba(5, 150, 105, 0.9)' : 'rgba(15, 23, 42, 0.8)',
                                  color: '#ffffff',
                                  fontSize: '0.62rem',
                                  fontWeight: 800,
                                  padding: '1px 2px',
                                  textAlign: 'center',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}>
                                  #{domain.num} {domain.title.split(' ')[0]}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Right Column: ⚡ Helping Actions, Sensors & Interactive Simulation */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      
                      {/* Live Interactive Assistance Routine Simulator */}
                      <div style={{
                        background: '#f0fdf4',
                        border: '1px solid #a7f3d0',
                        borderRadius: '1.25rem',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.08)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Play size={14} /> Interactive Helping Simulation
                          </span>
                          {simulatingAction && (
                            <span style={{ fontSize: '0.72rem', color: '#059669', background: '#ecfdf5', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                              STEP {simulationStep} / 4 EXECUTING
                            </span>
                          )}
                        </div>

                        {/* Simulation Step Log */}
                        {simulatingAction ? (
                          <div style={{ background: '#ffffff', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid #10b981', color: '#059669', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                            {simulationStep === 1 && `[0.2s] 🔍 Detecting human location & task requirements...`}
                            {simulationStep === 2 && `[0.8s] ⚡ Activating soft compliance joint policy (<0.5N force)...`}
                            {simulationStep === 3 && `[1.5s] 🤝 Executing ${current.title} assistance routine...`}
                            {simulationStep === 4 && `[2.2s] ✅ Task completed successfully with zero defects.`}
                          </div>
                        ) : (
                          <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                            Click below to simulate real-time robotic assistance for {current.title}.
                          </p>
                        )}

                        <button
                          onClick={triggerSimulation}
                          disabled={simulatingAction}
                          style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '9999px',
                            border: 'none',
                            background: simulatingAction ? 'rgba(5, 150, 105, 0.5)' : 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                            color: '#ffffff',
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            cursor: simulatingAction ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)',
                            transition: 'all 0.25s ease'
                          }}
                        >
                          <Play size={16} />
                          {simulatingAction ? `Simulating Routine...` : `Simulate ${current.title} Helping Routine`}
                        </button>
                      </div>

                      {/* 4 Real-World Helping Actions (Compact Visual Badges) */}
                      <div style={{
                        background: '#f0fdf4',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        borderRadius: '1.25rem',
                        padding: '1.25rem'
                      }}>
                        <h4 style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                          📋 Step-by-Step Helping Workflows:
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {current.workflows.map((wf, idx) => {
                            const parts = wf.split(' — ');
                            return (
                              <div
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.65rem',
                                  background: '#ffffff',
                                  border: '1px solid rgba(226, 232, 240, 0.85)',
                                  padding: '0.65rem 0.85rem',
                                  borderRadius: '0.75rem'
                                }}
                              >
                                <div style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  background: '#ecfdf5',
                                  border: '1px solid #a7f3d0',
                                  color: '#059669',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontSize: '0.7rem',
                                  fontWeight: 800
                                }}>
                                  {idx + 1}
                                </div>
                                <div style={{ fontSize: '0.84rem', lineHeight: 1.4 }}>
                                  <strong style={{ color: '#0f172a', fontWeight: 700 }}>{parts[0]}</strong>
                                  {parts[1] && <span style={{ color: '#64748b' }}> — {parts[1]}</span>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Performance Metrics Bar */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem', background: '#f0fdf4', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(226, 232, 240, 0.9)' }}>
                        {current.metrics.map((m, idx) => (
                          <div key={idx}>
                            <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>{m.label}</span>
                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#059669' }}>{m.val}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                );
              })()}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HumanoidRobotics;
