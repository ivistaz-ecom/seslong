import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh] bg-black">
      <div className="h-[70vh] lg:h-[50vh]">
        <div className="relative size-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out`}
          >
            {/* Desktop image */}
            <Image
              width={1200}
              height={900}
              src="/banner-contact.png"
              className="hidden size-full object-cover sm:block"
              alt="Desktop banner"
              loading="lazy"
            />
            {/* Mobile image */}
            <Image
              height={500}
              width={600}
              src="/mobile-contact.jpg"
              className="block size-full object-cover sm:hidden"
              alt="Mobile banner"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
