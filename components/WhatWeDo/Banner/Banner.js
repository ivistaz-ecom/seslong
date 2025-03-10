"use client";

import Image from "next/image";
import Head from "next/head";
import React from "react";

export default function Banner() {
  return (
    <>
      {/* Preload Images */}
      <Head>
        <link rel="preload" href="/what-we-do/banner.png" as="image" />
        <link rel="preload" href="/what-we-do/whatWeDoMobile.png" as="image" />
      </Head>

      <div className="z-50 bg-black lg:mb-0">
        {/* Hero Section */}
        <div className="h-[70vh] lg:h-[50vh]">
          <div className="relative size-full overflow-hidden">
            <div
              className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out`}
            >
              {/* Desktop Image */}
              <Image
                width={1200}
                height={900}
                src="/what-we-do/banner.png"
                className="hidden size-full object-cover sm:block"
                alt="Slide image"
                loading="lazy"
              />
              {/* Mobile Image */}
              <Image
                width={600}
                height={500}
                src="/what-we-do/whatWeDoMobile.png"
                className="block size-full object-cover sm:hidden"
                alt="Slide image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="z-40 mx-auto flex flex-col items-center justify-center bg-[#F8E2CF] p-5 text-xl font-normal lg:px-40">
          <h2 className="my-3 text-3xl font-medium lg:my-0 lg:mt-5 lg:text-4xl">
            What We Do
          </h2>
          <p className="text-center md:w-10/12 lg:py-5">
            Seslong operates through three main business verticals:
          </p>
        </div>
      </div>
    </>
  );
}
