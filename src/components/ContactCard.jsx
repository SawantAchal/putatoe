import React from 'react';
import { random } from 'lodash';

const ContactCard = ({ image, name , type}) => {
  // Function to generate random background color
  const getRandomColor = () => {
    const colors = ['bg-[#ACDDDE]', 'bg-[#CAF1DE]', 'bg-[#E1F8DC]', 'bg-[#FEF8DD]', 'bg-[#FFE7C7]','bg-[#F7D8BA]','bg-[#A4A891]','bg-[#86A69B]','bg-[#C9D5C9]']; // Add more colors if needed
    const randomIndex = random(0, colors.length - 1);
    return colors[randomIndex];
  };

  // Determine if image is available
  const hasImage = image !== null && image !== undefined;

  return (
    <>
      <main className='border border-black h-80 w-60 rounded-sm '>
        <div className={`w-full  h-64 rounded-sm overflow-hidden relative ${hasImage ? '' : getRandomColor()}`}>
          {hasImage ? (
            <img src={image} alt={name} className='w-full h-44' />
          ) : (
            <div className="flex  items-center justify-center w-full h-full  text-5xl font-bold">
              {name && name.length > 0 ? name.charAt(0) : ''}
            </div>
          )}
          <div className=' flex inset-0  font-bold justify-center items-end   text-center  absolute'>{name}</div>
        </div>
        <hr />
        <section className='relative'>
        {/* <div >{name}</div> */}
          <button className='absolute right-11 top-2 bg-[#B1A6A4] text-center p-2 w-40 rounded-lg font-bold'>CONTACT</button>
        </section>
      </main>
    </>
  )
}

export default ContactCard;
