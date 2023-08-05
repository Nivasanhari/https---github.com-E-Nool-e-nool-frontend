import Image from 'next/image'
import React from 'react'
import aboutObject from 'public/assets/LandingPage/about object.png'
import about1 from 'public/assets/LandingPage/about1.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import about2 from 'public/assets/LandingPage/about2.png'
// import LeafBg from 'public/assets/LandingPage/Leaf2.png'


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




            </div>

        </section>
    )
}

export default About


