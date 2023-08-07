
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

import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import CarouselCardItems from '@/app/components/subscriptionCard/page';
import CarouselCards from '@/app/components/CarouselCards/CarouselCards';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import leftarrow from 'public/icons/left-arrow.png';
import rightarrow from 'public/icons/right-arrow.png'
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import LefeBg from 'public/assets/Lefe1.png'
import pricing from 'public/assets/Pricing.png'
import pricingimg from 'public/assets/pricingimg.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import img1 from 'public/assets/img1.png'
import Ellipse from 'public/assets/Ellipse.png'
import Leaf2 from 'public/assets/Leaf2.png'




export default function TrendingReads() {
    const bookData = {
        imageSrc: TrendingReads1,
        title: 'King of Battle and Blood',
        rating: 4, // This can be a dynamic value, like from an API or state
        author: 'Scarlett St.Clair',
    };
    return (
        <section className=" w-full">
            <div>

                <div>
                    <Image className=' relative h-[450px]' src={Aboutbg} />
                    <Image className=" absolute z-0 top-24 w-16 " src={Leaf} alt="" />
                    <div className='  justify-center items-center flex top-48 z-0 absolute '>
                        <div className=' max-w-3xl ml-52'>
                            <Image src={pricing} alt='pricing-img' />
                            <h1 className=' text-[#015464] font-extrabold text-5xl'>Subscription</h1>
                        </div>
                        <Image className=' max-w-md' src={pricingimg} alt='pricingimg-img' />
                    </div>
                    <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={LefeBg} alt="" />
                </div>
                
                <div className=" mx-auto flex justify-between items-center sm:px-16 px-4 py-4" >
                    <Swiper


                        slidesPerView={1}
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

                            <CarouselCardItems />
                        </SwiperSlide>

                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>

                    </Swiper>
                    <div className=' xl:max-w-sm'>
                        <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 right-0 w-28 " src={Leaf2} />
                        <Image className=" hidden lg:block absolute top-[900px] z-0 bottom-36 right-0 w-72 " src={img1} />
                        <Image className=" hidden lg:block absolute top-[1180px] z-0 bottom-36 right-20 w-20 " src={Ellipse} />
                    </div>
                </div>

                <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4" >

                    <Swiper


                        slidesPerView={1}
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

                            <CarouselCardItems />
                        </SwiperSlide>

                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide> */}

                    </Swiper>
                </div>

                <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4" >

                    <Swiper


                        slidesPerView={1}
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

                            <CarouselCardItems />
                        </SwiperSlide>

                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        <SwiperSlide>

                            <CarouselCardItems />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide>
                         <SwiperSlide>
                           
                       <CarouselCardItems/>
                       </SwiperSlide> */}

                    </Swiper>
                </div>
            </div>

        </section>
    )
}











