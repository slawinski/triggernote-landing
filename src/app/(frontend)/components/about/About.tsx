import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";

type About = Extract<Page["layout"][0], { blockType: "about" }>;

export const About = ({ block }: { block: About }) => {
  return (
    <React.Fragment>
      <>
        <section className="pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="relative text-center md:max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl text-white tracking-tight leading-normal">
                {block.content}
              </h2>
              <a
                className="inline-block px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                href={block["more-button"].link}
              >
                {block["more-button"].caption}
              </a>
              <Image
                className="absolute top-8 -left-20"
                src="nightsable-assets/images/abouts/star.svg"
                alt="Star"
                width={26}
                height={37}
              />
              <Image
                className="absolute top-48 -right-20"
                src="nightsable-assets/images/abouts/star-light.svg"
                alt="Star light"
                width={26}
                height={37}
              />
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
};
