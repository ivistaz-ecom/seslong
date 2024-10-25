import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh]">
      <div className="h-[70vh] bg-[#F8E2CF] lg:h-[50vh]">
        <div className="relative mx-auto size-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
          >
            <Image
              width={1200}
              height={900}
              src="/Products/products-banner.jpg"
              className="hidden size-full object-cover sm:block"
              alt="Slide image"
            />
            <Image
              width={500}
              height={500}
              src="/Products/mobile-banner.jpg"
              className="block size-full object-cover sm:hidden"
              alt="Slide image"
            />
          </div>

          {/* <div className="absolute bottom-0 mx-auto p-12">
            <h2 className="text-4xl font-medium text-white">Product Categories</h2>
            
          </div> */}
        </div>
      </div>
    </div>
  );
}
