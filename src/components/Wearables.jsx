import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const Wearables = () => {
  return (
    <section className="section bg-dot-pattern" id="wearables" style={{ borderTop: '1px solid var(--color-card-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <Activity size={16} /> THE EDGE OF PERCEPTION
            </div>
            
            <h2 className="h2" style={{ marginBottom: '2rem', lineHeight: 1.1 }}>
              What You Wear <span style={{ color: 'var(--color-primary)' }}>Will Know You</span>
            </h2>
            
            <p className="text-lead" style={{ marginBottom: '1.5rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
              The next interface isn't a screen. It's ambient. Contextual. Worn.
            </p>
            
            <p style={{ color: 'var(--color-text-light)', fontSize: '1.125rem', lineHeight: 1.7 }}>
              Glass Data is building intelligence layers designed for the world where compute lives on the body — and data flows in real time from lived experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          >
            {/* Biometric Watch */}
            <div className="glass-card" style={{ padding: '1rem', background: '#ffffff' }}>
              <div style={{ height: '120px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop" alt="Biometric Watch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Biometric Watch</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>Continuous signals, quietly collected at the body.</p>
            </div>

            {/* AR Glasses */}
            <div className="glass-card" style={{ padding: '1rem', background: '#ffffff' }}>
              <div style={{ height: '120px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=400&auto=format&fit=crop" alt="AR Glasses" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>AR Glasses</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>Contextual layers that appear exactly when needed.</p>
            </div>

            {/* Ambient Sensor */}
            <div className="glass-card" style={{ padding: '1rem', gridColumn: '1 / -1', background: '#ffffff', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '120px', height: '90px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                <img src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=400&auto=format&fit=crop" alt="Ambient Sensor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '0.25rem' }}>Ambient Sensor</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>Real-time intelligence flowing from lived experience.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Wearables;
