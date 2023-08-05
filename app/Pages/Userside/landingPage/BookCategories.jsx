import React from 'react'
// import { useState, useEffect } from 'react';
// import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';

import { Cards } from '@/app/components/Cards/Cards';
import CategoriesButton from '@/app/components/CategoriesButton/CategoriesButton';
import FeaturedAuthors from './FeaturedAuthors';
import FeaturedPublishers from './FeaturedPublishers';
export default function BookCategories() {
    const dropdown = '/icons/dropdown.svg'
    const gridEnabled = '/icons/grid-enabled.svg'
    const listdisabled = '/icons/list-disabled.svg'
    const bookData = {
        imageSrc: TrendingReads1,
        title: 'King of Battle and Blood',
        rating: 4, // This can be a dynamic value, like from an API or state
        author: 'Scarlett St.Clair',
    };
    return (
        <section className=" w-full">
            <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4" >

                <div className="  md-px-24 relative  container pt-24 mx-auto">
                    <div className="flex flex-wrap w-full ">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                            <h1 className="text-3xl  font-bold title-font pb-4 text-[#015464]">Antiques and Collectables</h1>
                        </div>
                    </div>
                    <div className="lg:flex justify-between mb-10">

                        <CategoriesButton />
                        <div className="sm:flex pt-10 sm:space-x-3" >
                            <button
                                type="button"

                                className="flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
                            >
                                <span className="pl-5 text-[#015464] text-sm ">Show: All</span>
                                <img src={dropdown} alt="Dropdown" className="w-3 h-3" />
                            </button>

                            <button
                                type="button"

                                className="flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
                            >
                                <span className="pl-5 text-[#015464] text-sm">Short By: Publisher</span>
                                <img src={dropdown} alt="Dropdown" className="w-3 h-3" />
                            </button>

                            <button>
                                <img
                                    src={gridEnabled}
                                    alt='gridEnabled'
                                    className="px-2 w-10"
                                />
                            </button>
                            <button>
                                <img
                                    src={listdisabled}
                                    alt='listdisabled'
                                    className="px-2 w-9 items-center"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>

                    <Cards />




                </div>
            </div>
            <FeaturedAuthors />
            <FeaturedPublishers />

        </section>
    )
}