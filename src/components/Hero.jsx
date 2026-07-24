import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  // NEXT-LEVEL CINEMATIC ANIMATION TIMING
  // 0% - 20%: Stable/Calm
  // 20% - 30%: Rapid Explosion (Anti-gravity kicks in)
  // 30% - 80%: Bullet-time slow float (Suspended)
  // 80% - 90%: Violent Magnetic Snap back
  // 90% - 100%: Stabilize
  
  const explodeTimes = [0, 0.2, 0.3, 0.8, 0.9, 1];
  const explodeEase = ["easeInOut", "easeOut", "linear", "backIn", "easeInOut"];
  const explodeTransition = { 
    duration: 16, // Longer cinematic cycle
    repeat: Infinity, 
    times: explodeTimes,
    ease: explodeEase 
  };
  
  const floatTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" };

  // Premium Flash State
  const [isFlashing, setIsFlashing] = useState(false);
  const triggerFlash = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 400);
  };

  // Cursor tracking physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const rotateY = useTransform(smoothX, [0, 1], [-120, 120]);
  const rotateX = useTransform(smoothY, [0, 1], [40, -40]);

  return (
    <section 
      className="section" 
      id="hero" 
      style={{ paddingTop: '10rem', paddingBottom: '8rem', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Neural Network Lines & Floating UI Elements */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '150px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)', transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', top: '70%', right: '15%', width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)', transform: 'rotate(-30deg)' }} />
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: 'absolute', top: '35%', left: '20%', width: '6px', height: '6px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 20px #06b6d4' }} />
        <motion.div animate={{ scale: [1, 2, 1], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} style={{ position: 'absolute', top: '65%', right: '25%', width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 20px #06b6d4' }} />
      </div>

      {/* 3D Glasses Assembly (floating in background) */}
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        perspective: '1400px'
      }}>
        
        <motion.div
          animate={{ scale: [1, 1.08, 1.08, 1, 1], z: [0, 0, 100, 0, 0] }}
          transition={explodeTransition}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >

          {/* Master Hover Container: Subtle vertical levitation */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={floatTransition}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'crosshair' }}
          >
            
            {/* The Glasses - Controlled by Mouse Cursor */}
            <motion.div 
              style={{ 
                rotateY,
                rotateX,
                position: 'relative', 
                width: '450px', 
                height: '120px',
                transformStyle: 'preserve-3d',
                opacity: 0.95,
                zIndex: 2
              }}
            >
              
              {/* PREMIUM FLASH OVERLAY */}
              <motion.div animate={{ opacity: isFlashing ? 1 : 0, scale: isFlashing ? 1.2 : 1 }} transition={{ duration: 0.15, ease: "easeOut" }} style={{ position: 'absolute', inset: -40, background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(0,255,255,0.8) 40%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none', zIndex: 100, transform: 'translateZ(50px)' }} />
              <motion.div animate={{ opacity: isFlashing ? 1 : 0 }} transition={{ duration: 0.1 }} style={{ position: 'absolute', inset: -10, background: '#ffffff', borderRadius: '20px 20px 50px 50px', filter: 'blur(5px)', pointerEvents: 'none', zIndex: 90, transform: 'translateZ(25px)' }} />


              {/* NEXT-LEVEL EXPLODED VIEW COMPONENTS */}

              {/* Main Frame Exploder (Flies FORWARD) */}
              <motion.div animate={{ z: [0, 0, 120, 120, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{
                  position: 'absolute', inset: '0',
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(0,0,0,0.95))',
                  borderRadius: '15px 15px 45px 45px',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 30px 60px rgba(6,182,212,0.2), inset 0 2px 10px rgba(255,255,255,0.15)',
                  transformStyle: 'preserve-3d'
                }}>
                    <div style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '20px', background: '#000', borderRadius: '50% 50% 0 0' }} />
                </div>
              </motion.div>

              {/* Advanced Camera Array (Flies UP and OUT) */}
              <motion.div animate={{ y: [0, 0, -120, -120, 0, 0], z: [0, 0, 180, 180, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ position: 'absolute', top: '15px', right: '35px', width: '22px', height: '22px', background: '#000', borderRadius: '50%', border: '2px solid #1e293b', boxShadow: 'inset 0 0 5px rgba(255,255,255,0.4)', transform: 'translateZ(25px)' }}>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ position: 'absolute', inset: '3px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 25px #00ffff' }} />
                </div>
              </motion.div>

              {/* Floating Neural Nodes / AI Particles (Aggressive Orbiting) */}
              <motion.div animate={{ y: [0, 0, -200, -200, 0, 0], x: [0, 0, -150, -150, 0, 0], z: [0, 0, 100, 100, 0, 0], rotateZ: [0, 0, 720, 720, 0, 0], opacity: [0, 0, 1, 1, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', top: '20px', left: '30px', width: '20px', height: '20px', background: '#1e293b', border: '1px solid #06b6d4', borderRadius: '4px', transform: 'translateZ(10px)', boxShadow: '0 0 20px rgba(6,182,212,0.8)' }}>
                <div style={{ width: '8px', height: '8px', background: '#00ffff', margin: '5px' }} />
              </motion.div>

              {/* Left Lens Exploder (Flies LEFT and FORWARD while rotating) */}
              <motion.div animate={{ x: [0, 0, -100, -100, 0, 0], z: [0, 0, 200, 200, 0, 0], rotateY: [0, 0, 45, 45, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ 
                  position: 'absolute', left: '20px', bottom: '15px', width: '180px', height: '80px', 
                  border: '2px solid rgba(6,182,212,0.5)', borderRadius: '10px 10px 40px 40px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%, rgba(6,182,212,0.2) 100%)', 
                  backdropFilter: 'blur(5px)', transformStyle: 'preserve-3d', transform: 'translateZ(25px)',
                  boxShadow: 'inset 0 0 40px rgba(6,182,212,0.3)'
                }}>
                  {/* Aggressive Glitch Sweep during bullet time */}
                  <motion.div animate={{ left: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)', transform: 'skewX(-20deg)' }} />
                  <motion.div style={{ position: 'absolute', top: '25px', left: '35px', width: '60px', height: '30px', border: '1px solid rgba(6,182,212,1)', borderRadius: '4px' }}>
                    <motion.div animate={{ scaleX: [0, 1, 0], transformOrigin: 'left' }} transition={{ duration: 1, repeat: Infinity }} style={{ width: '100%', height: '3px', background: '#00ffff', marginTop: '6px', boxShadow: '0 0 10px #00ffff' }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Lens Exploder (Flies RIGHT and FORWARD while rotating) */}
              <motion.div animate={{ x: [0, 0, 100, 100, 0, 0], z: [0, 0, 200, 200, 0, 0], rotateY: [0, 0, -45, -45, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ 
                  position: 'absolute', right: '20px', bottom: '15px', width: '180px', height: '80px', 
                  border: '2px solid rgba(6,182,212,0.5)', borderRadius: '10px 10px 40px 40px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%, rgba(6,182,212,0.2) 100%)', 
                  backdropFilter: 'blur(5px)', transformStyle: 'preserve-3d', transform: 'translateZ(25px)',
                  boxShadow: 'inset 0 0 40px rgba(6,182,212,0.3)'
                }}>
                  <motion.div animate={{ left: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)', transform: 'skewX(-20deg)' }} />
                  <motion.div style={{ position: 'absolute', bottom: '15px', right: '35px', width: '40px', height: '40px', borderRadius: '50%', border: '1px dashed rgba(6,182,212,1)' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} style={{ width: '100%', height: '100%', borderTop: '4px solid #00ffff', borderRadius: '50%', boxShadow: '0 0 10px #00ffff' }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* LEFT TEMPLE (Massive explosion backwards and outwards) */}
              <motion.div animate={{ x: [0, 0, -250, -250, 0, 0], z: [0, 0, -150, -150, 0, 0], rotateY: [0, 0, -45, -45, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ 
                  position: 'absolute', left: '-5px', top: '15px', width: '280px', height: '40px', 
                  background: 'linear-gradient(90deg, #94a3b8, #cbd5e1)', transformOrigin: 'left center', transform: 'rotateY(-85deg) translateZ(-5px)', 
                  borderRadius: '8px', border: '2px solid #64748b',
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2), -10px 0 30px rgba(6,182,212,0.6)',
                  display: 'flex', alignItems: 'center'
                }}>
                  <div style={{ width: '20px', height: '32px', background: 'linear-gradient(to right, #475569, #334155)', borderRadius: '4px', border: '1px solid #1e293b', marginLeft: '5px' }} />
                  <div style={{ marginLeft: '10px', width: '160px', height: '28px', background: '#0f172a', border: '1px solid #06b6d4', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '15px', boxShadow: 'inset 0 0 20px rgba(6,182,212,0.5)' }}>
                    {/* Hyper-speed strobe LED during bullet time */}
                    <motion.div animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 0.1, repeat: Infinity }} style={{ width: '100px', height: '6px', background: '#ffffff', boxShadow: '0 0 25px #00ffff, 0 0 50px #00ffff', borderRadius: '3px' }} />
                  </div>
                  <div style={{ position: 'absolute', right: '-15px', top: '0px', width: '60px', height: '80px', borderTop: '40px solid #94a3b8', borderRight: '40px solid transparent', borderRadius: '0 50px 0 0' }} />
                </div>
              </motion.div>

              {/* RIGHT TEMPLE */}
              <motion.div animate={{ x: [0, 0, 250, 250, 0, 0], z: [0, 0, -150, -150, 0, 0], rotateY: [0, 0, 45, 45, 0, 0] }} transition={explodeTransition} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ 
                  position: 'absolute', right: '-5px', top: '15px', width: '280px', height: '40px', 
                  background: 'linear-gradient(90deg, #94a3b8, #cbd5e1)', transformOrigin: 'right center', transform: 'rotateY(85deg) translateZ(-5px)', 
                  borderRadius: '8px', border: '2px solid #64748b',
                  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2), 10px 0 30px rgba(6,182,212,0.6)',
                  display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'
                }}>
                  <div style={{ width: '20px', height: '32px', background: 'linear-gradient(to right, #475569, #334155)', borderRadius: '4px', border: '1px solid #1e293b', marginRight: '5px' }} />
                  <div style={{ marginRight: '10px', width: '160px', height: '28px', background: '#0f172a', border: '1px solid #06b6d4', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingRight: '15px', boxShadow: 'inset 0 0 20px rgba(6,182,212,0.5)', flexDirection: 'row-reverse' }}>
                    <motion.div animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }} style={{ width: '100px', height: '6px', background: '#ffffff', boxShadow: '0 0 25px #00ffff, 0 0 50px #00ffff', borderRadius: '3px' }} />
                  </div>
                  <div style={{ position: 'absolute', left: '-15px', top: '0px', width: '60px', height: '80px', borderTop: '40px solid #94a3b8', borderLeft: '40px solid transparent', borderRadius: '50px 0 0 0' }} />
                </div>
              </motion.div>

            </motion.div>

            {/* Glowing Cyan Holographic Platform & Energy Beam */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10px', zIndex: 1 }}>
              
              {/* Pulsing vertical beam of blue-white light */}
              <motion.div 
                animate={{ opacity: [0, 0, 1, 1, 0, 0], scaleX: [1, 1, 2, 2, 1, 1] }}
                transition={explodeTransition}
                style={{ 
                  width: '8px', height: '130px', 
                  background: 'linear-gradient(90deg, transparent, #ffffff, transparent)', 
                  boxShadow: '0 0 30px #06b6d4, 0 0 60px #00ffff',
                  filter: 'blur(2px)'
                }} 
              />

              {/* Glowing Cyan Holographic Platform */}
              <div style={{ 
                width: '400px', height: '50px', 
                background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.4) 0%, transparent 70%)', 
                borderRadius: '50%', 
                transform: 'rotateX(75deg)', 
                marginTop: '-30px', 
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* Massive Energy Shockwaves released upon magnetic snap (80-90%) */}
                <motion.div 
                  animate={{ scale: [0, 0, 0, 0, 3, 3], opacity: [0, 0, 0, 0, 1, 0], borderWidth: ['2px', '2px', '2px', '2px', '10px', '2px'] }} 
                  transition={explodeTransition} 
                  style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #ffffff', borderRadius: '50%', boxShadow: '0 0 50px #00ffff' }} 
                />
                <motion.div 
                  animate={{ scale: [0, 0, 0, 0, 4, 4], opacity: [0, 0, 0, 0, 0.5, 0] }} 
                  transition={explodeTransition} 
                  style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #00ffff', borderRadius: '50%', boxShadow: '0 0 30px #06b6d4' }} 
                />

                {/* Soft anchored shadow to ground the floating device */}
                <div style={{ 
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
                  width: '150px', height: '30px', 
                  background: 'rgba(0,0,0,0.7)', 
                  borderRadius: '50%', 
                  filter: 'blur(20px)' 
                }} />
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        
        {/* Centered Professional Text Layout overlapping the background glasses */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', pointerEvents: 'auto', cursor: 'pointer' }}
          onClick={triggerFlash}
          title="Click to trigger premium 3D flash effect!"
        >
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.35rem 0.85rem', 
              background: 'var(--color-primary-light)', 
              color: 'var(--color-primary-hover)',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              STEALTH OPERATIONS
            </span>
          </div>

          {/* ADDED ANTI-GRAVITY FLOATING EFFECT TO THE TEXT */}
          <motion.h1 
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="h1" 
            style={{ marginBottom: '1.5rem', fontWeight: 800, fontSize: '4rem', letterSpacing: '-0.04em', color: 'var(--color-secondary)', lineHeight: 1.15 }}
          >
            Applied Artificial Intelligence. <br/> <span style={{ color: 'var(--color-primary)' }}>Worn.</span>
          </motion.h1>
          
          <motion.p 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="text-lead" 
            style={{ marginBottom: '3rem', color: 'var(--color-secondary)', fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.6, margin: '0 auto 3rem' }}
          >
            Glass Data is building the intelligence layers for a world where compute lives on the body. Proprietary datasets, next-generation models, and deep vertical expertise.
          </motion.p>

          <motion.div 
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            <a href="#about" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>Explore Platform</a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', background: 'white', border: '1px solid #e2e8f0', color: 'var(--color-secondary)' }}>Request Access</a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
