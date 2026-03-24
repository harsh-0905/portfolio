// Projects.jsx — Complete replacement for src/components/Projects.jsx

import { useState } from "react";
import { motion } from "framer-motion";

/* ══════════════════════════════════════════════════════════════
   SVG DASHBOARD PREVIEWS
══════════════════════════════════════════════════════════════ */

const SkillGapPreview = () => (
  <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="sg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f0728" /><stop offset="100%" stopColor="#0a1628" />
      </linearGradient>
      <linearGradient id="sg-b1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="sg-arc" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <filter id="sg-glow">
        <feGaussianBlur stdDeviation="2" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="200" fill="url(#sg-bg)" />
    {[40, 80, 120, 160].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(99,102,241,0.08)" strokeWidth="1" />)}
    <rect x="16" y="16" width="200" height="168" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
    <text x="28" y="36" fill="#94a3b8" fontSize="9" fontFamily="monospace">SKILL ANALYSIS</text>
    {[
      { label: "Python",    w: 140, pct: "88%" },
      { label: "React",     w: 110, pct: "70%" },
      { label: "MongoDB",   w: 90,  pct: "56%" },
      { label: "FastAPI",   w: 125, pct: "78%" },
      { label: "NLP/spaCy", w: 75,  pct: "47%" },
    ].map(({ label, w, pct }, i) => (
      <g key={label}>
        <text x="28" y={58 + i * 26} fill="#64748b" fontSize="8" fontFamily="monospace">{label}</text>
        <rect x="28" y={62 + i * 26} width="160" height="6" rx="3" fill="rgba(99,102,241,0.12)" />
        <rect x="28" y={62 + i * 26} width={w} height="6" rx="3" fill="url(#sg-b1)" filter="url(#sg-glow)" />
        <text x="196" y={69 + i * 26} fill="#06b6d4" fontSize="7" fontFamily="monospace" textAnchor="end">{pct}</text>
      </g>
    ))}
    <rect x="228" y="16" width="236" height="168" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
    <text x="240" y="36" fill="#94a3b8" fontSize="9" fontFamily="monospace">GAP SCORE</text>
    <polygon points="346,60 380,80 380,120 346,140 312,120 312,80" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
    <polygon points="346,70 368,83 368,113 346,127 324,113 324,83" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <polygon points="346,110 372,95 366,128 320,128 314,95" fill="rgba(99,102,241,0.12)" stroke="url(#sg-arc)" strokeWidth="1.5" filter="url(#sg-glow)" />
    <circle cx="346" cy="100" r="4" fill="#06b6d4" filter="url(#sg-glow)" />
    <text x="346" y="158" fill="#06b6d4" fontSize="18" fontFamily="monospace" fontWeight="bold" textAnchor="middle">72%</text>
    <text x="346" y="168" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">MATCH SCORE</text>
    <rect x="240" y="44" width="64" height="16" rx="4" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.3)" strokeWidth="0.5" />
    <text x="272" y="55" fill="#06b6d4" fontSize="7" fontFamily="monospace" textAnchor="middle">AI · NLP · spaCy</text>
  </svg>
);

const AuthPreview = () => (
  <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="au-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050d1a" /><stop offset="100%" stopColor="#0d0520" />
      </linearGradient>
      <linearGradient id="au-btn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
      <filter id="au-glow">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="200" fill="url(#au-bg)" />
    <rect x="140" y="20" width="200" height="160" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
    <text x="240" y="46" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">🔐 Secure Login</text>
    <rect x="156" y="54" width="168" height="20" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
    <text x="164" y="68" fill="#475569" fontSize="8" fontFamily="monospace">user@example.com</text>
    <rect x="156" y="80" width="168" height="20" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
    <text x="164" y="94" fill="#475569" fontSize="8" fontFamily="monospace">••••••••••••</text>
    <rect x="156" y="106" width="168" height="26" rx="5" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
    <text x="164" y="117" fill="#06b6d4" fontSize="6" fontFamily="monospace">JWT TOKEN</text>
    <text x="164" y="128" fill="#334155" fontSize="6" fontFamily="monospace">eyJhbGci...xK8mP</text>
    <rect x="156" y="138" width="168" height="22" rx="6" fill="url(#au-btn)" filter="url(#au-glow)" />
    <text x="240" y="153" fill="white" fontSize="9" fontFamily="monospace" textAnchor="middle">Sign In Securely</text>
    <rect x="16" y="30" width="110" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="71" y="50" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">ROLES</text>
    {[{ r: "Admin", c: "#a855f7" }, { r: "Editor", c: "#06b6d4" }, { r: "Viewer", c: "#3b82f6" }, { r: "Guest", c: "#475569" }].map(({ r, c }, i) => (
      <g key={r}>
        <rect x="26" y={58 + i * 28} width="90" height="18" rx="4" fill={`${c}18`} stroke={`${c}40`} strokeWidth="1" />
        <circle cx="36" cy={67 + i * 28} r="3" fill={c} />
        <text x="44" y={71 + i * 28} fill={c} fontSize="8" fontFamily="monospace">{r}</text>
      </g>
    ))}
    <rect x="354" y="30" width="110" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="409" y="50" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">API STATUS</text>
    {[{ e: "/auth/login", s: "200" }, { e: "/auth/refresh", s: "200" }, { e: "/user/me", s: "401" }, { e: "/admin", s: "403" }].map(({ e, s }, i) => (
      <g key={e}>
        <text x="364" y={66 + i * 28} fill="#334155" fontSize="6.5" fontFamily="monospace">{e}</text>
        <rect x="364" y={70 + i * 28} width="28" height="10" rx="3"
          fill={s === "200" ? "rgba(34,197,94,0.15)" : s === "401" ? "rgba(234,179,8,0.15)" : "rgba(239,68,68,0.15)"}
          stroke={s === "200" ? "rgba(34,197,94,0.4)" : s === "401" ? "rgba(234,179,8,0.4)" : "rgba(239,68,68,0.4)"}
          strokeWidth="0.5" />
        <text x="378" y={78 + i * 28}
          fill={s === "200" ? "#22c55e" : s === "401" ? "#eab308" : "#ef4444"}
          fontSize="6.5" fontFamily="monospace" textAnchor="middle">{s}</text>
      </g>
    ))}
  </svg>
);

const ExpensePreview = () => (
  <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ex-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#020c18" /><stop offset="100%" stopColor="#061020" />
      </linearGradient>
      <linearGradient id="ex-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <filter id="ex-glow">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="200" fill="url(#ex-bg)" />
    {[
      { x: 16,  label: "Total",  val: "₹84,290", color: "#06b6d4" },
      { x: 128, label: "Month",  val: "₹12,450", color: "#a855f7" },
      { x: 240, label: "Saved",  val: "₹3,200",  color: "#22c55e" },
      { x: 352, label: "Budget", val: "₹15,000", color: "#f59e0b" },
    ].map(({ x, label, val, color }) => (
      <g key={label}>
        <rect x={x} y="12" width="104" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke={`${color}30`} strokeWidth="1" />
        <text x={x + 10} y="30" fill="#475569" fontSize="7.5" fontFamily="monospace">{label}</text>
        <text x={x + 10} y="46" fill={color} fontSize="12" fontFamily="monospace" fontWeight="bold">{val}</text>
      </g>
    ))}
    <rect x="16" y="66" width="280" height="118" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="28" y="84" fill="#64748b" fontSize="8" fontFamily="monospace">MONTHLY EXPENSES</text>
    {[0, 30, 60, 90].map(y => <line key={y} x1="28" y1={96 + y} x2="284" y2={96 + y} stroke="rgba(99,102,241,0.08)" strokeWidth="1" />)}
    <polyline points="28,166 68,148 108,158 148,126 188,138 228,112 268,124" fill="none" stroke="url(#ex-line)" strokeWidth="2" filter="url(#ex-glow)" />
    <polygon points="28,166 68,148 108,158 148,126 188,138 228,112 268,124 268,176 28,176" fill="url(#ex-line)" opacity="0.06" />
    {[{ cx: 28, cy: 166 }, { cx: 68, cy: 148 }, { cx: 108, cy: 158 }, { cx: 148, cy: 126 }, { cx: 188, cy: 138 }, { cx: 228, cy: 112 }, { cx: 268, cy: 124 }].map((p, i) => (
      <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="#06b6d4" filter="url(#ex-glow)" />
    ))}
    <rect x="308" y="66" width="156" height="118" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="320" y="84" fill="#64748b" fontSize="8" fontFamily="monospace">CATEGORIES</text>
    {[
      { cat: "Food",     pct: 35, color: "#06b6d4", w: 90 },
      { cat: "Travel",   pct: 22, color: "#a855f7", w: 57 },
      { cat: "Bills",    pct: 28, color: "#f59e0b", w: 72 },
      { cat: "Shopping", pct: 15, color: "#22c55e", w: 38 },
    ].map(({ cat, pct, color, w }, i) => (
      <g key={cat}>
        <text x="320" y={100 + i * 24} fill="#475569" fontSize="7.5" fontFamily="monospace">{cat}</text>
        <rect x="320" y={103 + i * 24} width="130" height="5" rx="2.5" fill="rgba(99,102,241,0.1)" />
        <rect x="320" y={103 + i * 24} width={w} height="5" rx="2.5" fill={color} filter="url(#ex-glow)" />
        <text x="454" y={109 + i * 24} fill={color} fontSize="7" fontFamily="monospace" textAnchor="end">{pct}%</text>
      </g>
    ))}
  </svg>
);

const TaskflowPreview = () => (
  <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="tf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#030711" /><stop offset="100%" stopColor="#070320" />
      </linearGradient>
      <linearGradient id="tf-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="tf-glow">
        <feGaussianBlur stdDeviation="2" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="200" fill="url(#tf-bg)" />
    <rect x="0" y="0" width="80" height="200" fill="rgba(255,255,255,0.02)" />
    <rect x="0" y="0" width="2" height="200" fill="url(#tf-accent)" opacity="0.4" />
    <text x="40" y="24" fill="#818cf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TF</text>
    {["📋", "📁", "📊", "⚙️"].map((icon, i) => (
      <g key={i}>
        <rect x="10" y={38 + i * 34} width="60" height="26" rx="6" fill={i === 0 ? "rgba(129,140,248,0.15)" : "transparent"} />
        <text x="40" y={55 + i * 34} fontSize="14" textAnchor="middle">{icon}</text>
      </g>
    ))}
    {[
      { x: 92,  title: "TODO",        color: "#475569", tasks: ["Design mockup", "Write tests", "Update docs"] },
      { x: 212, title: "IN PROGRESS", color: "#818cf8", tasks: ["Build API", "Fix auth bug"] },
      { x: 332, title: "DONE",        color: "#22c55e", tasks: ["Setup DB", "Init project", "Add routes"] },
    ].map(({ x, title, color, tasks }) => (
      <g key={title}>
        <rect x={x} y="12" width="112" height="178" rx="8" fill="rgba(255,255,255,0.02)" stroke={`${color}25`} strokeWidth="1" />
        <rect x={x + 8} y="20" width="96" height="16" rx="4" fill={`${color}18`} />
        <text x={x + 56} y="32" fill={color} fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{title}</text>
        {tasks.map((t, i) => (
          <g key={t}>
            <rect x={x + 8} y={44 + i * 44} width="96" height="34" rx="6" fill="rgba(255,255,255,0.04)" stroke={`${color}20`} strokeWidth="1" />
            <circle cx={x + 20} cy={44 + i * 44 + 12} r="4" fill={color} opacity="0.7" />
            <text x={x + 28} y={44 + i * 44 + 14} fill="#94a3b8" fontSize="7" fontFamily="monospace">{t}</text>
            <rect x={x + 16} y={44 + i * 44 + 22} width="30" height="6" rx="3" fill={`${color}20`} />
            <rect x={x + 50} y={44 + i * 44 + 22} width="20" height="6" rx="3" fill="rgba(99,102,241,0.2)" />
          </g>
        ))}
      </g>
    ))}
    <rect x="92" y="4" width="372" height="3" rx="1.5" fill="rgba(99,102,241,0.1)" />
    <rect x="92" y="4" width="186" height="3" rx="1.5" fill="url(#tf-accent)" filter="url(#tf-glow)" />
  </svg>
);

const SubscriptionPreview = () => (
  <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="sub-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#040a14" /><stop offset="100%" stopColor="#0a0418" />
      </linearGradient>
      <linearGradient id="sub-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <filter id="sub-glow">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="200" fill="url(#sub-bg)" />
    <circle cx="100" cy="100" r="66" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="18" />
    <circle cx="100" cy="100" r="66" fill="none" stroke="url(#sub-ring)" strokeWidth="18" strokeDasharray="260 153" strokeLinecap="round" filter="url(#sub-glow)" />
    <circle cx="100" cy="100" r="44" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="100" y="95" fill="#e2e8f0" fontSize="16" fontFamily="monospace" fontWeight="bold" textAnchor="middle">₹4,290</text>
    <text x="100" y="110" fill="#64748b" fontSize="7.5" fontFamily="monospace" textAnchor="middle">/ month</text>
    <rect x="184" y="12" width="280" height="176" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
    <text x="196" y="30" fill="#64748b" fontSize="8" fontFamily="monospace">ACTIVE SUBSCRIPTIONS</text>
    {[
      { name: "Netflix",    amt: "₹649",   due: "3d",  color: "#ef4444", dot: "🔴" },
      { name: "Spotify",    amt: "₹119",   due: "12d", color: "#22c55e", dot: "🟢" },
      { name: "GitHub Pro", amt: "₹850",   due: "18d", color: "#a855f7", dot: "🟣" },
      { name: "Vercel Pro", amt: "₹1,650", due: "22d", color: "#06b6d4", dot: "🔵" },
      { name: "AWS",        amt: "₹1,022", due: "30d", color: "#f59e0b", dot: "🟡" },
    ].map(({ name, amt, due, color, dot }, i) => (
      <g key={name}>
        <rect x="194" y={40 + i * 28} width="262" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke={`${color}20`} strokeWidth="1" />
        <text x="204" y={55 + i * 28} fontSize="10">{dot}</text>
        <text x="222" y={55 + i * 28} fill="#94a3b8" fontSize="8.5" fontFamily="monospace">{name}</text>
        <text x="390" y={55 + i * 28} fill={color} fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="end">{amt}</text>
        <rect x="394" y={44 + i * 28} width="44" height="14" rx="4" fill={`${color}18`} stroke={`${color}35`} strokeWidth="0.5" />
        <text x="416" y={54 + i * 28} fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle">Due {due}</text>
      </g>
    ))}
    <rect x="8" y="172" width="176" height="20" rx="6" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
    <text x="96" y="185" fill="#06b6d4" fontSize="7" fontFamily="monospace" textAnchor="middle">📧 Reminder · Netflix due in 3 days</text>
  </svg>
);

/* ══════════════════════════════════════════════════════════════
   PROJECT DATA — your real links preserved
══════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 1,
    title: "AI Powered Student Skill Gap Analyzer",
    subtitle: "AI · NLP · SaaS",
    description:
      "Full-stack AI system that analyzes resumes against job descriptions using NLP techniques and generates personalized skill gap analysis and learning paths.",
    features: [
      "Resume skill extraction",
      "Job match scoring",
      "Personalized learning path generation",
      "Email-based learning recommendations",
      "Real-time analysis with responsive UI",
    ],
    tech: ["React", "FastAPI", "MongoDB", "NLP", "spaCy", "TF-IDF"],
    color: "#06b6d4",
    accent: "#7c3aed",
    preview: <SkillGapPreview />,
    github: "https://github.com/harsh-0905/ai-skill-gap-analyser",
    live: null, // not deployed yet
    status: "In Progress",
  },
  {
    id: 2,
    title: "Secure Authentication System",
    subtitle: "Backend · JWT · RBAC",
    description:
      "Authentication system implementing JWT tokens, password hashing, and role-based access control with secure API endpoints.",
    features: ["JWT Auth", "Password hashing", "RBAC", "Secure APIs"],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    color: "#a855f7",
    accent: "#4f46e5",
    preview: <AuthPreview />,
    github: "https://github.com/harsh-0905/secure-auth-system",
    live: "https://secure-auth-system-sxtl.onrender.com",
    status: "Completed",
  },
  {
    id: 3,
    title: "Expense Tracker API",
    subtitle: "REST API · Analytics",
    description:
      "REST API for managing personal expenses with optimized database queries, categories, and analytics.",
    features: ["CRUD operations", "Expense categories", "Analytics", "Optimized queries"],
    tech: ["Node.js", "Express.js", "MongoDB Atlas"],
    color: "#22c55e",
    accent: "#06b6d4",
    preview: <ExpensePreview />,
    github: "https://github.com/harsh-0905/expense-tracker-backened",
    live: "https://expense-tracker-backened.onrender.com",
    status: "Completed",
  },
  {
    id: 4,
    title: "Taskflow – Modern Todo App",
    subtitle: "Full Stack · Kanban",
    description:
      "A modern and responsive task management application that allows users to organize tasks efficiently with a clean UI and smooth productivity workflow.",
    features: ["Task Management", "Modern UI", "Responsive Design", "Fast Performance"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#818cf8",
    accent: "#06b6d4",
    preview: <TaskflowPreview />,
    github: "https://github.com/harsh-0905/taskflow-todo-app",
    live: "https://taskflow-todo-app-woad.vercel.app/",
    status: "Completed",
  },
  {
    id: 5,
    title: "Subscription Tracker API",
    subtitle: "API · Email · Cron Jobs",
    description:
      "A backend API that allows users to manage subscriptions and automatically receive renewal reminder emails before subscriptions expire.",
    features: [
      "JWT Authentication",
      "Automated Email Reminders",
      "Background Jobs with Upstash",
      "Secure REST API",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Upstash", "Nodemailer"],
    color: "#f59e0b",
    accent: "#a855f7",
    preview: <SubscriptionPreview />,
    github: "https://github.com/harsh-0905/subscription-tracker",
    live: "https://subscription-tracker-npb8.onrender.com",
    status: "Completed",
  },
];

/* ══════════════════════════════════════════════════════════════
   STATUS BADGE
══════════════════════════════════════════════════════════════ */

function StatusBadge({ status }) {
  const isLive = status === "Completed";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase"
      style={{
        background: isLive ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
        border: `1px solid ${isLive ? "rgba(34,197,94,0.35)" : "rgba(245,158,11,0.35)"}`,
        color: isLive ? "#22c55e" : "#f59e0b",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{
          background: isLive ? "#22c55e" : "#f59e0b",
          boxShadow: `0 0 5px ${isLive ? "#22c55e" : "#f59e0b"}`,
        }}
      />
      {status}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROJECT CARD
══════════════════════════════════════════════════════════════ */

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(15,23,42,0.6)",
        border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.07)"}`,
        backdropFilter: "blur(16px)",
        boxShadow: hovered
          ? `0 0 40px ${project.color}20, 0 20px 60px rgba(0,0,0,0.5)`
          : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* ── Preview image area ── */}
      <div className="relative h-[200px] overflow-hidden bg-[#020817] flex-shrink-0">
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          {project.preview}
        </motion.div>

        {/* Gradient fade to card body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.97) 100%)",
          }}
        />

        {/* Hover color tint */}
        <motion.div
          animate={{ opacity: hovered ? 0.07 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: project.color }}
        />

        {/* Status badge — top right */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>

        {/* Subtitle chip — top left */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-mono tracking-widest uppercase"
          style={{
            background: "rgba(2,8,23,0.8)",
            border: `1px solid ${project.color}35`,
            color: project.color,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.subtitle}
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Title */}
        <h3
          className="text-base font-bold leading-snug"
          style={{
            background: `linear-gradient(135deg, #e2e8f0, ${project.color})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-1">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
              <span style={{ color: project.color }}>▸</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono"
              style={{
                background: `${project.color}0f`,
                border: `1px solid ${project.color}28`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px"
          style={{
            background: `linear-gradient(90deg, ${project.color}35, transparent)`,
          }}
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">

          {/* GitHub — always shown */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </motion.a>

          {/* Live Demo — only if deployed */}
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${project.color}55` }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, ${project.color})`,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </motion.a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#334155",
                cursor: "not-allowed",
              }}
            >
              🚧 Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════════════════════ */

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            — What I've Built —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>

        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="https://github.com/harsh-0905"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-sm font-medium text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}