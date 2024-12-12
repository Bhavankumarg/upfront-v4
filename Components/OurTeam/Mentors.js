import { ourMentors } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Mentors = () => {
  return (
    <div className="bg-black py-10">
      <div className="text-center mb-8">
        <p className="text-white text-3xl">Our Mentors</p>
      </div>
      <div className="flex flex-col lg:space-x-[300px] container mx-auto lg:gap-3">
        {ourMentors.map((item, index) => (
          <div
            key={index}
            className="group lg:flex items-center gap-8 max-w-5xl relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative z-10">
              <Image
                src={item.imageUrl}
                width={400}
                height={300}
                alt={item.name}
                className="rounded-none lg:w-[300px] w-full p-5 lg:p-0 transition-all group-hover:scale-110 duration-500"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 p-6 text-white">
              <p className="text-xl font-semibold group-hover:text-black transition-colors duration-500">
                {item.name}
              </p>
              <p className="text-md font-light group-hover:text-black transition-colors duration-500">
                {item.title}
              </p>
              <p className="text-md font-light group-hover:text-black transition-colors duration-500">
                {item.post}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block group-hover:text-black transition-colors duration-500"
              >
                <Image
                  src="/OurTeam/linkedin.png" // Replace with your LinkedIn icon URL
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className=""
                />
              </a>
            </div>

            <div className="absolute inset-0 lg:right-96 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
