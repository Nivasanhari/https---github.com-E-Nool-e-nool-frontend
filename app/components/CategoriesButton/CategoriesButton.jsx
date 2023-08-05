'use client'
import React from 'react'
import { useState } from 'react';
const CategoriesButton = () => {
    const dropdown = '/icons/dropdown.svg'
    const menuItems = [
        { label: 'Online Stores', href: '#' },
        { label: 'Segmentation', href: '#' },
        { label: 'Marketing CRM', href: '#' },
        { label: 'Online Stores', href: '#' },
    ];

    
    const additionalLinks = [
        { label: 'Our Blog', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'License', href: '#' },
        { label: 'Resources', href: '#' },
    ];
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

  return (
      <div className="relative">
          <button
              type="button"
              onClick={handleDropdownToggle}
              className="flex items-center justify-between w-80 px-4 py-2 bg-[#7CC9B5] text-white rounded-3xl hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row"
          >
              <span className="pl-5">Browse By Subject</span>
              <img src={dropdown} alt="Dropdown" className="w-3 h-3" />
          </button>

          {isDropdownOpen && (
              <div className="absolute top-12 left-0 w-64 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                      <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                          {/* Map over the menuItems array to generate list items */}
                          {menuItems.map((item, index) => (
                              <li key={index}>
                                  <a href={item.href} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                      {item.label}
                                  </a>
                              </li>
                          ))}
                      </ul>
                      <ul className="mb-4 space-y-4 md:mb-0">
                          {/* Map over the additionalLinks array to generate list items */}
                          {additionalLinks.map((item, index) => (
                              <li key={index}>
                                  <a href={item.href} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                      {item.label}
                                  </a>
                              </li>
                          ))}
                      </ul>
                      <a href="#" className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken">
                          <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                              Preview the new Flowbite dashboard navigation.
                          </p>
                          <button
                              type="button"
                              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                          >
                              Get started
                              <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                              </svg>
                          </button>
                      </a>
                  </div>
              </div>
          )}
      </div>
  )
}

export default CategoriesButton