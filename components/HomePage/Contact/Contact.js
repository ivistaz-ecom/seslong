"use client";
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // Track individual errors
  const [submitted, setSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate organization
    if (!organization.trim()) {
      newErrors.organization = "Organization is required.";
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Validate product category
    if (!productCategory.trim()) {
      newErrors.productCategory = "Product category is required.";
    }

    // Add any other validation rules here

    setErrors(newErrors); // Update state with any new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors
  }

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const isValid = validateForm();
    if (!isValid) {
      return; // If invalid, don't proceed
    }

    fetch("https://formcarry.com/s/VQmxImepSma", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        organization,
        productCategory,
        phone,
        message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSubmitted(true);
          resetForm();
        } else {
          setErrors({ form: response.message }); // Set form error if needed
        }
      })
      .catch((error) => {
        setErrors({ form: error.message || "An unexpected error occurred." });
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setOrganization("");
    setProductCategory("");
    setPhone("");
    setMessage("");
    setErrors({});
  }

  return (
    <div className="mx-auto lg:w-10/12 p-2">
      <div className="mx-auto flex w-full flex-col">
        <h2 className="py-4 text-center text-4xl font-medium">
          Connect With Us
        </h2>
        <p className="text-center text-[20px] font-normal">
          Partner with Seslong for your product needs and discover how our
          global presence, <br /> product knowledge, and commitment to quality
          can help your business.
        </p>
        <h2 className="py-8 text-center text-4xl font-medium">Contact Us</h2>
      </div>

      <div>
        <form className="mx-auto py-8 container lg:w-full w-11/12" onSubmit={onSubmit}>
          {errors.form && (
            <div className="py-2 text-center text-red-500">{errors.form}</div>
          )}
          {submitted && (
            <div className="py-2 text-center text-green-500">
              Thank you for your submission!
            </div>
          )}

          <div className="flex w-full gap-4 py-6">
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
              >
                Name
              </label>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            {/* No error message for name */}

            <div className="flex w-full gap-4">
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
                >
                  Email ID
                </label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}{" "}
                {/* Error message */}
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 py-6">
            <div className="relative w-full">
              <input
                type="text"
                id="organization"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
              <label
                htmlFor="organization"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
              >
                Organization
              </label>
              {errors.organization && (
                <p className="text-red-500">{errors.organization}</p>
              )}{" "}
              {/* Error message */}
            </div>
            <div className="relative w-full">
              <input
                type="text"
                id="product-category"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
              <label
                htmlFor="product-category"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
              >
                Product Category
              </label>
              {errors.productCategory && (
                <p className="text-red-500">{errors.productCategory}</p>
              )}
            </div>
          </div>

          <div className="flex w-full gap-4 py-6">
            <div className="relative w-full">
              <input
                type="tel"
                id="phone-number"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
              <label
                htmlFor="phone-number"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
              >
                Phone Number
              </label>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}{" "}
              {/* Error message */}
            </div>
          </div>

          <div className="flex w-full gap-4 py-6">
            <div className="relative w-full">
              <textarea
                id="message"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 pe-0 ps-6 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label
                htmlFor="message"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl font-normal text-gray-400 duration-300 peer-placeholder-shown:start-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600"
              >
                Message
              </label>
              {/* No error message for message */}
            </div>
          </div>

          <div className="py-4">
            <button
              type="submit"
              className="font-regular flex w-6/12 items-center justify-center gap-2 border-2 border-gray-300 px-5 py-2.5 text-center text-xl text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              Submit <IoMdArrowForward />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
