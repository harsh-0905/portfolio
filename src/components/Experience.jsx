// Experience.jsx — Clean timeline like reference portfolio

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  { icon: '🚀', text: 'Built multiple backend projects with Node.js and FastAPI',          color: '#06b6d4' },
  { icon: '🏛️', text: 'Attended IoT workshop at IIT Delhi',                               color: '#a855f7' },
  { icon: '🏆', text: 'Winner of Inter-Department Badminton Competition',                  color: '#f59e0b' },
  { icon: '👨‍🏫', text: 'Led technical workshops for 100+ students',                       color: '#22c55e' },
  { icon: '🧠', text: 'Strong problem solving skills in Data Structures and Algorithms',   color: '#3b82f6' },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            — My Journey —
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0,
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Experience & Achievements
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line — desktop only via media query workaround using a wrapper */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, rgba(168,85,247,0.7), rgba(59,130,246,0.7), rgba(6,182,212,0.7))',
          }}
            className="hidden md:block"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Desktop layout */}
                  <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center' }}>
                    {/* Left */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '24px' }}>
                      {isLeft && (
                        <div style={{
                          maxWidth: '280px', width: '100%',
                          padding: '18px 20px', borderRadius: '14px', textAlign: 'right',
                          background: 'rgba(15,23,42,0.82)',
                          border: `1px solid ${item.color}30`,
                          backdropFilter: 'blur(12px)',
                          boxShadow: `0 4px 20px ${item.color}12`,
                        }}>
                          <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: 1.65 }}>{item.text}</p>
                        </div>
                      )}
                    </div>
                    {/* Dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '18px', flexShrink: 0,
                        background: 'rgba(8,12,28,0.98)',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 16px ${item.color}55`,
                      }}>
                        {item.icon}
                      </div>
                    </div>
                    {/* Right */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '24px' }}>
                      {!isLeft && (
                        <div style={{
                          maxWidth: '280px', width: '100%',
                          padding: '18px 20px', borderRadius: '14px', textAlign: 'left',
                          background: 'rgba(15,23,42,0.82)',
                          border: `1px solid ${item.color}30`,
                          backdropFilter: 'blur(12px)',
                          boxShadow: `0 4px 20px ${item.color}12`,
                        }}>
                          <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: 1.65 }}>{item.text}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex md:hidden" style={{ alignItems: 'flex-start', gap: '14px', paddingLeft: '8px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                      background: 'rgba(8,12,28,0.98)', border: `2px solid ${item.color}`,
                      boxShadow: `0 0 12px ${item.color}50`, marginTop: '2px',
                    }}>
                      {item.icon}
                    </div>
                    <div style={{
                      flex: 1, padding: '14px 16px', borderRadius: '12px',
                      background: 'rgba(15,23,42,0.82)',
                      border: `1px solid ${item.color}28`,
                      backdropFilter: 'blur(12px)',
                    }}>
                      <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
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