import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalCard } from "../ui/TerminalCard";
import { Page } from "@/payload-types";

type TestimonialsBlockProps = Extract<
  Page["layout"][0],
  { blockType: "testimonials" }
>;

export const Testimonials = ({ block }: { block: TestimonialsBlockProps }) => {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <span className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-base text-terminal-primary font-display tracking-tighter uppercase bg-terminal-black/50 backdrop-blur-sm">
          &gt; {block.tagline}
        </span>
        <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
          {block.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {block.testimonials?.map((t, index) => (
          <TerminalCard
            key={index}
            className="h-full"
            title={`SIGNAL: ${t.signal}`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 relative">
                <span className="text-7xl text-terminal-primary/20 absolute -top-4 -left-2 font-display">
                  &quot;
                </span>
                <p className="text-terminal-primary text-lg font-body italic relative z-10 pl-4">
                  {t.content}
                </p>
              </div>
              <div className="mt-auto border-t border-terminal-primary/30 pt-4">
                <p className="font-display text-2xl text-terminal-primary uppercase">
                  {t.author}
                </p>
                <p className="font-mono text-sm text-terminal-primary/60 uppercase">
                  [{t.role}]
                </p>
              </div>
            </div>
          </TerminalCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
