import React from "react";
import Banner from "../../components/WhoWeAre/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/Contents/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import Quality from "@/components/WhatWeDo/Quality/Quality";
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
