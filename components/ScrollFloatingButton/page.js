"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-3 rounded-full bg-[#f5831fca] p-3 text-white shadow-lg lg:right-8"
            >
                <FaArrowUp size={15} />
            </button>
        )
    );
};

export default ScrollToTopButton;
