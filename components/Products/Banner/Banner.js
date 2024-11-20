import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh]">
      <div className="h-[70vh] bg-[#F8E2CF] lg:h-[50vh]">
        <div className="relative mx-auto h-full w-full overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out">
            {/* Video for larger screens */}
            <video
              width={1200}
              height={900}
              src="/Products/video/seslong-products-banner-video.mp4"
              className="hidden h-full w-full object-cover sm:block"
              autoPlay
              loop
              muted
            />

            {/* Image for smaller screens */}
            <video
              width={1200}
              height={900}
              src="/Products/video/seslong-products-banner-mob.gif.mp4"
              className="block h-full w-full object-cover sm:hidden"
              autoPlay
              loop
              muted
            />
          </div>

          {/* Optional text block at the bottom */}
          {/* Uncomment this section if needed */}
          {/* 
          <div className="absolute bottom-0 mx-auto p-12">
            <h2 className="text-4xl font-medium text-white">Product Categories</h2>
          </div> 
          */}
        </div>
      </div>
    </div>
  );
}
