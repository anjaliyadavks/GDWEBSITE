import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-primary-light)',
          opacity: 0.3,
          zIndex: -1
        }}
      />
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-2xl)', 
            padding: '4rem 2rem', 
            textAlign: 'center',
            boxShadow: 'var(--shadow-xl)',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Ready to unlock your data?</h2>
          <p className="text-lead" style={{ marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Join hundreds of enterprise companies already using GlassData to drive their business intelligence forward.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Start your free trial
            </a>
            <a href="#" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Talk to Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
