import React from 'react';
import { motion } from 'framer-motion';

const Operate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const domains = [
    {
      title: 'Ecommerce Intelligence',
      desc: 'Hyper-personalized decision engines. Real-time demand intelligence. AI that converts intent into revenue before the moment passes.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Robotics & Automation',
      desc: 'Perception models that give machines intuition. Autonomous systems that operate in ambiguity — and still win.',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Medical Intelligence',
      desc: 'From diagnostic imaging to predictive care pathways — AI that augments the physician and accelerates outcomes.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section bg-bg-alt" id="operate">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>
            Where We <span style={{ color: 'var(--color-primary)' }}>Operate</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-light)' }}>
            Glass Data is quietly reshaping three high-stakes domains where AI is just beginning its ascent.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}
        >
          {domains.map((domain, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card" style={{ padding: 0, overflow: 'hidden', background: '#ffffff' }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img src={domain.img} alt={domain.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-secondary)' }}>{domain.title}</h4>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6, fontSize: '1rem' }}>{domain.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Operate;
