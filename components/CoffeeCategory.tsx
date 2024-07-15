import React from 'react'
import BlurImage from './BlurImage'

const CoffeeCategory = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/'
  const dilekBaseUrl =
    'https://farshaxan.blr1.cdn.digitaloceanspaces.com/dilek/'

  const noImageAvailable =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

  const categories = [
    {
      label: 'Hot Drinks',
      image:
        'https://realfood.tesco.com/media/images/1400x919-Mince-Pie-Chai-Latte-cd056624-8c38-4292-b8fd-38d744470942-0-1400x919.jpg',
    },
    { label: 'Tea and more', image: baseUrl + 'karnel hot drinks.jpg' },
    {
      label: 'Ice Coffee',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&webp=true&resize=300,272',
    },
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
      label: 'Bakery products',
      image:
        'https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179',
    },
    {
      label: 'Mojito',
      image:
        'https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/283A2858.JPG',
    },
    {
      label: 'Turkish Milky Desserts',
      image: dilekBaseUrl + 'Category Turkish Milk Dessert.JPG',
    },
    {
      label: 'Magnolia',
      image: dilekBaseUrl + 'Magnolia.JPG',
    },
    {
      label: 'Trilice',
      image: dilekBaseUrl + 'Trilice.JPG',
    },
    {
      label: 'Slice cakes',
      image: dilekBaseUrl + 'Slice cakes.JPG',
    },
    { label: 'cheesecake', image: dilekBaseUrl + '283A0323.JPG' },
    { label: 'Cakes', image: dilekBaseUrl + 'CAKE.jpg' },
    { label: 'Cookies', image: dilekBaseUrl + 'Cookies.jpg' },
    { label: 'Pastries', image: dilekBaseUrl + 'Pastries.JPG' },
    { label: 'Birthday cakes', image: dilekBaseUrl + 'CAKE.jpg' },
    { label: 'Baklava', image: dilekBaseUrl + 'Baklava.JPG' },
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

export default CoffeeCategory
