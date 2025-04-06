import React from 'react'
import BlurImage from './BlurImage'

interface ItemProp {
  category: string
  item: string
  price: number | string
  image: string
  description?: string
}
const RestaurantItem = ({ item }: { item: ItemProp }) => {
  return (
    <div className='card shadow-xl mx-auto bg-black text-gray-100'>
      <figure className='h-44'>
        <BlurImage
          src={item.image}
          alt={item.item}
          width={100}
          height={100}
          className='rounded-xl w-full h-full'
        />
      </figure>
      <div className='card-body items-center text-center py-3 px-2'>
        <h3 className='md:text-lg text-sm uppercase font-bold leading-nones'>
          {item.item}
        </h3>
        <p className='text-xs'>{item?.description}</p>
        <div className='card-actions w-full md:w-auto'>
          <button className='btn btn-ghost bg-my-primary text-white hover:text-my-primary bottom-1 outline btn-sm text-xs sm:text-md outline-secondary font-bold px-1 md:px-4 w-full'>
            {typeof item.price === 'number'
              ? `$${item.price?.toFixed(2)}`
              : item.price}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantItem
