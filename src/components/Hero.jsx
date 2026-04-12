import { motion } from "framer-motion";
import Avatar from "./Avatar";
import TypingEffect from "./TypingEffect";

const techIcons = [
  { icon: '⚛️', name: 'React'   },
  { icon: '🔷', name: 'Node'    },
  { icon: '🐍', name: 'Python'  },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '⚡', name: 'FastAPI' },
  { icon: '📦', name: 'NPM'     },
  { icon: '🎨', name: 'Tailwind'},
  { icon: '🔐', name: 'JWT'     },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col px-5 pt-20 pb-12 relative overflow-x-hidden"
    >

      {/* ── MOBILE LAYOUT (flex-col, stacked) ── */}
      <div className="flex flex-col md:hidden flex-1">

        {/* 1. Text block */}
        <div className="flex flex-col items-center text-center pt-6 pb-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 font-mono text-sm mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Harsh Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base text-slate-300 mt-2"
          >
            AI-Focused Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 px-4"
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={28}
              className="text-xs text-slate-400 font-mono border-l-2 border-purple-500/40 pl-3 leading-relaxed text-left"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-2.5 mt-5 justify-center"
          >
            <a href="#projects">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/30">
                View Projects
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2.5 rounded-xl border border-purple-500/30 bg-white/5 text-white text-sm">
                Download Resume
              </button>
            </a>
            <a href="#contact">
              <button className="px-5 py-2.5 rounded-xl border border-cyan-500/50 text-cyan-400 text-sm hover:bg-cyan-500/10 transition">
                Contact Me
              </button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-6 mt-5 justify-center text-2xl"
          >
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer">💼</a>
            <a href="mailto:harshyad95@gmail.com">✉️</a>
          </motion.div>
        </div>

        {/* 2. Avatar — centered, no side overflow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center items-center w-full py-2"
          style={{ overflow: 'visible' }}
        >
          <Avatar />
        </motion.div>

        {/* 3. Tech strip — centered, tight spacing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="w-full mt-2 mb-0"
        >
          <p className="text-[9px] font-mono tracking-[0.18em] uppercase text-slate-600 mb-2 text-center">
            ⬡ Tech Stack
          </p>
          <div className="relative mx-auto" style={{ maxWidth: '100%' }}>
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-2 w-8 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #050510, transparent)' }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-2 w-8 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #050510, transparent)' }}
            />
            <div
              className="flex justify-start gap-2 overflow-x-auto px-6 pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Centering trick: auto margins on first/last */}
              <div className="flex gap-2 mx-auto">
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.06 }}
                    className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
                    style={{
                      background: 'rgba(15,23,42,0.85)',
                      border: '1px solid rgba(6,182,212,0.15)',
                      backdropFilter: 'blur(10px)',
                      minWidth: '52px',
                    }}
                  >
                    <span className="text-base leading-none">{tech.icon}</span>
                    <span className="text-[8px] font-mono tracking-wide text-cyan-300/70">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-[8px] text-slate-700 font-mono mt-1 tracking-widest">← swipe →</p>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT (grid, side by side) ── */}
      <div className="hidden md:grid md:grid-cols-2 items-center gap-20 flex-1 max-w-7xl mx-auto w-full">

        {/* Left — text */}
        <div className="flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-mono text-sm mb-3"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Harsh Yadav
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mt-2"
          >
            AI-Focused Full Stack Developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4"
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={30}
              className="text-sm text-slate-400 font-mono border-l-2 border-purple-500/40 pl-3 leading-relaxed"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-3 mt-7"
          >
            <a href="#projects">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/30">
                View Projects
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 rounded-xl border border-purple-500/30 bg-white/5 text-white">
                Download Resume
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 rounded-xl border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition">
                Contact Me
              </button>
            </a>
          </motion.div>
          <div className="flex gap-5 mt-8 text-2xl">
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer">💼</a>
            <a href="mailto:harshyad95@gmail.com">✉️</a>
          </div>
        </div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <Avatar />
        </motion.div>
      </div>

    </section>
  );
}