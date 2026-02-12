"use client";

import { Page } from "@/payload-types";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";
import { TerminalButton } from "../ui/TerminalButton";

type Header = Extract<Page["layout"][0], { blockType: "header" }>;

export const Header = ({ block }: { block: Header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(menuRef, () => setIsOpen(false));

  return (
    <section className="relative overflow-hidden border-b-2 border-terminal-green bg-terminal-black">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between pt-6 pb-6 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a className="relative z-10 inline-block" href="/">
                  <div className="text-3xl font-bold tracking-wider font-display text-terminal-green">
                    &gt; TRIGGERNOTE_
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-12">
                  {block.nav.map((item) => (
                    <li
                      key={item.id}
                      className="mr-12 text-terminal-green text-xl font-medium tracking-tighter hover:text-terminal-green/80 font-display"
                    >
                      <a href={item.link || ""}>[{item.label}]</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-auto hidden lg:block">
                {block.cta?.label && (
                  <div className="inline-block">
                    <TerminalButton href={block.cta.link || "#"}>
                      {block.cta.label}
                    </TerminalButton>
                  </div>
                )}
              </div>
              <div className="w-auto lg:hidden">
                <button
                  className="relative z-10 inline-block text-terminal-green hover:text-terminal-green/80 transition-colors"
                  aria-label="Open menu"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <svg
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="52"
                      height="52"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-terminal-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <nav
            ref={menuRef}
            className="relative z-10 w-full max-w-sm h-full bg-terminal-black border-l-2 border-terminal-green flex flex-col p-6 overflow-y-auto shadow-[0_0_20px_rgba(51,255,51,0.2)]"
          >
            <div className="flex items-center justify-between mb-8 border-b-2 border-terminal-green pb-4">
              <span className="text-xl font-display text-terminal-green">&gt; SYSTEM MENU</span>
              <button
                className="text-terminal-green hover:text-terminal-green/80"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                 <svg
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="square"
                    />
                  </svg>
              </button>
            </div>
            
            <div className="flex-1">
              <ul className="space-y-6">
                {block.nav.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.link || ""} 
                      className="block text-2xl font-display text-terminal-green hover:bg-terminal-green hover:text-terminal-black px-2 py-1 transition-colors"
                    >
                      &gt; {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-terminal-green">
              {block.cta?.label && (
                 <TerminalButton href={block.cta.link || "#"} className="w-full text-center">
                    {block.cta.label}
                 </TerminalButton>
              )}
              <div className="mt-4 text-center text-terminal-green/50 font-mono text-sm">
                VAULT-TEC PROTOCOL v1.0.2
              </div>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
};
