import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { BiSolidMessage } from 'react-icons/bi';
import { FaBell, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ isOpen, closeSidebar }) => {
    if (!isOpen) return null;
  return (
    <div className='lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 p-4'>
    <button className='text-white' onClick={closeSidebar}>
      <FaTimes className='text-white text-2xl' />
    </button>
    <section className='flex items-center mb-4'>
      <p className='text-white'>Gorakhpur, Gorakhpur Division, Uttar...</p>
      <IoIosArrowDown className='text-white ml-2' />
    </section>
    <section className='flex items-center mb-4'>
      <BiSolidMessage className='text-white mr-2' />
      <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-white'>0</span>
      <FaBell className='ml-4 text-white mr-2' />
      <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-white'>0</span>
      <FaShoppingCart className='ml-4 text-white mr-2' />
      <span className='bg-slate-600 h-5 w-5 rounded-full text-center text-white'>0</span>
    </section>
    <section>
      <button className='bg-white text-gray-800 px-4 py-2 rounded-md'>Log In</button>
    </section>
  </div>
  )
}

export default Sidebar