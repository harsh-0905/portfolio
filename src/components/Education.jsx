// Education.jsx — Clean timeline cards like reference portfolio

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'JSS Academy of Technical Education, Noida',
    period: '2024 – 2026',
    status: 'Pursuing',
    icon: '🎓',
    color: '#06b6d4',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Sunderdeep College of Management and Technology, Ghaziabad',
    period: '2021 – 2024',
    status: 'Completed',
    icon: '📘',
    color: '#a855f7',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            — Academic Background —
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0,
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Center line */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, rgba(168,85,247,0.8), rgba(6,182,212,0.8))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Desktop */}
                  <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center' }}>
                    {/* Left cell */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '28px' }}>
                      {isLeft && <EduCard edu={edu} align="right" />}
                    </div>
                    {/* Dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', zIndex: 10, position: 'relative' }}>
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '20px', flexShrink: 0,
                        background: 'rgba(8,12,28,0.98)',
                        border: `2px solid ${edu.color}`,
                        boxShadow: `0 0 18px ${edu.color}55`,
                      }}>
                        {edu.icon}
                      </div>
                    </div>
                    {/* Right cell */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '28px' }}>
                      {!isLeft && <EduCard edu={edu} align="left" />}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="block md:hidden">
                    <EduCard edu={edu} align="left" mobile />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EduCard({ edu, align, mobile }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: mobile ? '100%' : '320px',
      padding: '22px',
      borderRadius: '16px',
      background: 'rgba(15,23,42,0.82)',
      border: `1px solid ${edu.color}28`,
      backdropFilter: 'blur(14px)',
      boxShadow: `0 4px 24px ${edu.color}12`,
      textAlign: mobile ? 'left' : align,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', borderRadius: '50%',
        background: `radial-gradient(circle, ${edu.color}18 0%, transparent 70%)`,
        filter: 'blur(16px)', transform: 'translate(30%, -30%)', pointerEvents: 'none',
      }}/>

      {/* Status + short on same row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: align === 'right' && !mobile ? 'flex-end' : 'flex-start', gap: '8px', marginBottom: '12px' }}>
        <span style={{
          padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontFamily: 'monospace',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          background: `${edu.color}15`, border: `1px solid ${edu.color}30`, color: edu.color,
        }}>
          {edu.short}
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontFamily: 'monospace',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          background: edu.status === 'Pursuing' ? 'rgba(6,182,212,0.1)' : 'rgba(34,197,94,0.1)',
          border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(6,182,212,0.35)' : 'rgba(34,197,94,0.35)'}`,
          color: edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e',
            boxShadow: `0 0 4px ${edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e'}`,
          }}/>
          {edu.status}
        </span>
      </div>

      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.3 }}>
        {edu.degree}
      </h3>
      <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: edu.color, lineHeight: 1.5 }}>
        {edu.institution}
      </p>
      <div style={{ height: '1px', background: `linear-gradient(90deg, ${align === 'right' && !mobile ? 'transparent, ' : ''}${edu.color}35${align === 'right' && !mobile ? '' : ', transparent'})`, marginBottom: '12px' }}/>
      <p style={{ margin: 0, fontSize: '13px', color: '#475569', fontFamily: 'monospace' }}>📅 {edu.period}</p>
    </div>
  );
}