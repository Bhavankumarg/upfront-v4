"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa";
import { OurCollaborators, OurReach } from "@/utils/data";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";


const Collaborators = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
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
    },
  };

  let carouselRef = null; // To reference the carousel for navigation

  return (
    <>
    <div className="bg-[#EFEFEF] py-10 mt-10">
    <div className="relative w-[70vw] mx-auto container">
      <div className="text-center">
        <p className="lg:text-5xl text-2xl secondary-title lg:my-4">Our Collaborators</p>
      </div>
      <Carousel
        ref={(el) => (carouselRef = el)} // Assign reference to carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={false}
        showDots={false}
        arrows={false}
      >
        {OurCollaborators.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center container mx-auto mt-10">
            <Image
              width={150}
              height={100}
              src={item.logoUrl}
              alt="logo"
              className="mx-auto shadow-sm"
            />
          </div>
        ))}
      </Carousel>

      {/* Custom Arrow Buttons Below Carousel */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          className="p-3 bg-white text-gray-500 border-[#D3D3D3] border rounded-full text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.previous()} // Navigate to the previous slide
          aria-label="Previous Slide"
        >
          <LuArrowLeft />
        </button>
        <button
          className="p-3 text-gray-500 bg-white border border-[#D3D3D3] rounded-full text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.next()} // Navigate to the next slide
          aria-label="Next Slide"
        >
          <LuArrowRight />
        </button>
      </div>
    </div>

    </div>
    </>
  );
};

export default Collaborators