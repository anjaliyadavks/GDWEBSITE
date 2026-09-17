import React from 'react';
import { motion } from 'framer-motion';

const HumanoidRobotics = () => {
  return (
    <section className="section" id="robots" style={{ borderTop: '1px solid rgba(6,182,212,0.15)', background: 'linear-gradient(180deg, rgba(20,18,35,0.9) 0%, rgba(30,10,25,0.95) 100%)' }}>
      <div className="container">
        
        {/* Header from Slide 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left', marginBottom: '3.5rem' }}
        >
          <div className="tag-pill" style={{ color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.4)', background: 'rgba(244, 63, 94, 0.1)' }}>
            EMBODIED FOUNDATION MODELS
          </div>
          <h2 className="h2" style={{ maxWidth: '950px', lineHeight: 1.15 }}>
            We are building <span style={{ color: '#fb7185' }}>Ai Skills</span> for humanoid robots
          </h2>
        </motion.div>

        {/* Multi-column Layout matching Slide 4 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Left / Center Content Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Top Grid: Musk News + Humanoid Robot Assembly Collage */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              
              {/* Musk Robots News */}
              <div className="glass-card" style={{ padding: '0.5rem', borderRadius: '1rem', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                <img
                  src="/assets/musk_robots.jpg"
                  alt="Musk: 1 Billion Robots Could Outproduce Humanity"
                  style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', display: 'block' }}
                />
              </div>

              {/* Robot Action Photos Mini-Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <div key={num} className="glass-card" style={{ padding: '2px', borderRadius: '6px', overflow: 'hidden' }}>
                    <img
                      src={`/assets/robot_action_${num}.png`}
                      alt={`Robot training ${num}`}
                      style={{ width: '100%', height: '70px', objectFit: 'cover', borderRadius: '4px', display: 'block' }}
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* ASIN Platform Diagram */}
            <div className="glass-card" style={{ padding: '1rem', borderRadius: '1.25rem', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
              <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>Glass Data - ASIN Platform</h3>
                <span style={{ fontSize: '0.75rem', color: '#f43f5e', fontWeight: 600, background: 'rgba(244, 63, 94, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>6 Core Verticals</span>
              </div>
              <img
                src="/assets/asin_platform.png"
                alt="Glass Data ASIN Platform - Precision Factory, Elder Care, Cooking, Retail, Medical, Security"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', display: 'block' }}
              />
            </div>

            {/* ASIN Skill Libraries - Exact Stepped Cascading Format from Slide 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fb7185', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ASIN Skill Training Libraries
                </h4>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255, 255, 255, 0.06)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  Stepped Multi-Domain Hierarchy
                </span>
              </div>

              <div className="glass-card" style={{
                padding: '0.75rem',
                borderRadius: '1.25rem',
                border: '1px solid rgba(244, 63, 94, 0.35)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 35px rgba(244, 63, 94, 0.15)',
                overflow: 'hidden'
              }}>
                <img
                  src="/assets/asin_skills_cascading_hd.png"
                  alt="Glass Data - ASIN Skill Library, Electronics, and Fruits & Vegetables Stepped Cascading Stack"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '0.85rem',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>

          </div>

          {/* Right Column: Full Cybernetic Android Portrait from Slide 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'sticky', top: '6rem' }}
          >
            <div className="glass-card" style={{
              overflow: 'hidden',
              borderRadius: '1.5rem',
              border: '1px solid rgba(244, 63, 94, 0.35)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 40px rgba(89, 9, 71, 0.4)',
              position: 'relative',
              maxWidth: '460px',
              width: '100%'
            }}>
              <img
                src="/assets/robot_portrait.jpg"
                alt="Humanoid Robot ASIN Portrait"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1.5rem 1.5rem',
                background: 'linear-gradient(to top, rgba(15,2,10,0.95), transparent)'
              }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.25rem' }}>Embodied Humanoid Intelligence</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Full-body kinesthetic policy networks running locally on low-latency neural silicon.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HumanoidRobotics;
