'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import backButton from 'public/icons/backButton.svg';
import preferences from 'public/icons/preferences.svg';
import fontpreferences from 'public/icons/fontpreferences.svg';
import bookmark from 'public/icons/bookmark.svg';
import book from 'public/assets/Flipbook/book.png';
import book1 from 'public/assets/Flipbook/Book1-01.png';
import book2 from 'public/assets/Flipbook/Book1-02.png';
import searchbook from 'public/icons/searchbook.svg';
import moreoption from 'public/icons/moreoption.svg';
import fullscreen from 'public/icons/fullscreen.svg';
import PageFlip from 'react-pageflip';
const page = () => {

  return (
    <section className="bg-white border-gray-200 dark:bg-gray-900 w-auto mx-auto  ">

      <div className="mx-20 my-10 p-4  pt-10  pl-96 rounded-lg bg-[#7CC9B5]/30 items-center" >
        <div className="max-w-screen-xl flex mb-10 pr-44 flex-wrap flex-row items-center justify-between mx-auto ">
          <div className="flex items-center space-x-6 ">
            <button className=""><Image src={backButton} className="w-4 h-4" alt='' /></button>
            <button><Image src={preferences} className="w-4 h-4" alt='' /></button>
          </div>


          <div className="hidden w-full md:block md:w-96  ">
            <ul className="font-medium flex flex-col p-4 md:p-0  border b rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <button><Image src={fontpreferences} className="w-4 h-4" alt='' /></button>
              </li>
              <li>
                <button><Image src={bookmark} className="w-4 h-4" alt='' /></button>         </li>
              <li>
                <button><Image src={moreoption} className="w-4 h-4" alt='' /></button>         </li>
              <li>
                <button><Image src={searchbook} className="w-4 h-4" alt='' /></button>         </li>
              <li>
                <button><Image src={fullscreen} className="w-4 h-4" alt='' /></button>         </li>
            </ul>
          </div>

        </div>

        <PageFlip width={500} height={710}>
          <div><Image src={book} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          {/* Add more pages as needed */}
        </PageFlip>
      </div>
    </section>

  )
}

export default page


