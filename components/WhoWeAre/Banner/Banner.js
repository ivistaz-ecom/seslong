"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
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
      className="group absolute start-0 top-40 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
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
      className="group absolute end-0 top-40 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      onClick={() => setActiveIndex((activeIndex + 1) % homeSlider.length)}
    >
      <IoIosArrowRoundForward size="70" color="white" />
    </button>
  );
  return (
    <>
      <div className="z-50 h-[90vh]">
        <div className="h-[70vh] bg-[#F8E2CF] lg:h-[50vh]">
          <div className="relative size-full overflow-hidden">
            <div
              className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
            >
              <Image
                width={1200}
                height={900}
                src="/who-we-are/banner.jpg"
                className="hidden size-full object-cover sm:block"
                alt="bnner image"
              />
              <Image
                width={600}
                height={500}
                src="/who-we-are/mobile-who-we-are.jpg"
                className="block size-full object-cover sm:hidden"
                alt="banner image"
              />
            </div>
          </div>
        </div>
        <div className="z-40 mx-auto flex h-[40vh] flex-col items-center justify-center bg-[#F8E2CF] text-xl font-normal lg:px-40">
          <h2 className="mt-10 text-4xl font-medium lg:mt-0">About Seslong</h2>
          <p className="w-[90%] py-3 text-center lg:w-10/12 lg:py-12">
            We are a company involved in manufacturing and global trade. With
            operations strategically located in India, Hong Kong and China, we
            are able to leverage our product knowledge and location to maximise
            our customer benefits.
          </p>
        </div>
      </div>
    </>
  );
}
