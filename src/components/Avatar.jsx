// Avatar.jsx — Premium Holographic AI Orb (fixed)

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Orbiting badge pill ─────────────────────────────────────── */
function Badge({ icon, label, angle, radius = 168, delay = 0 }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale:   { delay, duration: 0.5, type: "spring", stiffness: 180 },
        y:       { delay: delay + 0.5, duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
      }}
      className="absolute flex flex-col items-center gap-[5px] select-none pointer-events-none"
      style={{ left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)` }}
    >
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px]"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.80))",
          border: "1px solid rgba(6,182,212,0.28)",
          boxShadow: "0 0 14px rgba(6,182,212,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
        }}
      >
        {icon}
      </div>
      <span
        className="text-[8px] font-mono tracking-[0.22em] uppercase"
        style={{ color: "rgba(103,232,249,0.65)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ── Particle dot ────────────────────────────────────────────── */
function Particle({ x, y, size, delay, color }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ delay, duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Main Avatar ─────────────────────────────────────────────── */
export default function Avatar() {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotX = useSpring(useTransform(rawY, [-0.5, 0.5], [13, -13]), { stiffness: 85, damping: 20 });
  const rotY = useSpring(useTransform(rawX, [-0.5, 0.5], [-13, 13]), { stiffness: 85, damping: 20 });

  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  }, [rawX, rawY]);

  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  const BADGES = [
    { icon: "⚛️", label: "React",  angle: 0   },
    { icon: "🐍", label: "Python", angle: 72  },
    { icon: "☁️", label: "Cloud",  angle: 144 },
    { icon: "🔗", label: "API",    angle: 216 },
    { icon: "🛡️", label: "Auth",   angle: 288 },
  ];

  const PARTICLES = [
    { x: "12%", y: "18%", size: 3, delay: 0,   color: "rgba(6,182,212,0.7)"  },
    { x: "82%", y: "14%", size: 2, delay: 0.7, color: "rgba(168,85,247,0.7)" },
    { x: "88%", y: "72%", size: 3, delay: 1.4, color: "rgba(59,130,246,0.7)" },
    { x: "8%",  y: "78%", size: 2, delay: 2.1, color: "rgba(6,182,212,0.6)"  },
    { x: "50%", y: "6%",  size: 2, delay: 0.4, color: "rgba(168,85,247,0.5)" },
    { x: "50%", y: "92%", size: 2, delay: 1.8, color: "rgba(6,182,212,0.5)"  },
  ];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center"
      style={{ width: 420, height: 420, perspective: "900px" }}
    >
      {/* Ambient backdrop glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18) 0%, rgba(6,182,212,0.12) 40%, transparent 70%)",
          filter: "blur(28px)",
          transform: "scale(1.3)",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* Tilt wrapper — single style prop, no duplicate */}
      <motion.div
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
          width: 420,
          height: 420,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer conic spin ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -2,
            background: "conic-gradient(from 0deg, transparent 50%, rgba(6,182,212,0.9) 72%, rgba(168,85,247,0.9) 86%, transparent 100%)",
            filter: "blur(2px)",
            borderRadius: "50%",
          }}
        />

        {/* Counter-spin inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: 14,
            background: "conic-gradient(from 130deg, transparent 52%, rgba(59,130,246,0.8) 70%, rgba(6,182,212,0.7) 84%, transparent 100%)",
            filter: "blur(1.5px)",
            borderRadius: "50%",
          }}
        />

        {/* Dashed orbit ring */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: 24,
            border: "1px dashed rgba(6,182,212,0.18)",
            borderRadius: "50%",
          }}
        />

        {/* Core orb */}
        <motion.div
          animate={{ y: [-9, 9, -9], scale: [1, 1.015, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute flex items-center justify-center rounded-full overflow-hidden"
          style={{
            width: 220,
            height: 220,
            background: "radial-gradient(circle at 36% 34%, rgba(168,85,247,0.6) 0%, rgba(59,130,246,0.38) 36%, rgba(6,182,212,0.2) 62%, rgba(2,8,23,0.6) 100%)",
            border: "1px solid rgba(6,182,212,0.32)",
            boxShadow: `
              0 0 40px 10px rgba(6,182,212,0.22),
              0 0 90px 28px rgba(168,85,247,0.14),
              inset 0 0 50px rgba(255,255,255,0.04),
              inset 0 1px 0 rgba(255,255,255,0.12)
            `,
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Inner grid */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden opacity-[0.22]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(circle, white 30%, transparent 65%)",
            }}
          />

          {/* Circuit arcs */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.38]" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="72" fill="none" stroke="rgba(6,182,212,0.55)" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="110" cy="110" r="48" fill="none" stroke="rgba(168,85,247,0.45)" strokeWidth="0.5" strokeDasharray="2 6" />
            <line x1="38"  y1="110" x2="182" y2="110" stroke="rgba(6,182,212,0.28)" strokeWidth="0.5" />
            <line x1="110" y1="38"  x2="110" y2="182" stroke="rgba(6,182,212,0.28)" strokeWidth="0.5" />
            {[[110,38],[110,182],[38,110],[182,110]].map(([cx,cy],i) => (
              <motion.circle
                key={i} cx={cx} cy={cy} r="2.5"
                fill={i % 2 === 0 ? "rgba(6,182,212,0.8)" : "rgba(168,85,247,0.8)"}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
          </svg>

          {/* Specular highlight */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 80, height: 80,
              top: 22, left: 30,
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />

          {/* Center icon */}
          <div className="relative z-10 flex flex-col items-center gap-2 select-none">
            <motion.span
              animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              className="text-[60px] leading-none"
              style={{
                filter: "drop-shadow(0 0 16px rgba(6,182,212,1)) drop-shadow(0 0 30px rgba(168,85,247,0.75))",
              }}
            >
              🧠
            </motion.span>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[9px] font-mono tracking-[0.32em] uppercase"
              style={{ color: "#67e8f9" }}
            >
              AI · CORE
            </motion.span>
          </div>
        </motion.div>

        {/* Glow pulse rings */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 240, height: 240, border: "1px solid rgba(6,182,212,0.18)", borderRadius: "50%" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 240, height: 240, border: "1px solid rgba(168,85,247,0.14)", borderRadius: "50%" }}
          animate={{ scale: [1, 1.28, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Floating badges */}
        {BADGES.map((b, i) => (
          <Badge key={b.label} {...b} delay={1 + i * 0.18} />
        ))}
      </motion.div>
    </div>
  );
}