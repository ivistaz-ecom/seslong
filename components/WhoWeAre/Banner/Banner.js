"use client";
import React, { useState, useEffect } from "react";
import { homeSlider } from "../../../utils/data"; // Ensure this imports correctly
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

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
    <div className="z-50 h-[90vh]">

      <div className="lg:h-[50vh] h-[70vh] bg-[#F8E2CF]">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
          >
            <img
              src="who-we-are/banner.jpg"
              className="h-full w-full object-cover hidden sm:block"
              alt="bnner image"
            />
            <img
              src="/who-we-are/mobile-who-we-are.jpg"
              className="h-full w-full object-cover block sm:hidden"
              alt="bnner image"
            />
          </div>
        </div>
      </div>
      <div className="z-40 mx-auto flex h-[40vh] flex-col items-center justify-center bg-[#F8E2CF] text-xl font-normal lg:px-40">
        <h2 className="text-4xl font-medium mt-10 lg:mt-0">About Seslong</h2>
        <p className="w-[90%] py-3 text-center lg:w-10/12 lg:py-12">
          We are a company involved in manufacturing and global trade. With
          operations strategically located in India, Hong Kong and China, we are
          able to leverage our product knowledge and location to maximise our
          customer benefits.
        </p>
      </div>
    </div>
  );
}
