import { headers as getHeaders } from "next/headers.js";
import { CollectionSlug, getPayload } from "payload";
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

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  await payload.auth({ headers });

  const {
    docs: [page],
  } = await payload.find({
    collection: "pages" as CollectionSlug,
    where: {
      slug: { equals: "index" },
    },
  });

  if (!page) {
    return null;
  }

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Application />
      <Footer />
      <Cookies />
    </>
  );
}
