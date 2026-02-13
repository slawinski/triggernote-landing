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

      // 1. The "Mechanical Snap" (Extremely sharp, short transient)
      const snap = audioCtx.createOscillator();
      const snapGain = audioCtx.createGain();
      snap.type = "square";
      snap.frequency.setValueAtTime(1800, audioCtx.currentTime);
      snap.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.005);
      
      snapGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
      snapGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.005);
      
      snap.connect(snapGain);
      snapGain.connect(audioCtx.destination);

      // 2. The "Internal Click" (Duller mechanical impact)
      const click = audioCtx.createOscillator();
      const clickGain = audioCtx.createGain();
      click.type = "square";
      click.frequency.setValueAtTime(400, audioCtx.currentTime);
      click.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.01);
      
      clickGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);
      
      click.connect(clickGain);
      clickGain.connect(audioCtx.destination);

      // 3. The "Mechanical Ping" (Very high, very short metal-on-metal tick)
      const ping = audioCtx.createOscillator();
      const pingGain = audioCtx.createGain();
      ping.type = "sine";
      ping.frequency.setValueAtTime(4500, audioCtx.currentTime);
      
      pingGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      pingGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.003);
      
      ping.connect(pingGain);
      pingGain.connect(audioCtx.destination);

      snap.start();
      click.start();
      ping.start();

      snap.stop(audioCtx.currentTime + 0.005);
      click.stop(audioCtx.currentTime + 0.01);
      ping.stop(audioCtx.currentTime + 0.003);

      setTimeout(() => audioCtx.close(), 50);
    } catch (e) {
      console.error("Audio not supported", e);
    }
  };

  const playEndSound = () => {
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();

      // Sharp, gentle "settle" click
      const settle = audioCtx.createOscillator();
      const settleGain = audioCtx.createGain();

      settle.type = "square";
      settle.frequency.setValueAtTime(1200, audioCtx.currentTime);
      settle.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.005);

      settleGain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      settleGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.005);

      settle.connect(settleGain);
      settleGain.connect(audioCtx.destination);

      settle.start();
      settle.stop(audioCtx.currentTime + 0.005);

      setTimeout(() => audioCtx.close(), 50);
    } catch (e) {
      // Silent fail
    }
  };

  const handleToggle = () => {
    if (isDegaussing) return;

    setIsDegaussing(true);
    toggleTheme();

    setTimeout(() => {
      playDegaussSound();
    }, 24);

    setTimeout(() => {
      setIsDegaussing(false);
      playEndSound();
    }, 1600);
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
