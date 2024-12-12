import Image from "next/image";
import React from "react";

const OurHistory = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <p className="secondary-title lg:text-3xl text-2xl border-t-4 border-gray-500 border-dashed container mx-auto pt-16 lg:-mb-0 -mb-20">
          Our History
        </p>
      </div>
      <div className="lg:flex justify-center gap-10 mt-10">
        {[
          {
            src: "/OurStory/OurHistory/img-1.png",
            text: "Started our mission of workforce empowerment 20 years ago",
          },
          {
            src: "/OurStory/OurHistory/img-2.png",
            text: "Partnered with over 100 brands and organisations",
          },
          {
            src: "/OurStory/OurHistory/img-3.png",
            text: "Presence in over 600 factories across 19 states in India and 13 countries in South Asia and Africa",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center lg:w-[300px] w-full mt-36 lg:mt-0"
          >
            <div className="overflow-hidden">
              <Image
                src={item.src}
                width={300}
                height={200}
                className="transition-transform duration-500 group-hover:scale-110"
                alt={`Our history image ${index + 1}`}
              />
            </div>
            <div className="absolute -bottom-24  bg-black rounded-full h-56 w-56 flex justify-center items-center text-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
              <p className="p-6 text-sm lg:text-xl">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-center mt-36 sm:mt-28 md:mt-40 para-color text-lg sm:text-xl md:text-2xl">
          We provide technical support for:
        </p>
        <div className="flex flex-col sm:flex-row text-center justify-center mx-auto items-center container my-8 gap-3 sm:gap-5 md:gap-8">
          <p className="sm:border-r-2 border-[#E82B52] sm:pr-3 md:pr-5">
            Building
            <br className="hidden lg:block" /> Capacities
          </p>
          <p className="sm:border-r-2 border-[#E82B52] sm:pr-3 md:pr-5 sm:pl-3 md:pl-5">
            Implementing
            <br className="hidden lg:block" /> Programmes
          </p>
          <p className="sm:border-r-2 border-[#E82B52] sm:pr-3 md:pr-5 sm:pl-3 md:pl-5">
            Strengthening
            <br className="hidden lg:block" /> Systems
          </p>
          <p className="sm:pl-3 md:pl-5">
            Improving
            <br className="hidden lg:block" /> Workplace Policies
          </p>
        </div>
        <div className="text-center flex items-center justify-center mt-5">
          <p className=" sm:w-8/12 md:w-[30vw] para-color text-sm sm:text-base md:text-lg leading-relaxed">
            Reached over 9 million individuals in the workforce globally (60% of
            this workforce are women)
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
