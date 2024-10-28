"use client";
import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function FloatingButton() {
  const router = useRouter();
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleClick = () => {
    router.push("/get-the-brochure");
  };

  // Toggle text visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        // Mobile screens
        if (window.scrollY > 100) {
          setIsTextVisible(false);
        } else {
          setIsTextVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-40 right-4 z-50 flex items-center space-x-2 lg:right-8">
      {isTextVisible && (
        <span
          onClick={handleClick}
          className="cursor-pointer rounded-md bg-[#f5831fca] px-2 py-1 font-semibold text-white shadow-lg"
        >
          Get the Brochure
        </span>
      )}
      <button
        onClick={handleClick}
        className="flex items-center justify-center rounded-full bg-[#f5831fca] p-3 text-2xl text-white shadow-lg transition duration-300 ease-in-out"
      >
        <IoMdMail size={28} />
      </button>
    </div>
  );
}
