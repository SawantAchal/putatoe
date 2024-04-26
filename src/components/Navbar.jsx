import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { BiSolidMessage } from 'react-icons/bi';
import { FaBell, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setIsMenuOpen(false); // Close the sidebar if it's open
    setIsSearchOpen(!isSearchOpen); // Toggle the search input
    setIsMenuVisible(false); // Hide the menu icon when search is active
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
    setIsMenuVisible(true); // Make the menu icon visible when sidebar is closed
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setIsMenuVisible(true); // Make the menu icon visible when search is closed
  };

  return (
    <nav className=' flex justify-between items-center w-full h-16 bg-[#413F3D] fixed z-50 top-0 left-0 px-4 lg:px-8 text-xl text-white cursor-pointer '>
        <div className='flex items-center gap-2 '>
        <img src={logo} alt='logo' className='h-14' />
        <div className='hidden lg:block'>
          <h1 className='font-bold text-2xl'>PUTATOE</h1>
          <p className='text-sm'>One Solution</p>
        </div>
      </div>
      <div className='hidden lg:flex justify-evenly items-center gap-16'>
        <section className='flex ml-8 items-center text-lg'>
          <p>Gorakhpur, Gorakhpur Division, Uttar...</p>
          <IoIosArrowDown/>
        </section>
        <section className='flex ml-8 items-center h-8 w-80 border border-white bg-white gap-3 rounded-md'>
          <CiSearch className='text-black text-3xl font-bold'/>
          <input type='search' placeholder='  Search For Product and Brand' className='bg-transparent w-full h-full border-none focus:outline-0 text-black text-sm'/>
        </section>
        <section className='flex ml-8 gap-2'>
          <BiSolidMessage  className='text-2xl'/>
          <span className='bg-[#B1A6A4] h-5 w-5 rounded-full text-center -mt-3 text-sm'>0</span>
          <FaBell className='text-2xl'/>
          <span className='bg-[#B1A6A4] h-5 w-5 rounded-full text-center -mt-3 text-sm'>0</span>
          <FaShoppingCart className='text-2xl'/>
          <span className='bg-[#B1A6A4] h-5 w-5 rounded-full text-center -mt-3 text-sm'>0</span>
        </section>
        <section className='ml-8 border border-white p-2 rounded-lg hover:bg-white hover:text-black '>
          <button>Log In</button>
        </section>
      </div>
      <div className='flex items-center cursor-pointer'>
        {isMenuVisible && (
          <div className='lg:hidden'>
            <IoMenu className='text-white text-3 text-3xl -mt-6xl' onClick={toggleMenu} />
          </div>
        )}
        {isMenuOpen && (
          <div className='lg:hidden fixed top-0 left-0 h-full w-64 bg-[#AC8968] p-4'>
            <button className='text-white' onClick={closeSidebar}>
              <FaTimes className='text-white text-2xl' />
            </button>
            <section className='flex items-center mb-4 pt-3'>
              <p className='text-white text-lg'>Gorakhpur, Gorakhpur Division, Uttar...</p>
              <IoIosArrowDown className='text-white ml-2 text-3xl' />
            </section>
            <section className='flex items-center mb-4 pt-4'>
              <BiSolidMessage className='text-white mr-2' />
              <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-sm -mt-6 text-white'>0</span>
              <FaBell className='ml-4 text-white mr-2' />
              <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-sm -mt-6 text-white'>0</span>
              <FaShoppingCart className='ml-4 text-white mr-2' />
              <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-sm -mt-6 text-white'>0</span>
            </section>
            <section>
              <button className='bg-white text-gray-800 px-4 py-2 rounded-md font-bold'>Log In</button>
            </section>
          </div>
        )}
        <div className='flex items-center ml-4 lg:ml-8'>
          {/* Conditionally render CiSearch icon for small screens only */}
          <CiSearch className='text-white text-3xl lg:hidden' onClick={toggleSearch} />
          {isSearchOpen && (
            <div className='relative'>
              <input
                type='search'
                placeholder='Search For Product and Brand'
                className='ml-2 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
              />
              <FaTimes
                className='absolute top-0 right-0 mr-2 mt-2 text-gray-500 cursor-pointer'
                onClick={closeSearch}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;