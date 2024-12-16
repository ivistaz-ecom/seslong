import React from "react";
import Image from "next/image";

export default function OurPresence() {
  return (
    <div className="grid-row-r bg-[#E5E5E4] py-20 md:grid md:grid-cols-2">
      {/* paragraph field */}
      <div className="order-1 mx-auto flex flex-col items-center justify-center p-3 md:order-2 md:-mt-0 lg:h-[50vh]  lg:w-9/12 lg:p-12 lg:pr-40">
        <h2 className="text-3xl font-medium lg:text-4xl">Our Customers</h2>
        <p className="py-8 text-center text-[20px] font-normal">
          Seslong supplies products to customers spread across major global
          markets including{" "}
          <strong>
            North America, South America, Europe, the Middle East, and Asia.
          </strong>{" "}
          Our typical client includes retail chains seeking private label
          products, brands looking to expand their product portfolios, and
          importers who further distribute products to local retailers or
          brands.
        </p>
      </div>
      {/* image field */}
      <div className="order-2 md:order-1 lg:h-[50vh]">
        <Image
          src="/Home/our-presence-img.png"
          width={400}
          height={400}
          className="w-full"
          alt="Our Presence Image" // Always add an alt for accessibility
        />
      </div>
    </div>
  );
}
