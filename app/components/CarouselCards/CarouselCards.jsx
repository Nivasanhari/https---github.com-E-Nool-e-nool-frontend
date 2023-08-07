import React from 'react'

import Image from 'next/image';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import TrendingReads2 from 'public/assets/LandingPage/TrendingReads2.png';
import TrendingReads3 from 'public/assets/LandingPage/TrendingReads3.png';
import TrendingReads4 from 'public/assets/LandingPage/TrendingReads4.png';
import TrendingReads5 from 'public/assets/LandingPage/TrendingReads5.png';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
export default function CarouselCardItems() {
    return (<div >
        <Image className=" rounded w-56 object-cover object-center mb-4   " src={TrendingReads1} alt="content" />
        <h2 className="text-[16px] text-[#1A6270] font-bold  mb-2">King of Battle and Blood</h2>
        <div className="flex flex-wrap mb-2 m-1">
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
        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>

        <div className="flex flex-wrap space-x-4 pt-2 mb-1 text-center ">
            <Image src={eye} className="w-8" alt="" />
            <Image src={heart} className="w-8" alt="" />
            <Image src={moreOption} className="w-8" alt="" />
        </div>
    </div>)
}


export const CarouselCards = () => {
    return (
        <div className="grid grid-cols-2   md:grid-cols-3  xl:grid-cols-6 gap-4 lg:gap-3">
            <CarouselCardItems/>
            <CarouselCardItems/>
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
           



            

        </div>
    )
}





