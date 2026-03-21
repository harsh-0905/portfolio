import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9998] origin-left"
      style={{
        background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
        scaleX: scrollYProgress,
      }}
    />
  );
}
