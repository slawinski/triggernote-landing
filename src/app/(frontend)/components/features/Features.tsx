import { Page } from "@/payload-types";
import React from "react";
import { TerminalCard } from "../ui/TerminalCard";

type Features = Extract<Page["layout"][0], { blockType: "features" }>;

export const Features = ({ block }: { block: Features }) => {
  return (
    <section className="relative py-24 overflow-hidden border-b-2 border-terminal-green">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 px-2 py-1 border border-terminal-green text-sm text-terminal-green font-display tracking-tighter uppercase">
             &gt; MODULE: {block.tagline}
          </span>
          <h2 className="font-display text-5xl lg:text-7xl text-terminal-green tracking-tighter uppercase mb-8">
            {block.heading}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {block.cards.map((card) => (
            <div key={card.id} className="w-full md:w-1/3 p-4">
              <TerminalCard className="h-full group hover:bg-terminal-green hover:text-terminal-black transition-colors duration-300">
                {card.link && (
                  <a
                    className="inline-block mb-6 px-4 py-2 text-sm text-terminal-green font-display border border-terminal-green group-hover:border-terminal-black group-hover:text-terminal-black transition-colors uppercase"
                    href={card.link}
                  >
                    [ ACCESS ]
                  </a>
                )}
                <h3 className="mb-6 text-3xl text-terminal-green group-hover:text-terminal-black tracking-tighter uppercase font-display">
                  {card.label}
                </h3>
                <p className="mb-12 text-terminal-green group-hover:text-terminal-black opacity-80 text-xl font-body">
                    {card.caption}
                </p>
                <a className="inline-block text-terminal-green group-hover:text-terminal-black text-2xl font-display hover:underline" href={card.link || "#"}>
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