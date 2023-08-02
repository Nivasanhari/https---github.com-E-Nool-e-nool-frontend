import React from 'react'
import bg from "public/assets/bg.png"
import Image from 'next/image'
import lefe1 from 'public/assets/Lefe1.png'
import Staricon from '@/app/Pages/Userside/Feedback/Staricon'


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

const page = () => {

  const star = Array(5).fill(0)
  return (
    <div className=' mb-20'>
      <div>
        <Image className=' absolute rotate-12 mt-[-120px] ml-60 h-[1578px] ' src={bg} alt='feedback-bg-img' />
        <div className=' relative left-44  flex mt-14'>
          <h1 className=' ml-64 mt-20 text-3xl font-extrabold w-[480px] text-[#015464] '>Thank You For Subscribing! Write Your Feedback!</h1>
          <Image className=' absolute w-20 left-[900px]' src={lefe1} alt='lefe1-img' />
        </div>
        <div className=' bg-[#7CC9B5] rounded-2xl h-[500px] ml-60 mt-20  w-[800px]'>
          <div className=' ml-12 text-white '>
            <h3 className=' mb-4 mt-3'>Your email address will not be published. Required fields are marked <span className=' text-red-500'>*</span> </h3>
            <div className=' flex gap-2'>
              <h3 className=' mb-5'>your rating <span className=' text-red-500'>*</span> </h3>
              <Staricon />
            </div>
            <h3>Your Review <span className=' text-red-500'>*</span> </h3>
            <textarea className=' outline-0 rounded text-[11px] mb-3' type='type' cols="80" rows="9"></textarea>
            <div className=' flex gap-3 mb-5'>
              <input type='checkbox' />
              <h3>I agree with the term and condition.</h3>
            </div>
            <form className=' flex gap-16 mb-5'>
              <div className=' mb-2'>
                <h3>Name <span className=' text-red-500'>*</span>  </h3>
                <input className=' outline-0  p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='Name' />
              </div>
              <div>
                <h3>Email <span className=' text-red-500'>*</span>  </h3>
                <input className=' outline-0 p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='Email' />
              </div>
            </form>
            <div className=' flex gap-3 mb-5'>
              <input type='checkbox' />
              <h3>I agree with the term and condition.</h3>
            </div>
            <button className=' text-sm p-1 rounded-xl bg-[#015464] px-5'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default page
