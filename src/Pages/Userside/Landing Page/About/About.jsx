import Image from 'next/image'
import React from 'react'
import Aboutbg from 'public/aboutbg.png'
import Leaf from 'public/Leaf.png'
import about1 from 'public/about1.png'
import about2 from 'public/about2.png'
import LeafBg from 'public/Leaf-Bg.png'
import grp1 from 'public/grp1.png'
import Ellipse from 'public/Ellipse.png'
import img1 from 'public/img1.png'
import Rectangle from 'public/Rectangle.png'

const About = () => {
    return (
        <div className=''>
            <Image className=' relative h-[600px]' src={Aboutbg} />
            <div className=' flex justify-between top-48 absolute w'>
                <Image className=' absolute ml-0 mt-10 w-[50px]' src={Leaf} alt='' />
                <Image className=' absolute top-14 left-[165px] w-[90px] h-[102px]' src={about2} alt='' />
                <div className=' ml-52 h-[200]'>
                    <Image className=' left-56 top-[130px] w-[350px]' src={about1} alt='' />
                </div>
                <div className=' ml-20'>
                    <Image className=' absolute ml-[570px] w-28 mt-0' src={LeafBg} alt='' />
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

                    <div className=' w-[550px]'>
                        <Image src={grp1} alt='' />
                    </div>
                </div>
            </div>

            <div className=' m-0 p-o'>
                <div className=' absoluteN'>
                    <Image src={Rectangle} alt=''/>
                </div>
            </div>
        </div>


    )
}

export default About


