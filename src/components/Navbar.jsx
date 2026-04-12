import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About',      href: 'about'      },
  { name: 'Skills',     href: 'skills'     },
  { name: 'Projects',   href: 'projects'   },
  { name: 'Experience', href: 'experience' },
  { name: 'Education',  href: 'education'  },
  { name: 'Contact',    href: 'contact'    },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const offsets = links.map(({ href }) => {
        const el = document.getElementById(href);
        return { href, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter(o => o.top <= 100).at(-1);
      if (current) setActive(current.href);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a1a]/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
            : 'bg-transparent'
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-5">

          {/* Logo */}
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); }}
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent select-none"
          >
            HY
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative z-[300] flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-white rounded-full mt-1.5"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full mt-1.5"
              transition={{ duration: 0.25 }}
            />
          </button>

        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[160] w-72 md:hidden flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #0f0f2a 0%, #0a0a1a 100%)',
                borderLeft: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="text-lg font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  HY
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 20 }}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      active === link.href
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              {/* Footer hint */}
              <div className="px-6 py-5 border-t border-white/5 text-xs text-slate-500 text-center">
                Tap a section to navigate
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}