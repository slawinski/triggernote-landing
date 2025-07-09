import React from "react";
import Image from "next/image";
import "./globals.css";
// import './styles.css'

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0E0F11" }} className="relative">
        <Image
          className="absolute top-0 left-0 w-full z-0"
          src="nightsable-assets/images/headers/layer-blur.svg"
          alt="Layer blur"
          width={1920}
          height={235}
          style={{ pointerEvents: "none" }}
        />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
