"use client";
import React, { useState, useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { CategoryContext } from "../../../utils/CategoryContext";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";

export default function Contact() {
  const router = useRouter();
  const { category } = useContext(CategoryContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validateForm() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s-]+$/.test(name)) {
      newErrors.name = "Name can only contain letters, spaces, and hyphens.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!organization.trim()) {
      newErrors.organization = "Organization is required.";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const isValid = validateForm();
    if (!isValid) return;

    const templateParams = {
      name,
      to_email: email,
      subject: "We've Received Your Message!",
      organization,
      phone,
      message,
    };

    emailjs
      .send(
        "default_service", // Replace with your EmailJS service ID
        "template_81ng8dr", // Replace with your EmailJS template ID
        templateParams,
        "hsxWBIOu96PDlE41t" // Replace with your EmailJS user ID (API Key)
      )
      .then(
        () => {
          // Proceed with form submission if email is successfully sent
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
              productCategory: category, // Update to match the context state if needed
              phone,
              message,
            }),
          })
            .then((response) => response.json())
            .then(() => {
              console.log("Form sent successfully!");
              setSubmitted(true);
              resetForm();
              router.push("/thank-you-by-seslong"); // Redirect to Thank You page
            })
            .catch((error) => {
              console.error("Failed to send form data:", error);
              setErrors({ form: "Failed to send form data. Please try again." });
            });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setErrors({ form: "Failed to send email. Please try again." });
        }
      );

  }

  function resetForm() {
    setName("");
    setEmail("");
    setOrganization("");
    setPhone("");
    setMessage("");
    setErrors({});
  }

  return (
    <div id="contact-form" className="container mx-auto mt-52 w-10/12 py-10 lg:mt-0">
      <div className="mx-auto flex w-full flex-col">
        <h2 className="py-4 text-center text-4xl font-medium">Connect With Us</h2>
        <p className="text-center text-[20px] font-normal">
          Partner with Seslong for your product needs and discover how our
          global presence, <br className="hidden sm:block" /> product knowledge,
          and commitment to quality can help your business.
        </p>
      </div>

      <form className="mx-auto py-8" onSubmit={onSubmit}>
        {errors.form && (
          <div className="py-2 text-center text-red-500">{errors.form}</div>
        )}
        {submitted && (
          <div className="py-2 text-center text-green-500">
            your From is Submitting...
          </div>
        )}

        <div className="w-full gap-4 py-6 lg:flex">
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
              value={name}
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500">
              Name <span className="text-red-500">*</span>
            </label>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          {/* Repeat similar input structure for Email, Organization, Phone, and Message */}


          {/* No error message for name */}

          <div className="mt-7 w-full gap-4 lg:mt-0 lg:flex">
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
                value={email}
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                for="email"
                className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Email ID <span className="text-red-500">*</span>
              </label>
              {errors.email && <p className="text-red-500">{errors.email}</p>}{" "}
              {/* Error message */}
            </div>
          </div>
        </div >

        <div className="w-full gap-4 lg:flex lg:py-6">
          <div className="relative w-full">
            <input
              type="text"
              id="organization"
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
              value={organization}
              placeholder=" "
              onChange={(e) => setOrganization(e.target.value)}
            />
            <label
              htmlFor="organization"
              for="organization"
              className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Organization <span className="text-red-500">*</span>
            </label>
            {errors.organization && (
              <p className="text-red-500">{errors.organization}</p>
            )}{" "}
            {/* Error message */}
          </div>
          <div className="mt-7 flex w-full gap-4 lg:mt-0 ">
            <div className="relative w-full">
              <input
                type="tel"
                id="phone-number"
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
                value={phone}
                placeholder=" "
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
              <label
                htmlFor="phone-number"
                for="phone-number"
                className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}{" "}
              {/* Error message */}
            </div>
          </div>
          {/* <div className="relative mt-7 w-full lg:mt-0">
              <select
                id="product-category"
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
                value={productCategory}
                placeholder=" "
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Product Category
                </option>
                {formCategoryList.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
              <label
                for="product-category"
                htmlFor="product-category"
                className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Product Category
              </label>
              {errors.productCategory && (
                <p className="text-red-500">{errors.productCategory}</p>
              )}
            </div> */}
        </div>

        <div className="flex w-full gap-4 py-6">
          <div className="relative w-full">
            <textarea
              id="message"
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 px-2.5  pb-1.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-gray-500"
              value={message}
              placeholder=" "
              onChange={(e) => setMessage(e.target.value)}
            />
            <label
              htmlFor="message"
              for="message"
              className="absolute start-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-600 dark:text-gray-400 peer-focus:dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Message
            </label>
            {/* No error message for message */}
          </div>
        </div>

        <div className="py-4">
          <button
            type="submit"
            className="font-regular flex w-full items-center justify-center gap-2 border-2 border-gray-300 px-5 py-2.5 text-center text-xl text-gray-400 hover:bg-gray-800 hover:text-white lg:w-6/12"
          >
            Submit <IoMdArrowForward />
          </button>
        </div>
      </form >
    </div >

  );
}
