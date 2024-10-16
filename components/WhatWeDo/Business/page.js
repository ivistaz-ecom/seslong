import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sections } from "../../../utils/data";
import { IoMdArrowForward } from "react-icons/io";

export default function Page() {
  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className="container mx-auto grid w-9/12 py-4 lg:grid-cols-2"
        >
          <div
            className={`mx-auto flex-col items-center justify-center lg:flex ${index % 2 === 0 ? "order-2" : "order-1"}`}
          >
            <h2 className="pt-5 text-4xl font-medium lg:pt-0">
              {section.title}
            </h2>
            <p className="py-6 text-center text-xl lg:w-10/12">
              {section.description}
            </p>
            {/* <Link
              href="/"
              className="mb-4 flex items-center justify-center gap-2 border-b-2 border-white text-2xl hover:text-[#f5831fca] lg:mb-0"
            >
              Read More <IoMdArrowForward />
            </Link> */}
          </div>
          <div className={`${index % 2 === 0 ? "order-2" : ""}`}>
            <Image
              src={section.imageSrc}
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </>
  );
}
