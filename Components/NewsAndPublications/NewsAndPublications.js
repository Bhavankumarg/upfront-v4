"use client";

import React, { useEffect, useState } from "react";
import ConfigData from "../../config";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const NewsAndPublications = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 5;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(8);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
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

  const seoProps = {
    title: "Stories of workforce empowerment & their wellbeing ",
    description:
      "Read inspiring stories of workforce empowerment and wellbeing initiatives, showcasing Upfront’s commitment to creating positive change in the workplace.",
    path: "https://upfront.global/insights/news-and-publications",
    metaImage: "/whatWeDo/banner.png",
  };

  return (
    <div>
      <Head>
        <title>{seoProps.title}</title>
        <meta name="description" content={seoProps.description} />
        <meta property="og:image" content={seoProps.metaImage} />
        <meta property="og:url" content={seoProps.path} />
      </Head>
      <div className="bg-[#0A0A0A]">
        <div className="text-white">
          <p className="text-center pt-10 text-2xl">NEWS AND PUBLICATIONS</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1">News and Publications</p>
        </div>
      </div>
      {isLoading ? ( // Render loading indicator while loading
        <div className="flex gap-5 justify-center">
          <div className="animate-pulse flex justify-center items-center border-2 p-4 mt-10">
            <div className="lg:flex justify-between items-center gap-4">
              <div className="flex flex-col">
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-80 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-72 rounded-none bg-[#B9B9B9]"></div>
              </div>
              <div className="bg-[#746C6C] h-40 w-96"></div>
            </div>
          </div>
        </div>
      ) : (
        <ul className="grid lg:grid-cols-1 container mx-auto my-8">
          {data.length > 0 ? (
            data.slice(0, visibleItems).map((post) => (
              <li key={post.id} className="mb-10 lg:m-0 p-3 border-b lg:p-10">
                <div className="w-full flex justify-between container items-center mx-auto">
                  <div className="mx-3 p-1 w-10/12">
                    <Link
                      target="_blank"
                      href={`${post.acf.news_and_publications_url}`}
                    >
                      <span
                        className="text-[#0A0A0A] lg:text-2xl text-left"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                    </Link>
                  </div>

                  <div className="relative">
                    {post.acf && post.acf.thumbnail_image && (
                      <Link
                        target="_blank"
                        href={`${post.acf.news_and_publications_url}`}
                      >
                        <Image
                        width={300}
                        height={300}
                          src={post.acf.thumbnail_image.url}
                          alt={post.title.rendered}
                          className="w-52"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="text-center text-3xl">No publications found.</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default NewsAndPublications;
