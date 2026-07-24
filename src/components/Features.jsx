import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Cloud } from 'lucide-react';

const featureData = [
  {
    icon: <Zap size={24} />,
    title: "Real-time Processing",
    description: "Process millions of data points with sub-second latency for immediate insights."
  },
  {
    icon: <Shield size={24} />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Advanced Visualizations",
    description: "Interactive dashboards that adapt to your specific business metrics."
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Native",
    description: "Seamlessly integrates with AWS, GCP, and Azure data warehouses."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Features = () => {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Built for scale. Designed for humans.</h2>
          <p className="text-lead">Everything you need to build a data-driven culture across your entire organization.</p>
        </div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {featureData.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: 'var(--radius-md)', 
                background: 'var(--color-primary-light)', 
                color: 'var(--color-primary-hover)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
