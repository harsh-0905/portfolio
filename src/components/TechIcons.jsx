import { motion } from 'framer-motion';

const techIcons = [
  { icon: '⚛️', name: 'React',   delay: 0   },
  { icon: '🔷', name: 'Node',    delay: 0.2 },
  { icon: '🐍', name: 'Python',  delay: 0.4 },
  { icon: '🍃', name: 'MongoDB', delay: 0.6 },
  { icon: '⚡', name: 'FastAPI', delay: 0.8 },
  { icon: '📦', name: 'NPM',     delay: 1.0 },
  { icon: '🎨', name: 'Tailwind',delay: 1.2 },
  { icon: '🔐', name: 'JWT',     delay: 1.4 },
];

export default function TechIcons() {
  return (
    <>
      {/* ── Desktop: fixed vertical sidebar ── */}
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

      {/* ── Mobile & tablet: horizontal scroll strip ── */}
      <div className="xl:hidden w-full px-5 pb-6">
        <p className="text-[9px] font-mono tracking-[0.18em] uppercase text-slate-600 mb-2">
          ⬡ Tech Stack
        </p>

        {/* Fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a0a1a] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-2 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(15,23,42,0.85)',
                  border: '1px solid rgba(6,182,212,0.15)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-base leading-none">{tech.icon}</span>
                <span className="text-[8px] font-mono tracking-wide text-cyan-300/70">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-[8px] text-slate-700 font-mono mt-1">← swipe →</p>
      </div>
    </>
  );
}