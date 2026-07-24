import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Mic, Type, ActivitySquare } from 'lucide-react';

const features = [
  {
    icon: <Eye size={24} />,
    title: "Vision",
    description: "Scene understanding at a glance. Spatial reasoning in real time."
  },
  {
    icon: <Mic size={24} />,
    title: "Audio",
    description: "Intent extraction from voice. Ambient intelligence that listens."
  },
  {
    icon: <Type size={24} />,
    title: "Language",
    description: "Reasoning across context windows most systems can't hold."
  },
  {
    icon: <ActivitySquare size={24} />,
    title: "Sensor Fusion",
    description: "Synthesizing signal from every channel into one coherent intelligence."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Multimodal = () => {
  return (
    <section className="section" id="multimodal">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.25rem 0.75rem', 
            background: 'var(--color-primary-light)', 
            color: 'var(--color-primary-hover)',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            MULTIMODAL AI
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card"
              whileHover={{ y: -5 }}
              style={{ padding: '2rem' }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '8px', 
                background: 'var(--color-primary-light)', 
                color: 'var(--color-primary)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--color-bg-alt)',
            borderLeft: '4px solid var(--color-primary)',
            padding: '1.5rem 2rem',
            borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
            When vision, language, and sensor data converge — AI stops predicting and starts understanding.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Multimodal;
