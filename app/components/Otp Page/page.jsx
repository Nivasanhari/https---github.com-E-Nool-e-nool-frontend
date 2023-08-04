'use client'
import React from 'react';
import { useState } from 'react';
const Otp = () => {
    const otp = '/assets/LoginPage/Otp.svg'

    const correct = '/assets/LoginPage/correct.svg'
   
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };



    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                {/* Background Image */}
                <img
                    className="object-cover hidden lg:block lg:w-1/2 h-screen"
                    src={otp}
                    alt="Background"
                />




                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">

                            <p className="mt-3 text-[#015464]  text-4xl">
                                OTP Verification
                            </p>
                            <h3 className="pt-10">Enter A 4 Digit Number That
                                Was Sent To + (1) 20 7234 3456 &
                                sample@gmail.com</h3>
                        </div>
                        <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
                        <div className="mt-8">
                            <form 
                            // onSubmit={handleSubmit}
                            
                            >
                                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]" type="text" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]" type="text" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]" type="text" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]" type="text" />
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-center text-gray-400">
                                    <a
                                        href="#"
                                        className="text-[#408080] focus:outline-none focus:underline hover:underline"
                                    >
                                        Resend Code in 0:59
                                    </a>
                                    .
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Next
                                    </button>
                                </div>
                             </form>

                            <p className="mt-6 text-sm text-center text-gray-400">
                                Already Have An Enool Account{' '}
                                <a
                                    href="#"
                                    className="text-[#408080] focus:outline-none focus:underline hover:underline"
                                >
                                    Sign In
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
