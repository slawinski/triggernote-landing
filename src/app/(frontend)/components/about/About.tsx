import React from "react";
import { Page } from "@/payload-types";
import { TerminalCard } from "../ui/TerminalCard";

type About = Extract<Page["layout"][0], { blockType: "about" }>;

export const About = ({ block }: { block: About }) => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden border-b-2 border-terminal-primary bg-terminal-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="terminal-badge mb-4 tracking-tighter">
            &gt; {block.tagline || "SYSTEM_MANIFESTO"}
          </span>
          <h2 className="font-display text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
            {block.heading || "OUR MISSION"}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Main Info Box */}
          <TerminalCard title="SYSTEM_ARCHIVE_01">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <p className="text-2xl lg:text-3xl text-terminal-primary tracking-tight leading-relaxed font-body">
                  {block.content}
                </p>
              </div>
              
              <div className="border-t border-terminal-primary/10 pt-8 flex flex-wrap gap-12">
                <div>
                  <span className="block text-terminal-primary/40 font-mono text-[10px] uppercase tracking-widest mb-2">Protocol_Status</span>
                  <span className="text-terminal-primary font-mono text-sm uppercase">Secure / Offline</span>
                </div>
                <div>
                  <span className="block text-terminal-primary/40 font-mono text-[10px] uppercase tracking-widest mb-2">Encryption_Method</span>
                  <span className="text-terminal-primary font-mono text-sm uppercase">AES-256-GCM</span>
                </div>
                <div>
                  <span className="block text-terminal-primary/40 font-mono text-[10px] uppercase tracking-widest mb-2">Build_Version</span>
                  <span className="text-terminal-primary font-mono text-sm uppercase">2026.02.14-STABLE</span>
                </div>
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
};