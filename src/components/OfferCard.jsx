import React from 'react'
import butter from '../assets/dairy/Butter.jpg'

const OfferCard = () => {
  return (
    <>
        <main className='border border-black bg-lime-400 h-48 w-44 rounded-sm'>
            <section>
                <img src={butter} alt='image' className='w-full h-32'/>
            </section>
            <hr/>
            <section className='text-center'>
                <h1 className='font-bold'>Name</h1>
                <p className='font-bold'>UP TO <span className='text-red-600'>10% Off</span></p>
            </section>
        </main>
    </>
  )
}

export default OfferCard