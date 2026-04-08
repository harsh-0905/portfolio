// Terminal.jsx — Centered, compact, no empty space below

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LINES = [
  { text: 'git commit -m "Building intelligent systems"', color: '#22c55e', prefix: '$ ' },
  { text: 'npm run build',                               color: '#22c55e', prefix: '$ ' },
  { text: 'deploy portfolio',                            color: '#22c55e', prefix: '$ ' },
  { text: '> Success! Portfolio is live 🚀',             color: '#06b6d4', prefix: '' },
];

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Start typing when in view
  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  // Typing effect
  useEffect(() => {
    if (!started) return;
    if (lineIndex >= LINES.length) return;

    const line = LINES[lineIndex];
    const fullText = line.prefix + line.text;

    if (charIndex < fullText.length) {
      const t = setTimeout(() => {
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, { ...line, full: fullText }]);
        setCurrentText('');
        setCharIndex(0);
        setLineIndex(l => l + 1);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [started, lineIndex, charIndex]);

  return (
    <section style={{ padding: '0 0 80px 0', position: 'relative', zIndex: 10 }}>
      <div
        ref={ref}
        style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            background: 'rgba(8, 12, 24, 0.92)',
            border: '1px solid rgba(99,102,241,0.25)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Title bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            borderBottom: '1px solid rgba(99,102,241,0.15)',
          }}>
            {/* Traffic lights */}
            {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
              <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
            ))}
            <span style={{
              marginLeft: '8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#475569',
              letterSpacing: '0.05em',
            }}>
              terminal
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '20px 24px', minHeight: '140px' }}>
            {/* Completed lines */}
            {visibleLines.map((line, i) => (
              <div key={i} style={{
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.8',
                color: line.color,
                marginBottom: '2px',
              }}>
                {line.full}
              </div>
            ))}

            {/* Currently typing line */}
            {lineIndex < LINES.length && (
              <div style={{
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.8',
                color: LINES[lineIndex].color,
                display: 'flex',
                alignItems: 'center',
              }}>
                {currentText}
                <span style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '16px',
                  background: '#06b6d4',
                  marginLeft: '2px',
                  animation: 'blink 1s step-end infinite',
                }} />
              </div>
            )}

            {/* Done — show cursor blink at end */}
            {lineIndex >= LINES.length && (
              <div style={{
                fontFamily: 'monospace',
                fontSize: '14px',
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '4px',
              }}>
                $
                <span style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '16px',
                  background: '#06b6d4',
                  animation: 'blink 1s step-end infinite',
                }} />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}