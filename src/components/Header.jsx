import React from 'react';
import { TbDeviceMobileCharging } from "react-icons/tb";
import { GrCreditCard } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className='relative bg-[#B1A6A4] text-white text-center pt-20 z-0 p-6 w-full overflow-x-auto whitespace-no-wrap'>
        <div className="flex justify-between">
          <section className="flex-shrink-0 flex flex-col gap-2">
            <TbDeviceMobileCharging className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>RECHARGE</p>
          </section>
          <section className="flex-shrink-0 flex flex-col gap-2">
            <GrCreditCard className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>BILL PAYMENT </p>
          </section>
          <section className="flex-shrink-0 flex flex-col gap-2">
            <FaHandHoldingUsd className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>LOAN</p>
          </section>
          <section className="flex-shrink-0 flex flex-col gap-2">
            <IoNewspaperOutline className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>NEWS</p>
          </section>
          <section className="flex-shrink-0 flex flex-col gap-2">
            <FaPeopleGroup className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>JOBS</p>
          </section>
          <section className="flex-shrink-0 flex flex-col gap-2">
            <FaFilePen className='h-16 w-16 text-sm p-3 rounded-full bg-white text-[#697184] mx-2' />
            <p className='text-sm md:text-lg'>BLOGS</p>
          </section>
        </div>
      </header>
    </>
  );
}

export default Header;
