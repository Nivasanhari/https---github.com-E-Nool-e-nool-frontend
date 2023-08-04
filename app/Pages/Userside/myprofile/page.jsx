import React from 'react'
import bgimg from 'public/assets/bg1.png'
import Image from 'next/image'
import Staricon from '@/app/Components/staricon/Staricon'
import Lefe from 'public/assets/Lefe1.png'
import Profile from 'public/assets/profile.png'
import book from 'public/assets/book.png'
import img1 from 'public/assets/img1.png'



const page = () => {
    return (
        <div className='  top-[-500px] rounded-3xl '>
            {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
            <div className=' pt-10 pb-8 ml-32'>
                <div className=' flex mt-40'>
                    <Image className=' ml-[200px] bg-[#01adad] rounded-full' src={Profile} alt='Profile-img' />
                    <div className=' ml-20 '>
                        <h3 className=' text-[#015464] text-3xl font-extrabold  '>Display Name</h3>
                        <p className=' mt-3 text-[#01adad] text-sm'>@UserName</p>
                        <div className=' mt-5'>
                            <button className=' bg-[#145464] p-3 px-4 text-white rounded-xl'>Edit Profile</button>
                            <button className=' ml-8 bg-[#01adad] p-3 px-4 text-white rounded-xl'>Share Profile</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' mt-8'>
                <hr className=' w-[1660px] bg-[#14adad] text-sm bg-opacity-40 p-[1px]' />
                <button className=' mt-4 mb-4 ml-64 text-[#015464] text-sm font-bold'>My List</button>
                <hr className=' absolute w-10 p-1 bg-[#015464] mt-[-3px]  ml-64' />
                <button className=' ml-10 text-[#015464] text-sm font-bold'>Currently Reading</button>
                <hr className=' w-[1660px] bg-[#14adad] bg-opacity-40 p-[1px]' />
            </div>
                
            <div className=' mb-[100px] mt-10 ml-64'>
                <Image className=' absolute top-[830px] ml-[-440px] w-[350px]' src={img1} alt='' />
                <div className=' flex '>
                    <Image className=' mt-16 w-44' src={book} alt='book-img' />
                    <div className=' mt-28 ml-16'>
                        <h2 className=' text-[#145464] text-2xl font-bold'>King of Battle and Blood</h2>
                        <Staricon />
                        <p className=' text-[#14adad] text-sm mt-3'>by Scarlett St. Clair</p>
                        <p className=' text-[13px] mt-3 text-[#145464] font-bold w-[700px]'>Describes what being a foster mom is really like, the effects of foster care on the whole family, and how the foster care system fails severely abused children.</p>
                        <div className=' mt-8'>
                            <button className=' bg-[#145464] rounded-xl text-white px-8 py-2'>Read</button>
                            <button className=' bg-[#7CC9B5] rounded-xl text-white px-6 py-2 ml-10'>Write Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
