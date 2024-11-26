"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

const WhatsappWidgetKumarkom = () => {
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let timer;

  const startTimerToHide = () => {
    // Clear any existing timer
    clearTimeout(timer);
    // Hide popup after 3 seconds
    timer = setTimeout(() => {
      setIsShow(false);
    }, 3000);
  };

  const handleOnClick = () => {
    setIsShow(false); // Hide the popup on click
  };

  useEffect(() => {
    // Show popup on page load
    setIsShow(true);
    startTimerToHide();

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setIsShow((prev) => !prev); // Toggle visibility
    if (!isShow) startTimerToHide(); // Restart timer when showing the popup
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        className={`fixed z-50 flex items-center justify-center rounded-full bg-green-500 p-3 shadow-lg transition-all duration-300 ${
          isScrolled
            ? "lg:bottom-22 fixed bottom-24 right-4 lg:right-8"
            : "lg:bottom-13 bottom-2 right-4 lg:right-8"
        }`}
        onClick={handleButtonClick} // Toggle visibility on button click
      >
        <FaWhatsapp size="28" className="text-white" />
      </button>

      {/* Popup with animation */}
      <div
        className={`fixed bottom-56 right-4 z-50 w-64 shadow-lg transition-transform duration-300 ease-in-out lg:right-10 ${
          isShow
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-800">
          <div className="flex items-center justify-between bg-[#f5831f] p-2">
            <p className="text-sm font-semibold text-white">Seslong</p>
            <button
              className="cursor-pointer text-lg text-white"
              onClick={handleOnClick} // Close popup on click
            >
              &times;
            </button>
          </div>
          <div className="p-2">
            <p className="font-medium text-gray-800">
              <Link
                className="hover:text-green-500"
                href="https://wa.me/+919900288341?text=Hi, I have an enquiry!"
                target="_blank"
              >
                <span className="mt-1 flex cursor-pointer gap-2">
                  <IoLogoWhatsapp className="mt-1" /> IND: +91-99002-88341
                </span>
              </Link>
              <Link
                className="hover:text-green-500"
                href="https://wa.me/+85255909449?text=Hi, I have an enquiry!"
                target="_blank"
              >
                <span className="mt-1 flex gap-2">
                  <IoLogoWhatsapp className="mt-1" /> HK: +85255909449
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappWidgetKumarkom;
