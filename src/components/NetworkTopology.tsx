import React, { useEffect, useRef } from 'react';

interface NodeObj {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  colorIdx: number;
}

interface Packet {
  a: number;
  b: number;
  t: number;
  speed: number;
  colorIdx: number;
}

// Node colors — blue / purple / teal palette matching the site
const NODE_COLORS = [
  { core: 'rgba(96,165,250,', glow: 'rgba(96,165,250,' },   // blue-400
  { core: 'rgba(167,139,250,', glow: 'rgba(167,139,250,' }, // purple-400
  { core: 'rgba(52,211,153,', glow: 'rgba(52,211,153,' },   // emerald-400
  { core: 'rgba(129,140,248,', glow: 'rgba(129,140,248,' }, // indigo-400
];

const PACKET_COLORS = ['#60a5fa', '#a78bfa', '#34d399', '#818cf8', '#f472b6'];

const MAX_DIST   = 200;
const MAX_PACKETS = 18;

const NetworkTopology: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let frame = 0;
    let nodes: NodeObj[] = [];
    const packets: Packet[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.8 + 1,
        phase: Math.random() * Math.PI * 2,
        colorIdx: Math.floor(Math.random() * NODE_COLORS.length),
      }));
    };

    resize();
    initNodes();

    const onResize = () => {
      resize();
      // redistribute nodes within new bounds
      nodes.forEach(n => {
        n.x = Math.min(n.x, canvas.width);
        n.y = Math.min(n.y, canvas.height);
      });
    };
    window.addEventListener('resize', onResize);

    const spawnPacket = () => {
      if (packets.length >= MAX_PACKETS) return;
      for (let tries = 0; tries < 30; tries++) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a === b) continue;
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        if (Math.hypot(dx, dy) < MAX_DIST) {
          packets.push({
            a, b,
            t: 0,
            speed: 0.003 + Math.random() * 0.005,
            colorIdx: Math.floor(Math.random() * PACKET_COLORS.length),
          });
          return;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Spawn packets periodically
      if (frame % 40 === 0) spawnPacket();

      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0)             { n.x = 0;             n.vx *= -1; }
        if (n.x > canvas.width)  { n.x = canvas.width;  n.vx *= -1; }
        if (n.y < 0)             { n.y = 0;             n.vy *= -1; }
        if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1; }
        n.phase += 0.012;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = Math.sin(n.phase) * 0.35 + 0.65; // 0.3 → 1.0
        const r     = n.r * (0.85 + pulse * 0.3);
        const c     = NODE_COLORS[n.colorIdx];

        // soft glow halo
        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        halo.addColorStop(0,   c.glow + (pulse * 0.25).toFixed(2) + ')');
        halo.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = c.core + (0.55 + pulse * 0.35).toFixed(2) + ')';
        ctx.fill();
      });

      // Draw packets (data traveling along edges)
      for (let i = packets.length - 1; i >= 0; i--) {
        const p  = packets[i];
        p.t     += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }

        // check if the two nodes are still in range
        const na = nodes[p.a];
        const nb = nodes[p.b];
        const edgeDist = Math.hypot(na.x - nb.x, na.y - nb.y);
        if (edgeDist > MAX_DIST * 1.1) { packets.splice(i, 1); continue; }

        const px = na.x + (nb.x - na.x) * p.t;
        const py = na.y + (nb.y - na.y) * p.t;

        // glowing tail
        const tailT  = Math.max(0, p.t - 0.1);
        const tx     = na.x + (nb.x - na.x) * tailT;
        const ty     = na.y + (nb.y - na.y) * tailT;
        const tailG  = ctx.createLinearGradient(tx, ty, px, py);
        tailG.addColorStop(0, 'transparent');
        tailG.addColorStop(1, PACKET_COLORS[p.colorIdx] + 'bb');
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = tailG;
        ctx.lineWidth   = 1.8;
        ctx.stroke();

        // head glow
        const headG = ctx.createRadialGradient(px, py, 0, px, py, 6);
        headG.addColorStop(0, PACKET_COLORS[p.colorIdx] + 'ff');
        headG.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = headG;
        ctx.fill();

        // bright core
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.55 }}
    />
  );
};

export default NetworkTopology;
