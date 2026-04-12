import { motion } from "framer-motion";
import Avatar from "./Avatar";
import TypingEffect from "./TypingEffect";
import TechIcons from "./TechIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-5 pt-20 pb-12 relative overflow-x-hidden"
    >
      {/* Desktop fixed sidebar — rendered here so it's scoped */}
      <TechIcons desktopOnly />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-20">

        {/* TEXT — always first on mobile */}
        <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left order-1">

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 font-mono text-sm mb-3"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Harsh Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-slate-300 mt-2"
          >
            AI-Focused Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 flex items-start justify-center md:justify-start"
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={30}
              className="text-xs sm:text-sm text-slate-400 font-mono border-l-2 border-purple-500/40 pl-3 leading-relaxed text-left"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start"
          >
            <a href="#projects">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/30 hover:opacity-90 transition">
                View Projects
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2.5 rounded-xl border border-purple-500/30 bg-white/5 text-white text-sm hover:bg-white/10 transition">
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
          <div className="flex gap-5 mt-7 justify-center md:justify-start text-2xl">
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">💼</a>
            <a href="mailto:harshyad95@gmail.com" className="hover:scale-110 transition-transform">✉️</a>
          </div>
        </div>

        {/* AVATAR — second on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center w-full order-2"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* MOBILE TECH STRIP — below everything, only on < xl */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="xl:hidden w-full mt-10 px-1"
      >
        <p className="text-[9px] font-mono tracking-[0.18em] uppercase text-slate-600 mb-2 px-2">
          ⬡ Tech Stack
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-2 w-8 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none" />
          <MobileTechStrip />
        </div>
        <p className="text-center text-[8px] text-slate-700 font-mono mt-1 tracking-widest">← swipe →</p>
      </motion.div>
    </section>
  );
}

/* Inline mobile strip so it doesn't need a separate import */
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

function MobileTechStrip() {
  return (
    <div
      className="flex gap-2 overflow-x-auto px-2 pb-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {techIcons.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 + i * 0.07 }}
          className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
          style={{
            background: 'rgba(15,23,42,0.85)',
            border: '1px solid rgba(6,182,212,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="text-base leading-none">{tech.icon}</span>
          <span className="text-[8px] font-mono tracking-wide text-cyan-300/70">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}