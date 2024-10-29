import React from "react";
import Banner from "../../components/WhoWeAre/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/Contents/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Quality from "@/components/WhatWeDo/Quality/Quality";

export const metadata = {
  title: "Connecting Global Markets with Quality Manufacturing Solutions",
  description:
    "Explore Seslong's manufacturing expertise and trading solutions, bridging markets from India to Hong Kong with high-quality products and reliable partnerships.",
  alternates: {
    canonical: "https://staging.seslong.com/who-we-are",
  },
  openGraph: {
    title: "Connecting Global Markets with Quality Manufacturing Solutions",
    description:
      "Explore Seslong's manufacturing expertise and trading solutions, bridging markets from India to Hong Kong with high-quality products and reliable partnerships.",
    url: "https://staging.seslong.com/who-we-are",
    images: "/what-we-do/Quality.png",
  },
};

export default function page() {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <Quality />
      <FloatingButton />
    </>
  );
}
