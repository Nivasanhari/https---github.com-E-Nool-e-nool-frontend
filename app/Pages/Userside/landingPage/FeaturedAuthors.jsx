import React from "react";
import Image from "next/image";
import FeatureAuthorimg from "public/assets/LandingPage/featured-author.png";
import FeatureAuthorimg1 from "public/assets/LandingPage/featured-author1.png";
import aboutobject from '@/public/assets/LandingPage/hero-bg-1.png';
export default function FeaturedAuthors() {
  return (
    <section className=" mt-10">
      <div className=" m-auto flex justify-between items-center sm:px-16 px-6 py-4 " >
      <div className=" md-px-24 relative  container  py-4 m-auto px-6 ">
        <div className="flex flex-wrap w-full mb-10 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
            <h1 className="text-3xl font-bold title-font pb-4 text-[#015464] lg:w-[60%]">
              Featured Authors
            </h1>
            <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
          </div>
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:flex md:justify-end items-center">
            <button className="text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm">
              <h1 className="items-center">View all</h1>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 ">
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded lg:w-36  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-36   object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-36  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-36  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-36  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-36  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-bold text-[#015464]">Arthur Gonzalez</p>
          </div>
        </div>
      </div>
      </div >
    </section>
  );
}
