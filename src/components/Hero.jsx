import { motion } from "framer-motion";
import Avatar from "./Avatar";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 relative"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-20">

        {/* LEFT SIDE TEXT */}
        <div className="z-10 flex flex-col justify-center text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 font-mono text-sm mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Harsh Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mt-3"
          >
            AI-Focused Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 h-12 flex items-center justify-center md:justify-start"
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={30}
            />
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
          >
            <a href="#projects">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30">
                View Projects
              </button>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 rounded-xl border border-purple-500/30 backdrop-blur bg-white/5 text-white">
                Download Resume
              </button>
            </a>

            <a href="#contact">
              <button className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Contact Me
              </button>
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-10 justify-center md:justify-start text-3xl">
            <a href="https://github.com/harsh-0905" target="_blank">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank">💼</a>
            <a href="mailto:harshyad95@gmail.com">✉️</a>
          </div>

        </div>

        {/* RIGHT SIDE AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <Avatar />
        </motion.div>

      </div>
    </section>
  );
}