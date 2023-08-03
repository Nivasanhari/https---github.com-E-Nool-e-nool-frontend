import React from 'react';
import Image from 'next/image';
import footerbg from 'public/assets/LandingPage/footer-bg.png';
import facebook from 'public/icons/facebook.png';
import youtube from 'public/icons/youtube.png';
import instagram from 'public/icons/instagram.png';
import twitter from 'public/icons/twitter.png';
import logo from 'public/icons/eNOOL_Logo.svg';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full  absolute bg-[#1E6B77]">
            <Image
                src={footerbg}
                alt="Background"
                className="absolute inset-0 h-screen w-full  z-0"
            />
            <div className="  items-end md-px-24 relative  container pt-96 mx-auto">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-[32%]  w-full   px-4 md:mb-10 ">
                            <h2 className="text-4xl font-semibold text-white">Receive the latest offers & <br className="sm:invisible" />updates via email</h2>
                            <div class="items-center mx-auto mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0">
                                <div class="relative w-full h-f1">
                                 
                                 
                                    <input class="block py-4 pl-10 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:rounded-none " placeholder="Enter your email" type="email" id="email" required=""/>
                                </div>
                                <div>
                                    <button type="submit" class="py-[17px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  ">Subscribe</button>
                                </div>
                            </div>
                            
                            <div class="mx-auto my-5
                             max-w-screen-sm text-sm text-left text-white newsletter-form-footer dark:text-gray-300">By signing up, you agree to the <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline"> Privacy Policy</a>.</div>
                                            
                        </div>
                        <div class="lg:w-[17%] md:w-1/2  w-full px-4">
                            <span className="block uppercase text-white text-lg font-semibold mb-2">About Us</span>

                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Help Topics</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Guarantee</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Shipping</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Store Pickup</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Terms</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-[17%] md:w-1/2 w-full px-4">
                            <span className="block uppercase text-white text-lg font-semibold mb-2">Categories </span>

                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Action</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Comedy</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Drama</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Horror</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#"> Kids</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-[17%] md:w-1/2 w-full px-4">
                            <span className="block uppercase text-white text-lg font-semibold mb-2">Our Services</span>

                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Help Center
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Returns</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Product Recalls</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Accessibility</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Store Pickup</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-[17%] md:w-1/2 w-full px-4 ">
                            <span className="block uppercase text-white text-lg font-semibold mb-2">Get Started</span>

                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">About us
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Sitemap</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Bookmarks</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#">Sign in/Join</a>
                                </li>
                            </nav>
                        </div>
                      
                    </div>
                </div>


        

                <div className="flex flex-wrap pt-28 items-center md:justify-between justify-center">
                    <div className="w-full  px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1 sm:space-y-3">
                            Copyright © <span id="get-current-year">{currentYear}</span><a href="https://www.creative-tim.com/product/notus-js"
                                className="text-white hover:text-gray-800" target="_blank" /> E-Nool |
                            <a href="#" className="text-white hover:text-blueGray-800">Powered By E-Nool
                            </a>.
                        </div>
                    </div>
                </div>
              


            </div>
            <table class="md:visible  absolute bottom-10 border-collapse border border-slate-400 w-full table-fixed">
                <tbody>
                    <tr>
                        <td class="border border-slate-300 w-full">
                            <div className="w-full md:w-4/12 mx-auto text-center">
                                <h1 className="text-white">Follow Us</h1>
                                <div className="flex text-sm text-white justify-center font-semibold py-1 space-x-2">
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={facebook} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={youtube} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={twitter} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={instagram} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td class="border border-slate-300 w-full items-center justify-between">

                            <Image
                                className="w-56 justify-center mx-auto"
                                src={logo}
                                alt="Logo"
                            />

                        </td>
                        <td class="border border-slate-300 w-full">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <h1 className="text-white">We Accept</h1>
                                <div className="flex text-sm text-white justify-center font-semibold py-1 space-x-2">
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={facebook} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={youtube} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={twitter} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                    <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                        <Image src={instagram} className="justify-center w-[44px] h-[44px]" alt="" />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>

    )
}

export default Footer