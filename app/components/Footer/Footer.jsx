import React from "react";
import Image from "next/image";
import Link from 'next/link'

import facebook from "public/icons/facebook.png";
import youtube from "public/icons/youtube.png";
import instagram from "public/icons/instagram.png";
import twitter from "public/icons/twitter.png";
import logo1 from "public/icons/eNOOL_Logo-white.svg";
import paypal from "public/icons/paypal-solid-large.svg";
import discover from "public/icons/discover-solid-large.svg";
import americanexpress from "public/icons/americanexpress-solid-large.svg";
import mastercard from "public/icons/mastercard-solid-large.svg";
import visa from "public/icons/visa-solid-large.svg";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent  footer_bg  pt-56  ">
      <div className="  items-end md-px-24  pt-10 relative -bottom-1 container lg:pt-96 mx-auto">
        <div className="container lg:px-0 px-5 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first ">
            <div className="xl:w-[32%]  w-full   px-4 mr-5  md:mb-10 2xl:mx-auto ">
              <h2 className="text-4xl font-semibold text-white md:pl-4 lg:pl-40 xl:pl-0">
                Receive the latest offers & <br className="sm:invisible" />
                updates via email
              </h2>
              <div className="items-center mx-auto mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full ">
                  <input
                    className="block py-[16px] pl-5 w-full text-gray-900 bg-[#1E6B77]  border border-gray-300 sm:rounded-none "
                    placeholder="Enter your email id"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-[18px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  "
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div
                className="mx-auto my-5
                             max-w-screen-sm text-xs text-left text-white newsletter-form-footer dark:text-gray-300"
              >
                By signing up, you agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  {" "}
                  Privacy Policy
                </a>
                .
              </div>
            </div>
            <div className="lg:w-auto lg:ml-36 xl:ml-0 sm:w-1/2 w-1/2  px-8 xl:px-14 lg:px-10 text-left">

              <span className="block uppercase text-white text-sm font-semibold mb-2">
                About Us
              </span>



              <nav className="list-none mb-10 space-y-2">
                <Link href='/Pages/Userside/contact'>
                  <li

                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                  >
                    Contact Us
                  </li>
                </Link>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Help Topics
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Guarantee
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Store Pickup
                  </a>
                </li>
                <li>
                  <Link href='/Pages/Userside/terms&privacy'>
                  <button
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Terms
                  </button>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-auto text-left sm:w-1/2 w-1/2  px-8 xl:px-14 lg:px-10">
              <span className="block uppercase text-white text-sm font-semibold mb-2">
                Categories{" "}
              </span>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Comedy
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Drama
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Horror
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    {" "}
                    Kids
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-auto text-left sm:w-1/2 w-1/2  px-8 xl:px-14 lg:px-10">
              <span className="block uppercase text-white text-sm font-semibold mb-2">
                Our Services
              </span>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Product Recalls
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Accessibility
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Store Pickup
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-auto text-left  sm:w-1/2 w-1/2  px-8 xl:px-14 lg:px-10  ">
              <span className="block uppercase text-white text-sm font-semibold mb-2">
                Get Started
              </span>

              <nav className="list-none mb-10 space-y-2 ">
                <Link href='/Pages/Userside/about'>
                  <li

                    className="text-white   hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    About us

                  </li>
                </Link>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Bookmarks
                  </a>
                </li>
                <li>
                  <Link href='/Pages/Userside/login'>
                  <button
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Sign in/Join
                  </button>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>


      </div>
      <table className="md:visible border-collapse border border-slate-400 w-full table-fixed ">
        <tbody>
          <tr>
            <td className="border border-slate-300 w-full  ">
              <div className=" my-2  px-4 lg:mx-auto xl:w-8/12 text-center">
                <h1 className="text-white">Follow Us</h1>
                <div className="grid md:grid-cols-4 grid-col-2 gap-2 text-xs text-white pt-4 justify-center font-semibold py-1">
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={facebook} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={youtube} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={twitter} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={instagram} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                </div>
              </div>

            </td>
            <td className="border border-slate-300 w-full items-center justify-between">
              <Image
                className="w-56 justify-center mx-auto"
                src={logo1}
                alt="Logo"
              />
            </td>
            <td className="border border-slate-300 w-full">
              <div className=" my-2  px-4 lg:mx-auto xl:w-8/12 text-center">
                <h1 className="text-white pt-12 md:pt-0">We Accept</h1>
                <div className="grid md:grid-cols-5 grid-col-2 gap-2 text-xs pt-4 text-white justify-center font-semibold py-1">
                  <button className="h-10 w-10 items-center  justify-center align-center" type="button">
                    <Image src={visa} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={mastercard} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={americanexpress} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={discover} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                  <button className="h-10 w-10 items-center justify-center align-center" type="button">
                    <Image src={paypal} className="justify-center w-[44px] h-[44px]" alt="" />
                  </button>
                </div>

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-wrap pt-3 items-center md:justify-between justify-center">
        <div className="w-full  px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1 sm:space-y-3">
            Copyright © <span id="get-current-year">{currentYear}</span><a href="https://www.creative-tim.com/product/notus-js"
              className="text-white hover:text-gray-800" target="_blank" /> E-Nool |
            <a href="#" className="text-white hover:text-blueGray-800">Powered By E-Nool
            </a>.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
