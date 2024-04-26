import React from 'react'
import OfferGrocery from '../components/OfferGrocery '
import OfferVegetable from '../components/OfferVegetable'

const ShopByCategory = ({data}) => {
  return (
    <>
      <div className=' mb-5 p-5'>
        <h1 className='text-center font-bold text-2xl'>SHOP BY CATEGORY</h1>
        <div className='flex justify-between md:flex-row flex-col mt-5'>
          <div className='border border-black'>
            <h1 className='text-xl font-bold pl-2'>Offer on Grocery</h1>
            <OfferGrocery data={data}/>
          </div>
          <div className='border border-black'>
            <h1 className='text-xl font-bold pl-2'>Offer on Vegetable</h1>
            <OfferVegetable data={data}/>
          </div>
        </div>  
      </div>
    </>
  )
}

export default ShopByCategory