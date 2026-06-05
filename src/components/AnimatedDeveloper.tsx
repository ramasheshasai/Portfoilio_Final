import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiPython, SiDocker, SiNodedotjs } from 'react-icons/si';

const float = (delay: number, dur: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

const icons = [
  { Icon: SiReact,      color: '#61DAFB', style: { top: '6%',  left: '4%'  }, delay: 0,   dur: 3.2 },
  { Icon: SiTypescript, color: '#3178C6', style: { top: '4%',  right: '6%' }, delay: 0.5, dur: 2.9 },
  { Icon: SiPython,     color: '#FFD43B', style: { top: '44%', left: '0%'  }, delay: 0.9, dur: 3.5 },
  { Icon: SiDocker,     color: '#2496ED', style: { top: '44%', right: '0%' }, delay: 1.3, dur: 3.0 },
  { Icon: SiNodedotjs,  color: '#68A063', style: { bottom: '8%', left: '8%' }, delay: 0.6, dur: 2.7 },
];

const codeLines = [
  { indent: 0, parts: [{ t: 'const ', c: '#c084fc' }, { t: 'developer', c: '#60a5fa' }, { t: ' = {', c: '#e2e8f0' }] },
  { indent: 1, parts: [{ t: 'name', c: '#34d399' }, { t: ': ', c: '#e2e8f0' }, { t: '"Rama"', c: '#fbbf24' }, { t: ',', c: '#e2e8f0' }] },
  { indent: 1, parts: [{ t: 'role', c: '#34d399' }, { t: ': ', c: '#e2e8f0' }, { t: '"SWE"', c: '#fbbf24' }, { t: ',', c: '#e2e8f0' }] },
  { indent: 1, parts: [{ t: 'stack', c: '#34d399' }, { t: ': [', c: '#e2e8f0' }, { t: '...', c: '#a78bfa' }, { t: '],', c: '#e2e8f0' }] },
  { indent: 0, parts: [{ t: '};', c: '#e2e8f0' }] },
];

const AnimatedDeveloper = () => (
  <div className="relative w-full flex items-center justify-center py-4 select-none">

    {/* Floating tech icons */}
    {icons.map(({ Icon, color, style, delay, dur }) => (
      <motion.div
        key={color}
        {...float(delay, dur)}
        className="absolute text-xl sm:text-2xl z-10"
        style={{ color, filter: `drop-shadow(0 0 8px ${color}90)`, ...style }}
      >
        <Icon />
      </motion.div>
    ))}

    {/* Scene container */}
    <div className="relative w-full max-w-[340px] sm:max-w-[400px]">

      {/* Background glow */}
      <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-3xl" />
      <div className="absolute inset-0 bg-purple-600/8 rounded-3xl blur-2xl" style={{ transform: 'translate(20px, 20px)' }} />

      <svg viewBox="0 0 380 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full relative z-10">
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Desk surface ── */}
        <rect x="10" y="232" width="360" height="50" rx="6" fill="url(#deskGrad)" />
        <rect x="10" y="232" width="360" height="3" rx="1.5" fill="#334155" opacity="0.8" />

        {/* ── Laptop base/keyboard ── */}
        <rect x="60" y="220" width="260" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        {/* Keyboard keys hint */}
        {[0,1,2,3,4,5,6].map(i => (
          <rect key={i} x={72 + i * 34} y={224} width={28} height={10} rx={2} fill="#0f172a" opacity={0.6} />
        ))}
        {/* Trackpad */}
        <rect x="148" y="225" width="84" height="9" rx="3" fill="#0f172a" opacity="0.7" />

        {/* ── Laptop screen outer ── */}
        <rect x="52" y="32" width="276" height="192" rx="10" fill="url(#laptopLid)" stroke="#334155" strokeWidth="1.5" />

        {/* ── Screen bezel ── */}
        <rect x="60" y="40" width="260" height="176" rx="7" fill="#020617" />

        {/* Screen ambient glow */}
        <rect x="60" y="40" width="260" height="176" rx="7" fill="url(#screenGlow)" />

        {/* ── Editor top bar ── */}
        <rect x="60" y="40" width="260" height="22" rx="7" fill="#0f172a" />
        <rect x="60" y="54" width="260" height="8" fill="#0f172a" />
        {/* Traffic lights */}
        <circle cx="76" cy="51" r="4.5" fill="#ef4444" opacity="0.7" />
        <circle cx="90" cy="51" r="4.5" fill="#fbbf24" opacity="0.7" />
        <circle cx="104" cy="51" r="4.5" fill="#22c55e" opacity="0.7" />
        {/* Tab */}
        <rect x="118" y="44" width="80" height="14" rx="3" fill="#1e293b" />
        <text x="158" y="55" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">index.ts</text>

        {/* ── Line numbers ── */}
        {[0,1,2,3,4].map(i => (
          <text key={i} x="74" y={80 + i * 20} textAnchor="middle" fill="#334155" fontSize="7" fontFamily="monospace">{i + 1}</text>
        ))}

        {/* ── Code lines ── */}
        {codeLines.map((line, li) => {
          let xCursor = 86 + line.indent * 14;
          return (
            <g key={li}>
              {line.parts.map((part, pi) => {
                const charW = 5.6;
                const textX = xCursor;
                xCursor += part.t.length * charW;
                return (
                  <motion.text
                    key={pi}
                    x={textX}
                    y={80 + li * 20}
                    fill={part.c}
                    fontSize="8"
                    fontFamily="monospace"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + li * 0.25 + pi * 0.08, duration: 0.2 }}
                  >
                    {part.t}
                  </motion.text>
                );
              })}
            </g>
          );
        })}

        {/* Blinking cursor */}
        <motion.rect
          x={86} y={162} width={2.5} height={11} rx={1}
          fill="#60a5fa"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        />

        {/* ── Screen bottom status bar ── */}
        <rect x="60" y="202" width="260" height="14" rx="3" fill="#0f172a" />
        <circle cx="72" cy="209" r="3" fill="#22c55e" />
        <rect x="79" y="206" width="40" height="5" rx="2" fill="#334155" opacity="0.8" />
        <rect x="260" y="206" width="30" height="5" rx="2" fill="#334155" opacity="0.6" />
        <rect x="296" y="206" width="18" height="5" rx="2" fill="#334155" opacity="0.5" />

        {/* ── Laptop hinge shadow ── */}
        <rect x="62" y="218" width="256" height="4" rx="2" fill="#000000" opacity="0.4" />

        {/* ── Coffee mug ── */}
        <rect x="14" y="197" width="32" height="36" rx="4" fill="url(#mugGrad)" stroke="#334155" strokeWidth="1" />
        {/* Mug handle */}
        <path d="M46,206 Q58,206 58,215 Q58,224 46,224" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Coffee surface */}
        <ellipse cx="30" cy="200" rx="14" ry="4" fill="#7c3aed" opacity="0.6" />
        {/* Mug logo */}
        <text x="30" y="218" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">{`</>`}</text>
        {/* Steam wisps */}
        {[0, 1, 2].map(i => (
          <motion.path
            key={i}
            d={`M${22 + i * 6},196 Q${20 + i * 6},188 ${22 + i * 6},180`}
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity={0}
            animate={{ opacity: [0, 0.5, 0], y: [0, -8, -16] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
          />
        ))}

        {/* ── Small plant pot ── */}
        <rect x="336" y="210" width="28" height="22" rx="3" fill="#854d0e" opacity="0.8" />
        {/* Pot rim */}
        <rect x="332" y="208" width="36" height="6" rx="3" fill="#92400e" opacity="0.9" />
        {/* Soil */}
        <ellipse cx="350" cy="211" rx="16" ry="4" fill="#422006" opacity="0.8" />
        {/* Leaves */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          style={{ originX: '350px', originY: '210px' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="344" cy="196" rx="7" ry="14" fill="#16a34a" transform="rotate(-20 344 210)" opacity="0.9" />
          <ellipse cx="356" cy="196" rx="7" ry="14" fill="#15803d" transform="rotate(20 356 210)" opacity="0.9" />
          <ellipse cx="350" cy="194" rx="5" ry="16" fill="#22c55e" opacity="0.8" />
        </motion.g>

        {/* ── Desk items: small notebook ── */}
        <rect x="14" y="233" width="40" height="28" rx="2" fill="#1e3a5f" stroke="#2563eb" strokeWidth="0.5" opacity="0.8" />
        <rect x="18" y="238" width="28" height="2" rx="1" fill="#3b82f6" opacity="0.4" />
        <rect x="18" y="243" width="24" height="2" rx="1" fill="#3b82f6" opacity="0.3" />
        <rect x="18" y="248" width="26" height="2" rx="1" fill="#3b82f6" opacity="0.25" />
        <rect x="18" y="253" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.2" />

        {/* ── Desk shadow ── */}
        <ellipse cx="190" cy="282" rx="160" ry="8" fill="#000000" opacity="0.25" />
      </svg>
    </div>
  </div>
);

export default AnimatedDeveloper;
