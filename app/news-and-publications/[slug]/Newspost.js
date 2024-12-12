"use client";

import React, { useState, useEffect } from "react";
// import { CiCircleChevRight } from "react-icons/ci";
import Link from "next/link";
import ConfigData from "../../../config"; // Adjust the import path according to your project structure

const NewsPosts = ({ slug }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setPost(data[0]); // Assuming slug fetches a single post
          } else {
            console.error("Post not found:", slug);
          }
        } else {
          console.error("Failed to fetch post:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, slug]);

  return (
    <div className="custom-container">
      {post ? (
        <div>
          
          <div className="bg-[#E8E8E8] p-4">
            <p className="text-black">
              <Link href="/insights">Insights /</Link>
              <span className="fs-6 mb-0 px-1">News /</span>
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-10 p-5 lg:pt-16">
            <div className="lg:w-3/4 w-full lg:px-10">
              <div className="relative">
                <img
                  src={post.acf.banner_image.url}
                  alt={post.title.rendered}
                  className="w-full"
                />
                <button
                  type="button"
                  className="text-white text-xl absolute top-0 start-0 w-32 text-center font-normal bg-gray-800/75 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-1 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  News
                </button>
              </div>
              <p className="card-date mb-0 pt-5 pb-4 text-[#4E4E4E]">
                {new Date(post.acf.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div
                className="w-full"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
              <div className="pt-5 pb-10">
                <Link href="/insights/news-and-publications">
                  <button
                    type="button"
                    className="focus:outline-none w-44 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-normal text-md px-4 py-4 me-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    View All News
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 w-full">
            <button
                type="button"
                className="text-white lg:w-72 w-full text-xl  rounded-sm  font-normal bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   px-5 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Related Resources
              </button>
              <div className="border-l border-gray-300 border-solid-1 p-4">
              <div className="relative mb-3">
                <img
                  className="object-cover w-full lg:w-72"
                  src="/insights/relatedRes1.png"
                  alt="image description"
                  height={200}
                  
                />
                <button
                  type="button"
                  className="text-white w-20 text-xl absolute start-0 top-0 py-1 rounded-sm bg-gray-800/70 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  BLOG
                </button>
              </div>
              <div className="px-2">
                <p className="text-gray-400 mt-3 mb-3">29 Feb 2024</p>
                <p className="text-2xl">
                  A glimpse into the Life of an Invisible Workforce – Street
                  Vendors of India
                </p>
                <p className="py-3">
                  Every day, I stitch clothes for babies and my husband ventures
                  out to sell them in the Gautam Nagar market area in Delhi. We
                  spend Rs. 50 or 100 every day to secure a decent vending
                  spot,” says Parveen, who does home-based work in Delhi.
                </p>
                <button
                  type="button"
                  className="text-gray-900 mt-5 rounded-sm hover:text-white border border-gray-300 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-6 py-2 lg:w-24 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Read
                </button>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">Loading...</div>
      )}
    </div>
  );
};

export default NewsPosts;
