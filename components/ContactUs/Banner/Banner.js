import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh]">
      <div className="lg:h-[50vh] h-[80vh] bg-[#F8E2CF]">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out`}
          >
            {/* Desktop image */}
            <img
              src="/contact-banner.png"
              className="hidden sm:block h-full w-full object-cover"
              alt="Desktop banner"
            />
            {/* Mobile image */}
            <img
              src="/mobile-contact.jpg"
              className="block sm:hidden h-full w-full object-cover"
              alt="Mobile banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
