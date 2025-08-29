import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRECIOUS",
  description: 'The official website for Precious. Learn more about us.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}