"use client";
import React from "react";

import Image from "next/image";
import LeafBg from "public/assets/LandingPage/Leaf-Bg.png";
import TrendingCurve from "public/assets/LandingPage/Trending curve.png";
import TrendingReads1 from "public/assets/LandingPage/TrendingReads1.png";
import eye from "public/icons/eye.png";
import heart from "public/icons/heart.png";
import moreOption from "public/icons/more-options-dotted.png";

export default function TrendingBooks() {
  return (
    <section className="relative mx-auto">
      {/* <Image className=" absolute z-0 top-20 w-16 " src={Leaf} alt="" />
            <Image className=" absolute z-0 -top-[500px] -right-52 " src={HeroBg} alt="" /> */}

      <div className="z-10 md:px-24 lg:px-24 ">
        <div className="hidden md:block">
          <div className="md:container md:mx-auto flex lg:px-5 pt-24 md:flex-row flex-col items-center">
            <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
              <h1 className="text-4xl md:mt-36  text-[#015464]">
                The{" "}
                <span className=" text-[#105464] font-bold">Easiest Way</span>{" "}
                to <br />
                Find Any
                <span className=" font-bold text-[#015464]">Book.</span>
              </h1>
              <p className=" text-[#408080] mt-8 font-medium">
                Unlimited reading for the world: millions of books in the
                browser, accessible to billions of people.
              </p>

              <div className="flex justify-center  pt-10">
                <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center mt-28"></div>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
              {/* <Image
                className="object-cover object-center rounded"
                alt="hero"
                src={Herosection}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-wrap -m-4">
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg ">
            <Image className=" rounded w-auto object-cover object-center mb-6" src={TrendingReads1} alt="content" />
            <h2 className="text-lg text-[#1A6270] font-bold   mb-1">King of Battle and Blood</h2>
            <p className="tracking-widest text-[#1A6270] text-xs  mb-1  ">by Scarlett St.Clair</p>
            <div className="flex flex-wrap">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">(27)</p>
            </div>
            <div className="flex flex-wrap space-x-4 pt-2">
                <Image src={eye} className="w-8" alt="" />
                <Image src={heart} className="w-8" alt="" />
                <Image src={moreOption} className="w-8" alt="" />
            </div>
        </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg ">
            <Image className=" rounded w-auto object-cover object-center mb-6" src={TrendingReads1} alt="content" />
            <h2 className="text-lg text-[#1A6270] font-bold   mb-1">King of Battle and Blood</h2>
            <p className="tracking-widest text-[#1A6270] text-xs  mb-1  ">by Scarlett St.Clair</p>
            <div className="flex flex-wrap">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">(27)</p>
            </div>
            <div className="flex flex-wrap space-x-4 pt-2">
                <Image src={eye} className="w-8" alt="" />
                <Image src={heart} className="w-8" alt="" />
                <Image src={moreOption} className="w-8" alt="" />
            </div>
        </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg ">
            <Image className=" rounded w-auto object-cover object-center mb-6" src={TrendingReads1} alt="content" />
            <h2 className="text-lg text-[#1A6270] font-bold   mb-1">King of Battle and Blood</h2>
            <p className="tracking-widest text-[#1A6270] text-xs  mb-1  ">by Scarlett St.Clair</p>
            <div className="flex flex-wrap">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">(27)</p>
            </div>
            <div className="flex flex-wrap space-x-4 pt-2">
                <Image src={eye} className="w-8" alt="" />
                <Image src={heart} className="w-8" alt="" />
                <Image src={moreOption} className="w-8" alt="" />
            </div>
        </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg ">
            <Image className=" rounded w-auto object-cover object-center mb-6" src={TrendingReads1} alt="content" />
            <h2 className="text-lg text-[#1A6270] font-bold   mb-1">King of Battle and Blood</h2>
            <p className="tracking-widest text-[#1A6270] text-xs  mb-1  ">by Scarlett St.Clair</p>
            <div className="flex flex-wrap">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">(27)</p>
            </div>
            <div className="flex flex-wrap space-x-4 pt-2">
                <Image src={eye} className="w-8" alt="" />
                <Image src={heart} className="w-8" alt="" />
                <Image src={moreOption} className="w-8" alt="" />
            </div>
        </div>
    </div>
</div> */
}
