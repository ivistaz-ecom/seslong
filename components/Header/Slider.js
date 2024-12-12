"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { quickLinks } from "../../utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuUnfold3Fill } from "react-icons/ri";

export default function Slider() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;
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
      <div className="z-50 flex text-center">
        <button
          className="group flex items-center justify-center gap-1  text-2xl font-normal text-[#9EA1A4] hover:text-[#f5831fca] "
          type="button"
          onMouseOver={toggleDrawer}
        >
          <RiMenuUnfold3Fill
            className="cursor-pointer transition-transform duration-300 group-hover:rotate-180"
            size={40}
          />
          {/* <IoMdArrowForward
            className="transition-transform duration-300 group-hover:rotate-45"
            size={30}
          /> */}
        </button>
      </div>

      <div
        ref={drawerRef}
        id="drawer-right-example"
        className={`fixed right-0 top-0 z-50 ${
          pathname === "/" ? "h-[60vh]" : "h-[60vh]"
        } w-[60vw] bg-[#000] p-4 transition-transform duration-300 ease-in-out lg:w-[16vw] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-right-example"
          className="group absolute end-2.5 top-2.5 inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
        >
          <svg
            className="size-16 transition-transform duration-300 group-hover:rotate-180 lg:size-6"
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
                className={`group flex w-full  py-4 text-2xl font-medium transition-transform duration-300 ease-in-out hover:border-b-4 hover:text-[#F5841F] ${
                  isDrawerOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`, // Stagger animation for each link
                }}
              >
                <Link
                  href={link.url}
                  onClick={handleLinkClick}
                  className={
                    isActive(link.url) ? "text-[#F5841F]" : "text-white"
                  }
                >
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
