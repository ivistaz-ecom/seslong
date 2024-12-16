import React from "react";
import Banner from "../../components/ContactUs/Banner/Banner";
import Form from "../../components/ContactUs/Form/Page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Seo from "../../components/Seo";

export default function page() {
  const seoField = {
    title: "Contact Seslong | Get in Touch for Enquiries and Support",
    description:
      "Reach out to Seslong for product inquiries, customer support, or partnership opportunities. We're here to assist you.",
    path: "contact-us",
    metaImage: "/what-we-do/Quality.png",
    pageType: "WebSite",
  };

  return (
    <>
      <Seo {...seoField} />
      <Banner />
      <Form />
      <FloatingButton />
    </>
  );
}
