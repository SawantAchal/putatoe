import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { MdOutlineStarOutline } from "react-icons/md";


const Card = ({image,Name, BrandName, Type, Price, MRP, Avb, Unit,Qty,Off}) => {
  return (
    <>
        <main className='relative'>
            <section className='md:h-3/6 h-4/5 md:w-56 w-60 border border-black border-solid bg-[#D8CFD0]  text-[#3E362E] rounded-md pb-3'>
                <span className='absolute bg-[#B1A6A4] text-white w-24 text-center p-0 left-0 top-0 h-7  rounded-tl-md rounded-br-lg'>{Off}% Off</span>
                <section className='pt-4 '>
                    <img src={image} alt='' className='h-40 w-full'/>
                </section>
                <hr/>
                <section className='p-2 pt-4'>
                    <h1 className='font-bold text-2xl'>{Name}</h1>
                    <h1>{BrandName}</h1>
                    <h1>{Type}</h1>
                    <section className='flex gap-4'>
                        <h2 className='font-bold'>₹{Price}</h2>
                        <h2 className='line-through text-red-800'>M.R.P.₹{MRP}</h2>
                    </section>
                    <section className='flex justify-between'>
                        <section>
                            <h1>{Avb}</h1>
                            <section className='flex'>
                                <TiStar className='text-yellow-400'/>
                                <TiStar className='text-yellow-400'/>
                                <TiStar className='text-yellow-400'/>
                                <TiStar className='text-yellow-400'/>
                                <MdOutlineStarOutline/>
                            </section>
                            <h1>Unit : {Unit}</h1>
                        </section>
                        <section>
                            <IoMdShare className='cursor-pointer font-bold text-2xl'/>
                        </section>
                    </section>
                    <section className='flex justify-between text-sm '>
                        <section className='flex items-center gap-1 border rounded-md cursor-pointer p-1 font-bold bg-[#B1A6A4] text-black border-none'>
                            Qty:{Qty}
                            <IoIosArrowDown/>
                        </section>
                        <section className='flex items-center gap-1 border rounded-md cursor-pointer p-1 font-bold border-none bg-[#697184] text-white'>
                            <FaShoppingCart/>
                            <h3>Add to cart</h3>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    </>
  )
}

export default Card