import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";

type Application = Extract<Page["layout"][0], { blockType: "application" }>;

export const Application = ({ block }: { block: Application }) => {
  return (
    <section className="relative py-16 overflow-hidden border-b-2 border-[#33ff33]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="relative terminal-box p-4 bg-[#050a05] max-w-max mx-auto">
               <Image
                className="relative mx-auto grayscale sepia hue-rotate-[90deg] brightness-75 contrast-125 saturate-[500%] opacity-90"
                src="/nightsable-assets/images/application-section/phone.png"
                alt="Phone"
                width={400}
                height={400}
                />
                 {/* Scanline overlay for the phone image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="inline-block mb-4 px-2 py-1 border border-[#33ff33] text-sm text-[#33ff33] font-medium tracking-tighter uppercase">
               &gt; EXECUTE: {block.tagline}
            </div>
            <h2 className="font-heading mb-6 text-6xl lg:text-7xl text-[#33ff33] tracking-tighter uppercase">
              {block.heading}
            </h2>
            <p className="mb-6 text-[#33ff33] text-xl opacity-80 md:max-w-md font-light">
              {block.caption}
            </p>
            <div className="flex flex-wrap -m-2.5">
              {block.downloads?.map((download) => (
                <div key={download.id} className="w-auto p-2.5">
                  <a href={download["store-links"].link} className="block hover:opacity-80 transition-opacity">
                    {(download["store-links"].image && typeof download["store-links"].image !== "string" && download["store-links"].image.url) ? (
                        <div className="border border-[#33ff33] p-1 bg-[#050a05]">
                            <Image
                            src={download["store-links"].image.url}
                            alt={download["store-links"].image.alt || "Download Icon"}
                            width={160}
                            height={50}
                            className="grayscale sepia hue-rotate-[90deg] brightness-75 contrast-125 saturate-[500%]"
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