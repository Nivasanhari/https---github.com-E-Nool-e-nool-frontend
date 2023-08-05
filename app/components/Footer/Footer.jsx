import React from "react";
import Image from "next/image";

import facebook from "public/icons/facebook.png";
import youtube from "public/icons/youtube.png";
import instagram from "public/icons/instagram.png";
import twitter from "public/icons/twitter.png";
import logo from "public/icons/eNOOL_Logo.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent  footer_bg">
      <div className="  items-end md-px-24 pt-72  relative -bottom-1 container lg:pt-96 mx-auto">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-[32%]  w-full   px-4 mr-5  md:mb-10 ">
              <h2 className="text-4xl font-semibold text-white">
                Receive the latest offers & <br className="sm:invisible" />
                updates via email
              </h2>
              <div className="items-center mx-auto mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full h-f1">
                  <input
                    className="block py-4 pl-10 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:rounded-none "
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-[17px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  "
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
            <div className="lg:w-auto md:w-1/2  w-full px-8 xl:px-14 lg:px-10">
              <span className="block uppercase text-white text-sm font-semibold mb-2">
                About Us
              </span>

              <nav className="list-none mb-10 space-y-2">
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
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Terms
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-auto md:w-1/2 w-full px-8 xl:px-14 lg:px-10">
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
            <div className="lg:w-auto md:w-1/2 w-full px-8 xl:px-14 lg:px-10">
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
            <div className="lg:w-auto md:w-1/2 w-full px-8 xl:px-14 lg:px-10 ">
              <span className="block uppercase text-white text-sm font-semibold mb-2">
                Get Started
              </span>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    About us
                  </a>
                </li>
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
                  <a
                    className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-xs"
                    href="#"
                  >
                    Sign in/Join
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        
      </div>
      <table className="md:visible border-collapse border border-slate-400 w-full table-fixed py-5">
        <tbody>
          <tr>
            <td className="border border-slate-300 w-full">
              <div className="w-full md:w-4/12 mx-auto text-center">
                <h1 className="text-white">Follow Us</h1>
                <div className="flex text-xs text-white justify-center font-semibold py-1 space-x-2">
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={facebook}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={youtube}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={twitter}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={instagram}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </td>
            <td className="border border-slate-300 w-full items-center justify-between">
              <Image
                className="w-56 justify-center mx-auto"
                src={logo}
                alt="Logo"
              />
            </td>
            <td className="border border-slate-300 w-full">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <h1 className="text-white">We Accept</h1>
                <div className="flex text-xs text-white justify-center font-semibold py-1 space-x-2">
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={facebook}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={youtube}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={twitter}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                  <button
                    className="h-10 w-10 items-center justify-center align-center mr-2"
                    type="button"
                  >
                    <Image
                      src={instagram}
                      className="justify-center w-[44px] h-[44px]"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;
