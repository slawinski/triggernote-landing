import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalCard } from "../ui/TerminalCard";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "Vault Dweller 101",
      role: "Wasteland Survivor",
      content:
        "Found this holotape in a stash. Finally, I can track my 10mm ammo and stimpaks without exposing my location to the Enclave. Best inventory tool in the wasteland.",
      signal: "STRONG",
    },
    {
      id: 2,
      author: "Railroad Agent",
      role: "Underground Network",
      content:
        "No cloud sync means the Institute can't spy on our weapons cache. This is the only secure way to manage inventory. Ad Victoriam... wait, wrong faction.",
      signal: "ENCRYPTED",
    },
    {
      id: 3,
      author: "Gunner Commander",
      role: "Mercenary Leader",
      content:
        "Organizing a platoon's worth of laser rifles used to be a nightmare. Now my squad is efficient. Worth every cap.",
      signal: "INTERCEPTED",
    },
  ];

  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <span className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-base text-terminal-primary font-display tracking-tighter uppercase bg-terminal-black/50 backdrop-blur-sm">
          &gt; SIGNAL_INTERCEPTS
        </span>
        <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
          SURVIVOR LOGS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <TerminalCard key={t.id} className="h-full" title={`SIGNAL: ${t.signal}`}>
            <div className="flex flex-col h-full">
              <div className="mb-6 relative">
                 <span className="text-7xl text-terminal-primary/20 absolute -top-4 -left-2 font-display">"</span>
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
