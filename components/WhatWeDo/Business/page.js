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
          className="container mx-auto grid w-9/12 py-4 lg:my-10 lg:grid-cols-2"
        >
          <div
            className={`mx-auto flex-col items-center justify-center lg:flex ${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h2 className="pt-5 text-center text-3xl font-medium lg:pt-0 lg:text-4xl">
              {section.title}
            </h2>
            <p className="py-6 text-center text-xl lg:w-10/12">
              {section.description}
            </p>
          </div>
          <div
            className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} order-2`}
          >
            <Image
              src={section.imageSrc}
              width={400}
              height={400}
              className="w-full"
              alt={section.title} // Always add an alt for accessibility
            />
          </div>
        </div>
      ))}
    </>
  );
}
