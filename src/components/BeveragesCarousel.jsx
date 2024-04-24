import React from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BeveragesCarousel = ({data}) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // Number of slides to slide when arrow clicked
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      arrows={true}
      >
                {
            data.map((item , i) => (
                <div key={i}>
                    <Card image={item.image} Name={item.Name} BrandName={item.BrandName} Type={item.Type} Price={item.Price} MRP={item.MRP}  Avb={item.Avb} Unit={item.Unit} Qty={item.Qty}/>
                </div>
            ))
        }
      </Carousel>
    </>
  )
}

export default BeveragesCarousel