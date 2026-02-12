import { Page } from "@/payload-types";
import React from "react";
import { TerminalCard } from "../ui/TerminalCard";

type Features = Extract<Page["layout"][0], { blockType: "features" }>;

export const Features = ({ block }: { block: Features }) => {
  return (
    <section id="features" className="relative py-24 overflow-hidden border-b-2 border-terminal-primary">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-base text-terminal-primary font-display tracking-tighter uppercase">
             &gt; MODULE: {block.tagline}
          </span>
          <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase mb-8">
            {block.heading}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {block.cards.map((card) => (
            <div key={card.id} className="w-full md:w-1/3 p-4">
              <TerminalCard className="h-full">
                {card.link && (
                  <a
                    className="inline-block mb-6 px-4 py-2 text-base text-terminal-primary font-display border border-terminal-primary hover:bg-terminal-primary hover:text-terminal-black transition-colors uppercase"
                    href={card.link}
                  >
                    [ ACCESS ]
                  </a>
                )}
                <h3 className="mb-6 text-4xl text-terminal-primary tracking-tighter uppercase font-display">
                  {card.label}
                </h3>
                <p className="mb-12 text-terminal-primary opacity-80 text-xl font-body">
                    {card.caption}
                </p>
                <a className="inline-block text-terminal-primary text-3xl font-display hover:underline" href={card.link || "#"}>
                   &gt;&gt; EXECUTE
                </a>
              </TerminalCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};