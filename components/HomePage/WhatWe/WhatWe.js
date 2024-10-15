import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export default function WhatWe() {
  return (
    <div className="grid-cols-2 lg:grid">
      <div className="flex flex-col items-center justify-center p-3 py-16 lg:p-12 lg:py-0  lg:pl-40">
        <h2 className="text-4xl font-medium">What We Offer</h2>
        <p className="py-8 text-center text-[20px] font-normal">
          Our core activities encompass manufacturing, export, and distribution.
          We emphasize quality control across all operations to meet and exceed
          the standards expected by our clients.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center text-2xl hover:text-[#F5841F] group"
        >
          Read More
          <span className="ml-2 translate-x-0 transform opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
            <IoMdArrowForward />
          </span>
        </Link>
      </div>
      <div className=" ">
        <Image
          src="/Home/what-we-offer-img.png"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  );
}
