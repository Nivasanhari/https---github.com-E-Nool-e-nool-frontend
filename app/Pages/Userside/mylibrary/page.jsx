"use client"
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import Addbook from '@/app/Components/addBook/page'
import bgimg from 'public/assets/bg1.png'
import book from 'public/assets/book.png'
import Staricon from '@/app/Components/staricon/Staricon'
import Lefe from 'public/assets/Lefe1.png'
import img1 from 'public/assets/img1.png'
import Add from 'public/assets/Add.png'

const page = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <div className='  top-[-500px] rounded-3xl '>
                <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' />
                <div className=' pt-10 pb-8'>
                    <div className=''>
                        <h3 className=' ml-64 text-[#015464] text-3xl font-extrabold mt-32 '>My Library</h3>
                    </div>
                    <div className=' mt-8'>
                        <hr className=' w-[1660px] bg-[#14adad] bg-opacity-40 p-[1px]' />
                        <button className=' mt-4 mb-4 ml-64 text-[#015464] text-sm font-semibold'>Current Reading</button>
                        <hr className=' absolute w-24 p-1 bg-[#015464] mt-[-2]  ml-64' />
                        <hr className=' w-[1660px] bg-[#14adad] bg-opacity-40 p-[1px]' />
                    </div>
                </div>

                <div className=' mt-10 ml-[300px] gap-10 flex'>
                    <Image className=' absolute top-[530px] mt-52 w-[400px] left-[-200px] ' src={img1} />
                    <div className=''>
                        <Image className=' w-44' src={book} alt='book-img' />
                        <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                        <Staricon />
                        <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                        <p className=' text-xs mt-2 text-[#14adad]'>Reas 47%</p>
                        <button className=' bg-[#015464] p-2 text-white rounded px-3 mt-4'>Continue Reading</button>
                    </div>

                    <div className=''>
                        <Image className=' w-44' src={book} alt='book-img' />
                        <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                        <Staricon />
                        <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                        <p className=' text-xs mt-2 text-[#14adad]'>Reas 47%</p>
                        <button className=' bg-[#015464] p-2 text-white rounded px-3 mt-4'>Continue Reading</button>
                    </div>

                    <div className=''>
                        <Image className=' w-44' src={book} alt='book-img' />
                        <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                        <Staricon />
                        <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                        <p className=' text-xs mt-2 text-[#14adad]'>Reas 47%</p>
                        <button className=' bg-[#015464] p-2 text-white rounded px-3 mt-4'>Continue Reading</button>
                    </div>

                    <div className=''>
                        <Image className=' w-44' src={book} alt='book-img' />
                        <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                        <Staricon />
                        <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                        <p className=' text-xs mt-2 text-[#14adad]'>Reas 47%</p>
                        <button className=' bg-[#015464] p-2 text-white rounded px-3 mt-4'>Continue Reading</button>
                    </div>

                    <div className=''>
                        <Image className=' w-44' src={book} alt='book-img' />
                        <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                        <Staricon />
                        <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                        <p className=' text-xs mt-2 text-[#14adad]'>Reas 47%</p>
                        <button className=' bg-[#015464] p-2 text-white rounded px-3 mt-4'>Continue Reading</button>
                    </div>
                    <Image className=' absolute left-[1500px] w-32' src={Lefe} alt='Lefe-img' />
                </div>

                <div>
                    <div className=' mt-8'>
                        <div className=' mt-8'>
                            <hr className=' w-[1660px] bg-[#14adad] text-sm bg-opacity-40 p-[1px]' />
                            <button className=' mt-4 mb-4 ml-64 text-[#015464] text-sm font-bold'>Current Reading</button>
                            <hr className=' absolute w-24 p-1 bg-[#015464] mt-[-2]  ml-64' />
                            <btton className=' ml-10 text-[#015464] text-sm font-bold'>My Booksshelves</btton>
                            <hr className=' w-[1660px] bg-[#14adad] bg-opacity-40 p-[1px]' />
                        </div>
                        <div className=' mt-20 ml-[300px] gap-10 flex'>
                            <Image className=' absolute top-[530px] mt-52 w-[400px] left-[-200px] ' src={img1} />
                            <div className=''>
                                <Image className=' w-44' src={book} alt='book-img' />
                                <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                                <Staricon />
                                <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                            </div>

                            <div className=''>
                                <Image className=' w-44' src={book} alt='book-img' />
                                <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                                <Staricon />
                                <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                            </div>

                            <div className=''>
                                <Image className=' w-44' src={book} alt='book-img' />
                                <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                                <Staricon />
                                <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                            </div>

                            <div className=''>
                                <Image className=' w-44' src={book} alt='book-img' />
                                <h3 className=' text-sm mt-2 text-[#015464] font-bold'>King of Battle and Blood</h3>
                                <Staricon />
                                <p className=' text-xs mt-2 text-[#14adad]'>by Scarlett St.Clair</p>
                            </div>

                            <div className=''>
                                <Image className=' w-44' src={Add} alt='Add-img' />
                                <button className=' bg-[#015464] py-2 px-8 mt-10 ml-7 rounded text-white' onClick={() => setShowModal(true)}>+Add New</button>
                            </div>
                            <Image className=' absolute left-[100px] mt-[200px] w-32' src={Lefe} alt='Lefe-img' />
                        </div>
                    </div>
                </div>
            </div>
            <Addbook isVisivle={showModal} onClick={() => setShowModal(false)}/>
        </Fragment>
    )
}

export default page
