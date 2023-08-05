'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import Image from 'next/image';


import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import TrendingReads2 from 'public/assets/LandingPage/TrendingReads2.png';
import TrendingReads3 from 'public/assets/LandingPage/TrendingReads3.png';
import TrendingReads4 from 'public/assets/LandingPage/TrendingReads4.png';
import TrendingReads5 from 'public/assets/LandingPage/TrendingReads5.png';
import CarouselCardItems1 from '@/app/components/CarouselCards/CarouselCards';
// import eye from 'public/icons/eye.png';
// import heart from 'public/icons/heart.png';
// import moreOption from 'public/icons/more-options-dotted.png';
import leftarrow from 'public/icons/left-arrow.png';
import rightarrow from 'public/icons/right-arrow.png'
import TrendingCurve from '@/public/assets/LandingPage/Trending curve.png'

export default function NewAndNoteworthy() {
    const bookData = {
        imageSrc: TrendingReads1,
        title: 'King of Battle and Blood',
        rating: 4, // This can be a dynamic value, like from an API or state
        author: 'Scarlett St.Clair',
    };
    return (
        <section className=" w-full">
            <Image className=" absolute z-0   pt-60" src={TrendingCurve} alt="" />


            <div className=" m-auto flex justify-between items-center sm:px-16 px-6 py-4" >
                <div className="  md-px-24 relative  container pt-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-10">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
                            <h1 className=" text-3xl font-bold title-font mb-2 text-[#015464]">Enool-Picks</h1>
                            <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                            <p className=" font-sm  text-[#4B8787]  mt-2 ">Buzzworthy,bestselling and bingeable.Read the books everyone is talking about right now</p>
                        </div>
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex lg:justify-end ">
                            <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                        </div>
                    </div>
                    <Swiper

                        slidesPerView={6}
                        spaceBetween={1}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="justify-center m-auto ">
                            <Image className="swiper-button-prev  " src={leftarrow} />
                            <Image className="swiper-button-next" src={rightarrow} />
                        </div>

                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>

                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems1 />
                        </SwiperSlide>
                    </Swiper>






                </div>
            </div>

        </section>
    )
}