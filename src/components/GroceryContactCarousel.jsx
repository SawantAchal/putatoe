import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ContactCard from './ContactCard'

const GroceryContactCarousel = ({items}) => {
  const vegItems = items.filter(item => item.type === 'Grocery')
  const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
  return (
    <div className="bg-[#AC8968] shadow-2xl md:py-8 md:p-10 p-0 m-10 rounded-md">
    <section className='flex justify-between'>
      <h1 className='font-bold text-xl mb-2 p-3 md:p-0'>Grocery Contact </h1>
      <h1 className='font-bold text-xl mb-2 cursor-pointer p-3 md:p-0'>View All</h1>
    </section>
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={true}>
      {vegItems.map((item, i) => (
        <div key={i} className='px-3'>
          <ContactCard image={item.image} name={item.name} type={item.type} />
        </div>
      ))}
    </Carousel>
  </div>
  )
}

export default GroceryContactCarousel