import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export default function WhatWe() {
  return (
    <div className="lg:flex container mx-auto gap-28">
      <div className=" mt-7 flex flex-col items-center justify-center p-3  lg:mt-0 lg:p-12 lg:pl-40">
        <h2 className="text-3xl font-medium lg:text-4xl">What We Do</h2>
        <p className="lg:py-8 py-5 text-center text-[20px] font-normal">
          Our core activities encompass manufacturing, export, and distribution.
          We emphasize quality control across all operations to meet and exceed
          the standards expected by our clients.
        </p>
        <Link
          href="/what-we-do"
          className="group flex items-center justify-center text-2xl hover:text-[#F5841F]"
        >
          Read More
          <span className="ml-2 translate-x-0 transform opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
            <IoMdArrowForward />
          </span>
        </Link>
      </div>
      <div className="container mx-auto  flex items-center lg:-mt-0">
        <Image
          src="/Home/hands.png"
          width={400}
          height={400}
          className="p-5 lg:p-0"
          alt="image"
        />
      </div>
    </div>
  );
}
