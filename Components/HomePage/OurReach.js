'use client'
import React from "react";
import CarouseReach  from "./CarouselReach"
import CountUp from "react-countup";
const OurReach = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E8E8E8]">
      <div className="text-center">
        <p className="secondary-title lg:text-5xl text-2xl mt-10">Our Reach</p>
        <p className="text-[#0A0A0A] lg:text-3xl text-xl mt-7 lg:w-[50vw]">
          Relief, Recovery & Resilience for <CountUp start={0} end={8931553} duration={20} className="font-bold"/> individuals in the
          workforce and their families
        </p>
      </div>
     
        <CarouseReach/>
    
    </div>
  );
};

export default OurReach;
