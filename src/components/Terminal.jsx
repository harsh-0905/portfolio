import { motion, useInView } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

const commands = [
  { cmd: 'git commit -m "Building intelligent systems"', delay: 0 },
  { cmd: 'npm run build', delay: 2 },
  { cmd: 'deploy portfolio', delay: 4 },
  { cmd: '> Success!', delay: 6 },
];

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    if (!isInView) return;
    const timers = commands.map(({ cmd, delay }) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, cmd]), delay * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card rounded-2xl overflow-hidden border border-purple-500/20">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-slate-500 text-sm font-mono">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm min-h-[200px]">
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-2"
              >
                <span className="text-green-400">$</span>
                <span className="text-slate-300">{line}</span>
                {i === visibleLines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
