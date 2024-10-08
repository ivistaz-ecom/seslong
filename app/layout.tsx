import type { Metadata } from "next";

import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Seslong",
  description: "Seslong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
