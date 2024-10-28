"use client";
import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io"; // This import is not used, consider removing it if unnecessary
import { useRouter } from "next/navigation"; // If you're not using `router` for navigation, you can also remove this import
import { BsWhatsapp } from "react-icons/bs";

export default function FloatingButton() {
    const [isTextVisible, setIsTextVisible] = useState(true);

    const handleClick = () => {
        // Open WhatsApp link in a new tab
        window.open(`https://wa.me/9500642143?text=${encodeURIComponent("Hi, I have an enquiry!")}`, "_blank");

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
        <div className="fixed bottom-24 right-4 z-50 flex items-center space-x-2 lg:right-8">
            <button
                onClick={handleClick}
                className="flex items-center justify-center rounded-full  p-3 text-2xl bg-green-500 text-white shadow-lg transition duration-300 ease-in-out"
            >
                <BsWhatsapp size={28} />
            </button>

        </div>
    );
}
// bg-[#f5831fca]