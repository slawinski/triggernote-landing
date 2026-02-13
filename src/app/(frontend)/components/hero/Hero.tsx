import React from "react";
import { Page } from "@/payload-types";
import { TerminalButton } from "../ui/TerminalButton";
import { TerminalLog } from "../ui/TerminalLog";

type Hero = Extract<Page["layout"][0], { blockType: "hero" }>;

export const Hero = ({ block }: { block: Hero }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[80vh] flex items-center border-b-2 border-terminal-primary"
    >
      <div className="relative pt-20 pb-24 lg:pb-40 w-full">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="relative z-10 w-full md:w-1/2 lg:w-7/12 p-8">
              <div className="md:max-w-3xl">
                <div className="terminal-badge mb-4 tracking-tighter">
                  &gt; SYSTEM_MSG: {block.tagline}
                </div>
                <h1 className="font-display mb-8 text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase leading-none">
                  {block.heading}
                  <span className="animate-blink">_</span>
                </h1>
                <p className="mb-10 text-lg lg:text-2xl text-terminal-primary md:max-w-md opacity-90 leading-relaxed font-body">
                  {block.subheading}
                </p>
                <div className="flex flex-wrap gap-4">
                  <TerminalButton href={block["cta-button"].link}>
                    {block["cta-button"].caption}
                  </TerminalButton>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 p-8">
              <div className="relative md:mr-0">
                <div className="relative z-10 w-full h-[500px] overflow-hidden flex flex-col items-start justify-start">
                  <TerminalLog itemsToShow={40} className="text-xs md:text-sm w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
