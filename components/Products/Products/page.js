"use client"; // Ensure this component is treated as a client component
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/utils/data";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "../../../components/Products/Modal/page";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Personal Care");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Extract category from URL when the component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, []); // Only run on component mount

  const handleCategoryChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);

    // Update the URL without reloading the page
    const url = new URL(window.location);
    url.searchParams.set("category", category); // Set the new category in the URL
    window.history.replaceState(null, "", url);

    // Simulate loading for a brief period
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust time as needed
  };

  return (
    <div className="z-20">
      <div className="p-12">
        <h2 className="text-center text-4xl font-medium">Our Products</h2>
      </div>
      <div className="container mx-auto w-9/12 grid-cols-6 lg:grid lg:gap-4">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`p-2 ${selectedCategory === category ? "border-b-4 border-b-[#F5841F] text-xl font-medium text-black" : "text-xl font-medium"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container mx-auto mt-4 w-10/12 grid-cols-4 gap-4 py-10 lg:grid">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border p-4">
                <div className="h-32 w-full animate-pulse rounded bg-gray-300"></div>
                <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
                <div className="mt-2 h-4 w-full animate-pulse rounded bg-gray-300"></div>
              </div>
            ))
          : products[selectedCategory]?.map((product, index) => (
              <div key={index} className="mt-4 border">
                <Image
                  src={product.imageSrc}
                  width={200}
                  height={200}
                  className="w-auto"
                />
                <div className="relative top-0 flex flex-col items-center justify-center p-4 text-center">
                  <h2 className="h-14 text-xl font-medium">{product.name}</h2>
                  <p className="h-18 line-clamp-4 text-base">
                    {product.description}
                  </p>
                  <div className="flex w-full items-center justify-center bg-white">
                    <Modal
                      banner={product.popImageSrc}
                      title={product.name}
                      description={product.description}
                      pdfUrl=""
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="mx-auto grid-cols-4 gap-4 px-8 pb-20 lg:grid lg:w-10/12 lg:px-0">
        <Link
          href="/"
          className="flex items-center py-4 text-center text-xl font-medium"
        >
          Get the Brochure <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
