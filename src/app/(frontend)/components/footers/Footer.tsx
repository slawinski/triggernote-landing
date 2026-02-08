import React from "react";
import Image from "next/image";
import { Footer as FooterType } from "@/payload-types";

export const Footer = ({ data }: { data: FooterType | null }) => {
  if (!data) return null;
  return (
    <React.Fragment>
      <section className="py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          {(data.logo && typeof data.logo !== "string" && data.logo.url) ? (
            <Image
              className="mb-20"
              src={data.logo.url}
              alt={data.logo.alt || "Logo"}
              width={data.logo.width || 130}
              height={data.logo.height || 25}
            />
          ) : (
             <div className="w-[130px] h-[25px] bg-gray-800 animate-pulse mb-20" />
          )}
          <div className="flex flex-wrap items-end -m-8 mb-20">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <h3 className="mb-10 text-3xl text-white">
                  {data.subscription?.heading || ""}
                </h3>
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <input
                    className="block w-full py-5 pl-8 pr-24 text-lg text-gray-300 placeholder-gray-400 bg-transparent"
                    type="text"
                    placeholder="Your email adress"
                    style={{ height: 72 }}
                  />
                  <a
                    className="absolute right-0 top-0 flex items-center justify-center px-8 h-full bg-green-400 hover:bg-green-500 rounded-3xl transition duration-300"
                    href="#"
                  >
                    <svg
                      width={10}
                      height={17}
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.79687 15.4299L7.50188 9.72495C8.17563 9.0512 8.17563 7.9487 7.50188 7.27495L1.79688 1.56995"
                        stroke="black"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap md:justify-end -m-8 lg:-m-20">
                {data.navGroups?.map((group) => (
                  <div key={group.id} className="w-full md:w-auto p-8 lg:p-20">
                    <h3 className="mb-6 text-lg text-white font-medium">
                      {group.label}
                    </h3>
                    <ul>
                      {group.links?.map((link) => (
                        <li key={link.id} className="mb-2.5">
                          <a
                            className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                            href={link.link}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between -m-4">
            <div className="w-auto p-4">
              <p className="text-white text-opacity-60 font-medium">
                {data.copyright || ""}
              </p>
            </div>
            <div className="w-auto p-4">
              <ul className="flex flex-wrap items-center -m-2 sm:-m-5">
                {data.socials?.map((social) => (
                  <li key={social.id} className="p-2 sm:p-5">
                    <a className="inline-block" href={social.link}>
                      {(social.icon && typeof social.icon !== "string" && social.icon.url) ? (
                        <Image
                          src={social.icon.url}
                          alt={social.platform}
                          width={25}
                          height={25}
                        />
                      ) : (
                         <div className="w-[25px] h-[25px] bg-gray-800 animate-pulse" />
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