// Experience.jsx — Mobile friendly, clean timeline

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  { icon: '🚀', text: 'Built multiple backend projects with Node.js and FastAPI',           color: '#06b6d4' },
  { icon: '🏛️', text: 'Attended IoT workshop at IIT Delhi',                                color: '#a855f7' },
  { icon: '🏆', text: 'Winner of Inter-Department Badminton Competition',                   color: '#f59e0b' },
  { icon: '👨‍🏫', text: 'Led technical workshops for 100+ students',                        color: '#22c55e' },
  { icon: '🧠', text: 'Strong problem solving skills in Data Structures and Algorithms',    color: '#3b82f6' },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="experience"
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
            — My Journey —
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
        </motion.div>

        {/* ── DESKTOP Timeline ── */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, rgba(168,85,247,0.8), rgba(59,130,246,0.8), rgba(6,182,212,0.8))',
            }}
          />

          <div className="flex flex-col gap-10">
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 64px 1fr',
                    alignItems: 'center',
                  }}
                >
                  {/* Left cell */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '28px' }}>
                    {isLeft && (
                      <motion.div
                        whileHover={{ scale: 1.02, x: -4 }}
                        style={{
                          background: 'rgba(15,23,42,0.82)',
                          border: `1px solid ${item.color}35`,
                          backdropFilter: 'blur(14px)',
                          boxShadow: `0 4px 24px ${item.color}15`,
                          borderRadius: '16px',
                          padding: '18px 20px',
                          width: '100%',
                          maxWidth: '260px',
                          textAlign: 'right',
                        }}
                      >
                        <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.65' }}>
                          {item.text}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        background: 'rgba(8,12,28,0.98)',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 18px ${item.color}55`,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Right cell */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '28px' }}>
                    {!isLeft && (
                      <motion.div
                        whileHover={{ scale: 1.02, x: 4 }}
                        style={{
                          background: 'rgba(15,23,42,0.82)',
                          border: `1px solid ${item.color}35`,
                          backdropFilter: 'blur(14px)',
                          boxShadow: `0 4px 24px ${item.color}15`,
                          borderRadius: '16px',
                          padding: '18px 20px',
                          width: '100%',
                          maxWidth: '260px',
                          textAlign: 'left',
                        }}
                      >
                        <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.65' }}>
                          {item.text}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE Timeline ── */}
        <div className="flex flex-col gap-5 md:hidden relative">

          {/* Left vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: '20px',
              background: 'linear-gradient(to bottom, rgba(168,85,247,0.7), rgba(6,182,212,0.7))',
            }}
          />

          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 pl-2"
            >
              {/* Dot */}
              <div
                className="flex-shrink-0 z-10 mt-1"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  background: 'rgba(8,12,28,0.98)',
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 12px ${item.color}55`,
                }}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-4"
                style={{
                  background: 'rgba(15,23,42,0.80)',
                  border: `1px solid ${item.color}30`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}