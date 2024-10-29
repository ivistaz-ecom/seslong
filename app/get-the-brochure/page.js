import React from "react";
import Form from "../../components/GetTheBrochure/Form/Page";
import Seo from "../../components/SeoComponents/Seo";

export default function page() {
    const title =
        "Download the Brochure | Explore Our Products and Enhance Your Home Experience";
    const description =
        "Get the Seslong brochure to explore premium products designed to elevate your living spaces. Discover quality and style crafted for your home. Download now!";
    const path = "https://staging.seslong.com/get-the-brochure";
    const metaImage = "/contactUs/banner.png";
    return (
        <>
            <Seo
                title={title}
                description={description}
                path={path}
                metaImage={metaImage}
            />
            <Form />
        </>
    );
}
