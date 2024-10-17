import React from "react";
import Banner from "../../components/Products/Banner/Banner";
import Product from "../../components/Products/Products/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton"
export default function page() {
  return (
    <>
      <Banner />
      <FloatingButton/>
      <Product />
      
    </>
  );
}
