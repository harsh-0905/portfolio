import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = {
  Languages: ['Java', 'JavaScript', 'Python', 'C++'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'MVC Architecture'],
  Databases: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'Postman', 'MongoDB Atlas', 'Maven', 'VS Code'],
};

function SkillOrb({ skill, angle, radius, delay }) {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.15 }}
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <span className="px-3 py-1.5 rounded-lg glass border border-purple-500/30 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap block">
        {skill}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const allSkills = Object.entries(skillCategories).flatMap(([cat, skills]) =>
    skills.map((s) => ({ skill: s, category: cat }))
  );

  return (
    <section id="skills" className="min-h-screen py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16 text-center">
          Skills Galaxy
        </h2>

        <div className="relative h-[450px] hidden md:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full"
          >
            {allSkills.map(({ skill }, i) => (
              <SkillOrb
                key={skill}
                skill={skill}
                angle={(i / allSkills.length) * 360}
                radius={180}
                delay={i * 0.03}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-4xl">⚡</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-purple-400 font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-slate-300 hover:border-cyan-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
