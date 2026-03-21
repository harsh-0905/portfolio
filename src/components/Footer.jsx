import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800/50 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 Harsh Yadav | AI Focused Full Stack Developer
        </p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:harshyad95@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
