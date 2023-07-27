import React from 'react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative w-full min-h-screen flex items-end justify-center pb-36">
            <img
                src="./footer-bg.png"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />
            <div className=" relative w-full  md:px-24 ">
                <div class="flex  flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-auto pr-20  ">
                        <h4 class="text-xl fonat-semibold text-white">Receive the latest offers & <br/>updates via email</h4>
                        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                            <div className="w-55 pt-6 md:pt-0">
                                {/* Subscribe input text box */}
                                <div className="relative text-sm">
                                    <input type="email" placeholder="Your Email"
                                        className="w-96 border border-white bg-transparent placeholder-white px-4 py-2" />
                                    <button type="submit"
                                        className="absolute right-0 top-0 bottom-0 px-4 py-2  bg-[#7CC9B5] text-white">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                        </div>
                        <p className=" text-sm  text-white pt-5 ">By signing up, you agree to the Privacy Policy</p>
                    </div>
                    <div class="w-full lg:w-6/12  pt-4">
                        <div class="flex  items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">      
                                <span class="block uppercase text-white text-sm font-semibold mb-2">About Us</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Help Topics</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Guarantee</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Shipping</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Store Pickup</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Terms</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 ml-auto">   
                                <span class="block uppercase text-white text-sm font-semibold mb-2">Categories </span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Action</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Comedy</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Drama</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Horror</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"> Kids</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="w-full lg:w-4/12 px-4">     
                                <span class="block uppercase text-white text-sm font-semibold mb-2">Our Services</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Returns</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Product Recalls</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Accessibility</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Store Pickup</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span class="block uppercase text-white text-sm font-semibold mb-2">Get Started</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">About us
                                        </a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Sitemap</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Bookmarks</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Sign in/Join</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center ">
                    
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center border">
                        <h1 className="text-white ">Follow Us</h1>
                        <div class="flex text-sm text-white justify-center  font-semibold py-1 justify-space-between">
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/facebook.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/youtube.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/twitter.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/instagram.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                        </div>
                    </div>
                    <div class="     border">
                        <div class="text-sm text-white  font-semibold py-1">
                            <img
                                className=" w-56"
                                src="./icons/eNOOL_Logo.svg"
                                alt="Logo"
                            />
                        </div>
                    </div>
                    
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center border">
                        <h1 className="text-white ">We Accept</h1>
                        <div class="flex text-sm text-white justify-center  font-semibold py-1 justify-space-between">
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/facebook.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/youtube.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/twitter.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                            <button class="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <img src="./icons/instagram.png " className="justify-center w-[44px] h-[44px]" alt="" srcset="" />
                            </button>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-white font-semibold py-1">
                            Copyright © <span id="get-current-year">{currentYear}</span><a href="https://www.creative-tim.com/product/notus-js"
                                class="text-white hover:text-gray-800" target="_blank" /> E-Nool |
                            <a href="#" class="text-white hover:text-blueGray-800">Powered By E-Nool
                            </a>.
                        </div>
                    </div>
                </div>
              
            </div>
        </footer>

    )
}

export default Footer