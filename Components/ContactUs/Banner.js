import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#0A0A0A]">
        <div className="text-white">
          <p className="text-center pt-10 text-2xl">CONTACT US</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1">Contact Us</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row bg-[#1C1C1C] text-white text-xl">
        {/* Left Section - Image */}
        <div className="flex justify-center">
          <Image
            src="/ContactUs/banner.png"
            width={700}
            height={500}
            alt="Contact Us"
          />
        </div>

        {/* Right Section - Contact Details */}
        <div className="md:w-1/2 lg:flex lg:flex-col justify-center lg:px-6">
          <div className="lg:flex lg:gap-[105px] p-5">
            <div className="mb-6 ">
              <h2 className=" font-semibold mb-2 text-white">Contact Info:</h2>
              <hr className="border-[#CECECE]" />
              <p className="text-[#CECECE] mt-2">
                Email:{" "}
                <Link href="mailto:info@upfrontglobal.com" className="">
                  info@upfrontglobal.com
                </Link>
              </p>
            </div>
            <div className="mb-6">
              <h2 className=" font-semibold mb-2 text-white">Social Media:</h2>
              <hr className="border-[#CECECE]" />
              <div className="flex flex-col gap-2 mt-3">
                <div className=" gap-0">
                  <Link
                    href="https://www.linkedin.com/showcase/upfrontcg/"
                    target="_blank"
                    className="flex"
                  >
                    <button className="bg-red-500 text-white px-3 py-2 rounded-l">
                      <FaLinkedin />
                    </button>
                    <div>
                      <p className="bg-[#2F2F2F] rounded-r w-28 py-1 px-3">
                        LinkedIn
                      </p>
                    </div>
                  </Link>
                </div>
                <div className=" gap-0">
                  <Link
                    href="https://x.com/UpfrontCG"
                    target="_blank"
                    className="flex"
                  >
                    <button className="bg-red-500 text-white px-3 py-2 rounded-l">
                      <FaXTwitter />
                    </button>
                    <div>
                      <p className="bg-[#2F2F2F] rounded-r w-28 py-1 px-3">X</p>
                    </div>
                  </Link>
                </div>
                <div className="gap-0">
                  <Link
                    href="https://www.instagram.com/upfront.global/"
                    target="_blank"
                    className="flex"
                  >
                    <button className="bg-red-500 text-white px-3 py-2 rounded-l">
                      <FaInstagram />
                    </button>
                    <div>
                      <p className="bg-[#2F2F2F] rounded-r w-28 py-1 px-3">
                        Instagram
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex  lg:gap-32 p-5">
            <div className="mb-6">
              <h2 className=" font-semibold mb-2 text-white">
                Office Address:
              </h2>
              <hr className="border-[#CECECE]" />

              <p className="mt-2">Bengaluru:</p>
              <p className="text-[#CECECE] mt-1">
                #25, 1st Main, AECS Layout,
                <br /> Ashwath Nagar, Bengaluru -<br /> 560094
              </p>
            </div>
            <div>
              <p className="border-t border-[#CECECE] mt-9"></p>
              <p className="mt-3 text-white">Delhi:</p>
              <p className="text-[#CECECE] mt-2">
                A-10, Second Floor, Green Park,
                <br /> New Delhi - 110016
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
