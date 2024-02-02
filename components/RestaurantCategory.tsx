import React from 'react'
import BlurImage from './BlurImage'

const RestaurantCategory = ({ label }: { label: string }) => {
  const noImageAvailable =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

  // const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/karamel/'

  const categories = [
    { label: 'BREAKFAST', image: noImageAvailable },
    { label: 'STATER SOUP', image: noImageAvailable },
    { label: 'SALADS', image: noImageAvailable },
    { label: 'PASTA MENU', image: noImageAvailable },
    { label: 'CHICKEN MENU', image: noImageAvailable },
    { label: 'MEAT MENU', image: noImageAvailable },
    { label: 'PIZZA', image: noImageAvailable },
    { label: 'BURGERS ', image: noImageAvailable },
    { label: 'WRAPS AND SANDWICHES', image: noImageAvailable },
    { label: 'DRINKS', image: noImageAvailable },
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

export default RestaurantCategory
