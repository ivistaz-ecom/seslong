import React from "react";
import Image from "next/image";

export default function OurPresence() {
  return (
    <div className="grid grid-cols-2 bg-[#E5E5E4] py-20">
      <div className="h-[50vh]">
        <Image
          src="/Home/our-presence-img.png"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      <div className="mx-auto flex h-[50vh] w-9/12 flex-col items-center justify-center p-12 pr-40">
        <h2 className="text-4xl font-medium">Our Presence</h2>
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
    </div>
  );
}
