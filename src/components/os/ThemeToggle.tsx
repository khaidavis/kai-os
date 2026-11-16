"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [night, setNight] = useState(false);

  // Read what the head script already set
  useEffect(() => {
    setNight(document.documentElement.dataset.theme === "night");
  }, []);

  function toggle() {
    const next = !night;
    setNight(next);
    if (next) document.documentElement.dataset.theme = "night";
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("theme", next ? "night" : "day"); } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={night}
      className={`flex items-center gap-2 border-l-[3px] border-line px-[18px] font-mono text-[13px] font-semibold ${
        night ? "bg-gold text-[#111]" : "bg-[#111] text-gold"
      }`}
    >
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
      </svg>
      {night ? "DAY MODE" : "LATE NIGHT"}
    </button>
  );
}