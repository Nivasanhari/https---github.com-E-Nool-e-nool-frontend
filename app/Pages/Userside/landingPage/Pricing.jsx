import React from 'react'
import Image from 'next/image'
import pricing1 from 'public/assets/LandingPage/pricing1.png'
import arrow from 'public/assets/LandingPage/arrow.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
export default function Pricing() {


  return (
      <section className=" w-full h-screen mt-20 md:h-full md:mb-96 pricing_bg ">
             
          <Image className="  absolute w-16 right-0 mt-20 transform -scale-x-100" src={Leaf1} alt="" />
          <div className="max-w-md mx-auto  pt-10  text-center">
              <h1 className="text-4xl font-extrabold mb-6 lg:text-4xl text-[#015464]">Choose Your Plan</h1>
              <p className="text-sm text-[#015464] font-medium">We can optimize your site so you’ll get more and more traffic
                  leads and sales in no time.</p>
          </div>
          <div className=" mx-auto flex  sm:px-16" >
              <div className="  md-px-24 relative  container  mx-auto ">
                  <div className="grid grid-cols-1   md:grid-cols-1  lg:grid-cols-3  ">
                  {/* Card 1 */}
                    <div className="w-80 h-96 lg:w-72 lg:h-72  lg:pt-14  m-auto mt-10  max-w-sm -top-10">
                      <Image src={pricing1} alt=""
                          className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white" />
                      <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                          <div className="w-5/6 m-auto">
                              <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">SILVER PLAN</h2>
                                  <p className="lg:hidden text-center text-gray-500 pt-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>

                                  <p className="text-center pt-2 text-5xl text-[#015464] font-bold">
                                      <span className="text-2xl mt-2 ">₹</span> 50
                                  </p> 
                                                               
                                  
                                  <p className="text-center text-gray-500 pt-1 text-sm">PER MONTH</p>
                                  <button 
                                      className="lg:text-sm  text-lg font-bold relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                          </div>



                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className=" w-80 h-96 lg:w-72 lg:h-72 mt-96  mx-auto lg:mt-16 max-w-sm">
                      <Image src={pricing1} alt=""
                          className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-80 object-cover bg-white" />
                      <div className="bg-white shadow-2xl rounded-b-3xl  justify-center">

                          <div className="w-5/6 m-auto">
                              <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">PLATINUM PLAN</h2>
                                  <p className="text-center text-gray-500 pt-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>
                                  <p className="text-center pt-5 text-5xl text-[#015464] font-bold"> <span className="text-2xl mt-2 ">₹</span> 100</p>
                                  <p className="text-center text-gray-500 pt-1 text-sm">PER MONTH</p>
                                  <button
                                      className="lg:text-sm  text-lg font-bold relative -bottom-10 left-1/2 transform -translate-x-1/2  px-4  text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                          </div>



                      </div>
                  </div>
                      <div className="w-80 h-96 lg:w-72 lg:h-72 mt-96 lg:py-14  m-auto lg:mt-16 max-w-sm">
                          <Image src={pricing1} alt=""
                              className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white" />
                          <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                              <div className="w-5/6 m-auto">
                                  <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">GOLD PLAN</h2>
                                  <p className="lg:hidden text-center text-gray-500 pt-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>
                                   <p className="text-center pt-5 text-5xl text-[#015464] font-bold"> <span className="text-2xl mt-2 ">₹</span> 300</p>
                                  <p className="text-center text-gray-500 pt-1 text-sm">PER MONTH</p>
                                  <button
                                      className="lg:text-sm  text-lg font-bold relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                              </div>



                          </div>
                      </div>
              </div>
              </div>


          </div>
          </section>  
    );
}






