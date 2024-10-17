import React from "react";
import Banner from "../../components/WhatWeDo/Banner/Banner";
import Business from "../../components/WhatWeDo/Business/page";
import Quality from "../../components/WhatWeDo/Quality/Quality"
import FloatingButton from "../../components/FloatingButton/floatingbutton"
export default function page() {
  return (
    <>
      <Banner />
      <Business />
      <Quality />
      <FloatingButton/>
    </>
  );
}
