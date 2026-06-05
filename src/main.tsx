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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
