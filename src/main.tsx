import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import App from './App.tsx';
import './index.css';

// Initialise Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.6,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
  touchMultiplier: 1.5,
  infinite: false,
});

// Drive Lenis on every animation frame
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Let anchor links (#about, #projects etc.) work with Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
    if (target) lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.8 });
  });
});

// ── Console Easter egg ──────────────────────────────────────────
console.log(
  '%c\n' +
  ' ██████╗  █████╗ ███╗   ███╗ █████╗ \n' +
  ' ██╔══██╗██╔══██╗████╗ ████║██╔══██╗\n' +
  ' ██████╔╝███████║██╔████╔██║███████║\n' +
  ' ██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║\n' +
  ' ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║\n' +
  ' ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝\n',
  'color: #60a5fa; font-family: monospace; font-size: 11px; line-height: 1.4;',
);
console.log(
  '%cHey curious developer 👋',
  'color: #a78bfa; font-size: 16px; font-weight: bold; font-family: monospace;',
);
console.log(
  '%cYou found the console. I like you already.',
  'color: #94a3b8; font-size: 13px; font-family: monospace;',
);
console.log(
  '%c─────────────────────────────────────────',
  'color: #334155; font-family: monospace;',
);
console.log(
  '%c📧  satuluriramasheshasai@gmail.com\n' +
  '%c🐙  github.com/ramasheshasai\n' +
  '%c💼  linkedin.com/in/ramasheshasai',
  'color: #34d399; font-family: monospace; font-size: 12px;',
  'color: #60a5fa; font-family: monospace; font-size: 12px;',
  'color: #818cf8; font-family: monospace; font-size: 12px;',
);
console.log(
  '%c─────────────────────────────────────────',
  'color: #334155; font-family: monospace;',
);
console.log(
  '%c🚀  Built with React + TypeScript + Framer Motion',
  'color: #f59e0b; font-family: monospace; font-size: 11px;',
);
// ────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
