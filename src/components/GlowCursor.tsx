import React, { useEffect, useRef, useState } from 'react';

const GlowCursor = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse), not touch
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const over = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest('a, button'));
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer glow ring */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-blue-500/30 transition-[width,height,opacity] duration-200"
        style={{
          width:  hovering ? 52 : 48,
          height: hovering ? 52 : 48,
          background: hovering
            ? 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-blue-400 transition-[transform] duration-75"
        style={{ opacity: 0.9 }}
      />
    </>
  );
};

export default GlowCursor;
