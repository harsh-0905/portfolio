import { motion } from "framer-motion";
import Avatar from "./Avatar";
import TypingEffect from "./TypingEffect";

const techIcons = [
  { icon: '⚛️', name: 'React'    },
  { icon: '🔷', name: 'Node'     },
  { icon: '🐍', name: 'Python'   },
  { icon: '🍃', name: 'MongoDB'  },
  { icon: '⚡', name: 'FastAPI'  },
  { icon: '📦', name: 'NPM'      },
  { icon: '🎨', name: 'Tailwind' },
  { icon: '🔐', name: 'JWT'      },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative"
      style={{ overflowX: 'hidden' }}
    >

      {/* ═══════════════════════════════
          MOBILE  (< md)
      ═══════════════════════════════ */}
      <div className="flex flex-col md:hidden w-full">

        {/* ── 1. TEXT BLOCK ── */}
        <div
          className="flex flex-col items-center text-center w-full"
          style={{ padding: '88px 20px 16px' }}   {/* 88px pushes below 64px navbar */}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px',
                     letterSpacing: '0.15em', marginBottom: '6px' }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              fontSize: 'clamp(28px, 8vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 8px',
              background: 'linear-gradient(90deg, #a855f7, #60a5fa, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Harsh Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#94a3b8', fontSize: '13px', margin: '0 0 12px' }}
          >
            AI-Focused Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ width: '100%', maxWidth: '320px', marginBottom: '20px' }}
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={28}
              className="text-xs text-slate-400 font-mono leading-relaxed text-left"
              style={{ borderLeft: '2px solid rgba(168,85,247,0.4)', paddingLeft: '10px' }}
            />
          </motion.div>

          {/* ── Buttons — stacked on very small, row on larger mobile ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '320px',
              marginBottom: '20px',
            }}
          >
            <a href="#projects" style={{ flexShrink: 0 }}>
              <button style={{
                padding: '10px 18px', borderRadius: '12px', fontSize: '13px',
                fontWeight: 600, color: '#fff', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                boxShadow: '0 4px 18px rgba(168,85,247,0.35)',
                whiteSpace: 'nowrap',
              }}>
                View Projects
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
              <button style={{
                padding: '10px 18px', borderRadius: '12px', fontSize: '13px',
                color: '#e2e8f0', cursor: 'pointer', whiteSpace: 'nowrap',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(168,85,247,0.35)',
              }}>
                Download Resume
              </button>
            </a>
            <a href="#contact" style={{ flexShrink: 0 }}>
              <button style={{
                padding: '10px 18px', borderRadius: '12px', fontSize: '13px',
                color: '#67e8f9', cursor: 'pointer', whiteSpace: 'nowrap',
                background: 'transparent',
                border: '1px solid rgba(6,182,212,0.45)',
              }}>
                Contact Me
              </button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            style={{ display: 'flex', gap: '24px', fontSize: '22px' }}
          >
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer">💼</a>
            <a href="mailto:harshyad95@gmail.com">✉️</a>
          </motion.div>
        </div>

        {/* ── 2. AVATAR ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%',
            marginTop: '28px',
            marginBottom: '0px',
            overflow: 'visible',
          }}
        >
          <Avatar />
        </motion.div>

        {/* ── GLOWING DIVIDER ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.55 }}
          style={{
            width: '72px', height: '1px', margin: '24px auto 20px',
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.55), rgba(168,85,247,0.55), transparent)',
          }}
        />

        {/* ── 3. TECH STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ width: '100%', paddingBottom: '40px' }}
        >
          <p style={{
            textAlign: 'center', fontFamily: 'monospace',
            fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(100,116,139,0.75)',
            marginBottom: '10px',
          }}>
            ⬡ Tech Stack
          </p>

          <div style={{ position: 'relative', width: '100%' }}>
            {/* Fade left */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 8, width: '32px',
              background: 'linear-gradient(to right, #050510 30%, transparent)',
              zIndex: 10, pointerEvents: 'none',
            }} />
            {/* Fade right */}
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 8, width: '32px',
              background: 'linear-gradient(to left, #050510 30%, transparent)',
              zIndex: 10, pointerEvents: 'none',
            }} />

            <div style={{
              overflowX: 'auto', paddingBottom: '8px',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
            }}>
              <div style={{
                display: 'flex', gap: '8px',
                width: 'max-content',
                margin: '0 auto',
                paddingLeft: '20px', paddingRight: '20px',
              }}>
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.07 }}
                    style={{
                      flexShrink: 0,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '5px',
                      padding: '9px 11px',
                      borderRadius: '12px',
                      background: 'rgba(15,23,42,0.88)',
                      border: '1px solid rgba(6,182,212,0.18)',
                      backdropFilter: 'blur(12px)',
                      minWidth: '52px',
                    }}
                  >
                    <span style={{ fontSize: '17px', lineHeight: 1 }}>{tech.icon}</span>
                    <span style={{
                      fontSize: '8px', fontFamily: 'monospace',
                      letterSpacing: '0.05em', color: 'rgba(103,232,249,0.72)',
                    }}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <p style={{
            textAlign: 'center', fontFamily: 'monospace', letterSpacing: '0.15em',
            fontSize: '8px', color: 'rgba(51,65,85,0.8)', marginTop: '6px',
          }}>
            ← swipe →
          </p>
        </motion.div>
      </div>


      {/* ═══════════════════════════════
          DESKTOP  (md+)
      ═══════════════════════════════ */}
      <div
        className="hidden md:flex flex-1 items-center w-full mx-auto"
        style={{ maxWidth: '1280px', padding: '0 40px', gap: '80px' }}
      >
        {/* Left — text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '13px',
                     letterSpacing: '0.18em', marginBottom: '10px' }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800,
              lineHeight: 1.08, margin: '0 0 10px',
              background: 'linear-gradient(90deg, #a855f7, #60a5fa, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Harsh Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ color: '#94a3b8', fontSize: 'clamp(16px, 2vw, 22px)', margin: '0 0 16px' }}
          >
            AI-Focused Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            style={{ marginBottom: '28px', maxWidth: '480px' }}
          >
            <TypingEffect
              text='"Building AI-powered applications, scalable backend systems, and modern web platforms."'
              speed={30}
              className="text-sm text-slate-400 font-mono leading-relaxed"
              style={{ borderLeft: '2px solid rgba(168,85,247,0.4)', paddingLeft: '12px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}
          >
            <a href="#projects">
              <button style={{
                padding: '12px 24px', borderRadius: '14px', fontSize: '14px',
                fontWeight: 600, color: '#fff', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                boxShadow: '0 4px 22px rgba(168,85,247,0.4)',
              }}>View Projects</button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '12px 24px', borderRadius: '14px', fontSize: '14px',
                color: '#e2e8f0', cursor: 'pointer',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(168,85,247,0.35)',
              }}>Download Resume</button>
            </a>
            <a href="#contact">
              <button style={{
                padding: '12px 24px', borderRadius: '14px', fontSize: '14px',
                color: '#67e8f9', cursor: 'pointer',
                background: 'transparent',
                border: '1px solid rgba(6,182,212,0.45)',
              }}>Contact Me</button>
            </a>
          </motion.div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '26px' }}>
            <a href="https://github.com/harsh-0905" target="_blank" rel="noreferrer">📦</a>
            <a href="https://www.linkedin.com/in/harshyadav95-dev" target="_blank" rel="noreferrer">💼</a>
            <a href="mailto:harshyad95@gmail.com">✉️</a>
          </div>
        </div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', flex: 1, overflow: 'visible' }}
        >
          <Avatar />
        </motion.div>
      </div>

    </section>
  );
}