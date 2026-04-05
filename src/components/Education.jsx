// Education.jsx — Mobile friendly

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
    accent: '#7c3aed',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Sunderdeep College of Management and Technology, Ghaziabad',
    period: '2021 – 2024',
    status: 'Completed',
    icon: '📘',
    color: '#a855f7',
    accent: '#3b82f6',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="education"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-purple-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
            — Academic Background —
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        {/* Cards — stack on mobile, side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl p-5 sm:p-6 overflow-hidden"
              style={{
                background: 'rgba(15,23,42,0.78)',
                border: `1px solid ${edu.color}30`,
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                transition: 'all 0.35s ease',
              }}
            >
              {/* Glow blob */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${edu.color}18 0%, transparent 70%)`,
                  filter: 'blur(18px)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}35` }}
                >
                  {edu.icon}
                </div>

                {/* Status chip */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase"
                  style={{
                    background: edu.status === 'Pursuing' ? 'rgba(6,182,212,0.1)' : 'rgba(34,197,94,0.1)',
                    border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(6,182,212,0.35)' : 'rgba(34,197,94,0.35)'}`,
                    color: edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e',
                      boxShadow: `0 0 4px ${edu.status === 'Pursuing' ? '#06b6d4' : '#22c55e'}`,
                    }}
                  />
                  {edu.status}
                </span>
              </div>

              {/* Degree badge */}
              <span
                className="inline-block text-xs font-mono px-2 py-0.5 rounded-md mb-2"
                style={{
                  background: `${edu.color}18`,
                  color: edu.color,
                  border: `1px solid ${edu.color}30`,
                }}
              >
                {edu.short}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 leading-snug">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-sm mb-3 leading-relaxed" style={{ color: edu.color }}>
                {edu.institution}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-3"
                style={{ background: `linear-gradient(90deg, ${edu.color}40, transparent)` }}
              />

              {/* Period */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-xs">📅</span>
                <p className="text-slate-400 text-sm font-mono">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}