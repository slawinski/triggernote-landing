"use client";

import React from "react";
import { useTheme } from "../ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div
        onClick={toggleTheme}
        className="flex p-1 gap-1 border-2 border-terminal-primary bg-terminal-black/80 cursor-pointer shadow-[0_0_10px_rgba(var(--terminal-primary-rgb),0.2)] hover:shadow-[0_0_15px_rgba(var(--terminal-primary-rgb),0.4)] transition-all group"
      >
        {/* GREEN SWITCH */}
        <div
          className={`
          w-10 h-10 flex items-center justify-center transition-all duration-300
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
          w-10 h-10 flex items-center justify-center transition-all duration-300
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
      <div className="hidden sm:block">
        <span className="text-[10px] font-mono text-terminal-primary/40 uppercase tracking-[0.2em] block leading-none mb-1">
          STATUS: ACTIVE
        </span>
        <span className="text-[10px] font-mono text-terminal-primary/40 uppercase tracking-[0.2em] block leading-none">
          MODE: {theme?.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
