import { Page } from "@/payload-types";
import React from "react";

type Features = Extract<Page["layout"][0], { blockType: "features" }>;

export const Features = ({ block }: { block: Features }) => {
  return (
    <section className="relative py-24 overflow-hidden border-b-2 border-[#33ff33]">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 px-2 py-1 border border-[#33ff33] text-sm text-[#33ff33] font-medium tracking-tighter uppercase">
             &gt; MODULE: {block.tagline}
          </span>
          <h2 className="font-heading text-6xl lg:text-8xl text-[#33ff33] tracking-tighter uppercase">
            {block.heading}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {block.cards.map((card) => (
            <div key={card.id} className="w-full md:w-1/3 p-4">
              <div className="px-10 pt-14 pb-12 h-full bg-[#050a05] border-2 border-[#33ff33] shadow-[0_0_10px_#33ff33] relative">
                 {/* Decorative corner markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#33ff33] -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#33ff33] -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#33ff33] -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#33ff33] -mb-1 -mr-1"></div>

                {card.link && (
                  <a
                    className="inline-block mb-6 px-4 py-2 text-sm text-[#33ff33] font-medium border border-[#33ff33] hover:bg-[#33ff33] hover:text-black transition-colors uppercase"
                    href={card.link}
                  >
                    [ ACCESS ]
                  </a>
                )}
                <h3 className="mb-6 text-4xl text-[#33ff33] tracking-tighter uppercase font-bold">
                  {card.label}
                </h3>
                <p className="mb-12 text-[#33ff33] opacity-80 text-xl font-light">
                    {card.caption}
                </p>
                <a className="inline-block text-[#33ff33] text-2xl hover:underline" href={card.link || "#"}>
                   &gt;&gt; EXECUTE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};