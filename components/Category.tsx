import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/'

  const categories = [
    { label: 'Hot Drinks', image: baseUrl + 'hot drink.jpg' },
    { label: 'Tea and more', image: baseUrl + 'cold drinks.jpg' },
    { label: 'Ice Coffee', image: baseUrl + 'karnel hot drinks.jpg' },
    { label: 'Ice Tea', image: baseUrl + 'iced cold drinks.jpg' },
    {
      label: 'Frappuccino',
      image: baseUrl + 'desserts and pastries.jpg',
    },
    { label: 'Smoothie', image: baseUrl + 'Breakfast.jpg' },
    { label: 'Bakery', image: baseUrl + 'Chicken.jpg' },
  ]

  const item = categories?.find(
    (item) => item.label?.toLowerCase() === label?.toLowerCase()
  )

  return (
    <div className='card h-44 image-full relative shadow-2xl'>
      <figure>
        <BlurImage
          src={item?.image!}
          alt={label}
          width={500}
          height={500}
          className='rounded-xl w-full h-44  shadow-xl'
          objectFit='cover'
        />
      </figure>
      <div className='card-body flex justify-center items-center bg-black/50 z-50 rounded-xl'>
        <h2 className='card-title text-white font-bold uppercase'>
          {item?.label}
        </h2>
      </div>
    </div>
  )
}

export default Category
