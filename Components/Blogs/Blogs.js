"use client";
import { ThematicAreas } from "@/utils/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ConfigData from "../../config";
import RecentBlogs from "./RecentBlogs";
const Blogs = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 3;

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
          <p className="text-center pt-10 text-2xl">BLOGS</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1"> Blogs</p>
        </div>
      </div>
      {/* Recent blogs Section */}
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <RecentBlogs />
      </div>
      {/*  */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? ( // Render loading indicator while loading
          <>
            <div className="flex gap-5 justify-center grid lg:grid-cols-3 grid-cols-1">
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
            <div className="grid md:grid-cols-3 border border-gray-300">
              {data.length > 0 ? (
                data.map((post, index) => (
                  <div
                    key={post.id}
                    className={`relative flex flex-col bg-white overflow-hidden lg:p-10 p-5 group 
                  ${index < data.length - 1 ? "border-b border-gray-300" : ""}
                  ${index % 1 === 0 ? "md:border-r border-gray-300" : ""}`}
                  >
                    {/* Background Effect */}
                    <div className=""></div>
                    <div className="relative z-10">
                      <div className="relative overflow-hidden">
                        {post.acf && post.acf.thumbnail_image && (
                          <>
                            <img
                              src={post.acf.thumbnail_image.url}
                              alt={post.title.rendered}
                              className="h- object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                            />
                          </>
                        )}
                      </div>
                      <div className="pt-4 text-left">
                        <h3 className="lg:text-2xl text-xl text-[#262626] flex items-center mt-6 post-content">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post["excerpt"]["rendered"],
                          }}
                          className="mt-5 p-1 text-gray-600 post-content-title"
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-10">
                      <Link href={`/blogs/${post.slug}`}>
                        <button className="relative group px-7 py-2 bg-transparent text-black lg:w-[25vw] text-lg font-semibold transition-all duration-500 hover:bg-black group-hover:text-white">
                          <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                          <span className="relative z-10 flex items-center ">
                            Read more
                            <FiArrowRight className="text-[20px] transform transition-transform duration-500 translate-x-0 lg:group-hover:translate-x-56 opacity-0 group-hover:opacity-100" />
                          </span>
                        </button>
                      </Link>
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
        )}
      </div>
    </>
  );
};

export default Blogs;
