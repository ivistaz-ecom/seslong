"use client";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function FloatingButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/get-the-brochure");
  };
  return (
    <div className="fixed bottom-40 right-2 z-50 flex items-center space-x-2 lg:right-8">
      <span
        onClick={handleClick}
        className="hidden cursor-pointer rounded-md bg-[#f5831fca] px-2 py-1 font-semibold text-white shadow-lg lg:block"
      >
        Get the Brochure
      </span>
      <button
        onClick={handleClick}
        className="flex size-14 items-center justify-center rounded-full bg-[#f5831fca] text-2xl text-white shadow-lg  transition duration-300 ease-in-out"
      >




        <IoMdMail size={28} />
      </button>
    </div>
  );
}
