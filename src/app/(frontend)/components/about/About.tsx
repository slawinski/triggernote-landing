import React from "react";
import { Page } from "@/payload-types";

type About = Extract<Page["layout"][0], { blockType: "about" }>;

export const About = ({ block }: { block: About }) => {
  return (
    <React.Fragment>
      <>
        <section className="pt-20 pb-24 lg:pb-32 overflow-hidden border-b-2 border-[#33ff33]">
          <div className="container px-4 mx-auto">
            <div className="relative text-center md:max-w-4xl mx-auto">
              <div className="mb-8 p-6 border border-[#33ff33] bg-[#050a05] shadow-[0_0_15px_#33ff33]">
                  <p className="text-2xl lg:text-3xl text-[#33ff33] tracking-tight leading-relaxed font-mono">
                    <span className="opacity-50 mr-2">&gt; INFO:</span>
                    {block.content}
                    <span className="animate-[flicker_1s_infinite] ml-1">_</span>
                  </p>
              </div>
              <a
                className="terminal-button inline-block px-8 py-4 text-xl tracking-tighter"
                href={block["more-button"].link}
              >
                {block["more-button"].caption}
              </a>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
};