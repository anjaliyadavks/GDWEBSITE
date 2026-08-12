import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

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
      // Fallback: Open pre-filled mailto client if VITE_API_URL is not set
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
    <section className="section bg-dot-pattern" id="contact" style={{ position: 'relative' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Enter the <span style={{ color: 'var(--color-primary)' }}>Conversation</span></h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Glass Data is currently in stealth. Strategic partnerships, enterprise pilots, and investor conversations are considered on a selective basis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>

          {/* Left Side: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ padding: '3rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-secondary)' }}>Direct Inquiries</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Email</h4>
                    <a href="mailto:hello@glassdata.co" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>hello@glassdata.co</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Phone</h4>
                    <a href="tel:+919110514969" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>+91 9110514969</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Headquarters</h4>
                    <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                      Glass Data Private Limited<br/>
                      Kukatpally Housing Board Colony,<br/>
                      K P H B Phase 6, Kukatpally,<br/>
                      Hyderabad, Telangana 500085
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Alert */}
            <div style={{
              background: 'white',
              borderLeft: '4px solid var(--color-primary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <p style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Strict Privacy Policy</p>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>We do not share your information. Ever. Full stop.</p>
            </div>
          </motion.div>

          {/* Right Side: Sleek Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card" style={{ padding: '3rem' }} onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-secondary)' }}>Request Access</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="form-input" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Work Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" placeholder="john@company.com" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="form-input" placeholder="Acme Corp" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>How can we help?</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required className="form-input" rows="4" placeholder="Briefly describe your use case or partnership interest..." style={{ resize: 'vertical' }}></textarea>
                </div>

                {status.success && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: '#d1fae5', color: '#065f46', fontSize: '0.9rem', fontWeight: 500 }}>
                    ✓ Inquiry submitted successfully! Our team will get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div style={{ padding: '1rem', borderRadius: '8px', background: '#fee2e2', color: '#991b1b', fontSize: '0.9rem', fontWeight: 500 }}>
                    ✕ {status.error}
                  </div>
                )}

                <button type="submit" disabled={status.loading} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', opacity: status.loading ? 0.7 : 1 }}>
                  {status.loading ? 'Submitting...' : <>Submit Inquiry <Send size={18} /></>}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Custom Footer inside Contact */}
        <div style={{ borderTop: '1px solid var(--color-card-border)', marginTop: '6rem', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', fontWeight: 500 }}>
            Glass Data © {new Date().getFullYear()}. All rights reserved. Stealth operations.
          </p>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
