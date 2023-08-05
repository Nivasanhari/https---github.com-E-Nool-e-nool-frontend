import Image from 'next/image'
import React from 'react'
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import imgbg from 'public/assets/contact-bg.png'
import Lefe from 'public/assets/Lefe1.png'
import contactimg from "public/assets/contactimg.png"
import leaf2 from 'public/assets/leaf2.png'
import sideimg from 'public/assets/img1.png'
import circle from 'public/assets/Ellipse.png'
import call from 'public/icons/call.png'
import emailicon from 'public/icons/email.png'
import locationicon from 'public/icons/location.png'

const page = () => {
    return (
        <div className='  bg-white'>
            <Image className=' relative h-[400px]' src={Aboutbg} />
            <Image className=' absolute ml-0 top-[100px] w-[45px]' src={Leaf} alt='' />
            <div className=' flex justify-between top-48 absolute '>
                <h1 className=' absolute ml-[700px] mt-16 text-[#015464] text-3xl font-extrabold'>Have Any Questions</h1>
                <Image className=' ml-[500px] w-[650px]' src={imgbg} alt='imgbg' />
                <Image className=' absolute ml-[1500px] w-24' src={Lefe} alt='' />
            </div>
            <div className=' top-20 ml-[500px] mt-9 mb-24' >
                <Image className=' absolute w-[350px] left-[-200px] mt-48' src={sideimg} alt='sideimg' />
                <Image className=' absolute ml-0 left-24 w-28 mt-60' src={leaf2} alt='leaf2' />
                <Image className=' absolute left-16 mt-[500px]' src={circle} alt='circle' />
                <div className=' bg-[#015464] flex rounded-3xl h-[450px] w-[700px]'>
                    <div className=''>
                        <Image className=' mt-20 ml-20 w-[300px]' src={contactimg} alt='contactimg' />
                    </div>
                    <form className=' mt-14 gap-4 flex-col  flex'>
                        <input className=' outline-0 p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='your name' />
                        <input className=' outline-0 p-3 pr-9 text-[11px] rounded text-[#14adad]' type='text' placeholder='email ID' />
                        <input className=' outline-0 p-3 pr-9 text-[11px] rounded text-[#14adad]' type='text' placeholder='Subject' />
                        <textarea className=' outline-0 rounded text-[11px]' type='type' placeholder='message' cols="20" rows="5"></textarea>
                        <button className=' text-white bg-[#7CC9B5] text-[11px] rounded-xl mt-5 p-2'>send Message</button>
                    </form>
                </div>
            </div>

            <div className=' mt-44 ml-[150px] flex'>
                <div className="w-72 h-96 mt-[50px] ml-48 lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#015464] rounded-md p-2' src={call} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Call Us</h2>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                        </div>
                    </div>
                </div>

                <div className="w-72 h-96 mt-[50px] ml-14 lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#408080] rounded-md p-2' src={emailicon} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Call Us</h2>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                        </div>
                    </div>
                </div>
                <div className="w-72 h-96 mt-[50px] ml-14 lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#7CC9B5] rounded-md p-2' src={locationicon} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Call Us</h2>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                            <p className="text-center  text-[#14adad] font-bold">+91 1234567890</p>
                        </div>
                    </div>
                    <Image className=' absolute ml-[1400px] top-[1070px] left-24 w-28 ' src={leaf2} alt='leaf2' />
                </div>
            </div>
        </div>
    )
}

export default page
