import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section bg-dot-pattern" id="about">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}
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
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            About Glass Data
          </div>
          
          <h2 className="h2" style={{ marginBottom: '1.5rem', fontWeight: 700 }}>
            Intelligence, Engineered from the Ground Up
          </h2>
          
          <p className="text-lead" style={{ marginBottom: '1.5rem' }}>
            Glass Data is a stealth-stage Applied AI company operating at the intersection of rare data, advanced algorithms, and full-stack deployment.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}
        >
          {[
            { title: 'Proprietary Data', desc: 'Highly sought-after datasets unavailable on the open market.', icon: '01' },
            { title: 'Advanced Models', desc: 'Custom algorithms engineered for real-world vertical deployment.', icon: '02' },
            { title: 'Full-Stack AI', desc: 'End-to-end intelligence — from raw signal to decisive action.', icon: '03' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderTop: '4px solid var(--color-primary)',
                background: '#ffffff'
              }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-bg-alt)', lineHeight: 1, marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{item.title}</h4>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Maps Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', padding: 0 }}
        >
          <div style={{ flex: '1 1 400px', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-secondary)' }}>Global Headquarters</h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Operating from the heart of Hyderabad, our team works at the epicenter of enterprise artificial intelligence and deployment.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-secondary)', fontWeight: 500 }}>
              <p>Glass Data Private Limited</p>
              <p>Kukatpally Housing Board Colony, K P H B Phase 6</p>
              <p>Kukatpally, Hyderabad, Telangana 500085</p>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', minHeight: '400px', position: 'relative' }}>
            {/* Grayscale Google Maps iframe pointing to new address */}
            <iframe 
              src="https://www.google.com/maps?q=Compliance+Group+India,+Kukatpally+Housing+Board+Colony,+Phase+6,+Hyderabad,+Telangana&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
