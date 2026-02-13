import React from "react";
import { Page } from "@/payload-types";
import { TerminalButton } from "../ui/TerminalButton";
import { TerminalCard } from "../ui/TerminalCard";

type About = Extract<Page["layout"][0], { blockType: "about" }>;

export const About = ({ block }: { block: About }) => {
  return (
    <section id="about" className="relative pt-20 pb-24 lg:pb-32 overflow-hidden border-b-2 border-terminal-primary">
      <div className="container px-4 mx-auto">
        <div className="relative text-center md:max-w-4xl mx-auto">
          <TerminalCard className="mb-12 text-left" title="SYSTEM_ARCHIVE_01">
              <p className="text-xl lg:text-3xl text-terminal-primary tracking-tight leading-relaxed font-body">
                <span className="opacity-50 mr-2 font-display text-xl">&gt; INFO:</span>
                {block.content}
              </p>
          </TerminalCard>
          
          <TerminalButton href={block["more-button"].link}>
            {block["more-button"].caption}
          </TerminalButton>
        </div>
      </div>
    </section>
  );
};