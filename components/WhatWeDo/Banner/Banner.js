import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-50   lg:mb-0">
      <div className="h-[70vh] bg-[#F8E2CF] lg:h-[50vh]">
        <div className="relative size-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
          >
            <Image
              width={1200}
              height={900}
              src="/what-we-do/whatWeDoBanner.png"
              className="hidden size-full object-cover sm:block"
              alt="Slide image"
            />
            <Image
              width={600}
              height={500}
              src="/what-we-do/whatWeDoMobile.png"
              className="block size-full object-cover sm:hidden"
              alt="Slide image"
            />
          </div>
        </div>
      </div>
      <div className="z-40 mx-auto flex flex-col items-center justify-center bg-[#F8E2CF] p-5 text-xl font-normal lg:px-40">
        <h2 className="mt-5 text-4xl font-medium">What We Do</h2>
        <p className="text-center md:w-10/12 lg:py-5">
          Seslong operates through three main business verticals:
        </p>
      </div>
    </div>
  );
}
