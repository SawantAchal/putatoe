import React from 'react';
import { random } from 'lodash';

const ContactCard = ({ image, name , type}) => {
  // Function to generate random background color
  const getRandomColor = () => {
    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400']; // Add more colors if needed
    const randomIndex = random(0, colors.length - 1);
    return colors[randomIndex];
  };

  // Determine if image is available
  const hasImage = image !== null && image !== undefined;

  return (
    <>
      <main className='border border-black h-80 w-60 rounded-sm'>
        <div className={`w-60  h-64 rounded-sm overflow-hidden relative ${hasImage ? '' : getRandomColor()}`}>
          {hasImage ? (
            <img src={image} alt={name} className='w-full h-44' />
          ) : (
            <div className="flex  items-center justify-center w-full h-full text-white text-4xl font-bold">
              {name && name.length > 0 ? name.charAt(0) : ''}
            </div>
          )}
          <div className=' flex inset-0  justify-center items-end  border text-center border-orange-300 absolute'>{name}</div>
        </div>
        <hr />
        <section className='relative'>
        {/* <div >{name}</div> */}
          <button className='absolute right-11 top-2 bg-slate-500 text-center p-2 w-40 rounded-lg font-bold'>CONTACT</button>
        </section>
      </main>
    </>
  )
}

export default ContactCard;
