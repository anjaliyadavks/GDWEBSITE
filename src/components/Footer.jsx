import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg)', borderTop: '1px solid #e2e8f0', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div>
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <Activity color="#10b981" />
              Glass<span>Data</span>
            </div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Applied Artificial Intelligence.<br/> Built for what's next.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Features</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Integrations</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Pricing</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>About Us</a></li>
              <li><a href="https://careers.glassdata.ai" className="nav-link" style={{ fontSize: '0.875rem' }}>Careers</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Blog</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Privacy Policy</a></li>
              <li><a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Terms of Service</a></li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} GlassData. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
