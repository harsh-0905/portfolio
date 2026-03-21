import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 10, label: 'Projects Built', suffix: '+' },
  { value: 15, label: 'Technologies Used', suffix: '+' },
  { value: 8, label: 'REST APIs Developed', suffix: '+' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12">
          About Me
        </h2>
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <p className="text-lg text-slate-300 leading-relaxed">
           I'm Harsh Yadav, an AI-focused Full Stack Developer passionate about building scalable web applications and intelligent digital solutions. I work with technologies like React, Node.js, Express, and MongoDB, while integrating AI-powered features to create modern, efficient, and user-friendly applications.
</p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center border border-purple-500/20"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                >
                  {stat.value}{stat.suffix}
                </motion.span>
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
