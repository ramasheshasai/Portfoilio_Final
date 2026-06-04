import React from 'react';

const BG = '#0d0d0d';
const DIM = '#ffffff07';

const Grid = () => (
  <g>
    {[40, 80, 120].map(y => <line key={`h${y}`} x1="0" y1={y} x2="280" y2={y} stroke={DIM} />)}
    {[70, 140, 210].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="160" stroke={DIM} />)}
  </g>
);

// ── 1. BookBazar ──────────────────────────────────────────────
export const BookBazarThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    {/* Shelf */}
    <rect x="50" y="115" width="140" height="4" rx="2" fill="#ffffff15" />
    {/* Books */}
    <rect x="58" y="70" width="28" height="45" rx="2" fill="#f59e0b" />
    <rect x="58" y="70" width="8" height="45" rx="1" fill="#d97706" />
    <rect x="62" y="78" width="14" height="2.5" rx="1" fill="#d97706" />
    <rect x="62" y="83" width="12" height="2" rx="1" fill="#d97706" />
    <rect x="93" y="82" width="26" height="33" rx="2" fill="#3b82f6" />
    <rect x="93" y="82" width="8" height="33" rx="1" fill="#2563eb" />
    <rect x="126" y="63" width="24" height="52" rx="2" fill="#8b5cf6" />
    <rect x="126" y="63" width="8" height="52" rx="1" fill="#7c3aed" />
    <rect x="157" y="90" width="22" height="25" rx="2" fill="#10b981" />
    <rect x="157" y="90" width="8" height="25" rx="1" fill="#059669" />
    {/* Cart */}
    <circle cx="215" cy="80" r="32" fill="#f59e0b08" stroke="#f59e0b18" />
    <path d="M200 64 L204 64 L211 84 L228 84 L232 72 L207 72" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="213" cy="89" r="3" fill="#f59e0b" />
    <circle cx="226" cy="89" r="3" fill="#f59e0b" />
    {/* Badges */}
    <rect x="20" y="130" width="36" height="15" rx="7" fill="#a78bfa20" stroke="#a78bfa35" />
    <text x="38" y="141" textAnchor="middle" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">PHP</text>
    <rect x="62" y="130" width="48" height="15" rx="7" fill="#60a5fa20" stroke="#60a5fa35" />
    <text x="86" y="141" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="monospace">MySQL</text>
    <rect x="116" y="130" width="28" height="15" rx="7" fill="#fbbf2420" stroke="#fbbf2435" />
    <text x="130" y="141" textAnchor="middle" fill="#fbbf24" fontSize="7.5" fontFamily="monospace">JS</text>
  </svg>
);

// ── 2. ReadmeForge ────────────────────────────────────────────
export const ReadmeForgeThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <rect x="14" y="20" width="252" height="124" rx="6" fill="#ffffff04" stroke="#ffffff10" />
    <rect x="14" y="20" width="252" height="22" rx="6" fill="#ffffff08" />
    <circle cx="28" cy="31" r="4" fill="#ef444440" />
    <circle cx="42" cy="31" r="4" fill="#fbbf2440" />
    <circle cx="56" cy="31" r="4" fill="#22c55e40" />
    <text x="140" y="35" textAnchor="middle" fill="#ffffff30" fontSize="8" fontFamily="monospace">README.md — ReadmeForge</text>
    {/* Divider */}
    <line x1="140" y1="42" x2="140" y2="144" stroke="#ffffff12" />
    {/* Left — markdown source */}
    <rect x="22" y="50" width="18" height="4" rx="2" fill="#60a5fa80" />
    <rect x="44" y="50" width="55" height="4" rx="2" fill="#ffffff40" />
    <rect x="22" y="60" width="100" height="3" rx="1.5" fill="#ffffff20" />
    <rect x="22" y="68" width="80" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="22" y="80" width="14" height="3" rx="1.5" fill="#fbbf2480" />
    <rect x="40" y="80" width="60" height="3" rx="1.5" fill="#ffffff30" />
    <rect x="22" y="88" width="95" height="3" rx="1.5" fill="#ffffff15" />
    <rect x="22" y="96" width="75" height="3" rx="1.5" fill="#ffffff12" />
    <rect x="22" y="108" width="10" height="10" rx="2" fill="#22c55e30" stroke="#22c55e50" />
    <rect x="36" y="111" width="55" height="3" rx="1.5" fill="#ffffff20" />
    <rect x="22" y="124" width="10" height="10" rx="2" fill="#22c55e20" stroke="#22c55e40" />
    <rect x="36" y="127" width="40" height="3" rx="1.5" fill="#ffffff15" />
    {/* Right — rendered preview */}
    <rect x="148" y="46" width="108" height="18" rx="3" fill="#22c55e20" stroke="#22c55e35" />
    <rect x="154" y="51" width="65" height="5" rx="2" fill="#22c55e60" />
    <rect x="148" y="70" width="96" height="3" rx="1.5" fill="#ffffff20" />
    <rect x="148" y="78" width="84" height="3" rx="1.5" fill="#ffffff15" />
    <rect x="148" y="90" width="60" height="16" rx="3" fill="#3b82f628" stroke="#3b82f645" />
    <text x="178" y="102" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="monospace">⭐ Preview</text>
    <rect x="148" y="112" width="92" height="3" rx="1.5" fill="#ffffff15" />
    <rect x="148" y="120" width="72" height="3" rx="1.5" fill="#ffffff10" />
    <rect x="148" y="128" width="60" height="3" rx="1.5" fill="#ffffff08" />
  </svg>
);

// ── 3. News Website ───────────────────────────────────────────
export const NewsThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <rect x="14" y="12" width="252" height="20" rx="4" fill="#ef444412" stroke="#ef444428" />
    <rect x="18" y="16" width="64" height="12" rx="6" fill="#ef4444" />
    <text x="50" y="26" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif" fontWeight="bold">BREAKING</text>
    <rect x="88" y="20" width="120" height="4" rx="2" fill="#ffffff28" />
    {/* Featured card */}
    <rect x="14" y="40" width="154" height="80" rx="5" fill="#ffffff05" stroke="#ffffff0f" />
    <rect x="14" y="40" width="154" height="44" rx="5" fill="#ef444412" />
    <rect x="20" y="46" width="60" height="34" rx="3" fill="#ef444420" />
    <text x="50" y="67" textAnchor="middle" fill="#ef444460" fontSize="20">📰</text>
    <rect x="88" y="50" width="68" height="5" rx="2" fill="#ffffff40" />
    <rect x="88" y="59" width="56" height="3.5" rx="1.5" fill="#ffffff25" />
    <rect x="88" y="66" width="62" height="3.5" rx="1.5" fill="#ffffff20" />
    <rect x="20" y="92" width="136" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="20" y="100" width="112" height="3" rx="1.5" fill="#ffffff14" />
    <rect x="20" y="108" width="88" height="3" rx="1.5" fill="#ffffff10" />
    {/* Side cards */}
    <rect x="176" y="40" width="90" height="38" rx="4" fill="#ffffff05" stroke="#ffffff0f" />
    <rect x="180" y="46" width="32" height="26" rx="2" fill="#3b82f618" />
    <rect x="218" y="50" width="40" height="4" rx="2" fill="#ffffff30" />
    <rect x="218" y="58" width="36" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="218" y="65" width="40" height="3" rx="1.5" fill="#ffffff12" />
    <rect x="176" y="84" width="90" height="38" rx="4" fill="#ffffff05" stroke="#ffffff0f" />
    <rect x="180" y="90" width="32" height="26" rx="2" fill="#8b5cf618" />
    <rect x="218" y="94" width="40" height="4" rx="2" fill="#ffffff30" />
    <rect x="218" y="102" width="36" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="218" y="109" width="40" height="3" rx="1.5" fill="#ffffff12" />
    {/* Category pills */}
    <rect x="14" y="130" width="38" height="14" rx="7" fill="#ef444418" stroke="#ef444435" />
    <text x="33" y="141" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">TECH</text>
    <rect x="58" y="130" width="48" height="14" rx="7" fill="#3b82f618" stroke="#3b82f635" />
    <text x="82" y="141" textAnchor="middle" fill="#60a5fa" fontSize="7" fontFamily="monospace">SPORTS</text>
    <rect x="112" y="130" width="56" height="14" rx="7" fill="#8b5cf618" stroke="#8b5cf635" />
    <text x="140" y="141" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="monospace">SCIENCE</text>
  </svg>
);

// ── 4. TaskFlow ───────────────────────────────────────────────
export const TaskFlowThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <rect x="36" y="14" width="208" height="134" rx="8" fill="#ffffff04" stroke="#ffffff0f" />
    <rect x="36" y="14" width="208" height="28" rx="8" fill="#10b98112" />
    <text x="140" y="33" textAnchor="middle" fill="#10b98170" fontSize="10" fontFamily="monospace" fontWeight="bold">TaskFlow</text>
    {/* Progress */}
    <rect x="50" y="52" width="180" height="6" rx="3" fill="#ffffff0f" />
    <rect x="50" y="52" width="112" height="6" rx="3" fill="#10b981" />
    <text x="214" y="57" textAnchor="middle" fill="#10b98170" fontSize="7" fontFamily="monospace">62%</text>
    {/* Task 1 — done */}
    <rect x="50" y="66" width="180" height="15" rx="3" fill="#10b98108" />
    <rect x="54" y="69" width="9" height="9" rx="2" fill="#10b981" />
    <text x="58.5" y="76.5" textAnchor="middle" fill="white" fontSize="7">✓</text>
    <rect x="68" y="72" width="85" height="3.5" rx="1.5" fill="#ffffff22" opacity="0.5" />
    <line x1="68" y1="73.5" x2="153" y2="73.5" stroke="#ffffff15" />
    {/* Task 2 — done */}
    <rect x="50" y="85" width="180" height="15" rx="3" fill="#10b98108" />
    <rect x="54" y="88" width="9" height="9" rx="2" fill="#10b981" />
    <text x="58.5" y="95.5" textAnchor="middle" fill="white" fontSize="7">✓</text>
    <rect x="68" y="91" width="100" height="3.5" rx="1.5" fill="#ffffff22" opacity="0.5" />
    <line x1="68" y1="92.5" x2="168" y2="92.5" stroke="#ffffff15" />
    {/* Task 3 — active */}
    <rect x="50" y="104" width="180" height="15" rx="3" fill="#3b82f610" stroke="#3b82f625" />
    <rect x="54" y="107" width="9" height="9" rx="2" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
    <rect x="68" y="110" width="110" height="3.5" rx="1.5" fill="#60a5fa38" />
    {/* Task 4 — todo */}
    <rect x="50" y="123" width="180" height="15" rx="3" fill="#ffffff03" />
    <rect x="54" y="126" width="9" height="9" rx="2" fill="none" stroke="#ffffff20" strokeWidth="1.5" />
    <rect x="68" y="129" width="72" height="3.5" rx="1.5" fill="#ffffff15" />
    {/* Stat chips */}
    <rect x="50" y="144" width="44" height="12" rx="6" fill="#10b98118" stroke="#10b98130" />
    <text x="72" y="153" textAnchor="middle" fill="#34d399" fontSize="7" fontFamily="monospace">Done: 2</text>
    <rect x="100" y="144" width="52" height="12" rx="6" fill="#3b82f618" stroke="#3b82f630" />
    <text x="126" y="153" textAnchor="middle" fill="#60a5fa" fontSize="7" fontFamily="monospace">Active: 1</text>
  </svg>
);

// ── 5. ProdigyPM ──────────────────────────────────────────────
export const ProdigyPMThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    {/* Document */}
    <rect x="14" y="12" width="148" height="136" rx="6" fill="#ffffff04" stroke="#ffffff10" />
    <rect x="14" y="12" width="148" height="26" rx="6" fill="#3b82f614" />
    <rect x="22" y="19" width="68" height="5" rx="2" fill="#60a5fa65" />
    <rect x="22" y="28" width="108" height="3" rx="1.5" fill="#ffffff28" />
    {/* Sections */}
    <rect x="22" y="46" width="38" height="4" rx="2" fill="#60a5fa55" />
    <rect x="22" y="55" width="126" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="22" y="62" width="108" height="3" rx="1.5" fill="#ffffff14" />
    <rect x="22" y="69" width="118" height="3" rx="1.5" fill="#ffffff10" />
    <rect x="22" y="79" width="52" height="4" rx="2" fill="#8b5cf655" />
    <rect x="22" y="88" width="126" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="22" y="95" width="94" height="3" rx="1.5" fill="#ffffff12" />
    {/* Persona cards */}
    <rect x="22" y="106" width="58" height="34" rx="4" fill="#3b82f610" stroke="#3b82f625" />
    <circle cx="51" cy="119" r="9" fill="#3b82f630" />
    <rect x="30" y="131" width="40" height="3" rx="1.5" fill="#60a5fa45" />
    <rect x="36" y="136" width="28" height="3" rx="1.5" fill="#ffffff18" />
    <rect x="86" y="106" width="58" height="34" rx="4" fill="#8b5cf610" stroke="#8b5cf625" />
    <circle cx="115" cy="119" r="9" fill="#8b5cf630" />
    <rect x="94" y="131" width="40" height="3" rx="1.5" fill="#a78bfa45" />
    <rect x="100" y="136" width="28" height="3" rx="1.5" fill="#ffffff18" />
    {/* Right panel */}
    <rect x="172" y="12" width="94" height="136" rx="6" fill="#ffffff04" stroke="#ffffff10" />
    <text x="219" y="30" textAnchor="middle" fill="#ffffff28" fontSize="8" fontFamily="monospace">Features</text>
    {[
      { y: 42, w: 70, c: '#10b981' },
      { y: 56, w: 65, c: '#10b981' },
      { y: 70, w: 58, c: '#3b82f6' },
      { y: 84, w: 50, c: '#3b82f6' },
      { y: 98, w: 44, c: '#8b5cf6' },
      { y: 112, w: 38, c: '#ffffff' },
      { y: 126, w: 28, c: '#ffffff' },
    ].map(({ y, w, c }, i) => (
      <g key={y}>
        <circle cx="183" cy={y + 2} r="3" fill={c} opacity={i > 4 ? 0.15 : 0.5} />
        <rect x="190" y={y} width={w} height="3" rx="1.5" fill={c} opacity={i > 4 ? 0.1 : 0.25} />
      </g>
    ))}
    <rect x="178" y="140" width="80" height="4" rx="2" fill="#3b82f635" />
  </svg>
);

// ── 6. DevSync-Arena ──────────────────────────────────────────
export const DevSyncThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <rect x="14" y="12" width="252" height="136" rx="6" fill="#0f0f0f" stroke="#ffffff10" />
    <rect x="14" y="12" width="252" height="22" rx="6" fill="#ffffff08" />
    <circle cx="28" cy="23" r="4" fill="#ef444440" />
    <circle cx="42" cy="23" r="4" fill="#fbbf2440" />
    <circle cx="56" cy="23" r="4" fill="#22c55e40" />
    <text x="140" y="27" textAnchor="middle" fill="#ffffff22" fontSize="8" fontFamily="monospace">DevSync Arena — 3 collaborators</text>
    {/* Line numbers */}
    {[40, 51, 62, 73, 84, 95, 106, 117, 128, 139].map((y, i) => (
      <text key={y} x="30" y={y} textAnchor="middle" fill="#ffffff20" fontSize="8" fontFamily="monospace">{i + 1}</text>
    ))}
    {/* Code lines */}
    <rect x="42" y="35" width="32" height="4" rx="2" fill="#c084fc70" />
    <rect x="78" y="35" width="24" height="4" rx="2" fill="#60a5fa70" />
    <rect x="106" y="35" width="10" height="4" rx="2" fill="#f8fafc50" />
    <rect x="50" y="46" width="20" height="4" rx="2" fill="#34d39960" />
    <rect x="74" y="46" width="8" height="4" rx="2" fill="#f8fafc40" />
    <rect x="86" y="46" width="52" height="4" rx="2" fill="#fbbf2448" />
    {/* Cursor 1 - blue */}
    <rect x="140" y="43" width="2" height="10" rx="1" fill="#3b82f6" />
    <rect x="122" y="36" width="30" height="12" rx="3" fill="#3b82f622" />
    <text x="137" y="45" fill="#60a5fa" fontSize="6" fontFamily="sans-serif">Alex</text>
    <rect x="50" y="57" width="42" height="4" rx="2" fill="#60a5fa58" />
    <rect x="96" y="57" width="8" height="4" rx="2" fill="#f8fafc38" />
    <rect x="108" y="57" width="32" height="4" rx="2" fill="#34d39948" />
    <rect x="42" y="68" width="10" height="4" rx="2" fill="#f8fafc38" />
    <rect x="50" y="79" width="58" height="4" rx="2" fill="#c084fc58" />
    <rect x="112" y="79" width="16" height="4" rx="2" fill="#f8fafc30" />
    {/* Cursor 2 - green */}
    <rect x="130" y="76" width="2" height="10" rx="1" fill="#10b981" />
    <rect x="112" y="69" width="28" height="12" rx="3" fill="#10b98120" />
    <text x="126" y="78" fill="#34d399" fontSize="6" fontFamily="sans-serif">Sam</text>
    <rect x="50" y="90" width="72" height="4" rx="2" fill="#60a5fa48" />
    <rect x="50" y="101" width="48" height="4" rx="2" fill="#fbbf2448" />
    <rect x="42" y="112" width="10" height="4" rx="2" fill="#f8fafc38" />
    {/* Cursor 3 - purple */}
    <rect x="100" y="98" width="2" height="10" rx="1" fill="#a855f7" />
    <rect x="100" y="89" width="30" height="12" rx="3" fill="#a855f720" />
    <text x="115" y="98" fill="#c084fc" fontSize="6" fontFamily="sans-serif">You</text>
    {/* Status bar */}
    <rect x="14" y="138" width="252" height="10" rx="3" fill="#ffffff06" />
    <circle cx="28" cy="143" r="3" fill="#10b981" />
    <text x="36" y="146" fill="#ffffff28" fontSize="6" fontFamily="monospace">Socket.IO · 3 online</text>
    <text x="230" y="146" fill="#ffffff18" fontSize="6" fontFamily="monospace">JS · UTF-8</text>
  </svg>
);

// ── 7. ProdigyPM — Product Analysis ──────────────────────────
export const ProdigyAnalysisThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <text x="140" y="18" textAnchor="middle" fill="#22d3ee35" fontSize="8" fontFamily="monospace" letterSpacing="2">USER JOURNEY</text>
    {/* Funnel steps */}
    <rect x="18" y="26" width="244" height="24" rx="4" fill="#3b82f618" stroke="#3b82f638" />
    <text x="140" y="42" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="sans-serif" fontWeight="500">① Awareness</text>
    {[28, 38, 48, 58].map((cx, i) => (
      <circle key={cx} cx={cx} cy={38} r={5} fill="#3b82f6" opacity={0.6 - i * 0.1} />
    ))}
    <line x1="140" y1="50" x2="140" y2="58" stroke="#ffffff18" strokeWidth="1.5" />
    <polygon points="140,62 136,56 144,56" fill="#ffffff20" />
    <rect x="28" y="62" width="224" height="22" rx="4" fill="#8b5cf618" stroke="#8b5cf638" />
    <text x="140" y="77" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="sans-serif" fontWeight="500">② Consideration</text>
    <line x1="140" y1="84" x2="140" y2="92" stroke="#ffffff18" strokeWidth="1.5" />
    <polygon points="140,96 136,90 144,90" fill="#ffffff20" />
    <rect x="44" y="96" width="192" height="22" rx="4" fill="#10b98118" stroke="#10b98138" />
    <text x="140" y="111" textAnchor="middle" fill="#34d399" fontSize="8" fontFamily="sans-serif" fontWeight="500">③ Conversion</text>
    <line x1="140" y1="118" x2="140" y2="126" stroke="#ffffff18" strokeWidth="1.5" />
    <polygon points="140,130 136,124 144,124" fill="#ffffff20" />
    <rect x="64" y="130" width="152" height="22" rx="4" fill="#f59e0b18" stroke="#f59e0b38" />
    <text x="140" y="145" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="sans-serif" fontWeight="500">④ Retention</text>
  </svg>
);

// ── 8. Chronicle Product Teardown ─────────────────────────────
export const ChronicleTeardownThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    {/* Main slide */}
    <rect x="14" y="14" width="178" height="112" rx="6" fill="#ffffff04" stroke="#ffffff12" />
    <rect x="14" y="14" width="178" height="26" rx="6" fill="#ec489918" />
    <rect x="22" y="21" width="72" height="5" rx="2" fill="#ec489975" />
    <rect x="22" y="30" width="104" height="3" rx="1.5" fill="#ffffff28" />
    {/* App mockup inside slide */}
    <rect x="22" y="48" width="84" height="68" rx="4" fill="#ffffff05" stroke="#ffffff0f" />
    <rect x="26" y="52" width="76" height="14" rx="2" fill="#ec489918" />
    <rect x="28" y="55" width="50" height="4" rx="2" fill="#ec489945" />
    <rect x="26" y="70" width="76" height="3.5" rx="1.5" fill="#ffffff14" />
    <rect x="26" y="78" width="62" height="3.5" rx="1.5" fill="#ffffff10" />
    <rect x="26" y="86" width="70" height="3.5" rx="1.5" fill="#ffffff0c" />
    <rect x="26" y="96" width="44" height="14" rx="3" fill="#ec489928" />
    <text x="48" y="107" textAnchor="middle" fill="#ec4899" fontSize="7" fontFamily="sans-serif">CTA</text>
    {/* Annotation 1 */}
    <path d="M110 62 C126 57 140 50 154 44" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
    <circle cx="110" cy="62" r="3.5" fill="#fbbf24" />
    <rect x="154" y="36" width="44" height="14" rx="3" fill="#fbbf2418" stroke="#fbbf2435" />
    <text x="176" y="47" textAnchor="middle" fill="#fbbf24" fontSize="7" fontFamily="sans-serif">Pain point</text>
    {/* Annotation 2 */}
    <path d="M114 103 C130 106 146 112 158 118" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
    <circle cx="114" cy="103" r="3.5" fill="#34d399" />
    <rect x="158" y="112" width="38" height="14" rx="3" fill="#10b98118" stroke="#10b98135" />
    <text x="177" y="123" textAnchor="middle" fill="#34d399" fontSize="7" fontFamily="sans-serif">Insight</text>
    {/* Slide thumbnails on right */}
    {[0, 1, 2].map(i => (
      <rect key={i} x="202" y={14 + i * 38} width="64" height="28" rx="3"
        fill="#ffffff04" stroke={i === 0 ? '#ec489955' : '#ffffff0f'} />
    ))}
    <text x="234" y="33" textAnchor="middle" fill={`#ec4899${80}`} fontSize="7" fontFamily="monospace">1/3</text>
    {/* Bottom bar */}
    <rect x="14" y="134" width="252" height="14" rx="4" fill="#ffffff04" />
    <text x="140" y="145" textAnchor="middle" fill="#ffffff22" fontSize="7" fontFamily="monospace">Chronicle · Product Teardown</text>
  </svg>
);

// ── 9. Netflix — System Design ────────────────────────────────
export const NetflixSDThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <text x="140" y="16" textAnchor="middle" fill="#ef444435" fontSize="8" fontFamily="monospace" letterSpacing="2">NETFLIX · SYSTEM DESIGN</text>
    {/* Client */}
    <rect x="10" y="60" width="48" height="32" rx="4" fill="#ef444418" stroke="#ef444435" />
    <text x="34" y="79" textAnchor="middle" fill="#ef4444" fontSize="7.5" fontFamily="monospace">Client</text>
    <line x1="58" y1="76" x2="78" y2="76" stroke="#ef444440" strokeWidth="1.5" />
    <polygon points="78,76 73,73 73,79" fill="#ef444440" />
    {/* CDN nodes */}
    <rect x="78" y="46" width="48" height="24" rx="4" fill="#ef444418" stroke="#ef444435" />
    <text x="102" y="59" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">CDN</text>
    <text x="102" y="67" textAnchor="middle" fill="#ef444455" fontSize="6" fontFamily="monospace">edge-1</text>
    <rect x="78" y="84" width="48" height="24" rx="4" fill="#ef444412" stroke="#ef444428" />
    <text x="102" y="97" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">CDN</text>
    <text x="102" y="105" textAnchor="middle" fill="#ef444450" fontSize="6" fontFamily="monospace">edge-2</text>
    {/* Connections to origin */}
    <line x1="126" y1="58" x2="148" y2="70" stroke="#ffffff18" strokeWidth="1" />
    <line x1="126" y1="96" x2="148" y2="86" stroke="#ffffff18" strokeWidth="1" />
    {/* Origin */}
    <rect x="148" y="48" width="54" height="56" rx="4" fill="#3b82f614" stroke="#3b82f628" />
    <text x="175" y="70" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="monospace">Origin</text>
    <text x="175" y="80" textAnchor="middle" fill="#60a5fa55" fontSize="6" fontFamily="monospace">Servers</text>
    <rect x="156" y="88" width="38" height="6" rx="3" fill="#3b82f628" />
    <rect x="156" y="97" width="30" height="6" rx="3" fill="#3b82f618" />
    {/* DB */}
    <line x1="202" y1="76" x2="224" y2="76" stroke="#ffffff18" strokeWidth="1.5" />
    <polygon points="224,76 219,73 219,79" fill="#ffffff20" />
    <rect x="224" y="58" width="46" height="36" rx="4" fill="#8b5cf614" stroke="#8b5cf628" />
    <ellipse cx="247" cy="68" rx="17" ry="5" fill="#8b5cf628" />
    <rect x="230" y="68" width="34" height="16" fill="#8b5cf612" />
    <ellipse cx="247" cy="84" rx="17" ry="5" fill="#8b5cf628" />
    {/* Microservice pills */}
    {['API GW', 'Auth', 'Encoder', 'Rec. ML'].map((s, i) => (
      <g key={s}>
        <rect x={10 + i * 67} y={124} width={58} height={18} rx={9} fill="#ef444410" stroke="#ef444422" />
        <text x={39 + i * 67} y={137} textAnchor="middle" fill="#ef444470" fontSize="7" fontFamily="monospace">{s}</text>
      </g>
    ))}
  </svg>
);

// ── 10. Google Analytics — System Design ──────────────────────
export const GoogleAnalyticsSDThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <text x="140" y="15" textAnchor="middle" fill="#fbbf2430" fontSize="8" fontFamily="monospace" letterSpacing="1">GOOGLE ANALYTICS · ARCHITECTURE</text>
    {/* Pipeline */}
    {[
      { x: 10, label: 'Events', sub: 'SDK', c: '#fbbf24' },
      { x: 76, label: 'Ingest', sub: 'Kafka', c: '#ef4444' },
      { x: 142, label: 'Process', sub: 'Spark', c: '#3b82f6' },
      { x: 208, label: 'Store', sub: 'BigQuery', c: '#10b981' },
    ].map(({ x, label, sub, c }, i) => (
      <g key={x}>
        <rect x={x} y={24} width={58} height={32} rx="4" fill={`${c}12`} stroke={`${c}28`} />
        <text x={x + 29} y={40} textAnchor="middle" fill={c} fontSize="7.5" fontFamily="monospace">{label}</text>
        <text x={x + 29} y={50} textAnchor="middle" fill={`${c}60`} fontSize="6" fontFamily="monospace">{sub}</text>
        {i < 3 && (
          <>
            <line x1={x + 58} y1={40} x2={x + 66} y2={40} stroke={`${c}40`} strokeWidth="1.5" />
            <polygon points={`${x + 66},40 ${x + 61},37 ${x + 61},43`} fill={`${c}40`} />
          </>
        )}
      </g>
    ))}
    {/* Bar chart */}
    <rect x="10" y="68" width="130" height="76" rx="4" fill="#ffffff04" stroke="#ffffff0f" />
    {[
      { x: 20, h: 32, c: '#3b82f6' },
      { x: 38, h: 48, c: '#8b5cf6' },
      { x: 56, h: 26, c: '#10b981' },
      { x: 74, h: 56, c: '#f59e0b' },
      { x: 92, h: 42, c: '#ef4444' },
      { x: 110, h: 62, c: '#3b82f6' },
    ].map(({ x, h, c }, i) => (
      <rect key={i} x={x} y={134 - h} width={14} height={h} rx="2" fill={c} opacity={0.55} />
    ))}
    <line x1="14" y1="134" x2="136" y2="134" stroke="#ffffff12" />
    <text x="75" y="148" textAnchor="middle" fill="#ffffff20" fontSize="7" fontFamily="monospace">Real-time analytics</text>
    {/* Funnel */}
    <rect x="150" y="68" width="120" height="76" rx="4" fill="#ffffff04" stroke="#ffffff0f" />
    {[
      { y: 78, w: 108, c: '#fbbf24', l: '100K events/s' },
      { y: 94, w: 88, c: '#f59e0b', l: '85K processed' },
      { y: 110, w: 68, c: '#ef4444', l: '70K stored' },
      { y: 126, w: 48, c: '#dc2626', l: '50K queried' },
    ].map(({ y, w, c, l }) => (
      <g key={y}>
        <rect x={155 + (108 - w) / 2} y={y} width={w} height={10} rx="2" fill={c} opacity={0.38} />
        <text x={266} y={y + 8} textAnchor="end" fill={c} fontSize="6" fontFamily="monospace" opacity={0.65}>{l}</text>
      </g>
    ))}
    <text x="210" y="148" textAnchor="middle" fill="#ffffff20" fontSize="7" fontFamily="monospace">Data funnel</text>
  </svg>
);

// ── 11. YouTube — System Design Notes ─────────────────────────
export const YouTubeSDThumb = () => (
  <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="160" fill={BG} />
    <Grid />
    <text x="140" y="15" textAnchor="middle" fill="#ef444435" fontSize="8" fontFamily="monospace" letterSpacing="1">YOUTUBE · SYSTEM DESIGN</text>
    {/* Video player */}
    <rect x="12" y="24" width="116" height="72" rx="4" fill="#000000" stroke="#ef444428" />
    <circle cx="70" cy="60" r="18" fill="#ef444418" stroke="#ef444330" />
    <polygon points="64,52 64,68 82,60" fill="#ef4444" opacity="0.8" />
    <rect x="12" y="88" width="116" height="5" rx="2" fill="#ffffff0c" />
    <rect x="12" y="88" width="72" height="5" rx="2" fill="#ef4444" />
    <text x="12" y="108" fill="#ffffff28" fontSize="6.5" fontFamily="monospace">2.4M views · 3 days ago</text>
    {/* Upload pipeline */}
    <rect x="138" y="24" width="52" height="26" rx="4" fill="#ef444415" stroke="#ef444330" />
    <text x="164" y="40" textAnchor="middle" fill="#ef4444" fontSize="7.5" fontFamily="monospace">Upload</text>
    <line x1="190" y1="37" x2="202" y2="37" stroke="#ef444435" strokeWidth="1.5" />
    <polygon points="202,37 197,34 197,40" fill="#ef444435" />
    <rect x="202" y="24" width="66" height="26" rx="4" fill="#3b82f614" stroke="#3b82f628" />
    <text x="235" y="34" textAnchor="middle" fill="#60a5fa" fontSize="7" fontFamily="monospace">Encoding</text>
    <text x="235" y="44" textAnchor="middle" fill="#60a5fa55" fontSize="6" fontFamily="monospace">360p/720p/4K</text>
    <line x1="235" y1="50" x2="235" y2="62" stroke="#ffffff15" strokeWidth="1.5" />
    <polygon points="235,66 231,60 239,60" fill="#ffffff18" />
    <rect x="202" y="66" width="66" height="26" rx="4" fill="#10b98114" stroke="#10b98128" />
    <text x="235" y="82" textAnchor="middle" fill="#10b981" fontSize="7.5" fontFamily="monospace">CDN</text>
    <text x="235" y="91" textAnchor="middle" fill="#10b98155" fontSize="6" fontFamily="monospace">Global edge</text>
    <rect x="138" y="66" width="52" height="26" rx="4" fill="#8b5cf614" stroke="#8b5cf628" />
    <text x="164" y="79" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="monospace">Rec. ML</text>
    <text x="164" y="88" textAnchor="middle" fill="#a78bfa55" fontSize="6" fontFamily="monospace">Collab. filter</text>
    {/* DB row */}
    {[
      { x: 12, label: 'Metadata', c: '#fbbf24' },
      { x: 82, label: 'Comments', c: '#ef4444' },
      { x: 152, label: 'User Data', c: '#3b82f6' },
      { x: 212, label: 'Analytics', c: '#10b981' },
    ].map(({ x, label, c }) => (
      <g key={x}>
        <rect x={x} y={114} width={58} height={20} rx="4" fill={`${c}12`} stroke={`${c}28`} />
        <text x={x + 29} y={128} textAnchor="middle" fill={c} opacity={0.7} fontSize="7" fontFamily="monospace">{label}</text>
      </g>
    ))}
    <text x="140" y="152" textAnchor="middle" fill="#ffffff12" fontSize="6" fontFamily="monospace">Scalable · Distributed · Fault-tolerant</text>
  </svg>
);
