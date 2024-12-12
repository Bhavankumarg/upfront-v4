"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WhyWorkForceData } from "@/utils/data";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import CountUp from "react-countup";

const Carouselwww = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    //   arrows={false},
    },
  };

  let carouselRef = null; // To reference the carousel for navigation

  return (
    <div className="relative my-14 w-[70vw] mx-auto container">
      <Carousel
        ref={(el) => (carouselRef = el)} // Assign reference to carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        showDots={false}
        arrows={false}
      >
        {WhyWorkForceData.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col justify-center items-center container mx-auto"
          >
            <div className="relative overflow-hidden rounded-none ">
              <Image
                width={900}
                height={200}
                src={item.image}
                alt={item.title}
                // layout="fill"
                // objectFit="cover"
                className="transition-transform duration-500 lg:w-[60vw]"
              />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Arrow Buttons Below Carousel */}
      <div className="absolute lg:top-[40%] top-[25%] w-full flex justify-between px-4 transform">
        {/* Left Arrow */}
        <button
          className="bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          onClick={() => carouselRef.previous()} // Navigate to the previous slide
          aria-label="Previous Slide"
        >
          <LuArrowLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          className="bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          onClick={() => carouselRef.next()} // Navigate to the next slide
          aria-label="Next Slide"
        >
          <LuArrowRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center">
        <button className="flex justify-between items-center gap-4 bg-[#2F2F2F] text-white py-2 px-2 w-48 mt-20 mb-10 rounded-full hover:bg-gray-900">
          <span className="px-3">Download Now</span>
          <span className="bg-[#5C5C5C] p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l8 8m0 0l8-8m-8 8V4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carouselwww;
