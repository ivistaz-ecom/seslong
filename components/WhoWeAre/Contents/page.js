import React from "react";
import Image from "next/image";
import { whoWeAre } from "../../../utils/data";

export default function page() {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium">
          Seslong Traders Private Limited
        </h2>
        <p className="py-4 text-center text-xl">
          was founded in <strong>2008</strong> and is located in{" "}
          <strong>Bangalore, India.</strong>
          <br /> Our team in India focuses on 3 main functions:
        </p>
      </div>
      <div className="mx-auto grid w-8/12 grid-cols-3 gap-8">
        {whoWeAre.map((items) => (
          <div className="flex flex-col items-center justify-center border border-black p-8">
            <Image src={items.icon} width={200} height={200} className="w-24" />
            <p className="pt-6 text-center text-xl">{items.expert}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-4xl font-medium">Seslong Global Limited</h2>
        <p className="py-4 text-center text-xl">
          Established in 2016 and based in <strong>Hong Kong</strong>, servers
          as a critical bridge between
          <br /> our customers worldwide and our network of{" "}
          <strong>56 factories located in Mainland China</strong>.
        </p>
      </div>
      <div className="mx-auto grid w-10/12 grid-cols-2 items-center justify-center">
        <div className="mx-auto w-8/12">
          <p className="py-4 text-center text-xl">
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
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
