import React from "react";
import "./globals.css";

export const metadata = {
  description: "TriggerNote - Terminal Interface",
  title: "TriggerNote",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}