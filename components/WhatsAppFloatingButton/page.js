"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatingButton() {
    const [isTextVisible, setIsTextVisible] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        // Toggle the popup visibility when the button is clicked
        setIsPopupVisible((prev) => !prev);
    };

    // Toggle text visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) {
                // Mobile screens
                if (window.scrollY > 100) {
                    setIsTextVisible(false);
                } else {
                    setIsTextVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed bottom-24 right-4 z-50 flex items-center space-x-2 lg:right-8">
                <button
                    onClick={handleClick}
                    className="flex items-center justify-center rounded-full bg-green-500 p-3 text-2xl text-white shadow-lg transition duration-300 ease-in-out"
                >
                    <BsWhatsapp size={28} />
                </button>
            </div>

            {/* Popup Overlay */}
            {isPopupVisible && (
                <div className="fixed right-0 top-[450px] z-50 flex h-full items-start justify-end p-4">
                    <div className="w-64 rounded-lg bg-white shadow-lg">
                        <div className="rounded-t-lg bg-[#f5831fca] p-2 text-white">
                            <div className="flex items-center justify-between">
                                <h3>Seslong</h3>
                                <button
                                    className="text-white"
                                    onClick={handleClick} // Close popup on button click
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div className="text-gray-700"></div>
                        <div className="flex gap-4 bg-white p-2">
                            <div>
                                <div className="flex">
                                    <Link
                                        href="https://wa.me/+919500642143?text=Hi, I have an enquiry!"
                                        target="_blank"
                                    >
                                        <span className="flex mt-1 gap-2">
                                            <IoLogoWhatsapp className="mt-1" /> IND: +91-99002-88341
                                        </span>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="https://wa.me/+85255909449?text=Hi, I have an enquiry!"
                                        target="_blank"
                                    >
                                        <span className="flex mt-1 gap-2">
                                            <IoLogoWhatsapp className="mt-1" /> HK: +85255909449
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
