 import Image from 'next/image'
import React from 'react'
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/Leaf.png'
import about1 from 'public/assets/about1.png'
import about2 from 'public/assets/about2.png'
import LefeBg from 'public/assets/Lefe1.png'
import grp1 from 'public/assets/grp1.png'
import Ellipse from 'public/assets/Ellipse.png'
import img1 from 'public/assets/img1.png'
import Lefe2 from 'public/assets/Lefe2.png'
import grid from 'public/assets/grid.png'
import arrowicon from 'public/assets/arrowicon.png'
import img2 from 'public/assets/img2.png'
import img3 from 'public/assets/img3.png'
import img4 from 'public/assets/img4.png'
import Maskgroup5 from 'public/assets/Mask Group 5.png'
import group from 'public/assets/group.png'
import rectangle2 from 'public/assets/rectangle2.png'
import group2 from 'public/assets/group2.png'
import group3 from 'public/assets/group3.png'

function About() {
    return (
        <div className=''>
            <Image className=' relative h-[600px]' src={Aboutbg} />
            <div className=' flex justify-between top-48 absolute '>
                <Image className=' absolute ml-0 w-[65px]' src={Leaf} alt='' />
                <Image className=' absolute top-14 left-[300px] w-[90px] h-[102px]' src={about2} alt='' />
                <div className=' ml-[350px] h-[200]'>
                    <Image className=' left-56 top-[130px] w-[350px]' src={about1} alt='' />
                </div>
                <div className=' ml-52'>
                    <Image className=' absolute ml-[570px] w-28 mt-0' src={LefeBg} alt='' />
                    <h2 className=' text-[#015464] text-lg font-bold top-[251px] left-[965px] w-[143px] h-[16px]'>WHO WE ARE</h2>
                    <h1 className=' text-[#015464] font-extrabold text-4xl mt-8'>About ENOOL</h1>
                    <p className=' text-[#015464] mt-10 text-sm font-medium left-[965px] w-[500px] h-[146px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    <button className=' bg-[#14adad] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white '>Get Started</button>
                </div>
            </div>
            <div className=' flex'>
                <div>
                    <Image className=' absolute top-[530px] left-[-280px] w-[400px]' src={img1} alt='' />
                    <Image className=' ml-10 mt-48' src={Ellipse} alt='' />
                </div>
                <div className=' flex mt-20 p-0'>
                    <div>
                        <h1 className=' ml-20 font-extrabold text-3xl text-[#015464]'>Our Story</h1>
                        <hr className=' bg-[#14adad] w-[242px] ml-[80px] mt-3 p-0.5 opacity-0.7 rounded-sm' />
                        <p className=' font-medium text-[#015464] mt-8 w-[600px] text-ms h-[80px] ml-20'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    </div>
                    <div className=' w-[650px] '>
                        <Image className=' ml-28' src={grp1} alt='' />
                    </div>
                </div>
            </div>
            <div className=' relative bg-[#015464] h-[500px] object-fill'>
                <div className='  m-0'>
                    <div className=' w-52'>
                        <Image className=' absolute mt-36 left-10 w-28' src={Lefe2} alt='' />
                    </div>
                    <div className=' text-white text-center p-20'>
                        <h1 className=' font-extrabold text-3xl'>Why subscribe for Enool?</h1>
                        <p className=' p-5 text-xs font-light'>Why subscribe for Enool?</p>

                        <div className=' flex justify-center'>
                            <div class="flex flex-col ml-32 h-[243px] rounded-lg border-black shadow-md w-[400px] outline  m-6 overflow-hidden sm:w-52">
                                <Image className=' mt-5 m-auto' src={grid} alt="" class="h-20 m-6" />
                                <h3 className=' text-white mt-0 p-2 '>01.Learn</h3>
                                <p className=' text-xs font-thin p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <div class="flex flex-col ml-24 h-[243px] rounded-lg border-black shadow-md w-[400px] outline  m-6 overflow-hidden sm:w-52">
                                <Image className=' mt-5 m-auto' src={grid} alt="" class="h-20 m-6" />
                                <h3 className=' text-white mt-0 p-2 '>01.Learn</h3>
                                <p className=' text-xs font-thin p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <div class="flex flex-col ml-24 h-[243px] rounded-lg border-black shadow-md w-[400px] outline  m-6 overflow-hidden sm:w-52">
                                <Image className=' mt-5 m-auto' src={grid} alt="" class="h-20 m-6" />
                                <h3 className=' text-white mt-0 p-2 '>01.Learn</h3>
                                <p className=' text-xs font-thin p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <Image className=' w-[563px] absolute top-[-190px] left-[1490px]' src={img1} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white justify-center'>
                <div className=' mt-14 font-medium text-center'>
                    <h1 className=' text-[#015464] font-extrabold text-2xl'>Start your Reading Journey Today!</h1>
                    <p className=' text-[#14adad] text-sm mt-3'>12,000+ Unique Books</p>
                </div>
                <div className=' flex mt-20 justify-center'>
                    <div>
                        <button className=' ml-28 py-8 px-8 rounded-[500px] bg-[#14adad]'><Image className='  ' src={arrowicon} alt='' /></button>
                        <h5 className=' text-[#14adad] text-xs ml-32 p-1 font-semibold'>Log In & Signup</h5>
                    </div>
                    <Image className=' mt-5 ml-20 h-20' src={img2} alt='' />

                    <div>
                        <button className=' ml-28 py-8 px-8 rounded-[500px] bg-[#14adad]'><Image className='  ' src={arrowicon} alt='' /></button>
                        <h5 className=' text-[#14adad] text-xs ml-32 p-1 font-semibold'>Subscribe</h5>
                    </div>
                    <Image className=' ml-20 mt-5 h-20' src={img3} alt='' />

                    <div>
                        <button className=' ml-28 py-8 px-8 rounded-[500px] bg-[#14adad]'><Image className='  ' src={arrowicon} alt='' /></button>
                        <h5 className=' text-[#14adad] text-xs ml-24 p-1 font-semibold'>Browse & Start Reading</h5>
                    </div>
                </div>
            </div>

            <div className=' bg-white mt-20'>
                <div className=' text-center text-[#015464]'>
                    <h1 className=' font-bold text-2xl'>Our Core Value</h1>
                </div>
                <div className=' flex justify-center mt-10'>
                    <div class="flex  flex-col  ml-24 h-[270px] rounded-lg border-white  shadow-md m-6 overflow-hidden sm:w-52">
                        <Image className=' mt-5 ml-14 w-16' src={img4} alt="" class="h-20 m-6" />
                        <h3 className=' text-black mt-0 p-2 font-semibold '>Our Mission</h3>
                        <p className=' text-black text-xs p-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>

                    <div class="flex flex-col ml-24 h-[270px] rounded-lg border-white shadow-md w-[400px]   m-6 overflow-hidden sm:w-52">
                        <Image className=' mt-5 ml-14 w-16' src={img4} alt="" class="h-20 m-6" />
                        <h3 className=' text-black mt-0 p-2 font-semibold '>Our Vission</h3>
                        <p className=' text-black text-xs p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>

                    <div class="flex flex-col ml-24 h-[270px]  rounded-lg border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52">
                        <Image className=' mt-5 ml-14 w-16' src={img4} alt="" class="h-20 m-6" />
                        <h3 className=' text-black mt-0 p-2 font-semibold '>Our Passion</h3>
                        <p className=' text-black text-xs p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>

            <div className=' bg-white mt-20'>
                <div className=' text-center font-medium'>
                    <h1 className=' text-[#015464] text-2xl font-extrabold'>Meet our awesome and Enool Team</h1>
                    <p className=' text-[#14adad] text-sm mt-4'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." <br />
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                </div>
                <div className=' flex justify-center'>
                    <div class="flex flex-col ml-32 h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52">
                        <Image className=' w-40 m-auto mt-5' src={Maskgroup5} alt="" />
                        <h4 className=' mb-1 text-center font-extrabold text-[#015464]'>Shalini</h4>
                        <p className=' text-sm text-[#14adad] text-center mb-5'>Director</p>
                    </div>

                    <div class="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52">
                        <Image className=' w-40 m-auto mt-5' src={Maskgroup5} alt="" />
                        <h4 className=' mb-1 text-center font-extrabold text-[#015464]'>Shalini</h4>
                        <p className=' text-sm text-[#14adad] text-center mb-5'>Director</p>
                    </div>

                    <div class="flex flex-col h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52">
                        <Image className=' w-40 m-auto mt-5' src={Maskgroup5} alt="" />
                        <h4 className=' mb-1 text-center font-extrabold text-[#015464]'>Shalini</h4>
                        <p className=' text-sm text-[#14adad] text-center mb-5'>Director</p>
                    </div>

                    <div class="flex flex-col h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52">
                        <Image className=' w-40 m-auto mt-5' src={Maskgroup5} alt="" />
                        <h4 className=' mb-1 text-center font-extrabold text-[#015464]'>Shalini</h4>
                        <p className=' text-sm text-[#14adad] text-center mb-5'>Director</p>
                    </div>
                </div>
            </div>

            <div className=' bg-white flex mt-20 mb-48 pl-24'>
                <div className=' mt-40 ml-32 pl-10'>
                    <h1 className=' text-[#015464] text-3xl text-start font-bold'>Learn new skills when <br /> and where you Reading.</h1>
                    <p className=' text-[#14adad] text-xs text-start pt-3'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                        "There is no one who loves pain itself, who seeks after it and wants</p>
                    <button className=' bg-[#015464] opacity-1 items-start mt-8 p-2 px-5 rounded text-white '>Subsribe Now</button>
                </div>
                <div className=' pl-32 ml-32 '>
                    <Image className=' absolute h-[399px] w-[423px] ' src={rectangle2} />
                    <Image className=' ml-32 absolute left-[725px] w-[490px] mt-[65px]' src={group} />
                </div>
            </div>


            <div className=' bg-white flex mt-20 mb-48 '>
                <div className=' pl-32 ml-32 '>
                    <Image className=' relative h-[399px] w-[423px] ' src={group2} />
                </div>
                <div className=' pl-32 ml-20 items-start'>
                    <h1 className=' text-[#015464] font-extrabold text-3xl ml-4 mt-28'>Become an Publisher</h1>
                    <p className=' p-3 text-[#14adad] text-sm'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                        "There is no one who loves pain itself, who seeks after it and wants</p>
                    <button className=' bg-[#015464] opacity-1 items-start mt-8 ml-5 p-2 px-5 rounded text-white '>Subsribe Now</button>
                </div>
            </div>

            <div className=' bg-white flex mt-20 mb-32 pl-24'>
                <div className=' mt-40 ml-32 pl-10'>
                    <h1 className=' text-[#015464] text-3xl text-start font-bold'>Become an Author.</h1>
                    <p className=' text-[#14adad] text-xs text-start pt-3'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                        "There is no one who loves pain itself, who seeks after it and wants</p>
                    <button className=' bg-[#015464] opacity-1 items-start mt-8 p-2 px-5 rounded text-white '>Subsribe Now</button>
                </div>
                <div className=' pl-32 ml-32 '>
                    <Image className=' absolute h-[399px] w-[423px] ' src={group3} />
                </div>
            </div>

            <div className=' bg-white items-center mb-28'>
                <div className=' text-center text-3xl'>
                    <h1 className=' font-extrabold text-[#015464]'>Enool by the Numbers</h1>
                </div>
                <div className=' flex mt-20 ml-[400px]'>
                    <div className=' text-center '>
                        <h3 className=' text-[#14adad] text-sm'>Readers</h3>
                        <h1 className=' text-6xl font-bold text-[#015464] '>300k</h1>
                    </div>
                    <div className=' ml-52 text-center'>
                        <h3 className=' text-[#14adad] text-sm'>Publisher</h3>
                        <h1 className=' text-6xl font-bold text-[#015464] '>700k</h1>
                    </div>
                    <div className=' ml-52 text-center'>
                        <h3 className=' text-[#14adad] text-sm'>Books</h3>
                        <h1 className=' text-6xl font-bold text-[#015464] '>20k</h1>
                    </div>
                </div>
            </div>

            <div className=' mb-20 mt-32 bg-white font-medium'>
                <div className=' mt-9 text-center'>
                    <h3 className=' text-[#14adad] text-sm'>Newsletter</h3>
                    <h2 className=' text-[#015464] mt-4 font-extrabold text-3xl'> Do You wan to get splecial News?</h2>
                </div>
                <div className=' ml-[650px]'>
                    <input className=' bg-gray-200 p-2 rounded px-4 ' type="email" placeholder='Drop your Email' />
                    <button className=' bg-[#14adad] opacity-1 items-start mt-8 ml-4 p-2 px-5 rounded-2xl text-white '>Subsribe Now</button>
                </div>
            </div>


        </div>


    )
}

export default About

