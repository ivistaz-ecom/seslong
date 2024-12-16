import React from "react";
import Banner from "../../components/WhoWeAre/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/Contents/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Quality from "@/components/WhatWeDo/Quality/Quality";
import Seo from "../../components/Seo";
export default function page() {
  const seoField = {
    title: "Connecting Global Markets with Quality Manufacturing Solutions",
    description:
      "Explore Seslong's manufacturing expertise and trading solutions, bridging markets from India to Hong Kong with high-quality products and reliable partnerships.",
    path: "who-we-are",
    metaImage: "/what-we-do/Quality.png",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <Banner />
      <WhoWeAre />
      <Quality />
      <FloatingButton />
    </>
  );
}
