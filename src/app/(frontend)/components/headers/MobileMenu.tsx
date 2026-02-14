"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";

interface NavigationItem {
  label: string;
  link: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString([], { hour12: false }));
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="relative z-10 flex flex-col gap-1.5 p-2 text-terminal-primary hover:text-terminal-primary/80 transition-all group"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-8 h-[2px] bg-current shadow-[0_0_8px_var(--terminal-primary)] transition-all" />
        <div className="w-8 h-[2px] bg-current shadow-[0_0_8px_var(--terminal-primary)] transition-all" />
        <div className="w-8 h-[2px] bg-current shadow-[0_0_8px_var(--terminal-primary)] transition-all" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Scanline and Flicker Overlay for Menu */}
          <div className="absolute inset-0 bg-terminal-black pointer-events-none z-[-1]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(var(--terminal-primary-rgb),0.03),rgba(0,0,0,0.02),rgba(var(--terminal-primary-rgb),0.03))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]" />
          
          <div className="container h-full mx-auto px-6 py-8 flex flex-col relative z-10">
            <div className="flex items-center justify-between mb-12">
              <div className="flex flex-col">
                <span className="text-sm font-mono text-terminal-primary/60 tracking-[0.2em] mb-1">SECURE_PROTOCOL_INIT</span>
                <span className="text-3xl font-display text-terminal-primary tracking-tighter">&gt; SYSTEM ACCESS_</span>
              </div>
              <button
                className="group text-terminal-primary hover:text-terminal-primary/80 transition-all p-2"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-2xl font-display group-hover:scale-110 transition-transform tracking-widest">[ X ]</span>
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
              <ul className="space-y-4">
                {navigation.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="opacity-100"
                  >
                    <Link 
                      href={item.link} 
                      className="group flex items-end gap-6 py-3 px-4 border-2 border-transparent hover:border-terminal-primary hover:bg-terminal-primary/10 transition-all overflow-hidden relative"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-terminal-primary/40 font-mono text-xl mb-1">0{idx + 1}</span>
                      <span className="text-5xl font-display text-terminal-primary group-hover:translate-x-2 transition-transform tracking-tight">
                        {item.label.toUpperCase()}
                      </span>
                      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-terminal-primary animate-pulse">_</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-8 border-t-2 border-terminal-primary/20 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-primary/40 font-mono text-[10px] uppercase tracking-[0.3em]">System_Config:</span>
                    <div className="h-[1px] flex-1 mx-4 bg-terminal-primary/10" />
                  </div>
                  <div className="flex items-center justify-between bg-terminal-primary/5 p-4 border border-terminal-primary/10">
                    <div className="flex flex-col">
                      <span className="text-terminal-primary font-mono text-xs uppercase tracking-widest mb-1">Visual_Interface</span>
                      <span className="text-terminal-primary/40 font-mono text-[9px] uppercase tracking-wider">Select primary phosphor hue</span>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-terminal-primary/5 p-4 border border-terminal-primary/10 flex flex-col gap-2">
                    <span className="text-terminal-primary/40 font-mono text-[10px] uppercase tracking-widest">Protocol</span>
                    <span className="text-terminal-primary font-mono text-xs">V1.0.2_STABLE</span>
                  </div>
                  <div className="bg-terminal-primary/5 p-4 border border-terminal-primary/10 flex flex-col gap-2 text-right">
                    <span className="text-terminal-primary/40 font-mono text-[10px] uppercase tracking-widest">Connection</span>
                    <span className="text-terminal-primary font-mono text-xs animate-pulse">ENCRYPTED</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] text-terminal-primary/30 uppercase tracking-[0.4em]">
                <span>&lt; SYSLOG_LOCAL &gt;</span>
                <span className="flex items-center gap-2">
                  TIMESTAMP: <span className="text-terminal-primary/60">{currentTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
