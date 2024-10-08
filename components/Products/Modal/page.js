"use client";
import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function Page({ banner, title, description, pdfUrl }) {
  const [openModal, setOpenModal] = useState(false); // Modal open state
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate data loading when the modal opens
  useEffect(() => {
    if (openModal) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200); // Simulate 2 seconds of loading
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [openModal]);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center py-4 text-center font-medium"
      >
        More Details <IoIosArrowForward />
      </button>

      {/* Modal Component */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible={true} // Allows closing on outside clicks
        className="transition-all duration-300 ease-in-out"
      >
        <div className="relative flex items-center justify-between bg-transparent transition-all duration-300 ease-in-out">
          <button
            type="button"
            className="absolute bottom-1 right-0 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 text-2xl text-gray-600 hover:bg-gray-200 hover:text-black"
            onClick={() => setOpenModal(false)}
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <Modal.Body className="p-0">
          <div className="space-y-4">
            {loading ? (
              <div role="status" className="animate-pulse">
                <div className="flex h-[350px] w-full items-center justify-center rounded bg-gray-300 transition-all duration-300 ease-in-out">
                  <svg
                    className="h-10 w-full text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              </div>
            ) : (
              <Image
                src={banner}
                width={400}
                height={400}
                alt={title}
                className="h-[350px] w-full transition-all duration-300 ease-in-out"
              />
            )}

            <div className="p-4">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                {title || "Product Title"}
              </h3>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {description || "Product description"}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
