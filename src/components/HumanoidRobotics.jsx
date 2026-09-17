import React from 'react';
import { motion } from 'framer-motion';

const HumanoidRobotics = () => {
  return (
    <section className="section" id="robots" style={{
      borderTop: '1px solid rgba(6,182,212,0.15)',
      background: 'linear-gradient(180deg, rgba(8,12,20,0.92) 0%, rgba(22,9,20,0.96) 50%, rgba(8,10,18,0.98) 100%)',
      padding: '5rem 0 6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Full-Width Cinematic Widescreen Container */}
      <div style={{ width: '94%', maxWidth: '1680px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Main Grid: Left/Center Showcase (72%) vs Right Full-Height Robot Portrait (28%) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 0.8fr)', gap: '3rem', alignItems: 'stretch' }}>
          
          {/* Left / Center Content Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
            
            {/* Top Row: Musk & Robot News Collage (Left) + ASIN Platform Architecture (Right) */}
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

            {/* Middle Section: Clean Presentation Headline matching Slide 4 */}
            <div style={{ margin: '0.5rem 0' }}>
              <div className="tag-pill" style={{ color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.4)', background: 'rgba(244, 63, 94, 0.1)', marginBottom: '0.75rem' }}>
                EMBODIED FOUNDATION MODELS
              </div>
              <h2 className="h2" style={{ fontSize: 'clamp(2rem, 3.2vw, 3.25rem)', lineHeight: 1.15, color: '#ffffff' }}>
                We are building <span style={{ color: '#38bdf8' }}>Ai Skills</span> for humanoid robots
              </h2>
            </div>

            {/* Bottom Row: Exact Stepped Cascading Stack from Slide 4 */}
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
                  transition: 'transform 0.35s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.012)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
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
              background: '#000000'
            }}>
              <img
                src="/assets/robot_portrait.jpg"
                alt="Humanoid Cybernetic Android Portrait"
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
                background: 'linear-gradient(to top, rgba(5,2,8,0.95) 0%, rgba(5,2,8,0.7) 60%, transparent 100%)'
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
