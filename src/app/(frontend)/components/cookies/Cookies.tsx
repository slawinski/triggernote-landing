"use client";
import React, { useEffect, useState } from "react";
import { CookieConsent } from "@/payload-types";

export const Cookies = ({ data }: { data: CookieConsent | null }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!data) return;
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setVisible(true);
    }
  }, [data]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!data || !visible) return null;

  return (
    <section className="fixed bottom-0 left-0 z-50 w-full p-4 md:p-10">
      <div className="relative p-8 max-w-xl bg-[#050a05] border-2 border-[#33ff33] shadow-[0_0_20px_#33ff33]">
         {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#33ff33] -mt-1 -ml-1"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#33ff33] -mt-1 -mr-1"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#33ff33] -mb-1 -ml-1"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#33ff33] -mb-1 -mr-1"></div>

        <h3 className="mb-3.5 text-2xl text-[#33ff33] font-bold tracking-widest uppercase">
          &gt; {data.title}
        </h3>
        <p className="mb-8 text-xl text-[#33ff33] font-mono opacity-80 leading-relaxed">
          {data.content}
        </p>
        <div className="flex flex-wrap -m-2">
          <div className="w-auto p-2">
            <button
              className="terminal-button inline-block px-8 py-4 text-xl tracking-tighter"
              onClick={handleAccept}
            >
              {data.acceptButtonLabel}
            </button>
          </div>
          <div className="w-auto p-2">
            <button
              className="inline-block px-8 py-4 text-[#33ff33] font-medium border border-[#33ff33] hover:bg-[#33ff33] hover:text-black transition-colors uppercase"
              onClick={handleClose}
            >
              {data.settingsButtonLabel}
            </button>
          </div>
        </div>
        <button
          className="absolute top-4 right-4 text-[#33ff33] hover:text-white font-bold text-xl"
          onClick={handleClose}
          aria-label="Close cookie consent"
        >
          [ X ]
        </button>
      </div>
    </section>
  );
};
