import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="section bg-bg-alt" id="leadership">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ 
              display: 'inline-block', 
              padding: '0.25rem 0.75rem', 
              background: 'var(--color-primary-light)', 
              color: 'var(--color-primary-hover)',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              LEADERSHIP
            </div>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
              Built by Those Who Shipped at Scale
            </h2>
            <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
              Glass Data's founders are not theorists. They are operators — seasoned executives who scaled AI and data products at some of the world's most consequential technology companies.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Amazon</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Personalization & Supply Chain AI at planetary scale.</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Google</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Search intelligence, ML infrastructure, and multimodal research.</p>
              </div>
              <div className="glass-card" style={{ gridColumn: '1 / -1', padding: '1.5rem', background: '#ffffff' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Silicon Valley</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Decades of 0→1 product execution across AI-native ventures.</p>
              </div>
            </div>

            <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
              They've seen what works at scale. Now they're building what's next — in stealth.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', minHeight: '450px', justifyContent: 'center' }}>
            
            {/* Pure CSS Robotics / Drone Perception Animation */}
            <div className="glass-card" style={{ 
              height: '350px', 
              background: '#0f172a', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
            }}>
              {/* Grid Background */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }} />

              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Outer spinning radar ring */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} 
                  style={{ 
                    border: '2px dashed rgba(16, 185, 129, 0.5)', 
                    borderRadius: '50%', 
                    width: '200px', 
                    height: '200px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.1)'
                  }}
                >
                  {/* Inner spinning tech ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    style={{
                      borderTop: '3px solid #10b981',
                      borderBottom: '3px solid #10b981',
                      borderLeft: '3px solid transparent',
                      borderRight: '3px solid transparent',
                      borderRadius: '50%',
                      width: '140px',
                      height: '140px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {/* The Drone Core / Eye */}
                    <div style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'radial-gradient(circle at 30% 30%, #334155, #0f172a)', 
                      borderRadius: '50%', 
                      border: '4px solid #1e293b', 
                      position: 'relative', 
                      overflow: 'hidden',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                    }}>
                      {/* Glowing Scanning Retina */}
                      <motion.div 
                        animate={{ x: [-15, 15, 15, -15, -15], y: [-15, -15, 15, 15, -15] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
                        style={{ 
                          position: 'absolute', 
                          top: '50%', left: '50%', 
                          marginTop: '-15px', marginLeft: '-15px',
                          width: '30px', 
                          height: '30px', 
                          background: '#10b981', 
                          borderRadius: '50%', 
                          boxShadow: '0 0 25px #10b981, inset 0 0 5px #fff' 
                        }} 
                      />
                      {/* Scanning Laser Line */}
                      <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        style={{
                          position: 'absolute',
                          left: 0, right: 0,
                          height: '2px',
                          background: 'rgba(16, 185, 129, 0.8)',
                          boxShadow: '0 0 10px #10b981'
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <div style={{ position: 'absolute', bottom: '1.5rem', textAlign: 'center', width: '100%' }}>
                <div style={{ color: '#10b981', fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Crosshair size={16} />
                  AUTONOMOUS PERCEPTION CORE
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
