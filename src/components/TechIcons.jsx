import { motion } from 'framer-motion';

const techIcons = [
  { icon: '⚛️', name: 'React',    delay: 0   },
  { icon: '🔷', name: 'Node',     delay: 0.2 },
  { icon: '🐍', name: 'Python',   delay: 0.4 },
  { icon: '🍃', name: 'MongoDB',  delay: 0.6 },
  { icon: '⚡', name: 'FastAPI',  delay: 0.8 },
  { icon: '📦', name: 'NPM',      delay: 1.0 },
  { icon: '🎨', name: 'Tailwind', delay: 1.2 },
  { icon: '🔐', name: 'JWT',      delay: 1.4 },
];

export default function TechIcons({ desktopOnly = false }) {
  return (
    // Fixed vertical sidebar — xl screens only, always
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col gap-3">
      {techIcons.map((tech) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: tech.delay + 1, duration: 0.5 }}
          whileHover={{ scale: 1.2, x: -5 }}
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl cursor-default"
          style={{
            background: 'rgba(15,23,42,0.85)',
            border: '1px solid rgba(6,182,212,0.18)',
            backdropFilter: 'blur(10px)',
          }}
          title={tech.name}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
}