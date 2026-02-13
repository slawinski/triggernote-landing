"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "green" | "amber";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("green");

  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme") as Theme;
    if (savedTheme && (savedTheme === "green" || savedTheme === "amber")) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (t: Theme) => {
    if (t === "amber") {
      document.documentElement.classList.add("theme-amber");
    } else {
      document.documentElement.classList.remove("theme-amber");
    }
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("terminal-theme", t);
    applyTheme(t);
  };

  const toggleTheme = () => {
    const newTheme = theme === "green" ? "amber" : "green";
    
    // Start Degaussing Effect
    document.documentElement.classList.add('degaussing');
    
    // Switch theme color at the peak of the flash (approx 100ms)
    setTimeout(() => {
      setTheme(newTheme);
    }, 100);
    
    // Cleanup class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('degaussing');
    }, 400);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
