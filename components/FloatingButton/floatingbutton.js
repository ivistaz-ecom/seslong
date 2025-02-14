"use client";
import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function FloatingButton() {
  const router = useRouter();
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    router.push("/request-catalogue");
  };

  // Check for screen size to conditionally handle text visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsTextVisible(false); // Always hide text on mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Check if the user has scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 flex items-center space-x-2 lg:right-9${
        isScrolled
          ? "bottom-20 right-4 mb-20 lg:bottom-40 lg:right-8 lg:mb-0"
          : "lg:bottom-13 bottom-2 right-4 lg:right-8"
      }`}
      onMouseEnter={() => {
        if (window.innerWidth > 768) setIsTextVisible(true); // Show text on hover for desktop only
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 768) setIsTextVisible(false); // Hide text on hover leave for desktop
      }}
      onMouseOver={() => {
        if (window.innerWidth < 768) setIsTextVisible(true); // Hide text on hover leave for desktop
      }}
      onMouseOut={() => {
        if (window.innerWidth < 768) setIsTextVisible(false); // Hide text on hover leave for desktop
      }}
    >
      {isTextVisible && (
        <span
          onClick={handleClick}
          className="cursor-pointer rounded-md bg-[#f5831fca] px-2 py-1 font-semibold text-white shadow-lg"
        >
          Request Catalogue
        </span>
      )}
      <button
        aria-label="Send an email"
        id="mail-button"
        onClick={handleClick}
        className="flex items-center justify-center rounded-full bg-[#f5831fca] p-3 text-2xl text-white shadow-lg transition duration-300 ease-in-out"
      >
        <IoMdMail size={28} />
      </button>
    </div>
  );
}
