import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh]">
      <div className="h-[80vh] bg-[#F8E2CF] lg:h-[50vh]">
        <div className="relative size-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out`}
          >
            {/* Desktop image */}
            <Image
              width={1200}
              height={900}
              src="/contact-banner.png"
              className="hidden size-full object-cover sm:block"
              alt="Desktop banner"
            />
            {/* Mobile image */}
            <Image
              height={500}
              width={600}
              src="/mobile-contact.jpg"
              className="block size-full object-cover sm:hidden"
              alt="Mobile banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
