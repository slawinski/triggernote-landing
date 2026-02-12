"use client";

import React from "react";
import { useTheme } from "../ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-3 py-1 border border-terminal-primary hover:bg-terminal-primary hover:text-terminal-black transition-colors font-display text-sm tracking-widest uppercase"
      aria-label="Toggle terminal theme"
    >
      <span className={theme === "green" ? "text-terminal-black bg-terminal-primary px-1" : "opacity-50"}>
        G
      </span>
      <span className="opacity-30">/</span>
      <span className={theme === "amber" ? "text-terminal-black bg-terminal-primary px-1" : "opacity-50"}>
        A
      </span>
    </button>
  );
};
