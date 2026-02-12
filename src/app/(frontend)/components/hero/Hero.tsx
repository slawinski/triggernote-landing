import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";
import { TerminalButton } from "../ui/TerminalButton";

type Hero = Extract<Page["layout"][0], { blockType: "hero" }>;

export const Hero = ({ block }: { block: Hero }) => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center border-b-2 border-terminal-primary">
       <div className="scanline"></div>
      <div className="relative pt-20 pb-24 lg:pb-40 w-full">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="relative z-10 w-full md:w-1/2 lg:w-7/12 p-8">
              <div className="md:max-w-3xl">
                <div className="mb-2 text-xs text-terminal-primary/60 font-mono">
                  &gt; BOOT_SEQUENCE_INITIATED... OK
                </div>
                <div className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-sm text-terminal-primary font-display tracking-tighter uppercase bg-terminal-black/50 backdrop-blur-sm">
                  &gt; SYSTEM_MSG: {block.tagline}
                </div>
                <h1 className="font-display mb-8 text-5xl lg:text-7xl text-terminal-primary tracking-tighter uppercase leading-none">
                  {block.heading}<span className="animate-blink">_</span>
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
              <div className="relative max-w-max mx-auto md:mr-0 terminal-box p-2">
                <div className="absolute -top-6 -right-6 text-terminal-primary/40 font-mono text-xs hidden lg:block">
                  SECURE_CONNECTION: ESTABLISHED
                </div>
                {(block.image && typeof block.image !== "string" && block.image.url) ? (
                  <Image
                    src={block.image.url}
                    alt={block.image.alt || "Hero Image"}
                    width={block.image.width || 300}
                    height={block.image.height || 460}
                    className="terminal-monochrome opacity-90"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};