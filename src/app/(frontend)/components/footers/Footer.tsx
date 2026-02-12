import React from "react";
import Image from "next/image";
import { Footer as FooterType } from "@/payload-types";

export const Footer = ({ data }: { data: FooterType | null }) => {
  if (!data) return null;
  return (
    <React.Fragment>
      <section className="py-24 overflow-hidden border-t-2 border-terminal-green bg-terminal-black relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent opacity-50"></div>
        <div className="container px-4 mx-auto">
          <a className="relative z-10 inline-block mb-20" href="/">
            <div className="text-3xl font-bold tracking-wider text-terminal-green font-display">
              &gt; TRIGGERNOTE_
            </div>
          </a>
          <div className="flex flex-wrap items-end -m-8 mb-20">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <h3 className="mb-10 text-3xl text-terminal-green uppercase tracking-tighter font-display">
                  {data.subscription?.heading || ""}
                </h3>
                <div className="relative border-2 border-terminal-green focus-within:shadow-[0_0_15px_rgba(51,255,51,0.5)] transition-shadow">
                  <input
                    className="block w-full py-5 pl-8 pr-32 text-lg text-terminal-green placeholder-terminal-green/50 bg-terminal-black font-body focus:outline-none"
                    type="text"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    style={{ height: 72 }}
                  />
                  <a
                    className="absolute right-0 top-0 flex items-center justify-center px-8 h-full bg-terminal-green hover:bg-terminal-black text-terminal-black hover:text-terminal-green border-l-2 border-terminal-green transition-colors group font-display font-bold text-xl uppercase tracking-wider"
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
                    <h3 className="mb-6 text-xl text-terminal-green font-bold uppercase underline underline-offset-4 decoration-2 font-display">
                      {group.label}
                    </h3>
                    <ul>
                      {group.links?.map((link) => (
                        <li key={link.id} className="mb-2.5">
                          <a
                            className="inline-block text-lg font-medium text-terminal-green hover:underline transition duration-300 opacity-80 hover:opacity-100 font-body"
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
          <div className="flex flex-wrap justify-between -m-4 pt-8 border-t border-terminal-green/30">
            <div className="w-auto p-4">
              <p className="text-terminal-green opacity-60 font-medium font-body">
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
                        <Image
                          src={social.icon.url}
                          alt={social.platform}
                          width={25}
                          height={25}
                          className="green-monochrome"
                        />
                      ) : (
                        <div className="w-[25px] h-[25px] bg-terminal-green animate-pulse opacity-50" />
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
