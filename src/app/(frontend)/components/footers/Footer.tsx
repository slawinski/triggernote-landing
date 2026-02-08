import React from "react";
import Image from "next/image";
import { Footer as FooterType } from "@/payload-types";

export const Footer = ({ data }: { data: FooterType | null }) => {
  if (!data) return null;
  return (
    <React.Fragment>
      <section className="py-24 overflow-hidden border-t-2 border-[#33ff33] bg-[#050a05]">
        <div className="container px-4 mx-auto">
          {(data.logo && typeof data.logo !== "string" && data.logo.url) ? (
            <Image
              className="mb-20 grayscale sepia hue-rotate-[90deg] brightness-75 contrast-125 saturate-[500%]"
              src={data.logo.url}
              alt={data.logo.alt || "Logo"}
              width={data.logo.width || 130}
              height={data.logo.height || 25}
            />
          ) : (
             <div className="w-[130px] h-[25px] bg-[#33ff33] animate-pulse mb-20 opacity-20" />
          )}
          <div className="flex flex-wrap items-end -m-8 mb-20">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <h3 className="mb-10 text-3xl text-[#33ff33] uppercase tracking-tighter">
                  {data.subscription?.heading || ""}
                </h3>
                <div className="relative border-2 border-[#33ff33] focus-within:shadow-[0_0_10px_#33ff33]">
                  <input
                    className="block w-full py-5 pl-8 pr-24 text-lg text-[#33ff33] placeholder-[#33ff33] placeholder-opacity-50 bg-transparent font-mono focus:outline-none"
                    type="text"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    style={{ height: 72 }}
                  />
                  <a
                    className="absolute right-0 top-0 flex items-center justify-center px-8 h-full bg-[#33ff33] hover:bg-black hover:text-[#33ff33] border-l-2 border-[#33ff33] transition-colors group"
                    href="#"
                  >
                    <span className="text-xl font-bold group-hover:text-[#33ff33] text-black">[ SUBMIT ]</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap md:justify-end -m-8 lg:-m-20">
                {data.navGroups?.map((group) => (
                  <div key={group.id} className="w-full md:w-auto p-8 lg:p-20">
                    <h3 className="mb-6 text-xl text-[#33ff33] font-bold uppercase underline underline-offset-4 decoration-2">
                      {group.label}
                    </h3>
                    <ul>
                      {group.links?.map((link) => (
                        <li key={link.id} className="mb-2.5">
                          <a
                            className="inline-block text-lg font-medium text-[#33ff33] hover:underline transition duration-300 opacity-80 hover:opacity-100"
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
          <div className="flex flex-wrap justify-between -m-4 pt-8 border-t border-[#33ff33] border-opacity-30">
            <div className="w-auto p-4">
              <p className="text-[#33ff33] opacity-60 font-medium">
                {data.copyright || ""}
              </p>
            </div>
            <div className="w-auto p-4">
              <ul className="flex flex-wrap items-center -m-2 sm:-m-5">
                {data.socials?.map((social) => (
                  <li key={social.id} className="p-2 sm:p-5">
                    <a className="inline-block hover:opacity-80 transition-opacity" href={social.link}>
                      {(social.icon && typeof social.icon !== "string" && social.icon.url) ? (
                        <Image
                          src={social.icon.url}
                          alt={social.platform}
                          width={25}
                          height={25}
                          className="grayscale sepia hue-rotate-[90deg] brightness-75 contrast-125 saturate-[500%]"
                        />
                      ) : (
                         <div className="w-[25px] h-[25px] bg-[#33ff33] animate-pulse opacity-50" />
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
