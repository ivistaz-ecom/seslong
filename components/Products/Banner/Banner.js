import React from "react";

export default function Banner() {
  return (
    <div className="z-50 h-[50vh]">
      <div className="lg:h-[50vh] h-[30vh] bg-[#F8E2CF]">
        <div className="relative mx-auto h-full w-full overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out `}
          >
            <img
              src="Products/banner.jpg"
              className="lg:size-full h-36 object-cover"
              alt="Slide image"
            />
          </div>

          {/* <div className="absolute bottom-0 mx-auto p-12">
            <h2 className="text-4xl font-medium text-white">
              Product Categories
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}
