'use client'
import React from 'react';
import { useState } from 'react';
const Signup1 = () => {
    const signup1bg = '/assets/LoginPage/signup1bg.svg'
    const logineye = '/assets/LoginPage/logineye.svg'
    const logineyeclosed = '/assets/LoginPage/logineyeclosed.svg'
    const correct = '/assets/LoginPage/correct.svg'
    const incorrect = '/assets/LoginPage/incorrect.svg'

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
                    src={signup1bg}
                    alt="Background"
                />
             
                
                

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                         
                            <p className="mt-3 text-[#015464]  text-4xl">
                                Sign Up To Enool
                            </p>
                        </div>
                        <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
                        <div className="mt-8">
                            <form 
                            // onSubmit={handleSubmit}
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-lg  text-[#408080] "
                                    >
                                        Email ID
                                    </label>
                                    <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        focus:border-blue-400  focus:ring-{blue-400} focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                        <img
                                            src={incorrect}
                                            alt="incorrected"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        />
                                    
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-lg  text-[#408080]"
                                        >
                                            Create New Password
                                        </label>

                                    </div>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Your New Password"
                                            // onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full px-4 py-2  text-gray-700 placeholder-[#2E384D] bg-[#E0E7FF] border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                            onClick={handleTogglePassword}
                                        >
                                            <img
                                                src={showPassword ? logineye : logineyeclosed}
                                                alt={showPassword ? 'Hide Password' : 'Show Password'}
                                                className="w-full h-full"
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-lg  text-[#408080]"
                                        >
                                            Confirm New Password
                                        </label>

                                    </div>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Confirm New Password"
                                            // onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full px-4 py-2  text-gray-700 placeholder-[#2E384D] bg-[#E0E7FF] border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                            onClick={handleTogglePassword}
                                        >
                                            <img
                                                src={showPassword ? logineye : logineyeclosed}
                                                alt={showPassword ? 'Hide Password' : 'Show Password'}
                                                className="w-full h-full"
                                            />
                                        </button>
                                    </div>

                              
                                </div>
                                
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block my-4  text-lg  text-[#408080] "
                                    >
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <div className=" absolute left-20 top-1/2 bg-[#C5CCE4] transform -translate-y-1/2 w-[2px] h-8"></div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="+41          1234567890"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        focus:border-blue-400  focus:ring-{blue-400} focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                        <img
                                            src={correct}
                                            alt="corrected"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        />
                                    </div>
                                </div>
                                <p className="text-[#408080] text-sm pt-3">
                                    By signing up you agree to our  {' '} 
                                    <a
                                        href="#"
                                        className="text-[#408080] focus:outline-none focus:underline hover:underline"
                                    >
                                        Terms of Service
                                    </a>
                                    {' '} and {' '}
                                    <a
                                        href="#"
                                        className="text-[#408080] focus:outline-none focus:underline hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Get Code
                                    </button>
                                </div>
                                <div className="mt-6">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 form-checkbox text-[#408080] border-[#408080] rounded "
                                            // checked={isChecked}
                                            // onChange={onChange}
                                        />
                                        <span className="text-[#408080] text-sm">
                                            Receive occasional marketing emails from Legible (optional)
                                        </span>
                                    </label>
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

export default Signup1;
