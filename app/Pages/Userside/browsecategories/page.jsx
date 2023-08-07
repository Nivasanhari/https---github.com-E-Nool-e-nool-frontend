'use client'
import React from 'react'
 import { useState, useEffect } from 'react';
// import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';

import { CardsGrid,CardsList } from '@/app/components/CardsGrid/Cards';
import CategoriesButton from '@/app/components/CategoriesButton/CategoriesButton';
import FeaturedAuthors from '../landingPage/FeaturedAuthors';
import FeaturedPublishers from '../landingPage/FeaturedPublishers';


export default function page() {
    const dropdown = '/icons/dropdown.svg'
    const gridEnabled = '/icons/grid-enabled.svg'
    const gridDisabled = '/icons/grid-disabled.svg'
    const listEnabled = '/icons/list-enabled.svg'
    const listdisabled = '/icons/list-disabled.svg'

    const [isGridView, setGridView] = useState(true);

    const enableGridView = () => {
        if (!isGridView) {
            setGridView(true);
        }
    };

    const enableListView = () => {
        if (isGridView) {
            setGridView(false);
        }
    };
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const bookData = {
        imageSrc: TrendingReads1,
        title: 'King of Battle and Blood',
        rating: 4, // This can be a dynamic value, like from an API or state
        author: 'Scarlett St.Clair',
    };
    return (
        <section className=" w-full ">
            <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4" >

                <div className="  md-px-24 relative  container pt-24 mx-auto">
                    <div className="flex flex-wrap w-full ">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                            <h1 className="text-3xl  font-graphikBold title-font pb-4 text-[#015464]">Antiques and Collectables</h1>
                        </div>
                    </div>
                    <div className="lg:flex justify-between mb-10 ">

                        <button
                            type="button"
                            onClick={handleDropdownToggle}
                            className="flex items-center justify-between w-80 px-4 py-2 bg-[#7CC9B5] text-white rounded-3xl hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row"
                        >
                            <span className="pl-5">Browse By Subject</span>
                            <img src={dropdown} alt="Dropdown" className="w-3 h-3" />
                        </button>

                        {isDropdownOpen && <CategoriesButton/>}
                 
                    </div>
                    <div className="sm:flex pt-3 sm:space-x-3 mx-auto justify-end " >
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

                        <button onClick={enableGridView}>
                            <img
                                src={isGridView ? gridEnabled:gridDisabled}
                                alt='gridEnabled'
                                className="px-2 w-10"
                            />
                        </button>
                        <button onClick={enableListView}>
                            <img
                                src={!isGridView ?listEnabled:listdisabled}
                                alt='listdisabled'
                                className="px-2 w-9 items-center"
                            />
                        </button>
                    </div>
                    <div className=" z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>

                   
                  

                    {isGridView ? (
                        <div>
                            <CardsGrid />
                        </div>
                    ) : (
                        <div>
                                <CardsList />
                        </div>
                    )}


                </div>
          
            </div>
            <div className="mx-auto flex justify-center items-center mt-4">
                <nav className="inline-flex items-center justify-center rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <p className="text-sm  text-[#408080]">Previous</p>
                </a>
                    <a href="#" aria-current="page" className="relative  z-10 inline-flex items-center bg-[#7CC9B5] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" className="relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" className="relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span className="relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" className="relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" className="relative   inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" className="relativem-1    inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                    <a href="#" className="relative    inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <p className="text-sm text-[#408080] ">Next</p>
                      
                    </a>
            </nav>
            </div>
            <FeaturedAuthors />
            <FeaturedPublishers />

        </section>
    )
}