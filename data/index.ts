const data = [
  {
    category: 'Hot Drinks',
    item: 'Espresso ',
    image: '283A9587.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Cappuccino',
    image: '283A9601.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Latte',
    image: '283A9606.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Spanish Latte',
    image: '283A9611.JPG',
    price: 2.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Americano',
    image: '283A9575.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Espresso Machiato',
    image: '283A9621.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Moche',
    image: '283A9638.JPG',
    price: 2.5,
  },
  {
    category: 'Tea and more',
    item: 'Black Tea ',
    image: '283A9653.JPG',
    price: 1,
  },
  {
    category: 'Tea and more',
    item: 'Somali Tea',
    image: '283A9684.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Masala Tea',
    image: '283A9658.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Chai Tea',
    image: '283A9649.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Qaxwo Somali',
    image: '283A9627.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Hot Chocolate',
    image: '283A9638.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Dawa Tea',
    image: '283A9624.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced cappuccino',
    image: '283A0382.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced latte',
    image: '283A0284.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced mocha',
    image: '283A0264.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced americano',
    image: '283A0365.JPG',
    price: 1.5,
  },
  {
    category: 'Ice Coffee',
    item: 'iced spanish latte ',
    image: '283A0276 (1).JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Classic Iced Tea',
    image: 'DSC02239.JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Strawberry Iced Tea',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'Peach Iced Tea',
    image: 'DSC02212.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'mango Iced Tea',
    image: 'DSC02247.JPG',
    price: 2.5,
  },
  {
    category: 'Frappuccino',
    item: 'Caramel cafe frappe',
    image: '283A0276 (1).JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'vanilla cafe frappe',
    image: '283A0276 (1).JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'mocha frappe',
    image: '283A0261.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'strawberry frappe',
    image: '283A0187.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'blueberry frappe',
    image: '283A0205.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'Peach frappe',
    image: '283A0229.JPG',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Mango smoothie',
    image: '283A0297.JPG',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Strawberry smoothie',
    image: '283A4253.jpg',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Blueberry smoothie',
    image: '283A0317.JPG',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Peach Smoothie',
    image: '283A0340.JPG',
    price: 3,
  },
  {
    category: 'Bakery',
    item: 'Acma Cheese',
    image: '283A4413.jpg',
    price: 1.25,
  },
  {
    category: 'Bakery',
    item: 'Acma Plain',
    image: '283A4321.jpg',
    price: 1,
  },
  {
    category: 'Bakery',
    item: 'Acma olive',
    image: '283A4389.jpg',
    price: 1.25,
  },
  {
    category: 'Bakery',
    item: 'Wet Cake ',
    image: '283A4342.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Pogaca Plain',
    image: '283A4270.jpg',
    price: 1,
  },
  {
    category: 'Bakery',
    item: 'Pogaca Cheese',
    image: '283A4405.jpg',
    price: 1.25,
  },
  {
    category: 'Bakery',
    item: 'Carrot Cake',
    image: '283A4369.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Profiterole',
    image: '283A4343.jpg',
    price: 2,
  },
  {
    category: 'Bakery',
    item: 'Simit',
    image: '283A4307.jpg',
    price: 1,
  },
  {
    category: 'Bakery',
    item: 'Donut ',
    image: '283A4392.jpg',
    price: 2,
  },
  {
    category: 'Bakery',
    item: 'Apple Pie',
    image: '283A4409.jpg',
    price: 2,
  },
  {
    category: 'Bakery',
    item: 'Orange Cookies',
    image: '283A4281.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Cupcake',
    image: '283A4330.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Chocolate Donut ',
    image: '283A4386.jpg',
    price: 2,
  },
]

const noImageAvailable =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

export const getItems = () => {
  const imageBaseUrl =
    'https://farshaxan.blr1.cdn.digitaloceanspaces.com/dilek/'
  return data?.map((item) => ({
    ...item,
    image: item?.image ? imageBaseUrl + item.image : noImageAvailable,
    price: item?.price || 0,
  }))
}

export const getCategories = () => {
  return getItems().map((item) => item.category)
}

export const getItemsByCategory = (category: string) => {
  return getItems().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )
}
