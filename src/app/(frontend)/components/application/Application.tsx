import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";
import { TerminalCard } from "../ui/TerminalCard";

type Application = Extract<Page["layout"][0], { blockType: "application" }>;

export const Application = ({ block }: { block: Application }) => {
  return (
    <section id="download" className="relative py-16 overflow-hidden border-b-2 border-terminal-primary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <TerminalCard className="max-w-max mx-auto p-4" title="PIP-BOY 3000 MARK IV">
              <div className="relative">
                <Image
                  className="relative mx-auto opacity-90 terminal-monochrome"
                  src="/nightsable-assets/images/application-section/phone.png"
                  alt="Phone"
                  width={400}
                  height={400}
                />
                {/* CRT Mesh Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(var(--terminal-primary-rgb),0.06),rgba(0,0,0,0.02),rgba(var(--terminal-primary-rgb),0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
              </div>
            </TerminalCard>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="inline-block mb-4 px-2 py-1 border border-terminal-primary text-base text-terminal-primary font-display tracking-tighter uppercase">
              &gt; EXECUTE: {block.tagline}
            </div>
            <h2 className="font-display mb-6 text-6xl lg:text-8xl text-terminal-primary tracking-tighter uppercase">
              {block.heading}
            </h2>
            <p className="mb-6 text-terminal-primary text-xl opacity-90 md:max-w-md font-body">
              {block.caption}
            </p>
            <div className="flex flex-wrap -m-2.5">
              {block.downloads?.map((download) => (
                <div key={download.id} className="w-auto p-2.5">
                  <a
                    href={download["store-links"].link}
                    className="block hover:scale-105 transition-transform duration-200"
                  >
                    {download["store-links"].image &&
                    typeof download["store-links"].image !== "string" &&
                    download["store-links"].image.url ? (
                      <div className="border-2 border-terminal-primary p-1 bg-terminal-black hover:bg-terminal-primary/10 transition-colors">
                        <Image
                          src={download["store-links"].image.url}
                          alt={
                            download["store-links"].image.alt || "Download Icon"
                          }
                          width={160}
                          height={50}
                          className="terminal-monochrome"
                        />
                      </div>
                    ) : null}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
