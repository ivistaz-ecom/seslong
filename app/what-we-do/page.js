import React from "react";
import Banner from "../../components/WhatWeDo/Banner/Banner";
import Business from "../../components/WhatWeDo/Business/page";
import Quality from "../../components/WhatWeDo/Quality/Quality";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Seo from "../../components/Seo";

export default function page() {
  const seoField = {
    title: "Global Manufacturing, Export, and Distribution Solutions | Seslong",
    description:
      "Discover Seslong's tailored manufacturing, export, and distribution solutions across industries, ensuring quality, efficiency, and global reach.",
    path: "what-we-do",
    metaImage: "/what-we-do/Quality.png",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <Banner />
      <Business />
      {/* <Quality /> */}
      <FloatingButton />
    </>
  );
}
