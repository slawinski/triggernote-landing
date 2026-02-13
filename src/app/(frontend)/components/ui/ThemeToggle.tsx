"use client";

import React, { useState } from "react";
import { useTheme } from "../ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDegaussing, setIsDegaussing] = useState(false);

  const playDegaussSound = () => {
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Sharp, metallic square wave for the "clack"
      osc.type = "square";
      osc.frequency.setValueAtTime(200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.02
      );

      // Extremely fast decay (20ms) for a clean click
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.02
      );

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.03);

      setTimeout(() => audioCtx.close(), 100);
    } catch (e) {
      console.error("Audio not supported", e);
    }
  };

  const handleToggle = () => {
    if (isDegaussing) return;

    setIsDegaussing(true);
    toggleTheme();

    // Align click sound with the visual peak (3% of 0.8s is approx 24ms)
    setTimeout(() => {
      playDegaussSound();
    }, 24);

    setTimeout(() => {
      setIsDegaussing(false);
    }, 800);
  };

  return (
    <div className="flex items-center gap-3">
      <div
        onClick={handleToggle}
        className={`flex p-1 gap-1 border-2 border-terminal-primary bg-terminal-black/80 transition-all group ${
          isDegaussing
            ? "cursor-wait opacity-80"
            : "cursor-pointer shadow-[0_0_10px_rgba(var(--terminal-primary-rgb),0.2)] hover:shadow-[0_0_15px_rgba(var(--terminal-primary-rgb),0.4)]"
        }`}
      >
        {/* GREEN SWITCH */}
        <div
          className={`
          w-10 h-10 flex items-center justify-center
          ${
            theme === "green"
              ? "bg-terminal-primary text-terminal-black shadow-[0_0_15px_var(--terminal-primary)]"
              : "text-terminal-primary"
          }
        `}
        >
          <p className="font-display text-2xl font-bold m-0 leading-none">G</p>
        </div>

        {/* AMBER SWITCH */}
        <div
          className={`
          w-10 h-10 flex items-center justify-center
          ${
            theme === "amber"
              ? "bg-terminal-primary text-terminal-black shadow-[0_0_15px_var(--terminal-primary)]"
              : "text-terminal-primary"
          }
        `}
        >
          <p className="font-display text-2xl font-bold m-0 leading-none">A</p>
        </div>
      </div>
      <div className="hidden sm:block w-[100px]">
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.2em] block leading-none mb-1 whitespace-nowrap ${isDegaussing ? "text-terminal-primary animate-pulse" : "text-terminal-primary/40"}`}
        >
          STATUS: {isDegaussing ? "DEGAUSSING" : "ACTIVE"}
        </span>
        <span className="text-[10px] font-mono text-terminal-primary/40 uppercase tracking-[0.2em] block leading-none">
          MODE: {theme?.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
