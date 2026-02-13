import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer as FooterType } from "@/payload-types";

export const Footer = ({ data }: { data: FooterType | null }) => {
  if (!data) return null;
  return (
    <React.Fragment>
      <section className="py-24 overflow-hidden border-t-2 border-terminal-primary relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terminal-primary/50 to-transparent opacity-50"></div>
        <div className="container px-4 mx-auto">
          <Link className="relative z-10 inline-block mb-20" href="/">
            <div className="text-4xl font-bold tracking-wider text-terminal-primary font-display">
              &gt; TRIGGERNOTE_
            </div>
          </Link>
          <div className="flex flex-wrap items-end -m-8 mb-20">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <h3 className="mb-10 text-4xl text-terminal-primary uppercase tracking-tighter font-display">
                  {data.subscription?.heading || ""}
                </h3>
                <div className="relative border-2 border-terminal-primary focus-within:shadow-[0_0_15px_rgba(var(--terminal-primary-rgb),0.5)] transition-shadow">
                  <input
                    className="block w-full py-5 pl-8 pr-32 text-lg text-terminal-primary placeholder-terminal-primary/50 bg-terminal-black font-body focus:outline-none"
                    type="text"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    style={{ height: 72 }}
                  />
                  <a
                    className="absolute right-0 top-0 flex items-center justify-center px-8 h-full bg-terminal-primary hover:bg-terminal-black text-terminal-black hover:text-terminal-primary border-l-2 border-terminal-primary transition-colors group font-display font-bold text-2xl uppercase tracking-wider"
                    href="#"
                  >
                    [ SUBMIT ]
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap md:justify-end -m-8 lg:-m-20">
                {data.navGroups?.map((group) => (
                  <div key={group.id} className="w-full md:w-auto p-8 lg:p-20">
                    <h3 className="mb-6 text-2xl text-terminal-primary font-bold uppercase underline underline-offset-4 decoration-2 font-display">
                      {group.label}
                    </h3>
                    <ul>
                      {group.links?.map((link) => (
                        <li key={link.id} className="mb-2.5">
                          <a
                            className="inline-block text-lg font-medium text-terminal-primary hover:underline transition duration-300 opacity-80 hover:opacity-100 font-body"
                            href={link.link}
                          >
                            &gt; {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between -m-4 pt-8 border-t border-terminal-primary/30">
            <div className="w-auto p-4">
              <p className="text-terminal-primary opacity-60 font-medium font-body">
                {data.copyright || ""}
              </p>
            </div>
            <div className="w-auto p-4">
              <ul className="flex flex-wrap items-center -m-2 sm:-m-5">
                {data.socials?.map((social) => (
                  <li key={social.id} className="p-2 sm:p-5">
                    <a
                      className="inline-block hover:opacity-80 transition-opacity"
                      href={social.link}
                    >
                      {social.icon &&
                      typeof social.icon !== "string" &&
                      social.icon.url ? (
                        <div
                          className="terminal-icon-mask"
                          style={{
                            width: 25,
                            height: 25,
                            maskImage: `url(${social.icon.url})`,
                            WebkitMaskImage: `url(${social.icon.url})`,
                          }}
                          aria-label={social.platform}
                        />
                      ) : (
                        <div className="w-[25px] h-[25px] bg-terminal-primary animate-pulse opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
