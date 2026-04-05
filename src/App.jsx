import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import TechIcons from './components/TechIcons';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loader" />}
      </AnimatePresence>

      <Navbar />
      <ScrollProgress />
      <ParticleBackground />
      <CursorGlow />
      <TechIcons />

      <main className="relative z-[1] overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Terminal />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}