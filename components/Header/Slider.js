'use client'
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { quickLinks } from "../../utils/data";
import Link from "next/link";

export default function Slider() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false); // Close the drawer if clicked outside
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset'; // Restore overflow on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="z-20 flex h-[20vh] text-center">
        <button
          className="group flex items-center justify-center gap-1 text-2xl font-normal text-black"
          type="button"
          onClick={toggleDrawer}
        >
          Menu
          <IoMdArrowForward className="rotate-45 group-hover:rotate-0" />
        </button>
      </div>

      {isDrawerOpen && (
        <div
          ref={drawerRef}
          id="drawer-right-example"
          className={`fixed right-0 top-0 z-50 h-[80vh] lg:w-[26vw] bg-[#E5E5E4] p-4 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-700 ease-in-out dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <button
            type="button"
            onClick={toggleDrawer}
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-6 w-6"
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
          <div className="grid grid-cols-2 gap-4 p-6">
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="py-2 text-2xl font-medium">
                  <Link href={link.url} onClick={handleLinkClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
