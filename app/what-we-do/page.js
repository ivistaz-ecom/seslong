import React from "react";
import Banner from "../../components/WhatWeDo/Banner/Banner";
import Business from "../../components/WhatWeDo/Business/page";
import Quality from "../../components/WhatWeDo/Quality/Quality";
import FloatingButton from "../../components/FloatingButton/floatingbutton";

export const metadata = {
  title: "Global Manufacturing, Export, and Distribution Solutions | Seslong",
  description:
    "Discover Seslong's tailored manufacturing, export, and distribution solutions across industries, ensuring quality, efficiency, and global reach.",
  alternates: {
    canonical: "https://staging.seslong.com/what-we-do",
  },
  openGraph: {
    title: "Global Manufacturing, Export, and Distribution Solutions | Seslong",
    description:
      "Discover Seslong's tailored manufacturing, export, and distribution solutions across industries, ensuring quality, efficiency, and global reach.",
    url: "https://staging.seslong.com/what-we-do",
    images: "/what-we-do/Quality.png",
  },
};



export default function page() {

  return (
    <>

      <Banner />
      <Business />
      {/* <Quality /> */}
      <FloatingButton />
    </>
  );
}
