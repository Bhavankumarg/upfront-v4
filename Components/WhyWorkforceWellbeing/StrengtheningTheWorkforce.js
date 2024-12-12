import { StrengtheningData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const StrengtheningTheWorkforce = () => {
  return (
    <div className="mb-16">
      <p className="text-center secondary-title text-3xl lg:my-10 my-5 font-bold lg:p-0 p-5">
        Strengthening the Workforce for Sustainable Growth
      </p>
      {StrengtheningData.map((content, index) => (
        <div
          key={content.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center lg:justify-between lg:gap-24 gap-10 container mx-auto p-6 mt-5 bg-[#F0F0F0]`}
        >
          <div
            className={`flex-1 ${index % 2 === 0 ? "" : "lg:justify-end"} flex max-w-[350px]`}
          >
            <Image
              width={400}
              height={300}
              src={content.image}
              alt={`Content image ${content.id}`}
              className="lg:max-w-[350px]" // Adjusted max width for better fit
            />
          </div>
          <div className="flex-1 text-container">
            {content.title && (
              <h2 className="text-3xl font-semibold mb-3">{content.title}</h2>
            )}
            <p
              className="para-color text-lg leading-relaxed mb-2 text-"
              dangerouslySetInnerHTML={{ __html: content.description }}
            ></p>
            {content.description2 && (
              <p
                className="para-color text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.description2 }}
              ></p>
            )}
          </div>
        </div>
      ))}

      <div className="container mx-auto lg:mt-10 mt-5 flex  justify-center">
        <p className="text-[#0A0A0A] text-center lg:w-[75vw] lg:p-0 p-3">
          *Some of our programmes which were third-party evaluated by the likes
          of Tufts University and ICRW indicated that workforce empowerment is
          necessary to address productivity and sustainability, however,
          enabling systems and services is very critical to ensure the intended
          results and outcomes.
        </p>
      </div>

      <div className="flex justify-center border-b-4 border-gray-500 border-dashed container mx-auto">
        <button className="flex justify-between items-center gap-4 bg-[#2F2F2F] text-white py-2 px-2 w-48 my-10 rounded-full hover:bg-gray-900">
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

export default StrengtheningTheWorkforce;
