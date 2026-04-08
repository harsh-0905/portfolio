// Skills.jsx — Clean uniform grid like reference portfolio

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { category: 'Languages', icon: '💻', color: '#06b6d4', skills: ['Java', 'JavaScript', 'Python', 'C++'] },
  { category: 'Frontend',  icon: '🎨', color: '#a855f7', skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend',   icon: '⚙️', color: '#3b82f6', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'MVC Architecture'] },
  { category: 'Databases', icon: '🗄️', color: '#22c55e', skills: ['MongoDB', 'MySQL', 'MongoDB Atlas'] },
  { category: 'Tools',     icon: '🛠️', color: '#f59e0b', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Maven'] },
  { category: 'AI / NLP',  icon: '🧠', color: '#ec4899', skills: ['spaCy', 'NLP', 'TF-IDF', 'scikit-learn'] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px', margin: '0 0 12px 0' }}>
            — What I Work With —
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0,
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Skills
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {skillCategories.map(({ category, icon, color, skills }, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                borderRadius: '14px',
                padding: '22px',
                background: 'rgba(15,23,42,0.75)',
                border: `1px solid ${color}22`,
                backdropFilter: 'blur(14px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0,
                  background: `${color}15`, border: `1px solid ${color}30`,
                }}>
                  {icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color }}>{category}</h3>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: `linear-gradient(90deg, ${color}35, transparent)`, marginBottom: '14px' }}/>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map(skill => (
                  <span key={skill} style={{
                    padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontFamily: 'monospace',
                    background: `${color}0e`, border: `1px solid ${color}25`, color: '#94a3b8',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}