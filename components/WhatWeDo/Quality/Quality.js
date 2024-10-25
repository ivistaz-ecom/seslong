import Image from "next/image";
import React from "react";

const Quality = () => {
    return (
        <div className="bg-[#F8E2CF]">
            <h2 className="py-6 text-4xl font-medium container mx-auto text-center">Quality</h2>
            <div className="grid container lg:grid-cols-2 mx-auto justify-center items-center lg:py-10">
                <Image
                    className="w-[90%] lg:p-0 mx-5"
                    width={200}
                    height={400}
                    src="/what-we-do/Quality.png"
                />
                <p className=" justify-center p-4 text-center text-[20px] font-normal">
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
        </div>
    );
};

export default Quality;
