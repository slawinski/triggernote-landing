import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";

type Hero = Extract<Page["layout"][0], { blockType: "hero" }>;

export const Hero = ({ block }: { block: Hero }) => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center border-b-2 border-[#33ff33]">
       <div className="scanline"></div>
      <div className="relative pt-20 pb-24 lg:pb-40 w-full">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="relative z-10 w-full md:w-1/2 lg:w-7/12 p-8">
              <div className="md:max-w-3xl">
                <div className="inline-block mb-4 px-2 py-1 border border-[#33ff33] text-sm text-[#33ff33] font-medium tracking-tighter uppercase">
                  &gt; SYSTEM_MSG: {block.tagline}
                </div>
                <h1 className="font-heading mb-8 text-6xl lg:text-8xl text-[#33ff33] tracking-tighter uppercase">
                  {block.heading}<span className="animate-blink">_</span>
                </h1>
                <p className="mb-10 text-2xl text-[#33ff33] md:max-w-md opacity-80 leading-relaxed">
                  {block.subheading}
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                    className="terminal-button inline-block px-8 py-4 text-xl tracking-tighter"
                    href={block["cta-button"].link}
                    >
                    {block["cta-button"].caption}
                    </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 p-8">
              <div className="relative max-w-max mx-auto md:mr-0 terminal-box p-2">
                {(block.image && typeof block.image !== "string" && block.image.url) ? (
                  <Image
                    src={block.image.url}
                    alt={block.image.alt || "Hero Image"}
                    width={block.image.width || 300}
                    height={block.image.height || 460}
                    className=""
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