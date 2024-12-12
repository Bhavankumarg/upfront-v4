"use client";
import { CurrentOpenings } from "@/utils/data";
import JoinUsForm from "@/utils/JoinUsForm";
import PartnerForm from "@/utils/PartnerForm";
import Image from "next/image";
import React, { useState } from "react";
import { FaBullhorn } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("join");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mt-8 relative">
        {/* Buttons */}
        <button
          className={`lg:px-6 py-2 font-medium border w-52  rounded-md transition-all duration-300 ${
            activeTab === "join"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabClick("join")}
        >
          JOIN US
        </button>
        <button
          className={`lg:px-6 py-2 font-medium border w-52  rounded-md transition-all duration-300 ${
            activeTab === "partner"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleTabClick("partner")}
        >
          PARTNER WITH US
        </button>

        {/* Triangle */}
        <div
          className={`absolute top-10 flex justify-center transition-all duration-300`}
        >
          <div
            className={`w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-black transition-transform duration-300 ${
              activeTab === "join"
                ? "lg:translate-x-[-7rem] translate-x-[-7rem]" /* Adjust position for the "JOIN" tab */
                : "lg:translate-x-[7rem] translate-x-[6.5rem]"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      {activeTab === "join" && (
        <div className="mt-20 text-center">
          <h2 className="lg:text-3xl text-2xl text-[#2F2F2F]">
            CAREER OPPORTUNITIES
          </h2>
          <p className="text-[#2F2F2F] lg:text-2xl text-xl mt-3">
            Current Openings
          </p>
          <div className="lg:flex justify-center lg:space-x-4 mt-6 container mx-auto">
            {CurrentOpenings.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-start justify-start p-3"
                >
                  <p className="mb-2 text-xl text-left">
                    Position {item.position}
                  </p>
                  <div className="flex items-center gap-3 bg-black h-28 lg:w-96 w-full lg:p-5 p-2 ">
                    <div className="bg-white text-red-500 p-2 rounded-full">
                      <Image src={item.logo} width={30} height={30} alt="logo"/>
                    </div>
                    <h3 className="text-xl  text-white">{item.title}</h3>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <p className="lg:w-[32vw] lg:my-7 lg:p-0 p-3">
              If you would like to explore an opportunity to work with Upfront,
              please fill up this form and submit
            </p>
          </div>
          <div>
            <JoinUsForm />
          </div>
        </div>
      )}

      {activeTab === "partner" && (
        <div className="mt-20 text-center">
          <h2 className="text-3xl text-[#2F2F2F]">Current Openings</h2>
          <p className="text-[#2F2F2F] text-2xl mt-3">
            Join the force behind the wellbeing of the workforce
          </p>
          <div>
            <PartnerForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
