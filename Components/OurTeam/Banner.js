import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
     <div className="bg-[#0A0A0A]">
        <div className="text-white">
          <p className="text-center pt-10 text-2xl">OUR TEAM</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1"> our team</p>
        </div>
      </div>
      <div className="">
        <Image src="/OurTeam/banner.png" width={900} height={500} className="w-full h-auto" alt="banner team"/>
      </div>
    </>
  );
};

export default Banner;
