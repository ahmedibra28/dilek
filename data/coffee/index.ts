const data = [
  {
    category: 'Hot Drinks',
    item: 'Espresso',
    description: 'espresso.',
    image: '283A9587.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Cappuccino',
    description: 'espresso double shot, milk',
    image: '283A9601.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Latte',
    description: 'espresso single shot or double , milk',
    image: '283A9606.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Spanish Latte',
    description: 'espresso, condensed milk , milk',
    image: '283A9672.JPG',
    price: 2.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Americano',
    description: 'espresso double, hot water',
    image: '283A9575.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Espresso Machiato',
    description: 'espresso , Milk foam',
    image: '283A9621.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Moche',
    description: 'espresso double , chocolate sauce , condensed milk, Milk',
    image: '283A9611.JPG',
    price: 2.5,
  },
  {
    category: 'Tea and more',
    item: 'Black Tea',
    description: 'tea bag , hot water',
    image: '283A9653.JPG',
    price: 1,
  },
  {
    category: 'Tea and more',
    item: 'Somali Tea',
    description: 'tea powder, cinnamon, cardamom , milk',
    image: '283A9684.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Masala Tea',
    description: 'tea powder , cinnamon, cardamom, Ginger, milk',
    image: '283A9658.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Chai Tea',
    description: 'tea powder , milk , chai tea monin syrup',
    image: '283A9649.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Qaxwo Somali',
    description: 'qaxwo powder, milk',
    image: '283A9627.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Hot Chocolate',
    description: 'chocolate sauce monin, milk',
    image: '283A9638.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Dawa Tea',
    description: 'lemon , honey , Ginger , hot water',
    image: '283A9624.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced cappuccino',
    description: 'espresso, milk, ice.',
    image: '283A0376.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced latte',
    description: 'espresso, milk , ice',
    image: '283A0370.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced mocha',
    description: 'espresso, milk, chocolate powder, ice',
    image: '283A0394.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced americano',
    description: 'espresso, water , ice',
    image: '283A0365.JPG',
    price: 1.5,
  },
  {
    category: 'Ice Coffee',
    item: 'iced spanish latte',
    description: 'espresso, condensed milk, milk, ice',
    image: '283A0384.JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Classic Iced Tea',
    description: 'tea, lemon , Sugar syrup , water, ice',
    image: 'DSC02239.JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Strawberry Iced Tea',
    description: 'tea, lemon, strawberry puree, water , ice',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'Peach Iced Tea',
    description: 'tea, lemon, peach puree, wate, ice',
    image: 'DSC02247.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'mango Iced Tea',
    description: 'tea, lemon , mango puree, water, ice',
    image: '283A0349.JPG',
    price: 2.5,
  },
  {
    category: 'Frappuccino',
    item: 'Caramel cafe frappe',
    description: 'vanilla frappe powder, caramel sauce, espresso, milk, ice',
    image: '283A0276 (1).JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'vanilla cafe frappe',
    description: 'vanilla frappe powder, vanilla syrup , espresso, milk, ice',
    image: '283A0274.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'mocha frappe',
    description: 'vanilla frappe powder , chocolate sauce, espresso, milk, ice',
    image: '283A0261.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'strawberry frappe',
    description: 'vanilla frappe powder , strawberry puree , milk, ice',
    image: '283A0187.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'blueberry frappe',
    description: 'vanilla frappe powder , blueberry puree , milk, ice',
    image: '283A0205.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'Peach frappe',
    description: 'vanilla frappe powder, Peach puree, milk , ice',
    image: '283A0229.JPG',
    price: 3,
  },
  {
    category: 'Mojito',
    item: 'Classic Mojito',
    description: 'mint, lemon, Sugar syrup , spirit, ice',
    image: 'DSC02155.JPG',
    price: 2,
  },
  {
    category: 'Mojito',
    item: 'Strawberry Mojito',
    description: 'mint , lemon, Strawberry puree, spirit, ice',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Mojito',
    item: 'Blueberry Mojito',
    description: 'mint, lemon, Blueberry puree, spirit, ice',
    image: 'DSC02192.JPG',
    price: 2.5,
  },
  {
    category: 'Mojito',
    item: 'Peach Mojito',
    description: 'mint , lemon, peach puree spirit , ice',
    image: 'DSC02212.JPG',
    price: 2.5,
  },
  {
    category: 'Smoothie',
    item: 'Mango smoothie',
    description: 'yogurt powder monin, mango puree, milk,',
    image: '283A0340.jpg',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Strawberry smoothie',
    description: 'yogurt powder monin, strawberry puree, milk, ice',
    image: '283A4254.jpg',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Blueberry smoothie',
    description: 'yogurt powder monin, blueberry puree, milk , ice',
    image: '283A0317.JPG',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Peach Smoothie',
    description: 'yogurt powder monin, peach puree, milk , ice',
    image: '283A03400.JPG',
    price: 3,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Profiterole',
    image: '283A4343.jpg',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Rice Pudding',
    image: '283A8873.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Kaskul',
    image: '283A9945.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'kazandibi',
    image: '283A0306.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Caramel Dream',
    image: '283A8864.JPG',
    price: 2,
  },
  {
    category: 'Trilice',
    item: 'Raspberry Trilice',
    image: '283A8870.JPG',
    price: 3,
  },
  // {
  //   category: 'Trilice',
  //   item: 'Caramel Trilice',
  //   image: '283A8864.JPG',
  //   price: 3,
  // },
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
    item: 'Wet Cake',
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
    item: 'Simit',
    image: '283A4307.jpg',
    price: 1,
  },
  // {
  //   category: 'Bakery',
  //   item: 'Donut',
  //   image: '283A4392.jpg',
  //   price: 2,
  // },
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
    item: 'Donut',
    image: '283A4386.jpg',
    price: 2,
  },
  {
    category: 'Bakery',
    item: 'Basbousa',
    image: '283A8955.JPG',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Sweet Cookies',
    image: '283A4259.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery',
    item: 'Swiss roll',
    image: '283A8902.JPG',
    price: 3,
  },
  {
    category: 'Bakery',
    item: 'Cinnamon roll',
    image: '283A9954.JPG',
    price: 2,
  },
  {
    category: 'Bakery',
    item: 'Moist cake',
    image: '283A8935.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Bamboo strawberry cake',
    image: '283A8915.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Bamboo pistachio cake',
    image: '283A8908.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Bamboo nescafe cake',
    image: '283A8812.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Bamboo orange cake',
    image: '283A8828.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Heart cake',
    image: '283A0318.JPG',
    price: 3,
  },
  {
    category: 'Slice cakes',
    item: 'Chatoh strawberry',
    image: '283A0293.JPG',
    price: 3,
  },
  // {
  //   category: 'Slice cakes',
  //   item: 'banana chocolate Malaga',
  //   image: '283A0293.JPG',
  //   price: 3,
  // },
  {
    category: 'magnolia',
    item: 'Magnolia strawberry',
    image: '283A8883.JPG',
    price: 3,
  },
  {
    category: 'magnolia',
    item: 'Magnolia oreo',
    image: '283A0297.JPG',
    price: 3,
  },
  {
    category: 'cheesecake',
    item: 'Caramel cheesecake',
    image: '283A0327.JPG',
    price: 4,
  },
  {
    category: 'cheesecake',
    item: 'Strawberry cheesecake',
    image: '283A0323.JPG',
    price: 4,
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
    description: item?.description || '',
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
