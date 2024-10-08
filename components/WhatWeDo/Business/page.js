import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sections } from "../../../utils/data";
import { IoMdArrowForward } from "react-icons/io";

export default function Page() {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index} className="mx-auto grid w-9/12 lg:grid-cols-2 py-4 container" >
          <div
            className={`mx-auto lg:flex flex-col items-center justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}
          >
            <h2 className="text-4xl font-medium lg:pt-0 pt-5">{section.title}</h2>
            <p className="lg:w-10/12 py-6 text-center text-xl">
              {section.description}
            </p>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-2xl lg:mb-0 mb-4"
            >
              Read More <IoMdArrowForward />
            </Link>
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
