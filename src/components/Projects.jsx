// Projects.jsx — Clean reference style: screenshot top, info bottom, icon buttons

import { motion } from "framer-motion";
import { useState } from "react";

/* ── SVG Previews (inline, no external images needed) ── */
const SkillGapPreview = () => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="p1bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0f0728"/><stop offset="100%" stopColor="#0a1628"/></linearGradient>
      <linearGradient id="p1bar" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#p1bg)"/>
    {[60,120,180,240].map(y=><line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(99,102,241,0.07)" strokeWidth="1"/>)}
    <rect x="20" y="20" width="240" height="260" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
    <text x="36" y="46" fill="#94a3b8" fontSize="11" fontFamily="monospace">SKILL ANALYSIS</text>
    {[{l:"Python",w:175,p:"88%"},{l:"React",w:138,p:"70%"},{l:"MongoDB",w:112,p:"56%"},{l:"FastAPI",w:156,p:"78%"},{l:"NLP/spaCy",w:94,p:"47%"}].map(({l,w,p},i)=>(
      <g key={l}>
        <text x="36" y={72+i*36} fill="#64748b" fontSize="10" fontFamily="monospace">{l}</text>
        <rect x="36" y={78+i*36} width="200" height="8" rx="4" fill="rgba(99,102,241,0.12)"/>
        <rect x="36" y={78+i*36} width={w} height="8" rx="4" fill="url(#p1bar)"/>
        <text x="244" y={87+i*36} fill="#06b6d4" fontSize="9" fontFamily="monospace" textAnchor="end">{p}</text>
      </g>
    ))}
    <rect x="280" y="20" width="300" height="260" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
    <text x="296" y="46" fill="#94a3b8" fontSize="11" fontFamily="monospace">GAP SCORE · MATCH</text>
    <text x="430" y="170" fill="#06b6d4" fontSize="48" fontFamily="monospace" fontWeight="bold" textAnchor="middle">72%</text>
    <text x="430" y="195" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">MATCH SCORE</text>
    <circle cx="430" cy="120" r="60" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="14"/>
    <circle cx="430" cy="120" r="60" fill="none" stroke="url(#p1bar)" strokeWidth="14" strokeDasharray="266 107" strokeLinecap="round" transform="rotate(-90 430 120)"/>
    {["Resume Analysis","Skill Gap Detection","Learning Path","Email Report"].map((t,i)=>(
      <g key={t}>
        <rect x="296" y={218+i*0} width="8" height="8" rx="2" fill="#06b6d4" style={{display:i>1?'none':'block'}}/>
        <text x="310" y={i<2?226+i*0:0} fill="#475569" fontSize="9" fontFamily="monospace" style={{display:i>1?'none':'block'}}>{t}</text>
      </g>
    ))}
    {[{t:"Resume Analysis",c:"#06b6d4"},{t:"Skill Detection",c:"#a855f7"},{t:"Learning Path",c:"#22c55e"},{t:"Email Report",c:"#f59e0b"}].map(({t,c},i)=>(
      <g key={t}>
        <rect x="296" y={220+i*22} width="270" height="16" rx="4" fill={`${c}12`} stroke={`${c}30`} strokeWidth="0.5"/>
        <circle cx="306" cy="228" r="3" fill={c}/>
        <text x="316" y={232+i*22} fill={c} fontSize="9" fontFamily="monospace">{t}</text>
      </g>
    ))}
  </svg>
);

const AuthPreview = () => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="p2bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#050d1a"/><stop offset="100%" stopColor="#0d0520"/></linearGradient>
      <linearGradient id="p2btn" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#4f46e5"/></linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#p2bg)"/>
    <rect x="170" y="20" width="260" height="260" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/>
    <text x="300" y="58" fill="#e2e8f0" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">🔐  Secure Login</text>
    <rect x="190" y="72" width="220" height="28" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(99,102,241,0.3)" strokeWidth="1"/>
    <text x="202" y="91" fill="#475569" fontSize="10" fontFamily="monospace">user@example.com</text>
    <rect x="190" y="108" width="220" height="28" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(99,102,241,0.3)" strokeWidth="1"/>
    <text x="202" y="127" fill="#475569" fontSize="10" fontFamily="monospace">••••••••••••</text>
    <rect x="190" y="144" width="220" height="34" rx="7" fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
    <text x="202" y="158" fill="#06b6d4" fontSize="8" fontFamily="monospace">JWT TOKEN</text>
    <text x="202" y="172" fill="#334155" fontSize="8" fontFamily="monospace">eyJhbGciOiJIUzI1NiIsInR5cCI6...</text>
    <rect x="190" y="186" width="220" height="30" rx="8" fill="url(#p2btn)"/>
    <text x="300" y="206" fill="white" fontSize="11" fontFamily="monospace" textAnchor="middle">Sign In Securely</text>
    {[{r:"Admin",c:"#a855f7"},{r:"Editor",c:"#06b6d4"},{r:"Viewer",c:"#3b82f6"},{r:"Guest",c:"#475569"}].map(({r,c},i)=>(
      <g key={r}><rect x="22" y={72+i*40} width="130" height="26" rx="6" fill={`${c}18`} stroke={`${c}40`} strokeWidth="1"/><circle cx="36" cy={85+i*40} r="5" fill={c}/><text x="46" y={89+i*40} fill={c} fontSize="11" fontFamily="monospace">{r}</text></g>
    ))}
    {[{e:"/auth/login",s:"200"},{e:"/auth/refresh",s:"200"},{e:"/user/me",s:"401"},{e:"/admin",s:"403"}].map(({e,s},i)=>(
      <g key={e}><text x="450" y={84+i*40} fill="#334155" fontSize="9" fontFamily="monospace">{e}</text><rect x="450" y={90+i*40} width="36" height="14" rx="4" fill={s==="200"?"rgba(34,197,94,0.15)":s==="401"?"rgba(234,179,8,0.15)":"rgba(239,68,68,0.15)"} stroke={s==="200"?"rgba(34,197,94,0.4)":s==="401"?"rgba(234,179,8,0.4)":"rgba(239,68,68,0.4)"} strokeWidth="0.5"/><text x="468" y={101+i*40} fill={s==="200"?"#22c55e":s==="401"?"#eab308":"#ef4444"} fontSize="9" fontFamily="monospace" textAnchor="middle">{s}</text></g>
    ))}
  </svg>
);

const ExpensePreview = () => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="p3bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#020c18"/><stop offset="100%" stopColor="#061020"/></linearGradient>
      <linearGradient id="p3line" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#a855f7"/></linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#p3bg)"/>
    {[{x:16,l:"Total",v:"₹84,290",c:"#06b6d4"},{x:166,l:"Month",v:"₹12,450",c:"#a855f7"},{x:316,l:"Saved",v:"₹3,200",c:"#22c55e"},{x:466,l:"Budget",v:"₹15K",c:"#f59e0b"}].map(({x,l,v,c})=>(
      <g key={l}><rect x={x} y="16" width="134" height="56" rx="9" fill="rgba(255,255,255,0.03)" stroke={`${c}28`} strokeWidth="1"/><text x={x+14} y="38" fill="#475569" fontSize="10" fontFamily="monospace">{l}</text><text x={x+14} y="58" fill={c} fontSize="16" fontFamily="monospace" fontWeight="bold">{v}</text></g>
    ))}
    <rect x="16" y="84" width="360" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.12)" strokeWidth="1"/>
    <text x="30" y="106" fill="#64748b" fontSize="10" fontFamily="monospace">MONTHLY EXPENSES</text>
    <polyline points="30,254 90,224 150,238 210,194 270,210 330,170 370,188" fill="none" stroke="url(#p3line)" strokeWidth="2.5"/>
    <polygon points="30,254 90,224 150,238 210,194 270,210 330,170 370,188 370,270 30,270" fill="url(#p3line)" opacity="0.06"/>
    {[{cx:30,cy:254},{cx:90,cy:224},{cx:150,cy:238},{cx:210,cy:194},{cx:270,cy:210},{cx:330,cy:170},{cx:370,cy:188}].map((p,i)=><circle key={i} cx={p.cx} cy={p.cy} r="4" fill="#06b6d4"/>)}
    <rect x="392" y="84" width="192" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.12)" strokeWidth="1"/>
    <text x="406" y="106" fill="#64748b" fontSize="10" fontFamily="monospace">CATEGORIES</text>
    {[{c:"Food",p:35,color:"#06b6d4",w:110},{c:"Travel",p:22,color:"#a855f7",w:68},{c:"Bills",p:28,color:"#f59e0b",w:88},{c:"Shopping",p:15,color:"#22c55e",w:46}].map(({c,p,color,w},i)=>(
      <g key={c}><text x="406" y={130+i*36} fill="#475569" fontSize="9" fontFamily="monospace">{c}</text><rect x="406" y={135+i*36} width="164" height="7" rx="3.5" fill="rgba(99,102,241,0.1)"/><rect x="406" y={135+i*36} width={w} height="7" rx="3.5" fill={color}/><text x="574" y={143+i*36} fill={color} fontSize="9" fontFamily="monospace" textAnchor="end">{p}%</text></g>
    ))}
  </svg>
);

const TaskflowPreview = () => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="p4bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#030711"/><stop offset="100%" stopColor="#070320"/></linearGradient>
      <linearGradient id="p4acc" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#p4bg)"/>
    <rect x="0" y="0" width="80" height="300" fill="rgba(255,255,255,0.02)"/>
    <rect x="0" y="0" width="3" height="300" fill="url(#p4acc)" opacity="0.5"/>
    <text x="40" y="30" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TF</text>
    {["📋","📁","📊","⚙️"].map((icon,i)=><text key={i} x="40" y={62+i*44} fontSize="18" textAnchor="middle">{icon}</text>)}
    {[{x:92,title:"TODO",color:"#475569",tasks:["Design mockup","Write tests","Update docs"]},{x:248,title:"IN PROGRESS",color:"#818cf8",tasks:["Build API","Fix auth bug"]},{x:404,title:"DONE",color:"#22c55e",tasks:["Setup DB","Init project","Add routes"]}].map(({x,title,color,tasks})=>(
      <g key={title}>
        <rect x={x} y="16" width="148" height="276" rx="10" fill="rgba(255,255,255,0.02)" stroke={`${color}22`} strokeWidth="1"/>
        <rect x={x+8} y="24" width="132" height="22" rx="5" fill={`${color}18`}/>
        <text x={x+74} y="39" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{title}</text>
        {tasks.map((t,i)=>(
          <g key={t}>
            <rect x={x+8} y={56+i*58} width="132" height="46" rx="8" fill="rgba(255,255,255,0.04)" stroke={`${color}18`} strokeWidth="1"/>
            <circle cx={x+22} cy={56+i*58+16} r="5" fill={color} opacity="0.7"/>
            <text x={x+32} y={56+i*58+19} fill="#94a3b8" fontSize="9" fontFamily="monospace">{t}</text>
          </g>
        ))}
      </g>
    ))}
    <rect x="92" y="6" width="460" height="4" rx="2" fill="rgba(99,102,241,0.1)"/>
    <rect x="92" y="6" width="230" height="4" rx="2" fill="url(#p4acc)"/>
  </svg>
);

const SubPreview = () => (
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="p5bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#040a14"/><stop offset="100%" stopColor="#0a0418"/></linearGradient>
      <linearGradient id="p5ring" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#p5bg)"/>
    <circle cx="130" cy="150" r="90" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="24"/>
    <circle cx="130" cy="150" r="90" fill="none" stroke="url(#p5ring)" strokeWidth="24" strokeDasharray="346 220" strokeLinecap="round" transform="rotate(-90 130 150)"/>
    <circle cx="130" cy="150" r="58" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.15)" strokeWidth="1"/>
    <text x="130" y="142" fill="#e2e8f0" fontSize="20" fontFamily="monospace" fontWeight="bold" textAnchor="middle">₹4,290</text>
    <text x="130" y="162" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">/ month</text>
    <rect x="246" y="16" width="338" height="268" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(99,102,241,0.12)" strokeWidth="1"/>
    <text x="262" y="42" fill="#64748b" fontSize="10" fontFamily="monospace">ACTIVE SUBSCRIPTIONS</text>
    {[{name:"Netflix",amt:"₹649",due:"3d",c:"#ef4444",d:"🔴"},{name:"Spotify",amt:"₹119",due:"12d",c:"#22c55e",d:"🟢"},{name:"GitHub Pro",amt:"₹850",due:"18d",c:"#a855f7",d:"🟣"},{name:"Vercel Pro",amt:"₹1,650",due:"22d",c:"#06b6d4",d:"🔵"},{name:"AWS",amt:"₹1,022",due:"30d",c:"#f59e0b",d:"🟡"}].map(({name,amt,due,c,d},i)=>(
      <g key={name}>
        <rect x="262" y={58+i*40} width="306" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke={`${c}18`} strokeWidth="1"/>
        <text x="272" y={78+i*40} fontSize="12">{d}</text>
        <text x="292" y={78+i*40} fill="#94a3b8" fontSize="11" fontFamily="monospace">{name}</text>
        <text x="472" y={78+i*40} fill={c} fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="end">{amt}</text>
        <rect x="476" y={64+i*40} width="84" height="18" rx="5" fill={`${c}15`} stroke={`${c}30`} strokeWidth="0.5"/>
        <text x="518" y={77+i*40} fill={c} fontSize="9" fontFamily="monospace" textAnchor="middle">Due in {due}</text>
      </g>
    ))}
  </svg>
);

/* ── Project Data ── */
const PROJECTS = [
  {
    id: 1,
    title: "AI Powered Student Skill Gap Analyzer",
    description: "Full-stack AI system that analyzes resumes against job descriptions using NLP techniques and generates personalized skill gap analysis and learning paths.",
    tech: ["React", "FastAPI", "MongoDB", "NLP", "spaCy", "TF-IDF"],
    github: "https://github.com/harsh-0905/ai-skill-gap-analyser",
    live: null,
    preview: <SkillGapPreview />,
    color: "#06b6d4",
  },
  {
    id: 2,
    title: "Secure Authentication System",
    description: "Authentication system implementing JWT tokens, password hashing, and role-based access control with secure, production-ready API endpoints.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/harsh-0905/secure-auth-system",
    live: "https://secure-auth-system-sxtl.onrender.com",
    preview: <AuthPreview />,
    color: "#a855f7",
  },
  {
    id: 3,
    title: "Expense Tracker API",
    description: "REST API for managing personal expenses with CRUD operations, categories, analytics, and optimized MongoDB Atlas queries.",
    tech: ["Node.js", "Express.js", "MongoDB Atlas"],
    github: "https://github.com/harsh-0905/expense-tracker-backened",
    live: "https://expense-tracker-backened.onrender.com",
    preview: <ExpensePreview />,
    color: "#22c55e",
  },
  {
    id: 4,
    title: "Taskflow – Modern Todo App",
    description: "Modern Kanban-style task management app with responsive design, smooth UI, and fast performance built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/harsh-0905/taskflow-todo-app",
    live: "https://taskflow-todo-app-woad.vercel.app/",
    preview: <TaskflowPreview />,
    color: "#818cf8",
  },
  {
    id: 5,
    title: "Subscription Tracker API",
    description: "Backend API to manage subscriptions with automated email reminders, background jobs via Upstash, and JWT authentication.",
    tech: ["Node.js", "Express", "MongoDB", "Upstash", "Nodemailer"],
    github: "https://github.com/harsh-0905/subscription-tracker",
    live: "https://subscription-tracker-npb8.onrender.com",
    preview: <SubPreview />,
    color: "#f59e0b",
  },
];

/* ── GitHub Icon ── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── Card ── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(15,23,42,0.8)',
        border: `1px solid ${hovered ? project.color + '45' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 12px 40px ${project.color}18, 0 4px 20px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.35s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Preview */}
      <div style={{ height: '200px', overflow: 'hidden', background: '#020817', position: 'relative', flexShrink: 0 }}>
        <motion.div
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%' }}
        >
          {project.preview}
        </motion.div>
        {/* Gradient fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(15,23,42,0.95) 100%)', pointerEvents: 'none' }}/>
        {/* Buttons overlay top-right */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px' }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="View on GitHub"
            style={{
              width: '34px', height: '34px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(10,14,26,0.88)', color: '#e2e8f0',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)', textDecoration: 'none',
            }}
          >
            <GithubIcon />
          </motion.a>
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Live Demo"
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: project.color, color: '#fff',
                border: 'none', backdropFilter: 'blur(8px)',
                textDecoration: 'none', boxShadow: `0 0 12px ${project.color}60`,
              }}
            >
              <LiveIcon />
            </motion.a>
          ) : (
            <div
              title="Not deployed yet"
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(10,14,26,0.88)', color: '#334155',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '14px',
              }}
            >
              🚧
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        <h3 style={{
          margin: 0, fontSize: '16px', fontWeight: 700, lineHeight: 1.3,
          background: `linear-gradient(135deg, #e2e8f0, ${project.color})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          {project.title}
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
          {project.description}
        </p>
        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontFamily: 'monospace',
              background: `${project.color}10`, border: `1px solid ${project.color}25`, color: project.color,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            — My Work —
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, margin: 0,
            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <motion.a
            href="https://github.com/harsh-0905"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 28px', borderRadius: '12px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8', fontSize: '14px', fontWeight: 500,
              backdropFilter: 'blur(12px)',
            }}
          >
            <GithubIcon /> View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}