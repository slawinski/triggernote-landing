import { Page } from "@/payload-types";
import React from "react";
import { TerminalCard } from "../ui/TerminalCard";

type Features = Extract<Page["layout"][0], { blockType: "features" }>;

export const Features = ({ block }: { block: Features }) => {
  return (
    <section id="features" className="relative py-24 overflow-hidden border-b-2 border-terminal-primary">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="terminal-badge mb-4 tracking-tighter">
             &gt; MODULE: {block.tagline}
          </span>
          <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase mb-8">
            {block.heading}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {block.cards.map((card, index) => {
             const defaultLabels = ["RAPID INDEXING", "ENCRYPTED STORAGE", "MAINTENANCE LOGS"];
             const defaultCaptions = [
               "Instant access to your entire arsenal. Optimized for quick retrieval and status checks in the field.",
               "AES-256 encryption ensures your inventory data remains private and secure. Offline-first architecture.",
               "Detailed tracking of cleaning, repairs, and modifications. Never miss a maintenance interval again."
             ];
             
             return (
            <div key={card.id} className="w-full md:w-1/3 p-4">
              <TerminalCard className="h-full">
                <h3 className="mb-6 text-4xl text-terminal-primary tracking-tighter uppercase font-display">
                  {card.label || defaultLabels[index % defaultLabels.length]}
                </h3>
                <p className="mb-12 text-terminal-primary opacity-80 text-xl font-body">
                    {card.caption || defaultCaptions[index % defaultCaptions.length]}
                </p>
                <a className="inline-block text-terminal-primary text-3xl font-display hover:underline" href={card.link || "#"}>
                   &gt;&gt; EXECUTE
                </a>
              </TerminalCard>
            </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};