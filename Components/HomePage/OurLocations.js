"use client";

import Image from "next/image";
import { useState } from "react";

export default function BubbleTabs() {
  const [activeTab, setActiveTab] = useState("global");

  const isActive = (tab) => activeTab === tab;

  return (
    <div className="bg-black py-10">
      <div className="text-white text-center flex flex-col items-center">
        <p className="lg:text-5xl text-2xl my-4">Our Locations</p>
        <p className="lg:text-2xl text-xl mb-5">Expanding Impact Across India and Beyond</p>
        <p className="lg:text-xl lg:w-[60vw] lg:p-0 p-3">
          We are based out of India and have worked across 19 states and union
          territories within the country. Globally, we have worked in 13
          countries across Asia and Africa, touching the lives of 9 million
          individuals in the workforce and their families.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex items-center justify-center gap-x-4">
        {["global", "india"].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`relative flex items-center justify-center px-4 py-3 w-32 h-12 mt-10 text-sm font-medium rounded-full shadow-md focus:outline-none focus:ring-0 focus:ring-offset-0 ${
              isActive(tab)
                ? "text-white bg-[#404040] focus:ring-0"
                : "text-black bg-white hover:bg-[#404040] hover:text-white focus:ring-0"
            }`}
            aria-selected={isActive(tab)}
            role="tab"
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <div
              className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 ${
                isActive(tab) ? "bg-[#404040] hover:bg-[#404040]" : ""
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 flex justify-center gap-x-4">
        {activeTab === "global" && (
          <div class="flex flex-col items-center">
            <Image
            width={400}
            height={300}
              src="/HomePage/OurLocations/WorldMap.svg"
              alt="Global Image"
              className="object-cover"
            />
          </div>
        )}
        {activeTab === "india" && (
          <div class="flex flex-col items-center">
            <Image
            width={400}
            height={400}
              src="/HomePage/OurLocations/IndiaMap.png"
              alt="India Image"
              className="w-96"
            />
          </div>
        )}
      </div>
    </div>
  );
}
