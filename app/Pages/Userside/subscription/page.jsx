import Image from 'next/image'
import React from 'react'
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import LefeBg from 'public/assets/Lefe1.png'
import pricing from 'public/assets/Pricing.png'
import pricingimg from 'public/assets/pricingimg.png'
import rs from 'public/assets/rs.png'
import img1 from 'public/assets/img1.png'
import Ellipse from 'public/assets/Ellipse.png'
import Lefe from 'public/assets/Lefe2.png'
import Leaf2 from 'public/assets/Leaf2.png'
import tick from 'public/assets/tick.png'


const page = () => {
    return (
        <div>
            <Image className=' relative h-[450px]' src={Aboutbg} />
            <div className=' flex justify-between top-48 absolute '>
                <Image className=' absolute ml-0 w-[65px]' src={Leaf} alt='' />
                <div className=' ml-[350px] h-[200]'>
                    <Image className=' w-[450px] mt-40' src={pricing} alt='pricing-img' />
                    <h1 className=' ml-5 text-[#015464] text-5xl font-extrabold mt-[-20px]'>Subscription</h1>
                </div>
                <div className=' ml-40'>
                    <Image className=' w-28 ml-32  mt-5' src={pricingimg} alt='pricing-img' />
                    <Image className=' absolute ml-[400px] w-28 mt-[-400px]' src={LefeBg} alt='' />
                </div>
            </div>

            <div className=' mt-28 ml-28 bg-white '>
                <div className=' ml-28'>
                    <h1 className=' text-[#015464] font-extrabold text-4xl'>Silver</h1>
                    <p className=" mt-2 text-[14px]  text-[#01adad] font-bold">Low-cost affordable reading to get you started.</p>
                </div>
                <div className=' flex mt-[-50px]'>
                    <div className="w-[350px] h-96 ml-24 lg:mt-16 max-w-sm mb-52">
                        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                            <div className=' text-start'>
                                <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 01</h2>
                                <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                <div className=' flex ml-20 mt-10'>
                                    <Image src={rs} className=' ml-14 ' alt='rs' />
                                    <p className="text-center text-7xl  text-[#14adad] font-bold">5</p>
                                </div>
                                <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl ml-[70px]'>SUBSCRIBR NOW</button>
                                <div className=' flex gap-5 ml-16 mt-10'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[350px] h-96 mt-[50px] ml-10 lg:mt-16 max-w-sm mb-52">
                        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                            <div className=' text-start'>
                                <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 02</h2>
                                <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                <div className=' flex ml-20 mt-10'>
                                    <Image src={rs} className=' ml-14 ' alt='rs' />
                                    <p className="text-center text-7xl  text-[#14adad] font-bold">15</p>
                                </div>
                                <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl ml-[70px]'>SUBSCRIBR NOW</button>
                                <div className=' flex gap-5 ml-16 mt-10'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] h-96 mt-[50px] ml-10 lg:mt-16 max-w-sm mb-52">
                        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                            <div className=' text-start'>
                                <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 03</h2>
                                <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                <div className=' flex ml-20 mt-10'>
                                    <Image src={rs} className=' ml-14 ' alt='rs' />
                                    <p className="text-center text-7xl  text-[#14adad] font-bold">25</p>
                                </div>
                                <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl ml-[70px]'>SUBSCRIBR NOW</button>
                                <div className=' flex gap-5 ml-16 mt-10'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                                <div className=' flex gap-5 ml-16 mt-3'>
                                    <Image src={tick} alt='tick' />
                                    <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image className=' absolute top-[600px] left-[1550px] w-[120px]' src={Leaf2} />
                    <Image className=' absolute top-[700px] left-[1300px] w-[120px]' src={Lefe} alt='' />
                    <Image className=' absolute top-[800px] left-[1380px] w-[350px]' src={img1} alt='' />
                    <Image className=' absolute w-24 left-[1550px] mt-[600px]' src={Ellipse} alt='' />
                </div>
            </div>



        </div>
    )
}

export default page
