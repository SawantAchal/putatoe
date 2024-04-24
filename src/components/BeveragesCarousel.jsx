import React from 'react'
import Card from './Card'

const BeveragesCarousel = ({data}) => {
  return (
    <div>
        BeveragesCarousel
        {
            data.map((item , i) => (
                <div key={i}>
                    <Card image={item.image} Name={item.Name} BrandName={item.BrandName} Type={item.Type} Price={item.Price} MRP={item.MRP}  Avb={item.Avb} Unit={item.Unit} Qty={item.Qty}/>
                </div>
            ))
        }
    </div>
  )
}

export default BeveragesCarousel