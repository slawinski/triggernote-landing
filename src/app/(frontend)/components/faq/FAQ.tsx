"use client";

import React, { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" noBorder={noBorder}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="terminal-badge mb-4 tracking-tighter">
            &gt; {block.tagline}
          </span>
          <h2 className="font-display text-5xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
            {block.heading}
          </h2>
        </div>

        <div className="space-y-4">
          {block.faqs?.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-terminal-primary bg-terminal-black/80 transition-all duration-300 ${
                  isOpen ? "shadow-[0_0_15px_rgba(var(--terminal-primary-rgb),0.2)]" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 lg:p-6 flex items-center justify-between group transition-colors hover:bg-terminal-primary/5"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl lg:text-3xl font-display text-terminal-primary flex items-start pr-4">
                    <span className="mr-3 text-terminal-primary/60 group-hover:text-terminal-primary transition-colors flex-shrink-0">
                      {isOpen ? "[-]" : "[+]"}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </h3>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="p-5 lg:p-6 pt-0 font-body text-base lg:text-lg text-terminal-primary/80 pl-8 lg:pl-16 leading-relaxed border-t border-terminal-primary/10">
                    <div className="flex gap-2">
                      <span className="text-terminal-primary/40 flex-shrink-0">ANS_</span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
