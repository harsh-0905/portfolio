import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  'Built multiple backend projects with Node.js and FastAPI',
  'Attended IoT workshop at IIT Delhi',
  'Winner of Inter-Department Badminton Competition',
  'Led technical workshops for 100+ students',
  'Strong problem solving skills in Data Structures and Algorithms',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16 text-center">
          Experience & Achievements
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 -translate-x-1/2" />
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />
             
              <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, x: i % 2 === 0 ? 5 : -5 }}
                 className="glass-card rounded-xl p-6 border border-purple-500/20 text-center"
                >
                  <p className="text-slate-300">{item}</p>
                </motion.div>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
