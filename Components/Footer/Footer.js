"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathName = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Our Team", href: "/our-team" },
    { name: "Why Workforce Wellbeing", href: "/why-workforce-wellbeing" },
    { name: "Impact Stories", href: "/impact-stories" },
    { name: "Blogs", href: "/blogs" },
    { name: "News and Publications", href: "/news-and-publications" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#080808] text-[#909090] py-10 mt-28">
      {/* Logo Section */}
      <div className="text-center mb-6">
        <Image
          width={150}
          height={100}
          src="/HomePage/UpfrontLogoFooter.png"
          alt="Upfront Logo"
          className="mx-auto  relative z-10 -top-28"
        />
      </div>

      {/* Navigation Links */}
      <div className="lg:text-center mb-6 -mt-20 lg:-mt-10">
        <div className="border-[#909090] border-t-2 container mx-auto py-3"></div>
        <ul className="lg:flex flex-wrap lg:justify-center lg:space-x-4 lg:px-0 px-5 md:space-x-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`text-[20px] relative group ${
                pathName === item.href ? "text-white font-bold" : ""
              }`}
            >
              <Link href={item.href} className="relative">
                {item.name}
              </Link>
              <div className=" border-b lg:border-b-0 my-2"></div>
              <span
                className={`absolute left-0 bottom-0 lg:w-full lg:border-b-0 h-[2px] bg-[#E82B52] transform ${
                  pathName === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform ease-out duration-200`}
              ></span>
            </li>
          ))}
        </ul>
        <div className="border-[#909090] border-b-2 container mx-auto py-3"></div>
      </div>

      <div className="text-center mb-6">
        <Link
          href="mailto:info@upfrontglobal.com"
          className="text-sm relative group inline-block"
        >
          <span className="flex justify-center gap-2 items-center">
            <IoIosMailOpen className="text-[#E82B52]" size={30} />
            <span className="text-[24px] relative">
              info@upfrontglobal.com
              <span className="absolute left-0 bottom-0 w-full h-[2px] -mb-2 bg-[#E82B52] scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-200"></span>
            </span>
          </span>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="text-center mb-6 flex justify-center items-center">
        <span className="text-[24px] mr-2">Follow us:</span>
        <a
          href="https://www.linkedin.com/showcase/upfrontcg/"
          target="_blank"
          className="inline-block mx-2 hover:text-gray-400"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://x.com/UpfrontCG"
          target="_blank"
          className="inline-block mx-2 hover:text-gray-400"
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/upfront.global/"
          target="_blank"
          className="inline-block mx-2 hover:text-gray-400"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[20px] text-gray-400">
        <div className="border-[#909090] border-t-2 container mx-auto py-3"></div>
        <div className="container mx-auto">
          Upfront is an initiative of the Catalyst Group.{" "}
          {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
