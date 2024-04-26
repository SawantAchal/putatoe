
import React from 'react';
import data from '../data/AllSubServices';

const AllSubServices = () => {
  return (
    <div className=' bg-[#F2F1EF] shadow-2xl md:py-8 md:p-10  p-0 m-10 rounded-md'>
      <h1 className='font-bold text-sm md:text-xl mb-2 p-3 md:p-0'>All Sub Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {data.map((item, index) => ( 
          <div key={index} className='border border-pink-950 rounded-md w-auto md:w-80 lg:w-96 relative'>
            <img src={item.image} alt={'name'} className='mx-auto h-72 w-full md:w-80 lg:w-96 rounded-md' />
            <p className='absolute inset-0 flex items-end  justify-center text-white font-bold text-xl'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default AllSubServices;
