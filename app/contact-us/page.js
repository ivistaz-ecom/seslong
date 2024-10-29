import React from "react";
import Banner from "../../components/ContactUs/Banner/Banner";
import Form from "../../components/ContactUs/Form/Page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import Seo from "../../components/SeoComponents/Seo";

export default function page() {
  const title = "Contact Seslong | Get in Touch for Enquiries and Support";
  const description =
    "Reach out to Seslong for product inquiries, customer support, or partnership opportunities. We're here to assist you.";
  const path = "https://staging.seslong.com/contact-us";
  const metaImage = "/contact-banner.png";
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Banner />
      <Form />
      <FloatingButton />
    </>
  );
}
