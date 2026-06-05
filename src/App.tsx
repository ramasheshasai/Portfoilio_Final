import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import GlowCursor from './components/GlowCursor';
import SplashScreen from './components/SplashScreen';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div className="min-h-screen bg-[#0a0a0a]">
        <GlowCursor />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Education />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;