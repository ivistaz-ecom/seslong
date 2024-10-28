"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Page = () => {
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
                <div className="letter-image">
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

                <div className="mt-56 p-6">
                    <p className="py-5 text-3xl font-bold text-[#F58420] lg:text-5xl">
                        Thank you for your interest in Seslong.
                    </p>
                    <p className="text-2xl lg:text-4xl">
                        Our team will get in touch with you shortly.
                    </p>
                </div>
                <div>
                    <Link href="/">
                        <button className="rounded-xl border border-[#F58420] p-3 hover:bg-[#F58420] hover:text-[#fff]">
                            Go to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Page;  // Updated export
