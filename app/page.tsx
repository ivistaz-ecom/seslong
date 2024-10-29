import Banner from "../components/HomePage/Banner/Banner";
import WhatWe from "../components/HomePage/WhatWe/WhatWe";
import OurPresence from "../components/HomePage/OurPresense/OurPresence";
import Product from "../components/HomePage/ProductRage/Product";
// import Contact from "../components/HomePage/Contact/Contact";
import Contact from "@/components/ContactUs/Form/Page";
import FloatingButton from "../components/FloatingButton/floatingbutton.js"
import Seo from "../components/SeoComponents/Seo"

export default function Home() {
  // seo
  const title =
    "Your Trusted Partner for Quality Global Products and Diverse Market Solutions";
  const description =
    "Explore Seslong's extensive product range, from personal care to food and agro. Partner with us for quality, global reach, and tailored solutions";
  const path = "https://staging.seslong.com/";
  const metaImage = "/Home/mobile-slider-01.jpg";
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
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
