import React from "react";
import Image from "next/image";
import { whoWeAre } from "../../../utils/data";

export default function page() {
  return (
    <div className="mt-0 py-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="p-4 text-center text-4xl font-medium lg:p-0">
          Seslong Traders Private Limited
        </h2>
        <p className="p-2 py-4 text-center text-xl">
          was founded in <strong>2008</strong> and is located in{" "}
          <strong>Bangalore, India.</strong>
          <br className="hidden sm:block" /> Our team in India focuses on 3 main
          functions:
        </p>
      </div>
      <div className="container mx-auto w-8/12 grid-cols-3 gap-8 lg:grid">
        {whoWeAre.map((items, index) => (
          <div
            className="mt-4 flex flex-col items-center justify-center border border-black p-8 hover:border-[#f5831fca]"
            key={index}
          >
            <Image
              src={items.icon}
              width={200}
              height={200}
              className="w-24"
              alt="images"
            />
            <p className="pt-6 text-center text-xl">{items.expert}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center p-2 py-12">
        <h2 className="text-4xl font-medium">Seslong Global Limited</h2>
        <p className="py-4 text-center text-xl">
          Established in 2016 and based in <strong>Hong Kong</strong>, serves as
          a critical bridge between
          <br /> our customers worldwide and our network of{" "}
          <strong>56 factories located in Mainland China</strong>.
        </p>
      </div>
      <div className="container mx-auto grid-cols-2 items-center justify-center lg:grid lg:w-10/12">
        <div className="mx-auto lg:w-8/12">
          <p className="-mt-10 py-4 text-center text-xl lg:-mt-0">
            Our key markets span across{" "}
            <strong>
              North
              <br /> America, South America, Europe, the Middle East, India, and
              Australia.
            </strong>
          </p>
        </div>
        <div className="">
          <Image
            src="/who-we-are/world-map.svg"
            width={400}
            height={400}
            alt="image"
            className="mt-4 w-full lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
