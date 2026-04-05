// Contact.jsx — Mobile friendly, proper spacing

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/email';

const INFO_CARDS = [
  { icon: '📞', label: 'Phone',    value: '+91 8448610430',        href: 'tel:+918448610430',               color: '#06b6d4' },
  { icon: '✉️', label: 'Email',    value: 'harshyad95@gmail.com',  href: 'mailto:harshyad95@gmail.com',     color: '#a855f7' },
  { icon: '📍', label: 'Location', value: 'Ghaziabad, India',      href: null,                              color: '#f59e0b' },
];

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

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-purple-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
            — Let's Talk —
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </motion.div>

        {/* Grid — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-2">
              I'm currently open to internship and full-time opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </p>

            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl p-4 sm:p-5"
                style={{
                  background: 'rgba(15,23,42,0.75)',
                  border: `1px solid ${card.color}28`,
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}35` }}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono tracking-wider uppercase mb-1">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm font-medium transition-colors"
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm font-medium">{card.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              {[
                { label: 'GitHub',   href: 'https://github.com/harsh-0905',                     color: '#94a3b8', icon: '⌥' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshyadav95-dev',      color: '#06b6d4', icon: '◈' },
                { label: 'X',        href: 'https://x.com/harshyad95',                          color: '#a855f7', icon: '✦' },
              ].map(({ label, href, color, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color,
                  }}
                >
                  {icon} {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-5 sm:p-7 flex flex-col gap-5"
            style={{
              background: 'rgba(15,23,42,0.75)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            }}
          >
            {[
              { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name'      },
              { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={formData[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-600 outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(168,85,247,0.25)',
                    transition: 'border 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.border = '1px solid rgba(6,182,212,0.6)')}
                  onBlur={(e)  => (e.target.style.border = '1px solid rgba(168,85,247,0.25)')}
                />
              </div>
            ))}

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-600 outline-none resize-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  transition: 'border 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.border = '1px solid rgba(6,182,212,0.6)')}
                onBlur={(e)  => (e.target.style.border = '1px solid rgba(168,85,247,0.25)')}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                boxShadow: '0 0 16px rgba(124,58,237,0.3)',
              }}
            >
              {status === 'sending' ? '⏳ Sending...' : status === 'success' ? '✅ Sent!' : 'Send Message →'}
            </motion.button>

            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center font-mono">
                Thanks! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center font-mono">
                Something went wrong. Email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}