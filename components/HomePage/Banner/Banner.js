"use client";
import React, { useState, useEffect } from "react";
import { homeSlider } from "../../../utils/data"; // Ensure this imports correctly
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % homeSlider.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevBtn = (
    <button
      type="button"
      className="group absolute start-0 top-48 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none lg:top-48 xl:top-60"
      onClick={() =>
        setActiveIndex(
          (activeIndex - 1 + homeSlider.length) % homeSlider.length,
        )
      }
    >
      <IoIosArrowRoundBack size="70" color="white" />
    </button>
  );

  const nextBtn = (
    <button
      type="button"
      className="group absolute end-0 top-48 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none lg:top-48 xl:top-60"
      onClick={() => setActiveIndex((activeIndex + 1) % homeSlider.length)}
    >
      <IoIosArrowRoundForward size="70" color="white" />
    </button>
  );

  return (
    <div className="z-50 h-[75vh]">
      {/* <div className="h-[70vh] bg-[#F8E2CF]">
        <div className="relative h-full w-full overflow-hidden">
          {homeSlider.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                className="hidden h-full w-full object-cover sm:block"
                alt={slide.alt || "Slide image"}
              />
              <img
                src={slide.mobImage}
                className="block h-full w-full object-cover sm:hidden"
                alt={slide.alt || "Slide image"}
              />
              <div
                className="absolute bottom-28 left-4 bg-black bg-opacity-50 p-2 py-2 text-2xl font-medium text-white lg:bottom-32 lg:left-10 lg:px-4 lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              ></div>
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
            {homeSlider.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-1 rounded-lg transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "w-40" : "w-20"
                } bg-white`}
                aria-current={index === activeIndex ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>

          {prevBtn}
          {nextBtn}
        </div>
      </div> */}
      <div className="z-50 ">
        <div className="h-[70vh] bg-[#F8E2CF] lg:h-[50vh]">
          <div className="relative size-full overflow-hidden">
            <div
              className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out`}
            >
              {/* Desktop image */}
              <Image
                width={1200}
                height={900}
                src="/home-page-banner.png"
                className="hidden size-full object-cover sm:block"
                alt="Desktop banner"
              />
              {/* Mobile image */}
              <Image
                height={500}
                width={600}
                src="/home-page-banner-mobile.png"
                className="block size-full object-cover sm:hidden"
                alt="Mobile banner"
              />
            </div>
            <div className="absolute bottom-28  left-4 bg-black bg-opacity-65 p-2 py-2 text-2xl font-medium text-white lg:bottom-12 lg:left-16 lg:px-4 lg:text-5xl">
              <p>
                Your Reliable Partner For <br /> Quality Products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-40 mx-auto flex items-center justify-center bg-[#F8E2CF] p-5 text-xl font-normal lg:h-[20vh] lg:px-40">
        <p className="lg:w-10/12w container mx-auto">
          Seslong is a global trading house with operations and manufacturing
          strategically located across India, Hong Kong, China, enabling us to
          supply a diverse range of products to customers worldwide.
        </p>
      </div>
    </div>
  );
}
