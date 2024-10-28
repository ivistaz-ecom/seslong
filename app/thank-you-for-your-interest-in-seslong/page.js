'use client';
import React, { useEffect } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaHandPointDown } from "react-icons/fa";
import Link from "next/link";
import ThankouCss from "../thank-you-by-seslong/thankyou.css"

const Page = () => {  // Changed 'page' to 'Page'
    useEffect(() => {
        const letterImage = document.querySelector(".letter-image");
        if (letterImage) {
            letterImage.classList.add("animate-on-load");
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center py-6 text-center">
                {/* <RiMailSendLine className="text-7xl text-[#5f5c5c]" /> */}
                <div className="letter-image"> {/* Changed 'class' to 'className' */}
                    <div className="animated-mail">
                        <div className="body"></div>
                        <div className="top-fold"></div>
                        <div className="back-fold"></div>
                        <div className="left-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-title"></div>
                            <div className="letter-context"></div>
                            <div className="letter-stamp"></div>
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="p-6 mt-56">
                    <p className="py-5 lg:text-5xl text-3xl font-bold text-[#F58420]">
                        Thank you for your enquiry.
                    </p>
                    <p className="lg:text-4xl text-2xl">Our team will get back to you soon.</p>
                </div>
                <div>
                    <p className="animate-bounce p-4 py-3 text-xl text-[#F58420]">
                        Interested in discovering more of our product range?
                        <br /> Click the button below to view our complete selection.
                        <span>
                            <FaHandPointDown className="m-auto flex items-center justify-center text-center" />
                        </span>
                    </p>
                </div>
                <Link href="/products">
                    <button className="rounded-xl border border-[#F58420] p-3 hover:bg-[#F58420] hover:text-[#fff]">
                        View More Products
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Page;  // Updated export
