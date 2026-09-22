import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowUp, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL || 'https://ks3lrnuyh76n7z2jcbsx2wcjpe0fqidf.lambda-url.ap-south-1.on.aws/';

    if (apiUrl) {
      setStatus({ loading: true, success: false, error: null });
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const resData = await response.json();
        if (response.ok && (resData.status === 'success' || resData.message_id)) {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
        } else {
          throw new Error(resData.message || 'Submission failed. Please try again.');
        }
      } catch (err) {
        setStatus({ loading: false, success: false, error: err.message });
      }
    } else {
      const subject = encodeURIComponent(`Inquiry from ${formData.firstName} ${formData.lastName} (${formData.company})`);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:hello@glassdata.co?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="section" id="contact" style={{
      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      background: 'var(--section-glow)',
      position: 'relative',
      transition: 'background 0.3s ease'
    }}>
      <div className="container">

        {/* Tag from Slide 5 */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="tag-pill">
            Contact
          </span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#0f172a' }}>
            Enter the <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '650px', margin: '0 auto', color: '#475569' }}>
            Glass Data is currently in stealth. Strategic partnerships, enterprise pilots, and investor discussions are considered on a selective basis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'flex-start', marginTop: '3.5rem' }}>

          {/* Left Column: Direct Inquiries & Headquarters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: '#0f172a' }}>Direct Inquiries</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--card-highlight-bg)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0, border: '1px solid var(--card-highlight-border)' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0f172a' }}>Email</h4>
                    <a href="mailto:info@glassdata.ai" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>info@glassdata.ai</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--card-highlight-bg)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0, border: '1px solid var(--card-highlight-border)' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0f172a' }}>Phone</h4>
                    <a href="tel:+919110514969" style={{ color: '#334155', textDecoration: 'none' }}>+91 9110514969</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--card-highlight-bg)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0, border: '1px solid var(--card-highlight-border)' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0f172a' }}>Global Presence</h4>
                    <p style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                      Silicon Valley, USA & Hyderabad, India
                    </p>
                    <p style={{ color: '#64748b', lineHeight: 1.5, fontSize: '0.88rem' }}>
                      Glass Data Private Limited<br/>
                      Kukatpally Housing Board Colony, K P H B Phase 6,<br/>
                      Hyderabad, Telangana 500085
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: '#ecfdf5', color: '#059669', borderRadius: '12px', flexShrink: 0, border: '1px solid #a7f3d0' }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0f172a' }}>Careers</h4>
                    <a href="https://careers.glassdata.ai" target="_blank" rel="noreferrer" style={{ color: '#059669', textDecoration: 'none', fontWeight: 600 }}>careers.glassdata.ai →</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Privacy Alert */}
            <div style={{
              background: 'var(--color-bg-alt)',
              borderLeft: '4px solid var(--color-primary)',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderLeftWidth: '4px'
            }}>
              <p style={{ fontWeight: 600, color: '#0f172a' }}>Strict Privacy Policy</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.25rem' }}>We do not share your information. Ever. Full stop.</p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card" style={{ padding: '2.5rem' }} onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: '#0f172a' }}>Request Access</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#475569' }}>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#475569' }}>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="form-input" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#475569' }}>Work Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" placeholder="john@company.com" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#475569' }}>Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="form-input" placeholder="Acme Corp" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#475569' }}>How can we help?</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required className="form-input" rows="4" placeholder="Briefly describe your use case or partnership interest..." style={{ resize: 'vertical' }}></textarea>
                </div>

                {status.success && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: '#ecfdf5', color: '#059669', border: '1px solid #10b981', fontSize: '0.9rem', fontWeight: 500 }}>
                    ✓ Inquiry submitted successfully! Our team will get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: '#fef2f2', color: '#dc2626', border: '1px solid #ef4444', fontSize: '0.9rem', fontWeight: 500 }}>
                    ✕ {status.error}
                  </div>
                )}

                <button type="submit" disabled={status.loading} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', opacity: status.loading ? 0.7 : 1 }}>
                  {status.loading ? 'Submitting...' : <>Submit Inquiry <Send size={18} /></>}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Footer info */}
        <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)', marginTop: '5rem', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            Glass Data © {new Date().getFullYear()}. All rights reserved. Operating in stealth mode.
          </p>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem', padding: '0.45rem 1.25rem' }}
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
