import React from "react";
import Image from "next/image";
import MainMenu from "../Header/Slider";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex p-5 items-center bg-[#000]">
      <div className="container mx-auto grid w-10/12 grid-cols-2">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              src="/seslong-logo.svg"
              width={400}
              height={400}
              className="w-[200px]"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <MainMenu />
        </div>
      </div>
    </div>
  );
}
