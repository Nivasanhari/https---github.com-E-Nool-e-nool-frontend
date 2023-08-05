import React from 'react'
import Image from 'next/image'
import gettingstarted from 'public/assets/LandingPage/gettingstarted.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import Leaf2 from '@/public/assets/LandingPage/Leaf2.png'
import processflow from 'public/assets/LandingPage/processflow.svg'
import processflowbg from 'public/assets/LandingPage/processflow-bg.png'
import processflowbg1 from 'public/assets/LandingPage/processflow-bg1.png'

const ProcessFlow = () => {
    return (
        <section className="w-full bg-[#015464] process_bg">
            <Image className=" hidden lg:block absolute z-0 left-2 w-16 h-auto mt-28 rotate-180 transform -scale-x-100 " src={Leaf1} alt="" />
            <Image className=" hidden lg:block absolute z-0  right-1 md:w-28 mt-28" src={Leaf2} alt="" />

            <h1 className="font-bold text-[#F1F1F6] text-2xl text-center pt-28">Our Simple Process</h1>

            <Image className="object-cover object-center rounded m-auto" alt="processflow" src={processflow} />
            <div className=" "></div>

            <div className="z-10 mx-auto  justify-between items-center sm:px-16  py-4 ">






                <div className="md:container md:mx-auto flex pt-24 md:flex-row flex-col items-center">

                    <div
                        className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start   md:text-left text-center ">
                        <h1 className="text-4xl md:mt-36  text-[#F1F1F6]">Ready to start Reading! Subscribe Now
                        </h1>
                        <p className=" text-white mt-8 font-medium">Ready to start Reading! Subscribe Now
                        </p>

                        <div className="flex justify-center  pt-10">
                            <button
                                className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get
                                Started</button>

                        </div>
                        <div className="flex justify-center mt-28">


                        </div>
                    </div>


                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                        <Image className="object-cover object-center rounded" alt="processflow" src={gettingstarted} />
                    </div>

                </div>









            </div>

        </section>

    )
}

export default ProcessFlow