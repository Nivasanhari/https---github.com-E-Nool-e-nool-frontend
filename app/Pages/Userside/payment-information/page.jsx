"use client";
import Image from "next/image";
import Coupon from "@/app/Components/Coupon/page";
import React, { Fragment, useState } from "react";
import bg from "public/assets/bg1.png";
import Lefe from "public/assets/Lefe1.png";
import upi from "public/assets/payment/upi.png";
import credit from "public/assets/payment/credit.png";
import net from "public/assets/payment/netbanking.png";
import wallet from "public/assets/payment/wallets.png";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className=" flex mb-20">
        {/* <Image className='absolute ml-[250px] mt-[-110px] w-[1100px]' src={bg} alt='bg-img' /> */}
        <Image
          className=" absolute w-28 left-[1530px] mt-52 "
          src={Lefe}
          alt="lefe-img"
        />
        <div className=" bg-[#015464] text-white w-[500px] ml-56 mt-[250px] rounded-3xl">
          <div className=" ml-10 pt-10 pb-8 mt-2">
            <div className=" text-white">
              <h3 className=" font-bold ml-20">Selected Plan</h3>
              <p className=" bg-white text-[#408080] w-[300px] ml-20 p-2 mt-6 rounded-md text-sm">
                Silver Plan 1-1 Months <span>₹ 5.00</span>
              </p>
            </div>
            <div className=" relative w-[300px] overflow-hidden pb-3 mt-4 ml-16 ">
              <input
                className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                type="checkbox"
              />
              <div className=" h-12 w-full flex items-center">
                <Image src={upi} alt="upi" />
                <p className=" ml-2">UPI</p>
              </div>
              <div className=" absolute top-3 right-3 peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className=" rounded-xl max-h-0 bg-[#7CC9B5] text-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                <div className=" text-white p-4 flex">
                  <p className=" bg-[#015464] w-8 text-center text-3xl rounded-xl">
                    +{" "}
                  </p>
                  <span className=" mt-1 ml-3"> Add New UPI</span>
                </div>
              </div>
              <hr />
            </div>

            <div className=" relative w-[300px] overflow-hidden pb-3 ml-16">
              <input
                className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                type="checkbox"
              />
              <div className=" h-12 w-full flex items-center">
                <Image src={credit} alt="upi" />
                <p className=" ml-2">Credit Card / Debit Card</p>
              </div>
              <div className=" absolute top-3 right-3 peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className=" rounded-xl max-h-0 bg-[#7CC9B5] text-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                <div className=" text-white p-4 flex">
                  <p className=" bg-[#015464] w-8 text-center text-3xl rounded-xl">
                    +{" "}
                  </p>
                  <span className=" mt-1 ml-3">Credit Card / Debit Card</span>
                </div>
              </div>
              <hr />
            </div>

            <div className=" relative w-[300px] ml-16 overflow-hidden pb-3">
              <input
                className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                type="checkbox"
              />
              <div className=" h-12 w-full flex items-center">
                <Image src={wallet} alt="upi" />
                <p className=" ml-2">Wallets</p>
              </div>
              <div className=" absolute top-3 right-3 peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className=" rounded-xl max-h-0 bg-[#7CC9B5] text-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                <div className=" text-white p-4 flex">
                  <p className=" bg-[#015464] w-8 text-center text-3xl rounded-xl">
                    +{" "}
                  </p>
                  <span className=" mt-1 ml-3"> Wallets</span>
                </div>
              </div>
              <hr />
            </div>

            <div className=" relative w-[300px] ml-16 overflow-hidden pb-3">
              <input
                className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                type="checkbox"
              />
              <div className=" h-12 w-full flex items-center">
                <Image src={net} alt="upi" />
                <p className=" ml-2">Netbanking</p>
              </div>

              <div className=" absolute top-3 right-3 peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="  rounded-xl max-h-0 bg-[#7CC9B5] text-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                <div className=" text-white p-4 flex">
                  <p className=" bg-[#015464] w-8 text-center text-3xl rounded-xl">
                    +{" "}
                  </p>
                  <span className=" mt-1 ml-3">Netbanking</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className=" ml-60 mt-[230px]">
          <div className=" mt-5 ">
            <h2 className=" text-[#015464] font-semibold mb-3">
              Enter Coupon Code
            </h2>
            <div className=' flex'>
              <h3 className=' bg-[#7CC9B5] w-80 text-white p-2 rounded-l-xl'>Enter Coupon / Offer / Refferal Code</h3>
              <button className=' absolute ml-[300px] bg-[#015464] p-2 rounded-l-3xl text-white pr-3 pl-8 rounded-lg' onClick={() => setShowModal(true)}>Apply</button>
            </div>
            <h3 className=" text-[#015464] mt-5 font-semibold">
              View Offer Code
            </h3>{" "}
            <hr className=" w-32 rounded-xl bg-[#015464] p-[01px]" />
            <div className=" mt-10">
              <h2 className=" text-[#015464] font-medium">Payment Details</h2>
              <p className=" mt-4 text-sm text-[#015464]">
                Subscription Charges{" "}
                <span className=" ml-56 font-bold">₹5.00</span>
              </p>
              <p className=" mt-3 text-sm text-[#015464]">
                Bag Subtotal{" "}
                <span className=" ml-[282px] font-bold">₹5.00</span>
              </p>
              <p className=" mt-3 text-sm text-[#015464]">
                Total Payable{" "}
                <span className=" ml-[280px] font-bold">₹5.00</span>
              </p>
            </div>
            <div className=" flex mt-8">
              <h2 className=" text-[#015464] text-[14px]">
                Total{" "}
                <span className=" text-xl ml-2 mt-2 font-semibold">₹30</span>
              </h2>
              <button
                className=" cursor-pointer ml-48 bg-[#015464] text-white px-8 rounded-xl py-1"

              >
                Pay Now
              </button>
            </div>
            <p className=" text-[12px] ml-4 mt-5 text-[#015464]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              illo.
            </p>
            <p className=" text-[12px] ml-4 text-[#015464]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              illo.
            </p>
          </div>
        </div>
      </div>
      <Coupon isVisivle={showModal} />
    </Fragment>
  );
};

export default page;
