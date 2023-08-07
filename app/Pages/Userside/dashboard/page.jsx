import React from 'react'
import bgimg from 'public/assets/bg1.png'
import Image from 'next/image'
import Staricon from '@/app/Components/staricon/Staricon'
import Lefe from 'public/assets/Lefe1.png'
import dash1 from 'public/assets/Dashboard/dashimg.png'
import dash2 from 'public/assets/Dashboard/dashimg1.png'
import dash3 from 'public/assets/Dashboard/dashimg2.png'
import dash4 from 'public/assets/Dashboard/dashimg3.png'
import dash5 from 'public/assets/Dashboard/dashimg4.png'
import dash6 from 'public/assets/Dashboard/dashimg5.png'
import book from 'public/assets/book.png'



const page = () => {
  return (
    <div className='  top-[-500px] rounded-3xl '>
      {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
      <div className=' pt-10 pb-8'>
        <div className=''>
          <h3 className=' ml-64 text-[#015464] text-3xl font-extrabold mt-32 '>Welcome, User Name!</h3>
          <p className=' ml-64 mt-2 text-[#14adad]'>Quicklinks</p>
        </div>
        <Image className=' absolute left-[1450px] mt-[-200px] w-24' src={Lefe} alt='Lefe-img' />
      </div>



      <div className="grid grid-cols-3 grid-rows-2 gap-16  justify-center items-start ml-40">
        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl'>
          <Image className=' bg-[#015464] bg-cover py-3 px-2 w-auto rounded-xl' src={dash1} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>My Library</button>
        </div>

        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl'>
          <Image className=' bg-[#015464] bg-cover py-[18px] px-3 w-auto rounded-xl' src={dash2} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>Purchase History</button>
        </div>

        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl'>
          <Image className=' bg-[#015464] bg-cover w-auto py-7 px-2 rounded-xl' src={dash3} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>Payment Info</button>
        </div>

        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl'>
          <Image className=' bg-[#015464] bg-cover w-auto py-[18px] px-3 rounded-xl' src={dash4} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>Terms of Service</button>
        </div>

        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl'>
          <Image className=' bg-[#015464] bg-cover w-auto py-4 px-3 rounded-xl' src={dash5} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>Edit Profile</button>
        </div>

        <div className=' flex  items-center bg-[#7CC9B5] w-56 rounded-xl ml-0'>
          <Image className=' bg-[#015464] bg-cover w-auto py-4 px-3 rounded-xl' src={dash6} alt='dash1-img' />
          <button className=' text-white p-6 rounded-xl font-bold'>Subscription</button>
        </div>
      </div>
      <Image className=' absolute mt-[100px] w-24' src={Lefe} alt='Lefe-img' />

      <div className=' mt-40 ml-60 '>
        <h1 className=' text-[#015464] text-xl font-extrabold'>Activities</h1>
        <div className=' bg-white shadow-lg  rounded-2xl p-10 mr-40'>
          <div className=''>
            <div className=' flex mt-8 gap-5 '>
              <button className=' text-lg bg-[#14adad] text-white p-2 rounded-full'>All</button>
              <button className=' text-lg text-[#145464]'>Subscription</button>
              <button className=' text-lg text-[#145464]'>Downloads</button>
            </div>
              <div className=' flex '>
                <div className=' flex'>
                  <Image className=' w-40 mt-10' src={book} alt='book-img' />
                  <div className=' mt-20 ml-10'>
                    <button className=' bg-[#7CC9B5] p-2 text-white rounded-2xl '>Sunscribed To</button>
                    <h2 className=' text-[#145464] text-xl mt-4 font-bold'>King of Battle and Blood</h2>
                    <p className=' text-sm mt-2 text-[#14adad]'>by Scarlett St. Clair</p>
                    <p className=' text-[#145464] font-bold text-sm mt-5 font'>May 21,2023</p>
                  </div>
                </div>

                <div className=' flex ml-14'>
                  <Image className=' w-40 mt-10' src={book} alt='book-img' />
                  <div className=' mt-20 ml-10'>
                    <button className=' bg-[#7CC9B5] p-2 text-white rounded-2xl '>Sunscribed To</button>
                    <h2 className=' text-[#145464] text-xl mt-4 font-bold'>King of Battle and Blood</h2>
                    <p className=' text-sm mt-2 text-[#14adad]'>by Scarlett St. Clair</p>
                    <p className=' text-[#145464] font-bold text-sm mt-5 font'>May 21,2023</p>
                  </div>
                </div>
              </div>

              <div className=' flex '>
                <div className=' flex'>
                  <Image className=' w-40 mt-10' src={book} alt='book-img' />
                  <div className=' mt-20 ml-10'>
                    <button className=' bg-[#7CC9B5] p-2 text-white rounded-2xl '>Sunscribed To</button>
                    <h2 className=' text-[#145464] text-xl mt-4 font-bold'>King of Battle and Blood</h2>
                    <p className=' text-sm mt-2 text-[#14adad]'>by Scarlett St. Clair</p>
                    <p className=' text-[#145464] font-bold text-sm mt-5 font'>May 21,2023</p>
                  </div>
                </div>

                <div className=' flex ml-14'>
                  <Image className=' w-40 mt-10' src={book} alt='book-img' />
                  <div className=' mt-20 ml-10'>
                    <button className=' bg-[#7CC9B5] p-2 text-white rounded-2xl '>Sunscribed To</button>
                    <h2 className=' text-[#145464] text-xl mt-4 font-bold'>King of Battle and Blood</h2>
                    <p className=' text-sm mt-2 text-[#14adad]'>by Scarlett St. Clair</p>
                    <p className=' text-[#145464] font-bold text-sm mt-5 font'>May 21,2023</p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

      <div className=' mb-[100px] mt-28 ml-64'>
        <h2 className=' text-[#145464] font-extrabold text-3xl'>Currently Reading</h2>
        <div className=' flex '>
          <Image className=' mt-16 w-44' src={book} alt='book-img' />
          <div className=' mt-28 ml-16'>
            <h2 className=' text-[#145464] text-2xl font-bold'>King of Battle and Blood</h2>
            <Staricon />
            <p className=' text-[#14adad] text-sm mt-3'>by Scarlett St. Clair</p>
            <p className=' text-[13px] mt-3 text-[#145464] font-bold max-w-md'>Describes what being a foster mom is really like, the effects of foster care on the whole family, and how the foster care system fails severely abused children.</p>
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
