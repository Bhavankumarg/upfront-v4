import { coreTeam } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <div className="">
      <div className="text-center">
        <p className="secondar-title text-3xl lg:mt-20 mt-10">
          The Minds Behind The Mission
        </p>
      </div>
      <div className="container mx-auto py-10 flex justify-center items-center">
        <ul className="grid lg:grid-cols-3 gap-8 container mx-auto">
          {coreTeam.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`p-3 ${index % 2 === 1 ? " " : ""} lg:${
                  index % 3 !== 0 ? " " : ""
                } relative`}
              >
                <div className="relative group overflow-hidden">
                  <Image
                  width={600}
                  height={300}
                    src={item.imageUrl}
                    alt="image"
                    className="mx-auto pt-2 lg:w-[26vw] transition-transform duration-300 group-hover:scale-110 borer-0"
                  />
                 
                  <div className="absolute inset-0  bg-black translate-x-full transition-transform duration-500 group-hover:translate-x-0 border-0"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-lg font-bold p-5 text-center">{item.designation}</p>
                  </div>
                </div>

                <div className="lg:flex justify-between">
                  <p className="lg:text-2xl text-xl mt-3 lg:mx-0 mx-10">{item.name}</p>

                {item.url && (
                  <>
                    
                    <Link href={item.url} target="_blank" >
                      <Image
                        src="/OurTeam/linkedin.png"
                        width={30}
                        height={30}
                        className="mt-3 lg:mx-0 mx-10"
                        alt="mentor"
                      />
                    </Link>
                  </>
                )}
                </div>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Team;
