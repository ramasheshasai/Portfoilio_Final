import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Briefcase, FolderOpen, Wrench,
  FlaskConical, GraduationCap, Mail,
} from 'lucide-react';

const sections = [
  { id: 'home',       Icon: Home,           label: 'Home',       color: '#ef4444' },
  { id: 'about',      Icon: User,           label: 'About',      color: '#3b82f6' },
  { id: 'experience', Icon: Briefcase,      label: 'Experience', color: '#10b981' },
  { id: 'projects',   Icon: FolderOpen,     label: 'Projects',   color: '#8b5cf6' },
  { id: 'skills',     Icon: Wrench,         label: 'Skills',     color: '#f59e0b' },
  { id: 'research',   Icon: FlaskConical,   label: 'Research',   color: '#06b6d4' },
  { id: 'education',  Icon: GraduationCap,  label: 'Education',  color: '#6366f1' },
  { id: 'contact',    Icon: Mail,           label: 'Contact',    color: '#ec4899' },
];

const SideNav = () => {
  const [active, setActive]   = useState('home');
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  // Show after scrolling 80px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const els = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed right-4 z-40 hidden md:block"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-full"
          style={{
            background: 'rgba(10,10,20,0.7)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          {sections.map(({ id, Icon, label, color }) => {
            const isActive  = active === id;
            const isHovered = hovered === id;

            return (
              <div key={id} className="relative flex items-center">
                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-12 whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-medium text-white pointer-events-none"
                      style={{
                        background: 'rgba(10,10,20,0.85)',
                        border: `1px solid ${color}50`,
                        boxShadow: `0 0 12px ${color}30`,
                      }}
                    >
                      {label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icon button */}
                <motion.button
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2.5 rounded-full transition-colors duration-200 group"
                  style={{
                    background: isActive ? `${color}22` : 'transparent',
                  }}
                  aria-label={label}
                >
                  {/* Active ring */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRing"
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1.5px solid ${color}70` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <Icon
                    className="w-4 h-4 transition-all duration-200"
                    style={{
                      color: isActive ? color : isHovered ? '#ffffff' : '#64748b',
                      filter: isActive ? `drop-shadow(0 0 6px ${color}80)` : 'none',
                    }}
                  />
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

export default SideNav;
