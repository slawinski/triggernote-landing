import React from "react";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata = {
  description: "TriggerNote - Terminal Interface",
  title: "TriggerNote",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className={vt323.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('terminal-theme');
                  if (theme === 'amber') {
                    document.documentElement.classList.add('theme-amber');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="relative min-h-screen">
        <div className="scanline-fixed"></div>
        <ThemeProvider>
          {/* SVG Filter for perfect monochrome */}
          <svg style={{ visibility: "hidden", position: "absolute", width: 0, height: 0 }}>
            <filter id="terminal-green-filter">
              <feColorMatrix
                type="matrix"
                values="0.21 0.72 0.07 0 0
                        0.21 0.72 0.07 0 0
                        0.21 0.72 0.07 0 0
                        0 0 0 1 0"
                result="grayscale"
              />
              <feComponentTransfer>
                <feFuncR type="linear" slope="0.2" />
                <feFuncG type="linear" slope="1.0" />
                <feFuncB type="linear" slope="0.2" />
              </feComponentTransfer>
            </filter>
          </svg>
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}