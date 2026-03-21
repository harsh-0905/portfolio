import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'AI Powered Student Skill Gap Analyzer',
    tech: ['React', 'FastAPI', 'MongoDB', 'NLP', 'spaCy', 'TF-IDF'],
    description:
      'Full-stack AI system that analyzes resumes against job descriptions using NLP techniques and generates personalized skill gap analysis and learning paths.',
    features: [
      'Resume skill extraction',
      'Job match scoring',
      'Personalized learning path generation',
      'Email-based learning recommendations',
      'Real-time analysis with responsive UI'
    ],
    github: 'https://github.com/harsh-0905/ai-skill-gap-analyser',
    preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Secure Authentication System',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    description:
      'Authentication system implementing JWT tokens, password hashing, and role-based access control.',
    features: ['JWT Auth', 'Password hashing', 'RBAC', 'Secure APIs'],
    github: 'https://github.com/harsh-0905/secure-auth-system',
    live: 'https://secure-auth-system-sxtl.onrender.com',
    preview: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Expense Tracker API',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas'],
    description: 'REST API for managing personal expenses with optimized database queries.',
    features: ['CRUD operations', 'Expense categories', 'Analytics', 'Optimized queries'],
    github: 'https://github.com/harsh-0905/expense-tracker-backened',
    live: 'https://expense-tracker-backened.onrender.com',
    preview: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
title: "Taskflow - Modern Todo App",
tech: ["Next.js", "TypeScript", "Tailwind CSS"],
description:
"A modern and responsive task management application that allows users to organize tasks efficiently with a clean UI and smooth productivity workflow.",
features: [
"Task Management",
"Modern UI",
"Responsive Design",
"Fast Performance"
],
github: "https://github.com/harsh-0905/taskflow-todo-app",
live: "https://taskflow-todo-app-woad.vercel.app/",
preview: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
},
{
  title: "Subscription Tracker API",
  tech: ["Node.js", "Express", "MongoDB", "Upstash", "Nodemailer"],
  description:
    "A backend API that allows users to manage subscriptions and automatically receive renewal reminder emails before subscriptions expire.",
  features: [
    "JWT Authentication",
    "Automated Email Reminders",
    "Background Jobs with Upstash",
    "Secure REST API"
  ],
  github: "https://github.com/harsh-0905/subscription-tracker",
  live: "https://subscription-tracker-npb8.onrender.com",
  preview: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)"
},
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-16 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div
                className="h-40 w-full transition-transform duration-500 group-hover:scale-105"
                style={{ background: project.preview }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <ul className="text-slate-500 text-xs space-y-1 mb-6">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-sm"
                    >
                      GitHub
                    </motion.button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-sm"
                    >
                      Live Demo
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
