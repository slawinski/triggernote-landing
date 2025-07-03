import React from "react";

export const Application = () => {
  return (
    <React.Fragment>
      <>
        <section className="relative py-16 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="hidden md:block absolute top-32 -left-96"
                  src="nightsable-assets/images/application-section/lines.png"
                  alt=""
                />
                <img
                  className="relative mx-auto"
                  src="nightsable-assets/images/application-section/phone.png"
                  alt=""
                />
                <img
                  className="hidden md:block absolute bottom-56 left-64"
                  src="nightsable-assets/images/application-section/star.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                  Nightsable Card
                </span>
                <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl md:max-w-sm">
                  Get a Nightsable App
                </h2>
                <p className="mb-6 text-white text-opacity-60 md:max-w-xs">
                  Nightsable is a strategic branding agency focused on brand
                  creation, rebrands, and brand
                </p>
                <div className="flex flex-wrap -m-2.5">
                  <div className="w-auto p-2.5">
                    <a href="#">
                      <img
                        src="nightsable-assets/images/application-section/app-store.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-auto p-2.5">
                    <a href="#">
                      <img
                        src="nightsable-assets/images/application-section/google-play.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
};
