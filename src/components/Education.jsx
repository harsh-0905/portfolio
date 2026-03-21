import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'JSS Academy of Technical Education, Noida',
    period: '2024 – 2026',
    
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Sunderdeep College of Management and Technology, Ghaziabad',
    period: '2021 – 2024',
    
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              whileHover={{ x: 10 }}
              className="glass-card rounded-2xl p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-purple-400 mb-1">{edu.institution}</p>
              <p className="text-slate-500 text-sm">{edu.period}</p>
              <p className="text-cyan-400 mt-2 font-mono">{edu.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
