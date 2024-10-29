import React from "react";
import Banner from "../../components/Products/Banner/Banner";
import Product from "../../components/Products/Products/page";
import FloatingButton from "../../components/FloatingButton/floatingbutton"


export const metadata = {
  title: "Explore Seslong: Your One-Stop for Quality Skincare, Health, and Wellness Solutions",
  description:
    "Discover Seslong's range of skincare, health, and wellness products crafted for quality and care. Shop now to elevate your well-being.",
  alternates: {
    canonical: "https://staging.seslong.com/products",
  },
  openGraph: {
    title: "Explore Seslong: Your One-Stop for Quality Skincare, Health, and Wellness Solutions",
    description:
      "Discover Seslong's range of skincare, health, and wellness products crafted for quality and care. Shop now to elevate your well-being.",
    url: "https://staging.seslong.com/products",
    images: "/what-we-do/Quality.png",
  },
};

export default function page() {

  return (
    <>

      <Banner />
      <FloatingButton />
      <Product />

    </>
  );
}
