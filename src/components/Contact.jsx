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
    <section className="section" id="contact" style={{ borderTop: '1px solid rgba(6,182,212,0.15)', position: 'relative' }}>
      <div className="container">

        {/* Tag from Slide 5 */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="tag-pill" style={{ color: '#5af493', borderColor: 'rgba(90, 244, 147, 0.4)', background: 'rgba(90, 244, 147, 0.08)' }}>
            Contact
          </span>
          <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Enter the <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: '650px', margin: '0 auto' }}>
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
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: '#ffffff' }}>Direct Inquiries</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(6,182,212,0.15)', color: '#06b6d4', borderRadius: '12px', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#ffffff' }}>Email</h4>
                    <a href="mailto:hello@glassdata.co" style={{ color: '#38bdf8', textDecoration: 'none' }}>hello@glassdata.co</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(6,182,212,0.15)', color: '#06b6d4', borderRadius: '12px', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#ffffff' }}>Phone</h4>
                    <a href="tel:+919110514969" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 9110514969</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(6,182,212,0.15)', color: '#06b6d4', borderRadius: '12px', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#ffffff' }}>Headquarters</h4>
                    <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      Glass Data Private Limited<br/>
                      Kukatpally Housing Board Colony,<br/>
                      K P H B Phase 6, Kukatpally,<br/>
                      Hyderabad, Telangana 500085
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(90, 244, 147, 0.15)', color: '#5af493', borderRadius: '12px', flexShrink: 0 }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#ffffff' }}>Careers</h4>
                    <a href="https://careers.glassdata.ai" target="_blank" rel="noreferrer" style={{ color: '#5af493', textDecoration: 'none', fontWeight: 600 }}>careers.glassdata.ai →</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Privacy Alert */}
            <div style={{
              background: 'rgba(3, 20, 30, 0.8)',
              borderLeft: '4px solid #06b6d4',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderLeftWidth: '4px'
            }}>
              <p style={{ fontWeight: 600, color: '#ffffff' }}>Strict Privacy Policy</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>We do not share your information. Ever. Full stop.</p>
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
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', color: '#ffffff' }}>Request Access</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#cbd5e1' }}>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#cbd5e1' }}>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="form-input" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#cbd5e1' }}>Work Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" placeholder="john@company.com" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#cbd5e1' }}>Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="form-input" placeholder="Acme Corp" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#cbd5e1' }}>How can we help?</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required className="form-input" rows="4" placeholder="Briefly describe your use case or partnership interest..." style={{ resize: 'vertical' }}></textarea>
                </div>

                {status.success && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', color: '#5af493', border: '1px solid #10b981', fontSize: '0.9rem', fontWeight: 500 }}>
                    ✓ Inquiry submitted successfully! Our team will get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid #ef4444', fontSize: '0.9rem', fontWeight: 500 }}>
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
        <div style={{ borderTop: '1px solid rgba(6,182,212,0.15)', marginTop: '5rem', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
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
