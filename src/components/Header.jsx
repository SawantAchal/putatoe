import React from 'react'
import { TbDeviceMobileCharging } from "react-icons/tb";
import { GrCreditCard } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";

const Header = () => {
  return (
    <>
        <header className='relative flex justify-around bg-cyan-950 text-white text-center pt-20 z-0 p-6 w-full '>
            <section>
                <TbDeviceMobileCharging  className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>RECHARGE</p>
            </section>
            <section>
                <GrCreditCard className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>BILL PAYMENT </p>
            </section>
            <section>
                <FaHandHoldingUsd className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>LOAN</p>
            </section>
            <section>
                <IoNewspaperOutline className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>NEWS</p>
            </section>
            <section>
                <FaPeopleGroup className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>JOBS</p>
            </section>
            <section>
                <FaFilePen className='h-16 w-16 text-sm p-3 rounded-full bg-white text-cyan-950'/>
                <p>BLOGS</p>
            </section>
        </header>
    </>
  )
}

export default Header