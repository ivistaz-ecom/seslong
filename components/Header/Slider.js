import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { quickLinks } from "../../utils/data";
import Link from "next/link";

export default function Slider() {
  return (
    <>
      <div class="z-20 flex h-[20vh] text-center">
        <button
          class="group flex items-center justify-center gap-1 text-2xl font-normal text-black"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          Menu
          <IoMdArrowForward className="rotate-45 group-hover:rotate-0" />
        </button>
      </div>

      <div
        id="drawer-right-example"
        class="fixed right-0 top-0 z-50 h-[80vh] w-[26vw] translate-x-full overflow-y-auto bg-[#E5E5E4] p-4 transition-transform dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          class="mb-4 inline-flex items-center text-xl font-medium text-gray-500 dark:text-gray-400"
        >
          {/* <svg
            class="me-2.5 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg> */}
          Close
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div className="py-4"></div>
        <div class="grid grid-cols-2 gap-4 p-6">
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="py-2 text-2xl font-medium">
                <Link className="" href={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
