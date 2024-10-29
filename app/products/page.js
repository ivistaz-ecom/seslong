import React from "react";
import Banner from "../../components/Products/Banner/Banner";
import Product from "../../components/Products/Products/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import Seo from "../../components/SeoComponents/Seo";

export default function page() {
  const title =
    "Explore Seslong: Your One-Stop for Quality Skincare, Health, and Wellness Solutions";
  const description =
    "Discover Seslong's range of skincare, health, and wellness products crafted for quality and care. Shop now to elevate your well-being.";
  const path = "https://staging.seslong.com/products";
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
      <FloatingButton />
      <Product />

    </>
  );
}
