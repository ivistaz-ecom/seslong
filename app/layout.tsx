import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
import { CategoryProvider } from "../utils/CategoryContext";
import ScrollFloatingButton from "../components/ScrollFloatingButton/page"
import WhatsaapFloatingButton from "../components/WhatsAppFloatingButton/page"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeModeScript />
      </head>
      <body>
        <CategoryProvider>
          <Header />
          <ScrollFloatingButton />
          <WhatsaapFloatingButton />
          {children}
          <Footer />
        </CategoryProvider>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></Script>
      <Script src="/tracking.js"></Script>
    </html>
  );
}
