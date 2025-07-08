import { Page } from "@/payload-types";
import Image from "next/image";

type Header = Extract<Page["layout"][0], { blockType: "header" }>;

export const Header = ({ block }: { block: Header }) => {
  console.log(block);
  return (
    <section className="relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between pt-6 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a className="relative z-10 inline-block" href="#">
                  <Image
                    src={
                      typeof block.logo === "string" ? "" : block.logo.url || ""
                    }
                    alt="Logo"
                    width={130}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-12">
                  {block.nav.map((item) => (
                    <li
                      key={item.id}
                      className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"
                    >
                      <a href={item.link || ""}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <a
                    className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="#"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <button
                  className="relative z-10 inline-block"
                  aria-label="Open menu"
                >
                  <svg
                    className="text-green-500"
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="fixed inset-0 bg-black opacity-60" />
        <nav className="relative z-10 px-9 pt-8 h-full bg-black overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <Image
                      src="nightsable-assets/logos/logo.svg"
                      alt="Logo"
                      width={0}
                      height={0}
                    />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <button
                    className="inline-block text-white"
                    aria-label="Close menu"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                  <a href="#">Home</a>
                </li>
                <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                  <a href="#">About us</a>
                </li>
                <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                  <a href="#">Wallet</a>
                </li>
                <li className="text-white font-medium hover:text-opacity-90 tracking-tighter">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <a
                className="inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                href="#"
              >
                Get in touch
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
