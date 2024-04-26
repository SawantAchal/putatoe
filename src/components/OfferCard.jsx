import React from 'react'

const OfferCard = ({image ,name, off, type}) => {
  return (
    <>
        <main className='border border-black bg-lime-400 h-48 w-44 rounded-sm'>
            <section>
                <img src={image} alt={name} className='w-full h-32'/>
            </section>
            <hr/>
            <section className='text-center'>
                <h1 className='font-bold'>{name}</h1>
                <p className='font-bold'>UP TO <span className='text-red-600'>{off}% Off</span></p>
            </section>
        </main>
    </>
  )
}

export default OfferCard