// About.jsx — Fixed: third stat card no longer cut off on mobile

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '10+', label: 'Projects Built',      icon: '🚀', color: '#06b6d4' },
  { value: '15+', label: 'Technologies Used',   icon: '⚡', color: '#a855f7' },
  { value: '8+',  label: 'REST APIs Developed', icon: '🔗', color: '#22c55e' },
];

const techTags = ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Python', 'JWT', 'spaCy', 'Tailwind'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div
        ref={ref}
        style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{
            color: '#a855f7', fontFamily: 'monospace', fontSize: '12px',
            letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 12px 0',
          }}>
            — Who I Am —
          </p>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800,
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            About Me
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            borderRadius: '20px',
            padding: 'clamp(24px, 5vw, 40px)',
            background: 'rgba(15,23,42,0.78)',
            border: '1px solid rgba(168,85,247,0.2)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            boxSizing: 'border-box',
          }}
        >
          {/* Bio */}
          <p style={{
            margin: '0 0 10px 0', fontSize: 'clamp(14px, 2.5vw, 16px)',
            color: '#cbd5e1', lineHeight: 1.8, textAlign: 'center',
          }}>
            I'm{' '}
            <span style={{ color: '#e2e8f0', fontWeight: 700 }}>Harsh Yadav</span>, an{' '}
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600,
            }}>
              AI-focused Full Stack Developer
            </span>{' '}
            passionate about building scalable web applications and intelligent digital solutions.
          </p>
          <p style={{
            margin: '0 0 32px 0', fontSize: 'clamp(13px, 2vw, 14px)',
            color: '#64748b', lineHeight: 1.8, textAlign: 'center',
          }}>
            I work with{' '}
            <span style={{ color: '#06b6d4' }}>React</span>,{' '}
            <span style={{ color: '#06b6d4' }}>Node.js</span>,{' '}
            <span style={{ color: '#06b6d4' }}>Express</span> &{' '}
            <span style={{ color: '#06b6d4' }}>MongoDB</span>, integrating AI-powered features using{' '}
            <span style={{ color: '#a855f7' }}>FastAPI</span>,{' '}
            <span style={{ color: '#a855f7' }}>spaCy</span> &{' '}
            <span style={{ color: '#a855f7' }}>NLP</span>{' '}
            to create modern, efficient, user-friendly applications.
          </p>

          {/* Divider */}
          <div style={{
            height: '1px', marginBottom: '28px',
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent)',
          }} />

          {/* Stats — responsive: 1 col mobile, 3 col desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '14px',
            marginBottom: '28px',
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  padding: '20px 12px',
                  borderRadius: '14px',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${stat.color}22`,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 800, lineHeight: 1, marginBottom: '8px',
                  background: `linear-gradient(135deg, ${stat.color}, #e2e8f0)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  {stat.value}
                </div>
                <p style={{
                  margin: 0, fontSize: '11px', color: '#64748b', lineHeight: 1.4,
                  fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: '1px', marginBottom: '22px',
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)',
          }} />

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {techTags.map(tech => (
              <span key={tech} style={{
                padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontFamily: 'monospace',
                background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.22)',
                color: '#94a3b8',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}