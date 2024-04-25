import React from 'react';
import logo from '../assets/logo.png';
import play from '../assets/play.png';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto flex flex-wrap justify-around'>
        {/* Logo and About section */}
        <div className='flex flex-col items-center mb-8'>
          <img src={logo} alt='logo' className='h-12 mb-2' />
          <h1 className='text-lg font-bold'>Putatoe</h1>
          <p className='text-sm'>version 12.0.0</p>
        </div>

        {/* Useful Links */}
        <div className='mb-8'>
          <h1 className='text-lg font-bold mb-2'>USEFUL LINKS</h1>
          <ul>
            <li>Recharge & Payments</li>
            <li>Jobs & internships</li>
            <li>Blog Posts</li>
            <li>Promotions</li>
            <li>Loans</li>
          </ul>
        </div>

        {/* About Putatoe */}
        <div className='mb-8'>
          <h1 className='text-lg font-bold mb-2'>ABOUT PUTATOE</h1>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        {/* Popular Searches */}
        <div className='mb-8'>
          <h1 className='text-lg font-bold mb-2'>POPULAR SEARCHES</h1>
          <ul>
            <li>Grocery</li>
            <li>Construction</li>
            <li>Daily Needs</li>
            <li>Courier Service</li>
            <li>Education</li>
            <li>Laundry Service</li>
          </ul>
        </div>

        {/* Connect with Us and Get Our App */}
        <div className='mb-8'>
          <h1 className='text-lg font-bold mb-2'>CONNECT WITH US</h1>
          <div className='flex mb-4'>
            <img src={logo} alt='logo' className='h-6 mr-2' />
            <img src={logo} alt='logo' className='h-6 mr-2' />
            <img src={logo} alt='logo' className='h-6' />
          </div>
          <h1 className='text-lg font-bold mb-2'>GET OUR APP</h1>
          <img src={play} alt='play store' className='h-6' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
