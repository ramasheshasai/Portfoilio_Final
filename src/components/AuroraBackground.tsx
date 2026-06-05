import React from 'react';

const AuroraBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

    {/* Blue — top left */}
    <div
      className="aurora-blob"
      style={{
        width: 780, height: 620,
        top: -180, left: -160,
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.45) 0%, transparent 70%)',
        animation: 'aurora-drift1 20s ease-in-out infinite',
      }}
    />

    {/* Purple — top right */}
    <div
      className="aurora-blob"
      style={{
        width: 700, height: 700,
        top: -100, right: -150,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)',
        animation: 'aurora-drift2 25s ease-in-out infinite',
      }}
    />

    {/* Teal — middle left */}
    <div
      className="aurora-blob"
      style={{
        width: 560, height: 560,
        top: '38%', left: -120,
        background: 'radial-gradient(ellipse, rgba(13,148,136,0.35) 0%, transparent 70%)',
        animation: 'aurora-drift3 18s ease-in-out infinite',
      }}
    />

    {/* Indigo — middle right */}
    <div
      className="aurora-blob"
      style={{
        width: 620, height: 520,
        top: '45%', right: -100,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.38) 0%, transparent 70%)',
        animation: 'aurora-drift4 22s ease-in-out infinite',
      }}
    />

    {/* Blue-violet — bottom center */}
    <div
      className="aurora-blob"
      style={{
        width: 680, height: 500,
        bottom: -150, left: '25%',
        background: 'radial-gradient(ellipse, rgba(67,56,202,0.38) 0%, transparent 70%)',
        animation: 'aurora-drift1 28s ease-in-out infinite reverse',
      }}
    />
  </div>
);

export default AuroraBackground;
