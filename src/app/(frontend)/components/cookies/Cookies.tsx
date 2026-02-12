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
      <div className="relative p-8 max-w-xl bg-terminal-black border-2 border-terminal-primary shadow-[0_0_20px_rgba(var(--terminal-primary-rgb),0.5)]">
        <h3 className="mb-3.5 text-3xl text-terminal-primary font-display font-bold tracking-widest uppercase">
          &gt; {data.title}
        </h3>
        <p className="mb-8 text-xl text-terminal-primary font-body opacity-80 leading-relaxed">
          {data.content}
        </p>
        <div className="flex flex-wrap -m-2">
          <div className="w-auto p-2">
            <button
              className="terminal-button inline-block px-8 py-4 text-2xl tracking-tighter"
              onClick={handleAccept}
            >
              {data.acceptButtonLabel}
            </button>
          </div>
          <div className="w-auto p-2">
            <button
              className="inline-block px-8 py-4 text-terminal-primary font-display text-xl border border-terminal-primary hover:bg-terminal-primary hover:text-terminal-black transition-colors uppercase"
              onClick={handleClose}
            >
              {data.settingsButtonLabel}
            </button>
          </div>
        </div>
        <button
          className="absolute top-4 right-4 text-terminal-primary hover:text-white font-display font-bold text-2xl"
          onClick={handleClose}
          aria-label="Close cookie consent"
        >
          [ X ]
        </button>
      </div>
    </section>
  );
};
