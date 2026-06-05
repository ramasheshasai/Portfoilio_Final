import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiDocker, SiTypescript, SiKubernetes, SiCplusplus } from 'react-icons/si';
import profilePhoto from './IMG-20250911-WA0025.jpg';
import ParticleBackground from './ParticleBackground';

const ROLES = [
  'Product Manager',
  'Full-Stack Developer',
  'Hackathon Winner',
  'Research Enthusiast',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [deleting, setDeleting]     = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-16 relative overflow-hidden">
      {/* Particle constellation background */}
      <ParticleBackground />

      {/* Ambient blobs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem]">

              {/* Outermost slow-pulse ring */}
              <div className="absolute -inset-4 rounded-full border border-blue-500/10 animate-pulse" />

              {/* Outer dashed orbit ring */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-purple-500/20 animate-spin-slow" />

              {/* Spinning gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 animate-spin-slow p-[3px]">
                <div className="w-full h-full rounded-full bg-transparent" />
              </div>

              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Satuluri Rama Shesha Sai"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Strong glow behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl -z-10 scale-125" />

              {/* Floating tech stack row — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 right-0 sm:-right-6 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
              >
                {[
                  { Icon: SiTypescript,  color: '#3178C6', label: 'TypeScript' },
                  { Icon: SiDocker,      color: '#2496ED', label: 'Docker' },
                  { Icon: SiKubernetes, color: '#326CE5', label: 'Kubernetes' },
                  { Icon: SiCplusplus,  color: '#00599C', label: 'C++' },
                ].map(({ Icon, color, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.3 }}
                    title={label}
                    style={{ color, filter: `drop-shadow(0 0 6px ${color}88)` }}
                    className="text-lg cursor-default"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-semibold backdrop-blur-sm whitespace-nowrap"
              >
                ⭐ CGPA 9.16
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.p {...fadeUp(0)} className="text-blue-400 font-medium mb-2 text-sm tracking-[0.2em] uppercase">
              Hello, I'm
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Satuluri Rama<br />Shesha Sai
            </motion.h1>

            {/* Typewriter */}
            <motion.div {...fadeUp(0.2)} className="text-xl sm:text-2xl font-semibold mb-6 h-9 flex items-center justify-center lg:justify-start">
              <span className="gradient-text">{displayed}</span>
              <span className="ml-0.5 w-0.5 h-6 bg-blue-400 animate-pulse inline-block" />
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="text-gray-400 text-sm sm:text-base lg:text-lg mb-8 max-w-xl leading-relaxed"
            >
              CSE Graduate · SRM University-AP · CGPA 9.16 · Passionate about building scalable,
              user-focused products at the intersection of tech and design.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-center text-sm sm:text-base"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors text-center text-sm sm:text-base"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div {...fadeUp(0.5)} className="flex gap-3 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/ramasheshasai', icon: <Github className="w-5 h-5" />, label: 'GitHub', hover: 'hover:text-white' },
                { href: 'https://www.linkedin.com/in/ramasheshasai', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', hover: 'hover:text-blue-400' },
                { href: 'https://leetcode.com/u/S_RAMA_SHESHA_SAI/', icon: <ExternalLink className="w-5 h-5" />, label: 'LeetCode', hover: 'hover:text-orange-400' },
                { href: 'mailto:satuluriramasheshasai@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email', hover: 'hover:text-green-400' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`p-3 rounded-full glass-dark text-gray-400 ${s.hover} transition-all hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
