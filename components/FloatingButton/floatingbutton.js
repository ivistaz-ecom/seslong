"use client";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function FloatingButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact-us#contact-form"); // Adjust URL as needed
  };

  return (
    <div className="fixed bottom-60 lg:right-5 right-2 z-50 flex items-center space-x-2">
      <span className="text-white font-semibold bg-[#f5831fca] px-2 py-1 rounded-md shadow-lg hidden lg:block">
        Get Brochure
      </span>
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f5831fca] text-white text-2xl shadow-lg  transition duration-300 ease-in-out"
      >
        <IoMdMail size={28} />
      </button>
    </div>
  );
}
