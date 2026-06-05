import React, { useEffect, useRef } from 'react';

const CHARS = '01{}[]()<>/\\;:.,!@#$%^&*=+-_アイウエカキクサシスタチツナニヌ';
const FONT_SIZE = 13;

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let drops: number[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      // Randomise starting positions so not all columns drop at once
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };

    const draw = () => {
      // Transparent fade — leaves faint trails
      ctx.fillStyle = 'rgba(10,10,10,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y    = drops[i] * FONT_SIZE;

        // Bright head character
        ctx.fillStyle = 'rgba(147,197,253,0.55)'; // blue-300
        ctx.fillText(char, i * FONT_SIZE, y);

        // Dimmer trailing char just above
        if (drops[i] > 1) {
          ctx.fillStyle = 'rgba(99,102,241,0.18)'; // indigo trail
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            i * FONT_SIZE,
            y - FONT_SIZE,
          );
        }

        // Reset column randomly after reaching bottom
        if (y > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i] += 0.45; // slow fall speed
      }

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.28 }}
    />
  );
};

export default CodeRain;
