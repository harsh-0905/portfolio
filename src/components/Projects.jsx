// Projects.jsx — Real project screenshots from src/assets/projects/

import { useState } from "react";
import { motion } from "framer-motion";

import SkillGapImg        from "../assets/projects/SkillGapAi.png";
import AuthImg            from "../assets/projects/SecureAuthentication.png";
import ExpenseImg         from "../assets/projects/ExpenseTracker.png";
import TaskflowImg        from "../assets/projects/TaskFlow.png";
import SubscriptionImg    from "../assets/projects/SubscriptionTracker.png";

/* ── Project Data ── */
const PROJECTS = [
  {
    id: 1,
    title: "AI Powered Student Skill Gap Analyzer",
    description:
      "Full-stack AI system that analyzes resumes against job descriptions using NLP techniques and generates personalized skill gap analysis and learning paths.",
    tech: ["React", "FastAPI", "MongoDB", "NLP", "spaCy", "TF-IDF"],
    github: "https://github.com/harsh-0905/ai-skill-gap-analyser",
    live: null,
    image: SkillGapImg,
    color: "#06b6d4",
  },
  {
    id: 2,
    title: "Secure Authentication System",
    description:
      "Authentication system implementing JWT tokens, password hashing, and role-based access control with secure, production-ready API endpoints.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/harsh-0905/secure-auth-system",
    live: "https://secure-auth-system-sxtl.onrender.com",
    image: AuthImg,
    color: "#a855f7",
  },
  {
    id: 3,
    title: "Expense Tracker API",
    description:
      "REST API for managing personal expenses with CRUD operations, categories, analytics, and optimized MongoDB Atlas queries.",
    tech: ["Node.js", "Express.js", "MongoDB Atlas"],
    github: "https://github.com/harsh-0905/expense-tracker-backened",
    live: "https://expense-tracker-backened.onrender.com",
    image: ExpenseImg,
    color: "#22c55e",
  },
  {
    id: 4,
    title: "Taskflow – Modern Todo App",
    description:
      "Modern Kanban-style task management app with responsive design, smooth UI, and fast performance built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/harsh-0905/taskflow-todo-app",
    live: "https://taskflow-todo-app-woad.vercel.app/",
    image: TaskflowImg,
    color: "#818cf8",
  },
  {
    id: 5,
    title: "Subscription Tracker API",
    description:
      "Backend API to manage subscriptions with automated email reminders, background jobs via Upstash, and JWT authentication.",
    tech: ["Node.js", "Express", "MongoDB", "Upstash", "Nodemailer"],
    github: "https://github.com/harsh-0905/subscription-tracker",
    live: "https://subscription-tracker-npb8.onrender.com",
    image: SubscriptionImg,
    color: "#f59e0b",
  },
];

/* ── Icons ── */
const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LiveIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
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
        borderRadius: "16px",
        overflow: "hidden",
        background: "rgba(15,23,42,0.82)",
        border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 12px 40px ${project.color}20, 0 4px 20px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        backdropFilter: "blur(16px)",
        transition: "all 0.35s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Screenshot preview ── */}
      <div style={{
        position: "relative",
        height: "200px",
        overflow: "hidden",
        background: "#020817",
        flexShrink: 0,
      }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />

        {/* Gradient overlay — bottom fade */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 40%, rgba(15,23,42,0.95) 100%)",
          pointerEvents: "none",
        }} />

        {/* Color tint on hover */}
        <motion.div
          animate={{ opacity: hovered ? 0.08 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute", inset: 0,
            background: project.color,
            pointerEvents: "none",
          }}
        />

        {/* Action buttons — top right */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          display: "flex", gap: "8px",
        }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            title="View on GitHub"
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(8,12,24,0.88)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#e2e8f0",
              backdropFilter: "blur(8px)",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            <GithubIcon />
          </motion.a>

          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              title="Live Demo"
              style={{
                width: "34px", height: "34px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: project.color,
                border: "none",
                color: "#fff",
                backdropFilter: "blur(8px)",
                textDecoration: "none",
                boxShadow: `0 0 14px ${project.color}70`,
              }}
            >
              <LiveIcon />
            </motion.a>
          ) : (
            <div
              title="Not deployed yet"
              style={{
                width: "34px", height: "34px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(8,12,24,0.88)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "14px",
                color: "#334155",
              }}
            >
              🚧
            </div>
          )}
        </div>
      </div>

      {/* ── Card body ── */}
      <div style={{
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flex: 1,
      }}>
        {/* Title */}
        <h3 style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: 1.35,
          background: `linear-gradient(135deg, #e2e8f0, ${project.color})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          margin: 0,
          fontSize: "13px",
          color: "#64748b",
          lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "11px",
              fontFamily: "monospace",
              background: `${project.color}10`,
              border: `1px solid ${project.color}28`,
              color: project.color,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Bottom buttons row */}
        <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1,
              display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
              padding: "9px 0",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <GithubIcon /> GitHub
          </motion.a>

          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: `0 0 18px ${project.color}55` }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                padding: "9px 0",
                borderRadius: "10px",
                background: `linear-gradient(135deg, ${project.color}cc, ${project.color})`,
                border: "none",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <LiveIcon /> Live Demo
            </motion.a>
          ) : (
            <div style={{
              flex: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "9px 0",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#334155",
              fontSize: "13px",
              cursor: "not-allowed",
            }}>
              🚧 Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p style={{
            color: "#a855f7", fontFamily: "monospace", fontSize: "12px",
            letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px 0",
          }}>
            — My Work —
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, margin: 0,
            background: "linear-gradient(90deg, #a855f7, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <motion.a
            href="https://github.com/harsh-0905"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "12px 28px", borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8", fontSize: "14px", fontWeight: 500,
              textDecoration: "none", backdropFilter: "blur(12px)",
            }}
          >
            <GithubIcon /> View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}