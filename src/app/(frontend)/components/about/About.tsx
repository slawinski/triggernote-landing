import React from "react";
import { Page } from "@/payload-types";
import { TerminalButton } from "../ui/TerminalButton";
import { TerminalCard } from "../ui/TerminalCard";

type About = Extract<Page["layout"][0], { blockType: "about" }>;

export const About = ({ block }: { block: About }) => {
  return (
    <section className="relative pt-20 pb-24 lg:pb-32 overflow-hidden border-b-2 border-terminal-green">
      <div className="container px-4 mx-auto">
        <div className="relative text-center md:max-w-4xl mx-auto">
          <TerminalCard className="mb-12 text-left" title="OVERSEER_LOG_77">
              <p className="text-xl lg:text-3xl text-terminal-green tracking-tight leading-relaxed font-body">
                <span className="opacity-50 mr-2 font-display">&gt; INFO:</span>
                {block.content}
                <span className="animate-blink ml-1 inline-block w-3 h-6 bg-terminal-green align-middle"></span>
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