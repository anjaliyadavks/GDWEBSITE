import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatItem = ({ endValue, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {endValue}
          </motion.span>
        ) : "0"}
        {suffix}
      </div>
      <div style={{ color: 'var(--color-text-light)', fontWeight: 500, fontSize: '1.125rem' }}>{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="section" style={{ background: 'var(--color-secondary)', color: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          padding: '2rem 0'
        }}>
          <StatItem endValue="99.9" suffix="%" label="Uptime SLA" />
          <StatItem endValue="50" suffix="M+" label="Queries Processed" />
          <StatItem endValue="10" suffix="k+" label="Enterprise Clients" />
          <StatItem endValue="24" suffix="/7" label="Global Support" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
