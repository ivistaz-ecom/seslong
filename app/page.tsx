import Banner from "../components/HomePage/Banner/Banner";
import WhatWe from "../components/HomePage/WhatWe/WhatWe";
import OurPresence from "../components/HomePage/OurPresense/OurPresence";
import Product from "../components/HomePage/ProductRage/Product";
import Contact from "@/components/ContactUs/Form/Page";
import FloatingButton from "../components/FloatingButton/floatingbutton.js";
import Seo from "../components/Seo";
export default function Home() {
  const seoField = {
    title:
      "Your Trusted Partner for Quality Global Products and Diverse Market Solutions",
    description:
      "Explore Seslong's extensive product range, from personal care to food and agro. Partner with us for quality, global reach, and tailored solutions",
    path: "",
    metaImage: "/what-we-do/Quality.png",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <Banner />
      <WhatWe />
      <OurPresence />
      <Product />
      <div className="-mt-52 lg:-mt-0">
        <Contact />
      </div>
      <FloatingButton />
      {/* <ScrollFloatingButton /> */}
    </>
  );
}
