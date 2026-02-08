import React from "react";
import Image from "next/image";
import { Page } from "@/payload-types";

type Application = Extract<Page["layout"][0], { blockType: "application" }>;

export const Application = ({ block }: { block: Application }) => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <Image
              className="hidden md:block absolute top-32 -left-96"
              src="/nightsable-assets/images/application-section/lines.png"
              alt="Lines"
              width={1391}
              height={980}
            />
            <Image
              className="relative mx-auto"
              src="/nightsable-assets/images/application-section/phone.png"
              alt="Phone"
              width={720}
              height={720}
            />
            <Image
              className="hidden md:block absolute bottom-56 left-64"
              src="/nightsable-assets/images/application-section/star.png"
              alt="Star"
              width={45}
              height={63}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
              {block.tagline}
            </span>
            <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl md:max-w-sm">
              {block.heading}
            </h2>
            <p className="mb-6 text-white text-opacity-60 md:max-w-xs">
              {block.caption}
            </p>
            <div className="flex flex-wrap -m-2.5">
              {block.downloads?.map((download) => (
                <div key={download.id} className="w-auto p-2.5">
                  <a href={download["store-links"].link}>
                    {(download["store-links"].image && typeof download["store-links"].image !== "string" && download["store-links"].image.url) ? (
                        <Image
                          src={download["store-links"].image.url}
                          alt={download["store-links"].image.alt || "Download Icon"}
                          width={180}
                          height={55}
                        />
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
