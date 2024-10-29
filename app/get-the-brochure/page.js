import React from "react";
import Form from "../../components/GetTheBrochure/Form/Page";

export const metadata = {
    title:
        "Download the Brochure | Explore Our Products and Enhance Your Home Experience",
    description:
        "Get the Seslong brochure to explore premium products designed to elevate your living spaces. Discover quality and style crafted for your home. Download now!",
    alternates: {
        canonical: "https://staging.seslong.com/get-the-brochure",
    },
    openGraph: {
        title:
            "Download the Brochure | Explore Our Products and Enhance Your Home Experience",
        description:
            "Get the Seslong brochure to explore premium products designed to elevate your living spaces. Discover quality and style crafted for your home. Download now!",
        url: "https://staging.seslong.com/get-the-brochure",
        images: "/what-we-do/Quality.png",
    },
};

export default function page() {
    return (
        <>
            <Form />
        </>
    );
}
