import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/'

  const categories = [
    {
      label: 'Hot Drinks',
      image:
        'https://realfood.tesco.com/media/images/1400x919-Mince-Pie-Chai-Latte-cd056624-8c38-4292-b8fd-38d744470942-0-1400x919.jpg',
    },
    { label: 'Tea and more', image: baseUrl + 'karnel hot drinks.jpg' },
    { label: 'Ice Coffee', image: baseUrl + 'cold drinks.jpg' },
    {
      label: 'Ice Tea',
      image: `https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/283A2886.JPG`,
    },
    {
      label: 'Frappuccino',
      image:
        'https://www.togethertoeat.com/wp-content/uploads/2023/07/Homemade-Frappuccinos-make-frappuccino-at-home.jpg',
    },
    {
      label: 'Smoothie',
      image: `https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/283A2813.JPG`,
    },
    {
      label: 'Bakery',
      image:
        'https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179',
    },
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
