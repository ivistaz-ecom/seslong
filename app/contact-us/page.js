import React from "react";
import Banner from "../../components/ContactUs/Banner/Banner";
import Form from "../../components/ContactUs/Form/Page";
import FloatingButton from "../../components/FloatingButton/floatingbutton";

export const metadata = {
  title: "Contact Seslong | Get in Touch for Enquiries and Support",
  description:
    "Reach out to Seslong for product inquiries, customer support, or partnership opportunities. We're here to assist you.",
  alternates: {
    canonical: "https://staging.seslong.com/contact-us",
  },
  openGraph: {
    title: "Contact Seslong | Get in Touch for Enquiries and Support",
    description:
      "Reach out to Seslong for product inquiries, customer support, or partnership opportunities. We're here to assist you.",
    url: "https://staging.seslong.com/contact-us",
    images: "/what-we-do/Quality.png",
  },
};

export default function page() {
  return (
    <>
      <Banner />
      <Form />
      <FloatingButton />
    </>
  );
}
