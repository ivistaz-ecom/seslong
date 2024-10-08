import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export default function WhatWe() {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="flex flex-col items-center justify-center lg:p-12 lg:py-0 py-16 p-3  lg:pl-40">
        <h2 className="text-4xl font-medium">What We Offer</h2>
        <p className="py-8 text-center text-[20px] font-normal">
          Our core activities encompass manufacturing, export, and distribution.
          We emphasize quality control across all operations to meet and exceed
          the standards expected by our clients.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-2xl"
        >
          Read More <IoMdArrowForward />
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
