// Contact.jsx — Clean reference style layout

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/email';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { name: formData.name, email: formData.email, message: formData.message },
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(168,85,247,0.25)',
    color: '#e2e8f0',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border 0.2s ease',
  };

  return (
    <section id="contact" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            — Let's Talk —
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: '0 0 14px 0',
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Get In Touch
          </h2>
          <p style={{ margin: 0, fontSize: '15px', color: '#64748b', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            I'm open to internship and full-time opportunities. Have a question or want to work together? My inbox is always open.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {[
              { icon: '📞', label: 'Phone',    value: '+91 8448610430',       href: 'tel:+918448610430',               color: '#06b6d4' },
              { icon: '✉️', label: 'Email',    value: 'harshyad95@gmail.com', href: 'mailto:harshyad95@gmail.com',     color: '#a855f7' },
              { icon: '📍', label: 'Location', value: 'Ghaziabad, India',     href: null,                              color: '#f59e0b' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px', borderRadius: '14px',
                  background: 'rgba(15,23,42,0.78)',
                  border: `1px solid ${card.color}25`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px',
                  background: `${card.color}14`, border: `1px solid ${card.color}30`,
                }}>
                  {card.icon}
                </div>
                <div>
                  <p style={{ margin: '0 0 3px 0', fontSize: '11px', color: '#475569', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{card.label}</p>
                  {card.href ? (
                    <a href={card.href} style={{ color: card.color, fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>{card.value}</a>
                  ) : (
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>{card.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/harsh-0905',                color: '#94a3b8' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshyadav95-dev', color: '#06b6d4' },
                { label: 'X',        href: 'https://x.com/harshyad95',                     color: '#a855f7' },
              ].map(({ label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  style={{
                    padding: '8px 18px', borderRadius: '10px', fontSize: '13px', fontWeight: 500,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    color, textDecoration: 'none',
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
            onSubmit={handleSubmit}
            style={{
              display: 'flex', flexDirection: 'column', gap: '18px',
              padding: '28px', borderRadius: '18px',
              background: 'rgba(15,23,42,0.78)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.28)',
            }}
          >
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Your Name
              </label>
              <input
                type="text" required value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="What's your name?"
                style={inputStyle}
                onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                onBlur={e => e.target.style.border = '1px solid rgba(168,85,247,0.25)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Your Email
              </label>
              <input
                type="email" required value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="What's your email?"
                style={inputStyle}
                onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                onBlur={e => e.target.style.border = '1px solid rgba(168,85,247,0.25)'}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                Your Message
              </label>
              <textarea
                required rows={5} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="What do you want to say?"
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.border = '1px solid rgba(6,182,212,0.6)'}
                onBlur={e => e.target.style.border = '1px solid rgba(168,85,247,0.25)'}
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(124,58,237,0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '14px', borderRadius: '12px', border: 'none',
                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                color: '#fff', fontSize: '14px', fontWeight: 600,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                boxShadow: '0 0 16px rgba(124,58,237,0.3)',
              }}
            >
              {status === 'sending' ? '⏳ Sending...' : status === 'success' ? '✅ Message Sent!' : 'Send Message →'}
            </motion.button>

            {status === 'error' && (
              <p style={{ margin: 0, color: '#f87171', fontSize: '13px', textAlign: 'center' }}>
                Something went wrong. Email me directly at harshyad95@gmail.com
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}