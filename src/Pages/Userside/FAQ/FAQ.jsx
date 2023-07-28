import Image from 'next/image'
import React from 'react'
import Leaf from 'public/Leaf.png'
import fqa from 'public/fqa.png'
import FQAbg from 'public/FAQbg.png'
import Aboutbg from 'public/aboutbg.png'
import img1 from 'public/img1.png'
import Ellipse from 'public/Ellipse.png'
import Lefe from 'public/Lefe2.png'
import Leaf2 from 'public/Leaf2.png'
import lefe1 from 'public/lefe1.png'


const FQA = () => {
    return (
        <div>
            <div className=' mb-10'>
                <Image className='  h-[400px] top-[83px]' src={Aboutbg} />
                <div className=' flex justify-between top-48 absolute '>
                    <Image className=' ml-0  h-60 ' src={Leaf} alt='' />
                    <div className=' ml-[100px]'>
                        <Image className=' absolute w-[400px]' src={FQAbg} />
                        <h2 className=' text-[#015464] mt-44 text-3xl font-extrabold top-[351px]  h-[16px]'>Frequently Asked Questions </h2>
                        <h1 className=' text-[#015464] font-extrabold text-xl mt-16'>Welcome to Enool!L</h1>
                        <p className=' text-[#015464] mt-10 text-sm font-medium left-[965px] w-[500px] h-[146px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className=' ml-[50px] h-[250]'>
                        <Image className=' top-[130px] w-[350px]' src={fqa} alt='' />
                    </div> 
                </div>
                    <Image className=' absolute left-[1100px] top-24 w-24 ' src={lefe1} alt=''/>
                <div className=' mt-[180px] ml-[250px]'>
                    <Image className=' absolute left-7 mt-40' src={Ellipse} alt='' />
                    <Image className=' absolute top-[450px] w-[400px] left-[-250px]' src={img1} />
                    <button className=' relative bg-[#015464] opacity-1 text-sm font-medium ml-[-50px] py-14 px-12 rounded-xl text-white '>General <hr className=' ' /></button>
                    <button className=' relative bg-[#408080] opacity-1 text-sm font-medium py-11 px-7 pb-9 pt-14 ml-10 w-[150px] rounded-xl text-white '>SUBSCRIPTION  & ACCOUNT</button>
                    <button className=' relative bg-[#7CC9B5] opacity-1 text-sm font-medium ml-10 py-14 px-12 rounded-xl text-white '>PAYMENT</button>
                </div>
            </div>

            <div className=' ml-[300px] mt-28 '>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>01. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>02. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>03. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>04. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>05. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>06. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>07. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <div className=' relative w-[700px] overflow-hidden'>
                    <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' h-12 w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#015464]'>08. Welcome to Enool!</h1>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#14adad] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                </div>
                <Image className=' absolute top-[800px] left-[1520px] w-[120px]' src={Leaf2}/>
                <Image className=' absolute top-[900px] left-[1150px] w-[120px]' src={Lefe} alt='' />
                <Image className=' absolute top-[1010px] left-[1300px] w-[350px]'  src={img1} alt=''/>
            </div>
        </div>
    )
}

export default FQA
