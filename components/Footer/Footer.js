import React from "react";
import Image from "next/image";
import {
  companyInfo,
  quickLinks,
  contactInfo,
  copyRight,
} from "../../utils/data";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[#E5E5E4] p-12">
        <div className="container mx-auto w-11/12 grid-cols-3 gap-4 lg:grid">
          <div className="mx-auto lg:w-11/12">
            <Image
              src="/seslong-logo.svg"
              width={400}
              height={400}
              className="w-auto"
              alt="Company Logo"
            />
            {companyInfo.map((company, index) => (
              <div className="py-4" key={index}>
                <h3 className="text-2xl font-medium">{company.name}</h3>
                <p className="text-xl font-normal">{company.address}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto ">
            <h4 className="mt-5 text-2xl font-medium lg:mt-0">Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="border-b-2 py-1 text-xl font-normal hover:border-[#f5831fca]"
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto ">
            <h4 className="mt-5 text-2xl font-medium lg:mt-0">Connect</h4>
            <ul>
              {contactInfo.map((contact, index) => (
                <li key={index} className="text-xl">
                  {contact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xl font-thin">
        <div dangerouslySetInnerHTML={{ __html: copyRight }} />
      </div>
    </>
  );
}
