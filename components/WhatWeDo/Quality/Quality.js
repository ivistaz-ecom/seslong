import Image from "next/image";
import React from "react";

const Quality = () => {
    return (
        <div className="bg-[#F8E2CF]">
            <h2 className="py-6 text-4xl font-medium container mx-auto">Quality</h2>
            <Image
                className="container m-auto w-full p-4 pb-10 lg:p-0"
                width={900}
                height={800}
                src="/what-we-do/Quality.png"
            />
            <p className="flex justify-center p-4 text-center text-[20px] font-normal lg:p-10 lg:pl-36 lg:pr-36">
                At Seslong, quality control is paramount in every aspect of our
                operations. Our commitment to quality permeates every level of the
                organization and extends to each link in our supply chain. This fosters
                a culture of quality consciousness that is crucial not only to meeting
                but exceeding customer expectations. High-quality products are
                fundamental to customer satisfaction, which in turn reinforces our
                reputation and supports business growth. Our continuous focus on
                upholding high standards is what distinguishes Seslong in the
                marketplace, driving our success and reliability as a trusted partner in
                the industry.
            </p>
        </div>
    );
};

export default Quality;
