import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&<>{}[]';

interface Props {
  text: string;
  className?: string;
  duration?: number; // ms
}

const ScrambleText = ({ text, className, duration = 550 }: Props) => {
  const [output, setOutput] = useState(text);
  const ref      = useRef<HTMLSpanElement>(null);
  const inView   = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const triggered = useRef(false);

  useEffect(() => {
    if (!inView || triggered.current) return;
    triggered.current = true;

    const totalFrames = Math.round(duration / 16); // ~60fps
    let frame = 0;
    let rafId: number;

    const tick = () => {
      const progress      = frame / totalFrames;
      // Resolve letters left-to-right
      const resolvedCount = Math.floor(progress * text.length);

      setOutput(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';          // never scramble spaces
            if (i < resolvedCount) return char;    // already resolved
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(''),
      );

      frame++;
      if (frame <= totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        setOutput(text); // guarantee exact final text
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, text, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {output}
    </span>
  );
};

export default ScrambleText;
