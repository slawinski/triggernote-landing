"use client";

import { Page } from "@/payload-types";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";

type Header = Extract<Page["layout"][0], { blockType: "header" }>;

export const Header = ({ block }: { block: Header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(menuRef, () => setIsOpen(false));

  return (
    <section className="relative overflow-hidden border-b-2 border-[#33ff33]">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between pt-6 pb-6 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a className="relative z-10 inline-block" href="#">
                  {(typeof block.logo !== "string" && block.logo.url) ? (
                    <Image
                      src={block.logo.url}
                      alt={block.logo.alt || "Logo"}
                      width={130}
                      height={25}
                      className="grayscale sepia hue-rotate-[90deg] brightness-75 contrast-125 saturate-[500%]"
                    />
                  ) : (
                    <div className="text-2xl font-bold tracking-wider animate-pulse">
                      &gt; TRIGGERNOTE_
                    </div>
                  )}
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
                      className="mr-12 text-[#33ff33] text-xl font-medium tracking-tighter hover:underline decoration-2 underline-offset-4"
                    >
                      <a href={item.link || ""}>[{item.label}]</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-auto hidden lg:block">
                {block.cta?.label && (
                  <div className="inline-block">
                    <a
                      className="terminal-button inline-block px-8 py-4 text-xl tracking-tighter"
                      href={block.cta.link || "#"}
                    >
                      {block.cta.label}
                    </a>
                  </div>
                )}
              </div>
              <div className="w-auto lg:hidden">
                <button
                  className="relative z-10 inline-block"
                  aria-label="Open menu"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <svg
                    className="text-[#33ff33]"
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="52" height="52" stroke="currentColor" strokeWidth="2" />
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
        <div className="fixed top-0 left-0 bottom-0 w-full sm:max-w-xs z-50">
          <div className="fixed inset-0 bg-[#000000] opacity-90" />
          <nav
            ref={menuRef}
            className="relative z-10 px-9 pt-8 h-full bg-[#050a05] border-r-2 border-[#33ff33] overflow-y-auto"
          >
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2 mb-8">
                  <div className="w-auto p-2">
                    <a className="inline-block text-2xl font-bold" href="#">
                       &gt; MENU
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <button
                      className="inline-block text-[#33ff33]"
                      aria-label="Close menu"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <svg
                        width={24}
                        height={24}
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
                </div>
              </div>
              <div className="flex flex-col justify-start py-4 w-full h-full">
                <ul>
                  {block.nav.map((item) => (
                    <li
                      key={item.id}
                      className="mb-8 text-[#33ff33] text-2xl font-medium tracking-tighter"
                    >
                      <a href={item.link || ""}>&gt; {item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pb-8">
                   {block.cta?.label && (
                    <a
                        className="terminal-button inline-block w-full text-center px-8 py-4 text-xl tracking-tighter"
                        href={block.cta.link || "#"}
                    >
                        {block.cta.label}
                    </a>
                    )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
};