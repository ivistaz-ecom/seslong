"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { quickLinks } from "../../utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Slider() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className={`z-20 flex text-center`}>
        <button
          className="group flex items-center justify-center gap-1 text-2xl font-normal text-black"
          type="button"
          onClick={toggleDrawer}
        >
          Menu
          <IoMdArrowForward
            className={`transition-transform duration-300 group-hover:rotate-45 `}
            size={30}
          />
        </button>
      </div>

      <div
        ref={drawerRef}
        id="drawer-right-example"
        className={`fixed right-0 top-0 z-50 ${pathname === "/" ? "h-[80vh]" : "h-[60vh]"} transform bg-[#E5E5E4] p-4 transition-transform duration-300 ease-in-out lg:w-[26vw] ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-right-example"
          className="group absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4"></div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <ul className="w-[300px]">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className={`group flex w-full border-b-4 border-gray-200 py-4 text-2xl font-medium transition-transform duration-300 ease-in-out hover:border-b-4 hover:border-[#F5841F] ${
                  isDrawerOpen
                    ? "translate-y-0 transform opacity-100"
                    : "translate-y-20 transform opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`, // Stagger animation for each link
                }}
              >
                <Link href={link.url} onClick={handleLinkClick}>
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
