import React from "react";
import Banner from "../../components/WhatWeDo/Banner/Banner";
import Business from "../../components/WhatWeDo/Business/page";
import Quality from "../../components/WhatWeDo/Quality/Quality";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Seo from "../../components/SeoComponents/Seo";
export default function page() {
  const title =
    "Global Manufacturing, Export, and Distribution Solutions | Seslong";
  const description =
    "Discover Seslong's tailored manufacturing, export, and distribution solutions across industries, ensuring quality, efficiency, and global reach.";
  const path = "https://staging.seslong.com/what-we-do";
  const metaImage = "/contactUs/banner.png";
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Banner />
      <Business />
      {/* <Quality /> */}
      <FloatingButton />
    </>
  );
}
