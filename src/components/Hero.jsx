import { motion } from "framer-motion";
import Avatar from "./Avatar";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-5 pt-24 pb-16 relative"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 md:gap-20">

        {/* LEFT — Text */}
        <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left">

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
            className="mt-4 flex items-center justify-center md:justify-start"
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={30}
              className="text-xs sm:text-sm text-slate-400 font-mono border-l-2 border-purple-500/40 pl-3 leading-relaxed"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start"
          >
            <a href="#projects">
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/30">
                View Projects
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2.5 rounded-xl border border-purple-500/30 backdrop-blur bg-white/5 text-white text-sm">
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
          <div className="flex gap-5 mt-8 justify-center md:justify-start text-2xl">
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">💼</a>
            <a href="mailto:harshyad95@gmail.com" className="hover:scale-110 transition-transform">✉️</a>
          </div>
        </div>

        {/* RIGHT — Avatar (shows on top on mobile, right on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <Avatar />
        </motion.div>

      </div>
    </section>
  );
}