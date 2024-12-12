'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

const OurVisionMission = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect for non-mobile devices
      if (window.innerWidth > 768) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 700);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center my-36 lg:my-20">
     
      <div className="relative rounded-full hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src="/OurStory/vision-mission.png"
          className="rounded-full border p-5"
          width={600}
          height={500}
          alt="Vision and Mission"
        />
        
        <div
          className={`absolute ${
            isScrolled ? "lg:top-[28%] " : "lg:top-[70%] lg:bottom-0 bottom-[70%] lg:left-0 left-40"
          } left-0 transform -translate-x-1/3 flex flex-col justify-center items-center bg-black text-white rounded-full w-56 h-56 transition-all duration-700 ease-in-out`}
        >
          <p className="text-xl font-bold">Our Vision</p>
          <p className="text-center text-sm px-3">
            Make wellbeing a reality for the workforce.
          </p>
        </div>
        <div
          className={`absolute ${
            isScrolled ? "lg:top-[28%] " : "lg:top-[5%] top-[70%] lg:right-0 right-40"
          } right-0 transform translate-x-1/3 flex flex-col justify-center items-center bg-black text-white rounded-full w-56 h-56 transition-all duration-700 ease-in-out`}
        >
          <p className="text-xl font-bold">Our Mission</p>
          <p className="text-center text-sm px-3">
            Enrich the lives of the formal and informal workforce by influencing
            key aspects of their wellbeing, like physical, emotional, financial,
            and environmental wellbeing.
          </p>
        </div>
      </div>
     
      <div className="border-b-2 border-dotted h-2 border-black"></div>
    </div>
  );
};

export default OurVisionMission;
