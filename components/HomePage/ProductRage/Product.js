import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsItems } from "../../../utils/data";
import { IoMdArrowForward } from "react-icons/io";

export default function Product() {
  return (
    <>
      <div className=" w-full lg:py-8">
        <h2 className="py-8 text-center text-3xl font-medium lg:text-4xl">
          Product Range
        </h2>
        <div className="container mx-auto w-10/12 grid-cols-3 space-y-5 lg:grid lg:gap-6 lg:space-y-0">
          {ProductsItems.map((items, index) => (
            <div className="group relative overflow-hidden " key={index}>
              <Image
                alt="product"
                src={items.productImage}
                width={300}
                height={300}
                className=" w-full transition ease-out group-hover:scale-105 lg:mb-0"
              />
              <div className="absolute inset-0 bottom-0 flex w-full items-end bg-[#00000069] p-4 text-2xl font-medium text-white group-hover:hidden">
                {items.items}
              </div>
              <div className="absolute inset-0 bottom-0 flex w-full items-end  p-4 text-white transition-all ease-in-out group-hover:bg-[#f5831fca] ">
                <div className="hidden text-center group-hover:block">
                  <h3 className="text-2xl font-medium">{items.items}</h3>
                  <p className="text-xl font-thin">{items.description}</p>
                  <Link
                    href={{
                      pathname: "/products", // Assuming this is the product listing page
                      query: { category: items.items }, // Passing the category as query param
                    }}
                    className="flex items-center justify-center gap-1 py-10 text-lg font-medium "
                  >
                    Show More
                    <IoMdArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
