import React from 'react'

const ContactCard = () => {
  return (
    <>
        <main className='border border-black bg-pink-700 h-60 w-60 rounded-sm'>
            <section>
              <img src='' alt='' className='w-full h-44'/>
            </section>
            <hr/>
            <section className='relative'>
              <button className=' absolute right-11 top-2 bg-slate-500 text-center p-2 w-40 rounded-lg font-bold'>CONTACT</button>
            </section>
        </main>
    </>
  )
}

export default ContactCard