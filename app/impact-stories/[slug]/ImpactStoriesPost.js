"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ConfigData from "../../../config";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const ImpactStoriesPost = ({ slug }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [nextPost, setNextPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setPost(data[0]); // Assuming slug fetches a single post
          } else {
            setPost(null); // No post found
          }
        } else {
          console.error("Failed to fetch post:", response.statusText);
          setPost(null); // No post found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPost(null); // No post found
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [siteUrl, slug]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&categories=2`);
        if (response.ok) {
          const data = await response.json();

          const filteredPosts = data.filter((p) => p.slug !== slug).slice(0, 2);
          setRelatedPosts(filteredPosts);

          const currentIndex = data.findIndex((p) => p.slug === slug);
          if (currentIndex !== -1) {
            setNextPost(data[currentIndex + 1] || null);
            setAllPosts(data);
          }
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching all posts:", error);
      }
    };

    fetchCategoryPosts();
  }, [siteUrl, slug]);

  return (
    <div className="custom-container">
      {isLoading ? (
        <div className="text-center py-20">
          <div className="animate-pulse container mx-auto border-2">
            <div className="flex justify-between items-center border-b-2">
              <div className=" h-6 w-40 bg-gray-300"></div>
              <div className=" h-6 w-40 bg-gray-300"></div>
            </div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt- bg-gray-300"></div>
            <div className="mb-2 h-36 w-96 mx-auto mt-5 rounded bg-gray-400"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="flex justify-between items-center border-t-2 mt-5">
              <div className=" h-6 w-40 bg-gray-300"></div>
              <div className=" h-6 w-40 bg-gray-300"></div>
            </div>
          </div>
        </div>
      ) : post ? (
        <div className="bg-[#EFEFEF] p-10">
          <div>
            <p className="text-[#0A0A0A] container mx-auto text-xl">
              <Link href="/">Home /</Link>
              <span className="fs-6 mb-0 px-1">
                <Link href="/impact-stories">Impact Stories </Link>/
              </span>
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </p>
          </div>

          {/* Next Impact Story and Back to All Impact Stories Buttons */}
          <div className="bg-white container mx-auto border-2 my-10">
            <div className="flex justify-between p-3 items-center container mx-auto border-b-2">
              {allPosts && (
                <Link href="/impact-stories">
                  <button className="focus:outline-none">
                    <p className="flex items-center gap-3 text-xl text-[#404040]">
                      <RiArrowLeftLine size={30} /> Back to All Impact Stories
                    </p>
                  </button>
                </Link>
              )}
              {nextPost && (
                <Link href={`/impact-stories/${nextPost.slug}`}>
                  <button className="focus:outline-none">
                    <p className="flex text-xl items-center gap-3 text-[#404040]">
                      Next Impact Story
                      <RiArrowRightLine size={30} />
                    </p>
                  </button>
                </Link>
              )}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:pt-16 justify-center p-10">
              <div className="lg:w-3/4 w-full lg:px-10 container 2xl:mx-auto">
                <div
                  className="text-3xl p-5 text-center text-[#0A0A0A]"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                {post.acf?.banner_image?.url && (
                  <div>
                    <Image
                    width={600}
                    height={400}
                      src={post.acf.banner_image.url}
                      alt={post.title.rendered}
                      className="w-full mb-5"
                    />
                  </div>
                )}
                <div
                  className="text-[#0A0A0A]"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </div>

            {/* Related Stories */}
            <div className="mt-10 p-20">
              <div className="border">
                <h2 className="text-2xl text-left p-4 border-b">
                  Related Stories
                </h2>
                <div className="grid md:grid-cols-2  border-gray-300">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className={`relative flex flex-col bg-white overflow-hidden p-10 group 
          ${index < relatedPosts.length - 1 ? "border-t-0 border-gray-300" : ""}
          ${index % 1 === 0 ? "border-r-0 border-gray-300" : ""}`}
                      >
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-[#000] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
                        <div className="relative z-10">
                          <div className="relative overflow-hidden">
                            {post.acf?.banner_image?.url && (
                              <>
                                <h3 className="text-2xl text-[#262626] group-hover:text-white flex items-center mb-6">
                                  {post.title.rendered}
                                </h3>
                                <Image
                                width={400}
                                height={400}
                                  src={post.acf.banner_image.url}
                                  alt={post.title.rendered}
                                  className="h-60 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                                />
                              </>
                            )}
                          </div>
                          <div className="pt-4 text-left transition-colors duration-300 flex items-center group-hover:text-white ">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt?.rendered || "",
                              }}
                              className="mx-3 mt-5 p-1 post-content"
                            ></div>
                            <div className="transform opacity-0 h-7 justify-center w-7 flex items-center bg-[#E82B52] group-hover:opacity-100 transition-transform duration-500 group-hover:scale-150">
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
            </div>

            <div className="flex justify-between p-3 items-center container mx-auto border-t-2">
              {allPosts && (
                <Link href="/impact-stories">
                  <button className="focus:outline-none">
                    <p className="flex items-center gap-3 text-xl text-[#404040]">
                      <RiArrowLeftLine size={30} /> Back to All Impact Stories
                    </p>
                  </button>
                </Link>
              )}
              {nextPost && (
                <Link href={`/impact-stories/${nextPost.slug}`}>
                  <button className="focus:outline-none">
                    <p className="flex text-xl items-center gap-3 text-[#404040]">
                      Next Impact Story
                      <RiArrowRightLine size={30} />
                    </p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-3xl my-3">No Impact Stories Found</p>
          <p className="text-xl flex gap-3 justify-center items-center">
            Go Back to{" "}
            <Link href="/impact-stories" className="text-red-600">
              <span className="flex gap-3 justify-center items-center">
                Impact Stories <RiArrowRightLine />
              </span>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default ImpactStoriesPost;
