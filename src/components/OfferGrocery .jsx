import React from 'react'
import OfferCard from './OfferCard'

const OfferGrocery  = ({data}) => {
  const offerG = data.filter(item => item.type === 'Grocery')
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 gap-4 p-5">
      {
        offerG.map((items, i) => (
          <div key={i}>
            <OfferCard image={items.image} name={items.name} off={items.off} type={items.type}/>
          </div>
        ))
      }
    </div>
  )
}

export default OfferGrocery 