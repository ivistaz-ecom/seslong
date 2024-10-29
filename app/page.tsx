import Banner from "../components/HomePage/Banner/Banner";
import WhatWe from "../components/HomePage/WhatWe/WhatWe";
import OurPresence from "../components/HomePage/OurPresense/OurPresence";
import Product from "../components/HomePage/ProductRage/Product";
import Contact from "@/components/ContactUs/Form/Page";
import FloatingButton from "../components/FloatingButton/floatingbutton.js"

export default function Home() {

  return (
    <>
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
