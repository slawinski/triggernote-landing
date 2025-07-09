import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";

type HeroProps = Extract<Page["layout"][0], { blockType: "hero" }>;

export const Hero = ({ block }: { block: HeroProps }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative pt-20 pb-24 lg:pb-40">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap items-end -m-8">
            <div className="relative z-10 w-full md:w-1/2 lg:w-7/12 p-8">
              <div className="md:max-w-xl">
                <span className="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">
                  Nightsable Card
                </span>
                <h1 className="font-heading mb-8 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">
                  {block.heading}
                </h1>
                <p className="mb-10 text-lg text-white md:max-w-xs">
                  {block.subheading}
                </p>
                <a
                  className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                  href={block["cta-button"].link}
                >
                  {block["cta-button"].caption}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 p-8">
              <div className="relative max-w-max mx-auto md:mr-0">
                <Image
                  src="/nightsable-assets/images/headers/card.png"
                  alt="Card"
                  width={300}
                  height={460}
                />
                <Image
                  className="absolute -top-16 -left-16"
                  src="nightsable-assets/images/headers/star.svg"
                  alt="Star"
                  width={26}
                  height={37}
                />
                <Image
                  className="absolute top-56 -left-44"
                  src="nightsable-assets/images/headers/star2.svg"
                  alt="Star 2"
                  width={46}
                  height={64}
                />
                <div className="absolute bottom-10 -right-40">
                  <Image
                    className="relative -bottom-4"
                    src="nightsable-assets/images/headers/star5.svg"
                    alt="Star 5"
                    width={46}
                    height={64}
                  />
                  <Image
                    src="nightsable-assets/images/headers/star3.svg"
                    alt="Star 3"
                    width={46}
                    height={64}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-24 right-0"
        src="nightsable-assets/images/headers/lines.svg"
        alt="Lines"
        width={1440}
        height={672}
      />
    </section>
  );
};
