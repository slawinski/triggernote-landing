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
} from "./components";
import { Page } from "@/payload-types";

const renderBlock = (block: Page["layout"][0]) => {
  switch (block.blockType) {
    case "hero":
      return <Hero block={block} key={block.id} />;
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
    return <div>Page not found</div>;
  }

  return (
    <>
      <div className="page">
        {page.layout?.map((block) => renderBlock(block))}
      </div>
      <About />
      <Features />
      <Application />
      <Footer />
      <Cookies />
    </>
  );
}
