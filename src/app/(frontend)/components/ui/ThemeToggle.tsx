"use client";

import React from "react";
import { useTheme } from "../ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="terminal-badge flex items-center space-x-2 px-3 hover:bg-terminal-primary hover:text-terminal-black transition-colors tracking-widest"
      aria-label="Toggle terminal theme"
    >
      <span
        className={
          theme === "green"
            ? "bg-terminal-primary text-terminal-black px-1 shadow-none"
            : "opacity-50"
        }
      >
        G
      </span>
      <span className="opacity-30">/</span>
      <span
        className={
          theme === "amber"
            ? "bg-terminal-primary text-terminal-black px-1 shadow-none"
            : "opacity-50"
        }
      >
        A
      </span>
    </button>
  );
};
