'use client'
import Image from 'next/image'
import React from 'react'
import bgimg from 'public/assets/bg1.png'
import downarrow from 'public/assets/downarrow.png'
import Book from 'public/assets/book.png'

const page = () => {
    return (
        <div className='  ml-28 top-[-500px] rounded-3xl mb-[800px]'>
            {/* <Image className=' absolute ml-72' src={bgimg} alt='bgimg' /> */}
            <div className=' ml-10 pt-10 pb-8'>
                <div className=''>
                    <h3 className=' text-[#015464] text-3xl font-extrabold mt-32 ml-20'>Subscription</h3>
                    <div className=' ml-20 flex gap-20 mt-6 bg-gray-500 w-[200px] bg-opacity-30 px-2 py-2 rounded'>
                        <h2 className=' text-[#015464] font-semibold' >Show : All</h2>
                        <button className=''>
                            <Image src={downarrow} alt='downarrow' /></button>
                    </div>
                </div>

                {/* <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Book Cover</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Type</th>
                            <th>Data Purchased</th>
                            <th>Author</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table> */}

                <div className="grid grid-cols-7 grid-rows-3 gap-3 justify-center items-center mt-9">
                    <div className=' text-[#015464] font-extrabold text-opacity-80'  >Book Cover</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >Title</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >Author</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >Type</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >Data Purchased</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >renewal Date</div>
                    <div className=' text-[#015464] font-extrabold text-opacity-80' >status</div>
                    <div ><Image className=' w-14' src={Book} alt='Book-img'/></div>
                    <div className=' text-[#015464] font-extrabold' >King of Battle and Blood</div>
                    <div className=' text-[#707070] font-semibold text-sm' >Scarlett St. Clair</div>
                    <div className=' text-[#015464] font-bold' >Ebook</div>
                    <div className=' text-[#015464] font-bold'  >01-05-2023</div>
                    <div className=' text-[#015464] font-bold'   >01-05-2023</div>
                    <div >
                        <button className=' mt- text-white bg-green-500 p-2 rounded-3xl'>sucess</button>
                    </div>
                    <div ><Image className=' w-14' src={Book} alt='Book-img'/></div>
                    <div className=' text-[#015464] font-extrabold' >King of Battle and Blood</div>
                    <div className=' text-[#707070] font-semibold text-sm' >Scarlett St. Clair</div>
                    <div className=' text-[#015464] font-bold' >Ebook</div>
                    <div className=' text-[#015464] font-bold'  >01-05-2023</div>
                    <div className=' text-[#015464] font-bold'  >01-05-2023</div>
                    <div >
                        <button className=' justify-center text-white bg-green-500 p-2 rounded-3xl'>Sucess</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
