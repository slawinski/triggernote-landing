import React from "react";
import Link from "next/link";
import { Footer as FooterType } from "@/payload-types";

export const Footer = ({ data }: { data: FooterType | null }) => {
  if (!data) return null;
  return (
    <React.Fragment>
      <section className="py-24 overflow-hidden border-t-2 border-terminal-primary bg-terminal-black relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terminal-primary/50 to-transparent opacity-50"></div>
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Newsletter Section */}
            <div className="w-full max-w-2xl mb-24">
              <span className="terminal-badge mb-6 inline-block">
                &gt; SUBSCRIPTION_MODULE
              </span>
              <h3 className="mb-10 text-5xl lg:text-7xl text-terminal-primary uppercase tracking-tighter font-display leading-none">
                {data.subscription?.heading || "Join the Protocol"}
              </h3>
              <div className="relative border-2 border-terminal-primary focus-within:shadow-[0_0_20px_rgba(var(--terminal-primary-rgb),0.4)] transition-all">
                <input
                  className="block w-full py-6 pl-8 pr-40 text-xl text-terminal-primary placeholder-terminal-primary/30 bg-terminal-black font-body focus:outline-none"
                  type="email"
                  placeholder="USER@PROTOCOL.TERMINAL"
                />
                <button
                  className="absolute right-0 top-0 flex items-center justify-center px-10 h-full bg-terminal-primary hover:bg-terminal-black text-terminal-black hover:text-terminal-primary border-l-2 border-terminal-primary transition-all group font-display font-bold text-2xl uppercase tracking-wider"
                >
                  [ ENROLL ]
                </button>
              </div>
              <p className="mt-4 text-terminal-primary/40 font-mono text-xs uppercase tracking-[0.2em]">
                Secure transmission guaranteed via AES-256
              </p>
            </div>

            {/* Middle Section: Logo and Brand */}
            <div className="mb-16">
              <Link className="relative z-10 inline-block group" href="/">
                <div className="text-5xl lg:text-6xl font-bold tracking-[0.2em] text-terminal-primary font-display group-hover:shadow-[0_0_20px_rgba(var(--terminal-primary-rgb),0.5)] transition-shadow p-4 border-2 border-transparent group-hover:border-terminal-primary">
                  &gt; TRIGGERNOTE_
                </div>
              </Link>
            </div>

            {/* Socials */}
            <div className="mb-16">
              <ul className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {data.socials?.map((social) => (
                  <li key={social.id}>
                    <a
                      className="group flex flex-col items-center gap-2 hover:opacity-100 transition-opacity"
                      href={social.link}
                    >
                      {social.icon &&
                      typeof social.icon !== "string" &&
                      social.icon.url ? (
                        <div
                          className="terminal-icon-mask group-hover:shadow-[0_0_10px_var(--terminal-primary)] transition-all"
                          style={{
                            width: 32,
                            height: 32,
                            maskImage: `url(${social.icon.url})`,
                            WebkitMaskImage: `url(${social.icon.url})`,
                          }}
                          aria-label={social.platform}
                        />
                      ) : (
                        <div className="w-[32px] h-[32px] bg-terminal-primary animate-pulse opacity-50" />
                      )}
                      <span className="font-mono text-[10px] text-terminal-primary/40 group-hover:text-terminal-primary transition-colors tracking-widest uppercase">
                        {social.platform}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Bottom */}
            <div className="w-full pt-8 border-t border-terminal-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-terminal-primary/40 font-mono text-[10px] uppercase tracking-[0.3em]">
                {data.copyright || "© 2026 TriggerNote"}
              </p>
              <div className="flex gap-8 font-mono text-[10px] text-terminal-primary/40 uppercase tracking-[0.3em]">
                <Link href="/privacy" className="hover:text-terminal-primary transition-colors">Privacy_Protocol</Link>
                <Link href="/terms" className="hover:text-terminal-primary transition-colors">Terms_of_Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
