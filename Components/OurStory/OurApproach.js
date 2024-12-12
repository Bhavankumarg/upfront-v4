import Image from "next/image";
import React from "react";

const OurApproach = () => {
  return (
    <div className="">
      <div className="text-center my-5 border-t-4 border-gray-500 border-dashed container mx-auto pt-16">
        <p className="text-3xl">Our Approach</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <Image src="/OurStory/OurApproach/info.png" width={700} height={400} />
        <p className="p-4 lg:w-[50vw] mt-7 lg:mt-0">
          Upfront prioritises the wellbeing of both the formal and informal
          workforce, placing their health and happiness at the core of its work
          and upholding its commitment to the community.
        </p>
      </div>
    </div>
  );
};

export default OurApproach;
