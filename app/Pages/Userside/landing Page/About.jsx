import Image from 'next/image'
import React from 'react'
import aboutObject from 'public/assets/LandingPage/about object.png'
import about1 from 'public/assets/LandingPage/about1.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import about2 from 'public/assets/LandingPage/about2.png'
// import LeafBg from 'public/assets/LandingPage/Leaf-Bg.png'


const About = () => {
    return (
        <section className="relativew-full">
        {/* <Image className="   top-20 -right-10 w-16 " src={Leaf1} alt="" /> */}
            {/* <Image className=" absolute z-0 -top-[500px] -right-52 " src={HeroBg} alt="" /> */}
            <div className="z-10  mx-auto  justify-between items-center sm:px-16  py-4 ">
                <div className="hidden md:block  ">
                                <div className="md:container md:mx-auto flex  pt-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                            <Image className=' left-56 top-[130px] w-[90%]' src={about1} alt='' />
                        </div>
                            <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start   md:text-left sm:text-center ">
                            {/* <Image className=' absolute ml-[570px] w-28 mt-0' src={LeafBg} alt='' /> */}
                            
                            <h2 className=' text-[#015464] text-lg  top-[251px] left-[965px] w-[143px] h-[16px]'>WHO WE ARE</h2>
                            <h1 className=' text-[#015464] font-extrabold text-4xl mt-8'>About ENOOL</h1>
                            <p className=' text-[#015464] mt-10 text-sm font-medium left-[965px] w-full  '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                            <button className=' bg-[#14adad] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white '>Get Started</button>
                                    <div className="flex justify-center mt-28">


                                    </div>
                                </div>

                                

                            </div>

                      
                </div>
            

                {/* Slider For Medium screen
                <div className="md:hidden md:container md:mx-auto   flex  lg:px-5 pt-24 md:flex-row flex-col items-center ">

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

                </div> */}

            </div>

        </section>
    )
}

export default About


