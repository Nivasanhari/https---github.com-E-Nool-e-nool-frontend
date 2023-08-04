import Image from 'next/image'
import React from 'react'
import Leaf from 'public/assets/Leaf.png'
import Aboutbg from 'public/assets/aboutbg.png'
import Lefe from 'public/assets/lefe1.png'
import img from 'public/assets/404img.png'
import img1 from 'public/assets/404.png'

const page = () => {
  return (
    <div>
      <div>
        <div className=' mb-[400px]'>
          <Image className='  h-[400px] top-[-83px]' src={Aboutbg} />
          <div className=' flex justify-between top-48 absolute '>
            <Image className='h-[300px] mt-[w-89px] left-[200px]' src={Leaf} alt='' />
            <div className=' ml-[200px]'>
              <Image className=' absolute mt-18 w-[500px]' src={img1} />
              <h1 className=' text-[#015464] mt-40 text-7xl font-extrabold top-[351px] h-[16px]'>Oooops!</h1>
              <h3 className=' ml-3 mt-24 w-[260px] font-semibold text-lg'>We can't seem to find a page you are looking  for</h3>
              <button className=' bg-[#7CC9B5] text-white ml-3 rounded-md p-4 mt-5'>Back to Home</button>
            </div>
            <div className=' ml-[200px] h-[150] '>
              <Image className=' ml-[160px] top-[130px] w-[450px]' src={img} alt='' />
            </div>
          </div>
          <Image className=' absolute left-[1500px] top-32 w-24 ' src={Lefe} alt='' />
        </div>
      </div>
    </div>
  )
}

export default page
