"use client";

import { Page } from "@/payload-types";

import Link from "next/link";

import { ThemeToggle } from "../ui/ThemeToggle";

import { MobileMenu } from "./MobileMenu";



type Header = Extract<Page["layout"][0], { blockType: "header" }>;







export const Header = ({ block }: { block: Header }) => {



  console.log("Rendering header block:", block.id);



  const navigation = [





    { label: "About", link: "#about" },

    { label: "Features", link: "#features" },

    { label: "Download", link: "#download" },

    { label: "Survivor Logs", link: "#testimonials" },

    { label: "Manual", link: "#faq" },

  ];



  return (

    <section className="relative overflow-hidden border-b-2 border-terminal-primary bg-terminal-black">

      <div className="container px-4 mx-auto">

        <div className="flex items-center justify-between pt-6 pb-6 -m-2">

          <div className="w-auto p-2">

            <div className="flex flex-wrap items-center">

              <div className="w-auto">

                <Link className="relative z-10 inline-block" href="/">

                  <div className="text-4xl font-bold tracking-wider font-display text-terminal-primary">

                    &gt; TRIGGERNOTE_

                  </div>

                </Link>

              </div>

            </div>

          </div>

          <div className="w-auto p-2">

            <div className="flex flex-wrap items-center">

              <div className="w-auto hidden lg:block mr-6">

              </div>

              <div className="w-auto hidden lg:block">

                <ul className="flex items-center mr-12">

                  {navigation.map((item, idx) => (

                    <li

                      key={idx}

                      className="mr-12 text-terminal-primary text-2xl font-medium tracking-tighter hover:text-terminal-primary/80 font-display"

                    >

                      <Link href={item.link}>[{item.label}]</Link>

                    </li>

                  ))}

                </ul>

              </div>

              <div className="w-auto hidden lg:block">

                <ThemeToggle />

              </div>

              <div className="w-auto lg:hidden">

                <MobileMenu navigation={navigation} />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};


