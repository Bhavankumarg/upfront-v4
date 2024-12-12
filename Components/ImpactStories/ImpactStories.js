"use client";
import { ThematicAreas } from "@/utils/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ConfigData from "../../config";

const ImpactStories = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 2;

  const [data, setData] = useState([]); // Initialize data state with an empty array
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  return (
    <>
      <div className="bg-[#0A0A0A]">
        <div className="text-white">
          <p className="text-center pt-10 text-2xl">IMPACT STORIES</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1"> Impact Stories</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {isLoading ? ( // Render loading indicator while loading
          <>
            <div className="lg:flex gap-5 justify-center">
              <div className="animate-pulse flex flex-col justify-center items-center">
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="bg-[#746C6C] h-52 w-96"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9] mt-4"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
              </div>
              <div className="animate-pulse flex flex-col justify-center items-center">
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="bg-[#746C6C] h-52 w-96"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9] mt-4"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="container mx-auto lg:px-4 py-8">
            <div className="grid md:grid-cols-2 border border-gray-300">
              {data.length > 0 ? (
                data.map((post, index) => (
                  <div
                    key={post.id}
                    className={`relative flex flex-col bg-white overflow-hidden lg:p-10 p-5 group 
                    ${index < data.length - 1 ? "border-b border-gray-300" : ""}
                    ${index % 1 === 0 ? "md:border-r border-gray-300" : ""}`}
                  >
                    {/* Background Effect */}
                    <div className="absolute inset-0 bg-[#000] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
                    <div className="relative z-10">
                      <div className="relative overflow-hidden">
                        {post.acf && post.acf.thumbnail_image && (
                          <>
                            <h3 className="lg:text-2x text-xl text-[#262626] group-hover:text-white flex items-center mb-6">
                              {post.title.rendered}
                            </h3>
                            <img
                              src={post.acf.thumbnail_image.url}
                              alt={post.title.rendered}
                              className="lg:h-72 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                            />
                          </>
                        )}
                      </div>
                      <div className="pt-4 text-left transition-colors duration-300 flex items-center group-hover:text-white ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post["excerpt"]["rendered"],
                          }}
                          className="mx-3 mt-5 p-1 post-content"
                        ></div>
                        <div className="transform opacity-0 h-7 justify-center w-7 flex items-center  bg-[#E82B52] group-hover:opacity-100 transition-transform duration-500 group-hover:scale-150">
                          <Link
                            href={`/impact-stories/${post.slug}`}
                            className="px-7"
                          >
                            <FiArrowRight className="text-[white] text-[20px]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No results found
                </div>
              )}
            </div>
          </div>
          //   <div className="grid md:grid-cols-2 border border-gray-300">
          //     {data.length > 0 ? (
          //       data.map((post) => (
          //         <div
          //           key={post.id}
          //           className={`relative flex flex-col bg-white overflow-hidden p-10 group
          //       ${
          //         post < ThematicAreas.length - 1
          //           ? "border-b border-gray-300"
          //           : ""
          //       }
          //       ${post % 2 === 0 ? "md:border-r border-gray-300" : ""}`}
          //         >
          //           {/* Background Effect */}
          //           <div className="absolute inset-0 text-black group-hover:text-white bg-[#0A0A0A] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
          //   <div className="relative z-10">
          //     <div className="relative overflow-hidden">
          //       {post.acf && post.acf.thumbnail_image && (
          //         <>
          //           <h3 className="text-2xl text-[#262626] group-hover:text-white flex items-center mb-6">
          //             {post.title.rendered}
          //           </h3>
          //           <img
          //             src={post.acf.thumbnail_image.url}
          //             alt={post.title.rendered}
          //             className="h-80 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
          //           />
          //         </>
          //       )}
          //     </div>
          //     <div className="pt-4 text-left transition-colors duration-300 flex items-center group-hover:text-white ">
          //       <div
          //         dangerouslySetInnerHTML={{
          //           __html: post["excerpt"]["rendered"],
          //         }}
          //         className="mx-3 mt-5 p-1 post-content"
          //       ></div>
          //       <div className="transform opacity-0 h-7 justify-center w-7 flex items-center  bg-[#E82B52] group-hover:opacity-100 transition-transform duration-500 group-hover:scale-150">
          //         <Link
          //           href={`/impact-stories/${post.slug}`}
          //           className="px-7"
          //         >
          //           <FiArrowRight className="text-[white] text-[20px]" />
          //         </Link>
          //       </div>
          //     </div>
          //   </div>
          //         </div>
          //       ))
          //     ) : (
          //       <div className="text-center text-gray-500">No results found</div>
          //     )}
          //   </div>
        )}
      </div>
    </>
  );
};

export default ImpactStories;
