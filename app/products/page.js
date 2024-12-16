import React from "react";
import Banner from "../../components/Products/Banner/Banner";
import Product from "../../components/Products/Products/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Seo from "../../components/Seo";

export default function page() {
  const seoField = {
    title:
      "Explore Seslong: Your One-Stop for Quality Skincare, Health, and Wellness Solutions",
    description:
      "Discover Seslong's range of skincare, health, and wellness products crafted for quality and care. Shop now to elevate your well-being.",
    path: "products",
    metaImage: "/what-we-do/Quality.png",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <Banner />
      <FloatingButton />
      <Product />
    </>
  );
}
