'use client'
import React, { forwardRef, useRef, useState } from 'react';
import Image from 'next/image';

import backButton from 'public/icons/backButton.svg';
import nextbutton from 'public/icons/next.svg'; 
import previousbutton from 'public/icons/previous.svg';
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
import { Range } from 'react-range';


export default function page()  {
  const flipbook = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(0);

  const flipBack = React.useCallback(() => {
    const pageFlipObj = flipbook.current.pageFlip();
    if (pageFlipObj?.getCurrentPageIndex() === 0) {
      pageFlipObj.flip(pageFlipObj?.getPageCount() - 1);
    } else {
      pageFlipObj.flipPrev();
    }
  }, [flipbook]);

  const flipForward = React.useCallback(() => {
    const pageFlipObj = flipbook.current.pageFlip();
    if (
      pageFlipObj?.getCurrentPageIndex() + 2 ===
      pageFlipObj?.getPageCount()
    ) {
      pageFlipObj.flip(0);
    } else {
      pageFlipObj.flipNext();
    }
  }, [flipbook]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setProgress(page / 5); // Adjust the denominator based on the total number of pages
  };

  const handleSliderChange = (values) => {
    const newProgress = values[0];
    setProgress(newProgress);
    const newPage = Math.round(newProgress * 5); // Adjust based on the total number of pages

    if (flipbook.current) {
      const pageFlipObj = flipbook.current.pageFlip();
      const currentPageIndex = pageFlipObj.getCurrentPageIndex();

      if (newPage < currentPageIndex) {
        for (let i = currentPageIndex; i > newPage; i--) {
          pageFlipObj.flipPrev();
        }
      } else if (newPage > currentPageIndex) {
        for (let i = currentPageIndex; i < newPage; i++) {
          pageFlipObj.flipNext();
        }
      }
    }
  };




  return (
    <section className="bg-white border-gray-200  w-auto mx-auto  ">

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
        <button
          style={{ width: "fit-content", margin: "8px auto" }}
          onClick={flipBack}
        >
          
          <Image src={previousbutton} className="absolute left-28 bottom-96 w-10 h-10" alt='' />

        </button>
        <button
          style={{ width: "fit-content", margin: "8px auto" }}
          onClick={flipForward}
        >
          <Image src={ nextbutton} className="absolute right-28 bottom-96 w-10 h-10" alt='' />
        </button>
        <div className="flipbook pr-10">
        <PageFlip width={500} height={710}
          ref={flipbook}
   
          showCover={true}
          drawShadow={false}
          flippingTime={750}
            onPageChange={handlePageChange}
            >
          <div><Image src={book} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          <div><Image src={book1} className="" alt='' /></div>
          {/* Add more pages as needed */}
        </PageFlip>
        
      </div>
        <div className="slider-container pt-5 mr-80">
          <Range
            step={1 / 5}
            min={0}
            max={1}
            values={[progress]}
            onChange={handleSliderChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  backgroundColor: '#7CC9B5',
                  borderRadius: '4px',
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '16px',
                  width: '16px',
                  backgroundColor: '#015464',
                  borderRadius: '50%',
                }}
              />
            )}
          />
        </div>
      </div>
    </section>

  )
}




