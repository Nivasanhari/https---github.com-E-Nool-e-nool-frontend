'use client'

import Image from 'next/image';
import { useState, useRef } from 'react';
import Leaf from '@/public/assets/LandingPage/Leaf.png'
import HeroBg from '@/public/assets/LandingPage/hero-bg.png'
import Herosection from '@/public/assets/LandingPage/hero.png'
import playButton from '@/public/icons/play-button.png'
import pauseButton from '@/public/icons/pause-button.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Hero() {

    const slidesData = [
        {
            title: 'The Easiest Way to Find Any Book.',
            subtitle: 'Unlimited reading for the world: millions of books in the browser, accessible to billions of people.',
            buttonText: 'Get Started',
            imageSrc: Herosection,
        },
        // Add more slides here
    ];

    const swiperRef = useRef(null);
    const [isAutoplay, setIsAutoplay] = useState(true);

    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
        if (isAutoplay) {
            swiperRef.current.swiper.autoplay.start();
        } else {
            swiperRef.current.swiper.autoplay.stop();
        }
    };
    return (
        <section className="relative mx-auto">
            <Image className=" absolute z-0 top-20 w-16 " src={Leaf} alt="" />
            <Image className=" absolute z-0 -top-[500px] -right-52 " src={HeroBg} alt="" />

            <div className="z-10 md:px-24 lg:px-24 ">



                {/* Slider 1 */}
                <div className="hidden md:block">

                <Swiper
                    ref={swiperRef}
                    spaceBetween={3}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        el: '.swiper-pagination-right',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background-color: #015464;"></span>`;
                        },
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="md:container md:mx-auto flex lg:px-5 pt-24 md:flex-row flex-col items-center">

                            <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start   md:text-left sm:text-center ">
                                <h1 className="text-4xl md:mt-36  text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                                    <span className=" font-bold text-[#015464]">Book.</span></h1>
                                <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                                </p>

                                <div className="flex justify-center  pt-10">
                                    <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                </div>
                                <div className="flex justify-center mt-28">


                                </div>
                            </div>

                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                                <Image className="object-cover object-center rounded" alt="hero" src={Herosection} />
                            </div>

                        </div>

                    </SwiperSlide >
                    {/* Slider 2 */}

                        <SwiperSlide>
                            <div className="md:container md:mx-auto flex lg:px-5 pt-24 md:flex-row flex-col items-center">

                                <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                                    <h1 className="text-4xl md:mt-36  text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                                        <span className=" font-bold text-[#015464]">Book.</span></h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                                    </p>

                                    <div className="flex justify-center  pt-10">
                                        <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                    </div>
                                    <div className="flex justify-center mt-28">


                                    </div>
                                </div>

                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                                    <Image className="object-cover object-center rounded" alt="hero" src={Herosection} />
                                </div>

                            </div>

                        </SwiperSlide >

                </Swiper>
                </div>
                <div className="hidden md:container md:mx-auto md:flex lg:px-5  md:flex-row flex-col items-center">

                    <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-24 flex flex-row md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                        <button type="button" onClick={toggleAutoplay}>
                            <Image
                                className="w-10 h-10 mr-7 object-cover  rounded"
                                alt="hero"
                                src={isAutoplay ? playButton : pauseButton}
                            />
                        </button>
                        <div className="swiper-pagination-right mt-2 mx-8"></div>
                    </div>
                </div>
              
                {/* Slider For Medium screen */}
                <div className="md:hidden md:container md:mx-auto  w-screen flex  lg:px-5 pt-24 md:flex-row flex-col items-center ">

                    <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0  md:text-left text-center ">
                        <h1 className="text-4xl md:mt-36  text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                            <span className=" font-bold text-[#015464]">Book.</span></h1>
                        <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                        </p>

                        <div className="flex justify-center  pt-10">
                            <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                        </div>
                        <div className="flex justify-center mt-10 sm:h-80">

                            <Image className=" object-center rounded w-[60%]" alt="hero" src={Herosection} />
                        </div>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[44%] md:items-center  ">
                       
                    </div>

                </div>

            </div>

        </section>
    );
}