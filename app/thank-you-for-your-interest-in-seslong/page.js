import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaHandPointDown } from "react-icons/fa";
import Link from "next/link";

const page = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-6 text-center">
                <RiMailSendLine className="text-7xl text-[#5f5c5c]" />
                <div className="p-6">
                    <p className="py-5 text-5xl font-bold text-[#F58420]">
                        Thank you for your enquiry.
                    </p>
                    <p className="text-4xl">Our team will get back to you soon.</p>
                </div>
                <div>
                    <p className="animate-bounce py-3 text-xl text-[#F58420]">
                        "Interested in discovering more of our product range?
                        <br /> Click the button below to view our complete selection."
                        <span>
                            <FaHandPointDown className="text-center flex justify-center items-center m-auto" />
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

export default page;
