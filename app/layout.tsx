import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
import { CategoryProvider } from "../utils/CategoryContext";
import ScrollFloatingButton from "../components/ScrollFloatingButton/page";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Y8JDo-LTWsbtPLD6LxFsfz9Oqhhj3va0eOLCnY5YnYc" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeModeScript />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9J4LH8VHMY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-9J4LH8VHMY');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-58RN5XD8');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58RN5XD8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <CategoryProvider>
          <Header />
          <ScrollFloatingButton />
          <WhatsAppFloatingButton />
          {children}
          <Footer />
        </CategoryProvider>

        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"
          strategy="lazyOnload"
        />
        <Script src="/tracking.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
