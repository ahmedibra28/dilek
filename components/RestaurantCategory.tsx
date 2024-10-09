import React from 'react'
import BlurImage from './BlurImage'

const RestaurantCategory = ({ label }: { label: string }) => {
  // const noImageAvailable =
  //   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/dilek/'

  const categories = [
    { label: 'BREAKFAST', image: baseUrl + '283A0396.JPG' },
    { label: 'STATER', image: baseUrl + '283A0336.JPG' },
    { label: 'DONER MENU', image: baseUrl + 'DSC00041.JPG' },
    { label: 'MEAT KEBAB MENU', image: baseUrl + 'DSC03466.JPG' },
    { label: 'CHICKEN MENU KEBAB', image: baseUrl + '283A0405.JPG' },
    { label: 'LAHMACUN AND PIDE', image: baseUrl + 'DSC09891.JPG' },
    { label: 'PASTA MENU', image: baseUrl + '283A0459.JPG' },
    { label: 'PIZZA', image: baseUrl + '283A9960.JPG' },
    { label: 'BURGERS ', image: baseUrl + '283A0354.JPG' },
    { label: 'DURUM', image: baseUrl + '283A0156 (1).JPG' },
    { label: 'DRINKS', image: baseUrl + '283A9897.JPG' },
    { label: 'HOT DRINKS', image: baseUrl + '283A9587.JPG' },
    { label: 'COLD DRINKS', image: baseUrl + '283A0376.JPG' },
    { label: 'DESSERTS', image: baseUrl + '283A8873.JPG' },
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
