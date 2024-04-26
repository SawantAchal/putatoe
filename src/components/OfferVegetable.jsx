import React from 'react'
import OfferCard from './OfferCard'

const OfferVegetable = ({data}) => {
  const offerV = data.filter(item => item.type === 'Vegetable')
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 p-5'>
      {
        offerV.map((items , i) => (
          <div key={i}>
            <OfferCard image={items.image} name={items.name} off={items.off} type={items.type}/>
          </div>
        ))
      }

    </div>
  )
}

export default OfferVegetable