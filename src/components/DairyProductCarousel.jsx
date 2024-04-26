import React from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DairyProductCarousel = ({data}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // Number of slides to slide when arrow clicked
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
    <div className="bg-[#F2F1EF] bg-opacity-65 shadow-2xl md:py-8 md:p-10 p-0 mt-4 m-10 rounded-md">
      <section className='flex justify-between'>
        <h1 className='font-bold text-xl mb-2 p-3 md:p-0'>Dairy Product</h1>
        <h1 className='font-bold text-xl mb-2 cursor-pointer p-3 md:p-0'>View All</h1>
      </section>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} arrows={true}>
        {
          data.map((item , i) => (
            <div key={i} className='px-3'>
              <Card image={item.image} Name={item.Name} BrandName={item.BrandName} Type={item.Type} Price={item.Price} MRP={item.MRP}  Avb={item.Avb} Unit={item.Unit} Qty={item.Qty}/>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default DairyProductCarousel