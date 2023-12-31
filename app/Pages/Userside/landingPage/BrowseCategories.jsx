"use client";
import React from "react";
import Image from "next/image";
import Leaf2 from "@/public/assets/LandingPage/Leaf2.png";
import Link from 'next/link'

import browseCategories1 from "public/assets/LandingPage/browse-categories1.png";
import browseCategories2 from "public/assets/LandingPage/browse-categories2.png";
import browseCategories3 from "public/assets/LandingPage/browse-categories3.png";
import browseCategories4 from "public/assets/LandingPage/browse-categories4.png";
import browseCategories5 from "public/assets/LandingPage/browse-categories5.png";

export default function BrowseCategories() {
  return (
    <section className="w-full ">
      <Image
        className=" hidden lg:block absolute z-0   md:w-28 mt-18"
        src={Leaf2}
        alt=""
      />

      <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="  md-px-24 relative  container pt-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              <h1 className="sm:text-3xl text-2xlads font-bold title-font mb-2 text-[#015464]">
                Browse Book Categories
              </h1>
              <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
              <p className=" font-sm  text-[#4B8787]  mt-2 ">
                Buzzworthy,bestselling and bingeable.Read the books everyone is
                talking about right now
              </p>
            </div>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex lg:justify-end ">
              <Link href='/components/categories'>  

              <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm ">
                <h1 className="items-center">View all</h1>
              
              </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4">
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories1}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464] font-bold mb-1">
                  Young Adult
                </h2>
              </div>
            </div>
            <div className="p-4">
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories2}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464] font-bold mb-1">
                  Romance
                </h2>
              </div>
            </div>
            <div className="p-4">
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories3}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464] font-bold mb-1">
                  Science & Fantasy
                </h2>
              </div>
            </div>
            <div className="p-4">
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories4}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464] font-bold mb-1">
                  Mystry & Crime
                </h2>
              </div>
            </div>
            <div className="p-4">
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories5}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464] font-bold mb-1">
                  Trillers & Horror
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-between items-center sm:px-16 px-6 my-10 ">
        <div className="flex flex-col items-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#015464]">
            100 + Books Genre for Readers
          </h1>
          <h2 className="text-xs text-[#565656] tracking-widest font-medium title-font pb-3">
            Your Next#Enool Read Is Here
          </h2>
          <div className="h-1 w-20 bg-[#0FBF61] opacity-20 rounded justify-center"></div>
          <button className="flex mx-auto mt-3 text-white bg-[#7CC9B5] border-0 py-2 px-8 focus:outline-none hover:bg-[#578f80] rounded-[23px] text-sm">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className=" p-6 rounded-lg ">
        <Image className=" rounded w-auto object-cover object-center mb-6" src={browseCategories} alt="content" />
        <h2 className="text-lg text-[#015464] font-bold   mb-1">Young Adult</h2>
    </div>
</div> */
}
