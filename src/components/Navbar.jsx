import React from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidMessage } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-around w-full h-16 bg-cyan-700 align-middle items-center'>
            <section className='flex'>
                <img src={logo} alt='logo' className='h-10'/>
                <section>
                    <h1>PUTATOE</h1>
                    <p>One Solution</p>
                </section>
            </section>
            <section className='flex'>
                <p>Gorakhpur, Gorakhpur Division, Uttar...</p>
                <IoIosArrowDown/>
            </section>
            <section className='flex'>
                <CiSearch/>
                <input type='search' placeholder='Search For Product and Brand'/>
            </section>
            <section className='flex'>
                <BiSolidMessage/>
                <span className='bg-slate-600 h-5 w-5 rounded-full text-center'>0</span>
                <FaBell/>
                <span className='bg-slate-600 h-5 w-5 rounded-full text-center'>0</span>
                <FaShoppingCart/>
                <span className='bg-slate-600 h-5 w-5 rounded-full text-center'>0</span>
            </section>
            <section>
                <button>Log In</button>
            </section>
        </nav>
    </>
  )
}

export default Navbar