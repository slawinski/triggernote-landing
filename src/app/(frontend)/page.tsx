import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";
import config from "@/payload.config";
import "./styles.css";
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
