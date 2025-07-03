import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <React.Fragment>
      <>
        <section className="py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <Image
              className="mb-20"
              src="/nightsable-assets/logos/logo.svg"
              alt="Logo"
              width={130}
              height={25}
            />
            <div className="flex flex-wrap items-end -m-8 mb-20">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <h3 className="mb-10 text-3xl text-white">
                    Subscribe to get tips and tactics to grow the way you want.
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
                  <div className="w-full md:w-auto p-8 lg:p-20">
                    <h3 className="mb-6 text-lg text-white font-medium">
                      About
                    </h3>
                    <ul>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-auto p-8 lg:p-20">
                    <h3 className="mb-6 text-lg text-white font-medium">
                      Company
                    </h3>
                    <ul>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Press
                        </a>
                      </li>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Brand Assets
                        </a>
                      </li>
                      <li className="mb-2.5">
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Changelog
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                          href="#"
                        >
                          Help centre
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between -m-4">
              <div className="w-auto p-4">
                <p className="text-white text-opacity-60 font-medium">
                  © 2025 Nightsablestudio.co
                </p>
              </div>
              <div className="w-auto p-4">
                <ul className="flex flex-wrap items-center -m-2 sm:-m-5">
                  <li className="p-2 sm:p-5">
                    <a className="inline-block" href="#">
                      <Image
                        src="/nightsable-assets/images/footers/twitter-white.svg"
                        alt="Twitter"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="p-2 sm:p-5">
                    <a className="inline-block" href="#">
                      <Image
                        src="/nightsable-assets/images/footers/linkedin-white.svg"
                        alt="Linkedin"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="p-2 sm:p-5">
                    <a className="inline-block" href="#">
                      <Image
                        src="/nightsable-assets/images/footers/tiktok-wh.svg"
                        alt="Tiktok"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="p-2 sm:p-5">
                    <a className="inline-block" href="#">
                      <Image
                        src="/nightsable-assets/images/footers/fb-white.svg"
                        alt="Facebook"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className="p-2 sm:p-5">
                    <a className="inline-block" href="#">
                      <Image
                        src="/nightsable-assets/images/footers/instagram-white.svg"
                        alt="Instagram"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
};
