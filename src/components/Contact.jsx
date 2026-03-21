import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/email';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
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
    <section id="contact" className="py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6 flex items-center gap-4">
              <span className="text-4xl">📞</span>
              <div>
                <p className="text-slate-500 text-sm">Phone</p>
                <a href="tel:+918448610430" className="text-cyan-400 hover:text-cyan-300">
                  +91 8448610430
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6 flex items-center gap-4">
              <span className="text-4xl">✉️</span>
              <div>
                <p className="text-slate-500 text-sm">Email</p>
                <a href="mailto:harshyad95@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                  harshyad95@gmail.com
                </a>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass-card rounded-xl p-6 flex items-center gap-4"
            >
              <span className="text-4xl">📍</span>
              <div>
                <p className="text-slate-500 text-sm">Location</p>
                <p className="text-slate-300">Ghaziabad, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-white focus:border-cyan-500 focus:outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
              </motion.button>
            </div>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-400 text-center"
              >
                Thanks! Your message has been sent.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-400 text-center">
                Something went wrong. Please try again or email directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
