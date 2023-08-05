import React from 'react'
import Image from 'next/image';
import trendingCurve from 'public/assets/LandingPage/Trending curve.png';
import brand_1 from 'public/assets/LandingPage/brand-1.png';
import brand_2 from 'public/assets/LandingPage/brand-2.png';
export default function FeaturedPublishers  ()  {
  return (
      <section className=" ">

          <div className="w-full md-px-24 relative  container  py-10 mx-auto px-1">
              <div className="flex flex-wrap w-full mb-10 lg:flex-row flex-col">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                      <h1 className="text-3xl font-bold title-font pb-4 text-[#015464] lg:w-[60%]">
                          Featured Publishers
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
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                   </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_2} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_2} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_2} alt="content" />
                  </div>

                  
                  
              </div>


          </div>

      </section>
  )
}
