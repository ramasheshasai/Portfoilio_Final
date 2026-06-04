import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: Props) => {
  const [phase, setPhase] = useState(0);
  // 0 → show "S"
  // 1 → show full name
  // 2 → show progress bar
  // 3 → exit (curtains split)
  // 4 → unmount

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1150),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => { setPhase(4); onComplete(); }, 3050),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 4) return null;

  const isExiting = phase === 3;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* ── Top curtain ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-[#0a0a0a]"
        style={{ height: '50vh' }}
        animate={isExiting ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1], delay: 0.18 }}
      />

      {/* ── Bottom curtain ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a]"
        style={{ height: '50vh' }}
        animate={isExiting ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1], delay: 0.18 }}
      />

      {/* ── Ambient glow blobs (same as Hero) ── */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Center content ── */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={isExiting ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: 'easeIn' }}
      >
        <AnimatePresence mode="wait">

          {/* Phase 0 — glowing initial "S" */}
          {phase === 0 && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2.2, filter: 'blur(12px)' }}
              transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="gradient-text font-bold select-none"
              style={{
                fontSize: 'clamp(96px, 18vw, 160px)',
                lineHeight: 1,
                filter: 'drop-shadow(0 0 48px rgba(96,165,250,0.65))',
              }}
            >
              S
            </motion.div>
          )}

          {/* Phase 1+ — full name block */}
          {phase >= 1 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {/* Name */}
              <h1
                className="text-white font-bold tracking-tight text-center"
                style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}
              >
                Rama Shesha Sai
              </h1>

              {/* Gradient underline — slides in left → right */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.52, delay: 0.18, ease: 'easeOut' }}
                className="mt-2 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 rounded-full"
                style={{ transformOrigin: 'left center' }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.4 }}
                className="mt-3 text-gray-500 text-xs sm:text-sm tracking-[0.28em] uppercase"
              >
                Software Engineer
              </motion.p>

              {/* Progress bar */}
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 w-44 sm:w-56"
                >
                  <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.92, ease: 'easeInOut' }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
