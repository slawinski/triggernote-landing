"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className="fixed bottom-0 left-0 z-50 w-full p-10">
      <div className="relative p-8 max-w-xl bg-black rounded-5xl">
        <h3 className="mb-3.5 text-2xl text-white font-medium tracking-2xl">
          Cookie Consent
        </h3>
        <p className="mb-8 text-sm text-white">
          We use cookies to ensure that we give you the best experience on our
          website. If you continue to use this site we will assume that you are
          happy with it.
        </p>
        <div className="flex flex-wrap -m-2">
          <div className="w-auto p-2">
            <button
              className="inline-block px-8 py-4 font-medium tracking-tighter border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
              onClick={handleAccept}
            >
              Accept All Cookies
            </button>
          </div>
          <div className="w-auto p-2">
            <button
              className="inline-block px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
              onClick={handleClose}
            >
              Settings
            </button>
          </div>
        </div>
        <button
          className="absolute top-7 right-7"
          onClick={handleClose}
          aria-label="Close cookie consent"
        >
          <Image
            src="/nightsable-assets/images/cookies/close-white.png"
            alt="Close"
            width={16}
            height={16}
          />
        </button>
      </div>
    </section>
  );
};
