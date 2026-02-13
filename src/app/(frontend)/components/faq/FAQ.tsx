import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Page } from "@/payload-types";

type FAQBlockProps = Extract<Page["layout"][0], { blockType: "faq" }>;

export const FAQ = ({
  block,
  noBorder = false,
}: {
  block: FAQBlockProps;
  noBorder?: boolean;
}) => {
  return (
    <SectionWrapper id="faq" noBorder={noBorder}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-base text-terminal-primary font-display tracking-tighter uppercase bg-terminal-black/50 backdrop-blur-sm">
            &gt; {block.tagline}
          </span>
          <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
            {block.heading}
          </h2>
        </div>

        <div className="space-y-6">
          {block.faqs?.map((faq, index) => (
            <div
              key={index}
              className="border border-terminal-primary bg-terminal-black/80 p-6 hover:bg-terminal-primary/5 transition-colors"
            >
              <h3 className="text-3xl font-display text-terminal-primary mb-3 flex items-start">
                <span className="mr-3 text-terminal-primary/60">&gt;</span>
                {faq.question}
              </h3>
              <p className="font-body text-lg text-terminal-primary/80 pl-8 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
