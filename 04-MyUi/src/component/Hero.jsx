import { useEffect, useRef } from "react";

const css = `
  @keyframes orbit-cw {
    from { transform: rotate(0deg) translateX(var(--r)) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
  }
  @keyframes float-hub {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50%       { transform: translate(-50%, -50%) translateY(-8px); }
  }
  .orbit-item {
    position: absolute;
    width: 150px; height: 150px;
    top: 0; left: 0;
    margin: -30px 0 0 -30px;
    animation: orbit-cw var(--dur) linear infinite;
    animation-delay: var(--delay);
  }
  .orbit-item-inner {
    width: 100%; height: 100%;
    border-radius: 9999px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 24px rgba(0,0,0,0.18);
    transition: transform 0.2s;
  }
  .orbit-item:hover .orbit-item-inner { transform: scale(1.15); }
`;

const INNER_ICONS = [
  {
    id: "tms", label: "TMS", bg: "#111827", r: 250, dur: 18, delay: "0s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <rect x="2" y="7" width="20" height="10" rx="2" stroke="#fff" strokeWidth="1.8" />
        <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#fff" strokeWidth="1.8" />
        <circle cx="8" cy="17" r="2" fill="#f97316" />
        <circle cx="16" cy="17" r="2" fill="#f97316" />
      </svg>
    ),
  },
  {
    id: "email", label: "Email", bg: "#1d4ed8", r: 250, dur: 18, delay: "-6s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeWidth="1.8" />
        <path d="M2 8l10 7 10-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "chat", label: "Chat", bg: "#059669", r: 250, dur: 18, delay: "-12s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="50" height="50">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="1" fill="#fff" />
        <circle cx="12" cy="10" r="1" fill="#fff" />
        <circle cx="15" cy="10" r="1" fill="#fff" />
      </svg>
    ),
  },
];

const OUTER_ICONS = [
  {
    id: "invoice", label: "Invoice", bg: "#f97316", r: 400, dur: 30, delay: "0s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="50" height="50">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#fff" strokeWidth="1.8" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "crm", label: "CRM", bg: "#7c3aed", r: 400, dur: 30, delay: "-7.5s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="50" height="50">
        <circle cx="12" cy="8" r="3.5" stroke="#fff" strokeWidth="1.8" />
        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7"
          stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "track", label: "Tracking", bg: "#0ea5e9", r: 400, dur: 30, delay: "-15s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="50" height="50">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" fill="#fff" />
      </svg>
    ),
  },
  {
    id: "ai", label: "AI Agent", bg: "#111827", r: 400, dur: 30, delay: "-22.5s",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="50" height="50">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#fff" strokeWidth="1.8" />
        <path d="M8 6V4a4 4 0 018 0v2" stroke="#fff" strokeWidth="1.8" />
        <circle cx="9" cy="12" r="1.5" fill="#f97316" />
        <circle cx="15" cy="12" r="1.5" fill="#f97316" />
        <path d="M9 16h6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function OrbitIcon({ icon }) {
  return (
    <div
      className="orbit-item"
      style={{ "--r": `${icon.r}px`, "--dur": `${icon.dur}s`, "--delay": icon.delay }}
      title={icon.label}
    >
      <div className="orbit-item-inner" style={{ background: icon.bg }}>
        {icon.svg}
      </div>
    </div>
  );
}

export default function OrbitAnimation() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const tag = document.createElement("style");
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="relative .flex-shrink-0" style={{ width: 1000, height: 1000 }}>

      {/* Outer dashed track */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width: 800, height:800, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          border: "1.5px dashed rgba(249,115,22,0.25)" }} />

      {/* Inner dashed track */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          border: "1.5px dashed rgba(0,0,0,0.1)" }} />

      {/* Glow */}
      <div className="absolute rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ width: 500, height: 500, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, #f97316, transparent 70%)" }} />

      {/* Center hub */}
      <div className="absolute rounded-full flex flex-col items-center justify-center z-10"
        style={{ width: 200, height: 200, top: "50%", left: "50%",
          background: "#111",
          boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
          animation: "float-hub 3.5s ease-in-out infinite" }}>
        <svg viewBox="0 0 32 32" fill="none" width="36" height="36">
          <path d="M16 6v20M6 16h20" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
        </svg>
        <span className="text-white/50 font-bold mt-1" style={{ fontSize: 17, letterSpacing: 2 }}>
          AI CORE
        </span>
      </div>

      {/* Orbiting icons */}
      <div className="absolute" style={{ top: "50%", left: "50%", width: 100, height: 100 }}>
        {INNER_ICONS.map(icon => <OrbitIcon key={icon.id} icon={icon} />)}
        {OUTER_ICONS.map(icon => <OrbitIcon key={icon.id} icon={icon} />)}
      </div>
    </div>
  );
}