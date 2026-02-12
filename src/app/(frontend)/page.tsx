import { getPayload } from "payload";
import React from "react";
import config from "@/payload.config";
import {
  Hero,
  About,
  Features,
  Application,
  Footer,
  Cookies,
  Header,
  Testimonials,
  FAQ,
} from "./components";
import { Page } from "@/payload-types";
import { notFound } from "next/navigation";

const renderBlock = (block: Page["layout"][0]) => {
  switch (block.blockType) {
    case "hero":
      return <Hero block={block} key={block.id} />;
    case "header":
      return <Header block={block} key={block.id} />;
    case "about":
      return <About block={block} key={block.id} />;
    case "features":
      return <Features block={block} key={block.id} />;
    case "application":
      return <Application block={block} key={block.id} />;
    default:
      return null;
  }
};

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const {
    docs: [page],
  } = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: "index" },
    },
  });

  if (!page) {
    console.log("No page document found for slug 'index'");
    return notFound();
  }

  console.log("Rendering page with layout blocks:", page.layout?.length);

  let footer = null;
  try {
    footer = await payload.findGlobal({
      slug: "footer",
    });
  } catch (e) {
    console.error("Footer global not found", e);
  }

  let cookieConsent = null;
  try {
    cookieConsent = await payload.findGlobal({
      slug: "cookie-consent",
    });
  } catch (e) {
    console.error("CookieConsent global not found", e);
  }

  return (
    <>
      <div className="page bg-terminal-black min-h-screen relative">
        <div className="vignette"></div>
        {page.layout?.map((block) => renderBlock(block))}
        <Testimonials />
        <FAQ />
      </div>
      <Footer data={footer} />
      <Cookies data={cookieConsent} />
    </>
  );
}
