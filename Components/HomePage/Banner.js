import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="text-center">
        <Image
          src="/HomePage/banner.png"
          width={1200}
          height={900}
          className="w-full"
          alt="home banner"
        />
      </div>
    </div>
  );
};

export default Banner;
