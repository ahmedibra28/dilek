const data = [
  {
    category: 'BREAKFAST',
    item: 'Turkish Luxury Breakfast (for 2)',
    image: '283A0396.JPG',
    price: 5,
  },
  {
    category: 'BREAKFAST',
    item: 'Omelettes',
    image: '283A0358.JPG',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Shakshuka ',
    image: '283A0381.JPG',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Scrambled Eggs',
    image: '283A0400.JPG',
    price: 2,
  },
  {
    category: 'STATER SOUP',
    item: 'Strained Lentil Soup ',
    image: '283A0336.JPG',
    price: 3,
  },
  {
    category: 'STATER SOUP',
    item: 'Vegetable Chicken Soup',
    image: '283A8578.JPG',
    price: 4,
  },
  {
    category: 'SALADS',
    item: 'Mediterranean Salad',
    image: '283A8606.JPG',
    price: 5,
  },
  {
    category: 'SALADS',
    item: 'Crunchy Chicken Breast Salad',
    image: '283A8594.JPG',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Caesar’s Salad with Chicken',
    image: '283A8597.JPG',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Grilled Meatball Salad',
    image: '283A8585.JPG',
    price: 6.5,
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Penne',
    image: '283A0459.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Spaghetti bolognese',
    image: '283A0461.JPG',
    price: 5,
  },
  {
    category: 'PASTA MENU',
    item: 'Penne Creamy Mushroom Sauce',
    image: '283A0489.JPG',
    price: 6,
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken with Penne',
    image: '283A0498.JPG',
    price: 6,
  },
  {
    category: 'PASTA MENU',
    item: 'Meatballs with Penne',
    image: '283A0494.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken Alfredo',
    image: '283A0511.JPG',
    price: 6,
  },
  {
    category: 'PASTA MENU',
    item: 'Fettuccine with Chicken Pane',
    image: '283A0517.JPG',
    price: 6,
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Fettuccine',
    image: '283A0534.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Grilled Chicken Steak',
    image: '283A0405.JPG',
    price: 6,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Grilled Chicken',
    image: '283A9968.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Curry Sauce Chicken',
    image: '283A0448.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken with Soya Sauce',
    image: '283A0431.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'BBQ Grilled Chicken',
    image: '283A9962.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken Fajita',
    image: '283A0435.JPG',
    price: 8,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken fingers',
    image: '283A0416.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken saute',
    image: '283A0423.JPG',
    price: 7,
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken Gratin',
    image: '283A0452.JPG',
    price: 8,
  },
  {
    category: 'MEAT MENU',
    item: 'Grilled Meatballs',
    image: '283A0179.JPG',
    price: 8,
  },
  {
    category: 'MEAT MENU',
    item: 'Beef Fajita',
    image: '283A0168 .JPG',
    price: 8,
  },
  {
    category: 'MEAT MENU',
    item: 'Meatball Gratin',
    image: '283A0193.JPG',
    price: 8,
  },
  {
    category: 'MEAT MENU',
    item: 'Meat saute',
    image: '283A0173.JPG',
    price: 8,
  },
  {
    category: 'MEAT MENU',
    item: 'Lamb tandoori',
    image: '283A0187.JPG',
    price: 10.5,
  },
  {
    category: 'PIZZA',
    item: 'Margarita pizza',
    image: '283A9960.JPG',
    price: 5,
  },
  {
    category: 'PIZZA',
    item: 'Special Pizza',
    image: '283A0142.JPG',
    price: 7,
  },
  {
    category: 'PIZZA',
    item: 'Chicken Pizza',
    image: '283A0135.JPG',
    price: 7,
  },
  {
    category: 'PIZZA',
    item: 'Meatball Pizza',
    image: '283A0148.JPG',
    price: 8,
  },
  {
    category: 'PIZZA',
    item: 'Beef Pizza',
    image: '283A0133.JPG',
    price: 8,
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Burger',
    image: '283A0340.JPG',
    price: 5,
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Cheseeburger',
    image: '283A0333.JPG',
    price: 6,
  },
  {
    category: 'BURGERS ',
    item: 'Grilled Chicken Burger',
    image: '283A0354.JPG',
    price: 6,
  },
  {
    category: 'BURGERS ',
    item: 'Cheese Burger',
    image: '283A0349.JPG',
    price: 6.5,
  },
  {
    category: 'BURGERS ',
    item: 'Meatball Burger',
    image: '283A0341.JPG',
    price: 6,
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Chicken Sandwich',
    image: '283A0199.JPG',
    price: 3,
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Grilled Meatball Sandwich',
    image: '283A0205.JPG',
    price: 3.5,
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Meatball Wrap',
    image: '283A0154.JPG',
    price: 6,
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Chicken Wrap',
    image: '283A0125.JPG',
    price: 5,
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Beef Wrap',
    image: '283A0161.JPG',
    price: 6,
  },
  {
    category: 'DRINKS',
    item: 'Mango ',
    image: '283A9897.JPG',
    price: 2.5,
  },
  {
    category: 'DRINKS',
    item: 'Orange',
    image: '283A9929.JPG',
    price: 2.5,
  },
  {
    category: 'DRINKS',
    item: 'Watermelon',
    image: '283A9902.JPG',
    price: 1.75,
  },
  {
    category: 'DRINKS',
    item: 'Grey fruit',
    image: '283A9913.JPG',
    price: 2,
  },
  {
    category: 'DRINKS',
    item: 'Lemon',
    image: '283A9921.JPG',
    price: 1.75,
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
