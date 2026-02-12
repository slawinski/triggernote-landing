import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

export const FAQ = () => {
  const faqs = [
    {
      question: "IS MY DATA SECURE FROM THE ENCLAVE?",
      answer:
        "AFFIRMATIVE. All data is stored locally on your device. No external servers. No cloud transmission. Your inventory remains classified.",
    },
    {
      question: "DOES IT REQUIRE A PIP-BOY CONNECTION?",
      answer:
        "NEGATIVE. It operates as a standalone module. However, it functions offline, perfect for deep bunker operations where signal is zero.",
    },
    {
      question: "HOW DO I EXPORT MY MANIFEST?",
      answer:
        "Standard CSV export protocol is available. You can backup your data manually to any compatible holotape or drive.",
    },
    {
      question: "IS THERE A SUBSCRIPTION FEE?",
      answer:
        "NEGATIVE. One-time acquisition. No recurring cap payments required for core functionality.",
    },
  ];

  return (
    <SectionWrapper id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-sm text-terminal-primary font-display tracking-tighter uppercase bg-terminal-black/50 backdrop-blur-sm">
            &gt; HELP_MODULE
          </span>
          <h2 className="font-display text-5xl lg:text-7xl text-terminal-primary tracking-tighter uppercase">
            OVERSEER'S MANUAL
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-terminal-primary bg-terminal-black/80 p-6 hover:bg-terminal-primary/5 transition-colors"
            >
              <h3 className="text-2xl font-display text-terminal-primary mb-3 flex items-start">
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
