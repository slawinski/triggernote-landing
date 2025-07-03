import React from "react";

export const Cookies = () => {
  return (
    <React.Fragment>
      <>
        <section className="fixed bottom-0 left-0 z-50 w-full p-10">
          <div className="relative p-8 max-w-xl bg-black rounded-5xl">
            <h3 className="mb-3.5 text-2xl text-white font-medium tracking-2xl">
              Cookie Consent
            </h3>
            <p className="mb-8 text-sm text-white">
              We use cookies to ensure that we give you the best experience on
              our website. If you continue to use this site we will assume that
              you are happy with it.
            </p>
            <div className="flex flex-wrap -m-2">
              <div className="w-auto p-2">
                <a
                  className="inline-block px-8 py-4 font-medium tracking-tighter border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                  href="#"
                >
                  Accept All Cookies
                </a>
              </div>
              <div className="w-auto p-2">
                <a
                  className="inline-block px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                  href="#"
                >
                  Settings
                </a>
              </div>
            </div>
            <a className="absolute top-7 right-7" href="#">
              <img
                src="nightsable-assets/images/cookies/close-white.png"
                alt=""
              />
            </a>
          </div>
        </section>
      </>
    </React.Fragment>
  );
};
