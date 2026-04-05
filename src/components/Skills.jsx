// Skills.jsx — Mobile friendly, proper spacing

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    color: '#06b6d4',
    skills: ['Java', 'JavaScript', 'Python', 'C++'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#a855f7',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#3b82f6',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'MVC Architecture'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#22c55e',
    skills: ['MongoDB', 'MySQL', 'MongoDB Atlas'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Maven'],
  },
  {
    category: 'AI / NLP',
    icon: '🧠',
    color: '#ec4899',
    skills: ['spaCy', 'NLP', 'TF-IDF', 'scikit-learn'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-purple-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
            — What I Work With —
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {skillCategories.map(({ category, icon, color, skills }, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{
                background: 'rgba(15,23,42,0.75)',
                border: `1px solid ${color}25`,
                backdropFilter: 'blur(14px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}35` }}
                >
                  {icon}
                </div>
                <h3 className="font-semibold text-base" style={{ color }}>
                  {category}
                </h3>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }}
              />

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}28`,
                      color: '#94a3b8',
                    }}
                  >
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