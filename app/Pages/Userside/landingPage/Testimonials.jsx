'use client'
import React from 'react'

import Image from 'next/image';

import Leaf2 from 'public/assets/LandingPage/Leaf2.png'
import cardObject from 'public/assets/LandingPage/testimonial-object.png'

export default function Testimonials() {
    return (
        <section className=" w-full mt-10">
            <Image src={Leaf2} alt="" className='absolute mt-96' />
            <div className=" m-auto flex justify-between items-center sm:px-16 px-6 py-4 " >
                <div className="  md-px-24 relative  container pt-24 mx-auto">
                <div className="flex flex-wrap w-full mb-10 lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                        <h1 className="text-3xl font-bold title-font pb-4 text-[#015464] lg:w-[60%]">What Readers Says</h1>
                        <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                    </div>
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:flex md:justify-end items-center">
                        <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                    </div>
                </div>
                <div className="container m-auto  text-gray-600 ">
                    <div className="grid gap-7 sm:grid-rows-1 md:grid-rows-2  lg:grid-cols-3">
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FEF5F5] text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-4">
                                <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                                <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p>
                                <div className="relative text-center">
                                    <Image src={cardObject} alt="card-object" className="mx-auto" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <h6 className="text-lg font-semibold leading-none text-[#015464]">Jane Doe / New York</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#F4FBF2] text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-4">
                                <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                                <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p>
                                <div className="relative text-center">
                                    <Image src={cardObject} alt="card-object" className="mx-auto" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <h6 className="text-lg font-semibold leading-none text-[#015464]">Jane Doe / New York</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FEF5F5] text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-4">
                                <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                                <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p>
                                <div className="relative text-center">
                                    <Image src={cardObject} alt="card-object" className="mx-auto" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <h6 className="text-lg font-semibold leading-none text-[#015464]">Jane Doe / New York</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" lg:hidden lg:w-1/2 w-full my-6 lg:mb-0 flex justify-center ">
                    <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                </div>

            </div>
            </div>

        </section>
    )
}
