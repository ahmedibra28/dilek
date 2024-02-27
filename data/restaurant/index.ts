const data = [
  {
    category: 'BREAKFAST',
    item: 'Turkish Luxury Breakfast (for 2)',
    image: '283A0396.JPG',
    price: 5,
    description:
      'Su borek, kol borek, potato of the day, jam, butter, cheddar cheese, feta cheese, black and green olives, boiled egg, tomato, cucumber and honey.',
  },
  {
    category: 'BREAKFAST',
    item: 'Omelettes',
    image: '283A0358.JPG',
    price: 3,
    description: 'eggs,  sunflower oil,  salt',
  },
  {
    category: 'BREAKFAST',
    item: 'Shakshuka ',
    image: '283A0381.JPG',
    price: 3,
    description: 'tomato,  pepper, eggs,  sunflower oil,  salt',
  },
  {
    category: 'BREAKFAST',
    item: 'Scrambled Eggs',
    image: '283A0400.JPG',
    price: 2,
    description: 'eggs, 5gr sunflower oil,  salt',
  },
  {
    category: 'STATER SOUP',
    item: 'Strained Lentil Soup ',
    image: '283A0336.JPG',
    price: 3,
    description: ' lentil,  flour,  salt,  sunflower oil, tumeric',
  },
  {
    category: 'STATER SOUP',
    item: 'Vegetable Chicken Soup',
    image: '283A8578.JPG',
    price: 4,
    description: 'chicken, carrot, salt, flour, sunflower oil, cream',
  },
  {
    category: 'SALADS',
    item: 'Mediterranean Salad',
    image: '283A8606.JPG',
    price: 5,
    description:
      'feta cheese,  limon, half cucumber,  tomato, slices olives,  sweer corn,  lettuce, white cabbage,  olive oil,  pomegranate syrup',
  },
  {
    category: 'SALADS',
    item: 'Crunchy Chicken Breast Salad',
    image: '283A8594.JPG',
    price: 6,
    description:
      'chicken breast,  panko bread,  limon,  cucumber, tomato,  slices olives, sweer corn,  lettuce,  white cabbage,  olive oil,  pomegranate syrup',
  },
  {
    category: 'SALADS',
    item: 'Caesar’s Salad with Chicken',
    image: '283A8597.JPG',
    price: 6,
    description:
      'chicken breast, salad mayonnaise,  limon, cucumber,  tomato,  slices olives,  sweer corn,  lettuce, white cabbage, olive oil, pomegranate syrup',
  },
  {
    category: 'SALADS',
    item: 'Grilled Meatball Salad',
    image: '283A8585.JPG',
    price: 6.5,
    description:
      'meatballs,  limon, cucumber,  tomato,  slices olives,  sweer corn,lettuce,  white cabbage,  olive oil,  pomegranate syrup',
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Penne',
    image: '283A0459.JPG',
    price: 7,
    description: 'beef, penne pasta, Napliten sauce,  parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Spaghetti bolognese',
    image: '283A0461.JPG',
    price: 5,
    description: 'penne pasta,  Napoliten sauce, parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Penne Creamy Mushroom Sauce',
    image: '283A0489.JPG',
    price: 6,
    description: 'penne pasta, mashroom sauce, parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken with Penne',
    image: '283A0498.JPG',
    price: 6,
    description: 'chicken,penne pasta, Napoliten sauce,  parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Meatballs with Penne',
    image: '283A0494.JPG',
    price: 7,
    description: 'meatballs, penne pasta, Napoliten sauce, parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken Alfredo',
    image: '283A0511.JPG',
    price: 6,
    description: 'chicken,  pasta sauce, cream sauce, parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Fettuccine with Chicken Pane',
    image: '283A0517.JPG',
    price: 6,
    description: 'chicken, pasta sauce, Napoliten sauce, parmesan cheese',
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Fettuccine',
    image: '283A0534.JPG',
    price: 7,
    description: 'beef, pasta, cream sauce, parmesan cheese',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Grilled Chicken Steak',
    image: '283A0405.JPG',
    price: 6,
    description: 'chicken, french fries,  rice, sunflower oil, salt',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Grilled Chicken',
    image: '283A9968.JPG',
    price: 7,
    description: 'chicken,  french fries,  rice,  sunflower oil, salt',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Curry Sauce Chicken',
    image: '283A0448.JPG',
    price: 7,
    description: 'chicken, vegetables, rice, sunflower oil,  salt',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken with Soya Sauce',
    image: '283A0431.JPG',
    price: 7,
    description: 'chicken, vegetables, rice, sunflower oil',
  },
  {
    category: 'CHICKEN MENU',
    item: 'BBQ Grilled Chicken',
    image: '283A9962.JPG',
    price: 7,
    description: 'chicken, vegetables,  rice, sunflower oil,  salt',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken Fajita',
    image: '283A0435.JPG',
    price: 8,
    description: 'chicken,  vegetables, sunflower oil,  salt,  rice',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken fingers',
    image: '283A0416.JPG',
    price: 7,
    description:
      'chicken, french fries, mozarella cheese, milk, flour,  salt, sunflower oil',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken saute',
    image: '283A0423.JPG',
    price: 7,
    description: '',
  },
  {
    category: 'CHICKEN MENU',
    item: 'Chicken Gratin',
    image: '283A0452.JPG',
    price: 8,
    description: '',
  },
  {
    category: 'MEAT MENU',
    item: 'Grilled Meatballs',
    image: '283A0179.JPG',
    price: 8,
    description: 'meatballs, bread,  rice,  french fries',
  },
  {
    category: 'MEAT MENU',
    item: 'Beef Fajita',
    image: '283A0168 .JPG',
    price: 8,
    description: 'beef, vegetables, rice',
  },
  {
    category: 'MEAT MENU',
    item: 'Meatball Gratin',
    image: '283A0193.JPG',
    price: 8,
    description:
      'meatballs, french fries mozarella cheese,  milk,  flour,  salt,  sunflower oil',
  },
  {
    category: 'MEAT MENU',
    item: 'Meat saute',
    image: '283A0173.JPG',
    price: 8,
    description: 'beef, vegetables,  rice',
  },
  {
    category: 'MEAT MENU',
    item: 'Lamb tandoori',
    image: 'Lamb tandoori.JPG',
    price: 10.5,
    description: 'lamb meat,  bread, rice',
  },
  {
    category: 'SPECIAL PIZZA',
    item: 'Margarita pizza',
    image: '283A9960.JPG',
    price: 5,
    description: '',
  },
  {
    category: 'SPECIAL PIZZA',
    item: 'Special Pizza',
    image: '283A0142.JPG',
    price: 7,
    description:
      'mozarella cheese,  flour, salt, sunflower oil,  egg, yeast,  milk,  sosis, salami,  tomato, sweet corn, pepper,  slice olives,  mushroom, (basil leaves) ',
  },
  {
    category: 'SPECIAL PIZZA',
    item: 'Chicken Pizza',
    image: '283A0135.JPG',
    price: 7,
    description:
      'mozarella cheese,  flour,  salt, sunflower oil,  egg,  yeast,  milk,  vegetables, sweet corn,  chicken',
  },
  {
    category: 'SPECIAL PIZZA',
    item: 'Meatball Pizza',
    image: '283A0148.JPG',
    price: 8,
    description:
      'mozarella cheese,  flour,  salt,  sunflower oil,egg,  yeast,  milk,  meatball,  sweet corn, vegetable',
  },
  {
    category: 'SPECIAL PIZZA',
    item: 'Beef Pizza',
    image: '283A0133.JPG',
    price: 8,
    description:
      'mozarella cheese,  flour, salt, sunflower oil, egg,  yeast, milk,  vegetables,  sweet corn,  beef',
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Burger',
    image: '283A0340.JPG',
    price: 5,
    description:
      'chicekn, burger bread, pickle,onion, tomato, lettuce,  french fries, ketchup, moyannaise',
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Cheseeburger',
    image: '283A0333.JPG',
    price: 6,
    description:
      'chicekn, burger bread, pickle,onion, tomato, lettuce, french fries, ketchup, moyannaise, cheddar cheese',
  },
  {
    category: 'BURGERS ',
    item: 'Grilled Chicken Burger',
    image: '283A0354.JPG',
    price: 6,
    description:
      'chicekn, burger bread, pickle,onion, tomato, lettuce, french fries, ketchup, moyannaise',
  },
  {
    category: 'BURGERS ',
    item: 'Cheese Burger',
    image: '283A0349.JPG',
    price: 6.5,
    description:
      'meatball, burger bread, pickle, onion, tomato, lettuce, french fries, ketchup, mayonnaise, cheddar cheese',
  },
  {
    category: 'BURGERS ',
    item: 'Meatball Burger',
    image: '283A0341.JPG',
    price: 6,
    description:
      'meatball, burger bread, pickle, onion, tomato, lettuce,  french fries, ketchup, mayonnaise',
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Chicken Sandwich',
    image: '283A0199.JPG',
    price: 3,
    description: 'chicken ,vegetables,  french fries, sandwich bread',
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Grilled Meatball Sandwich',
    image: '283A0205.JPG',
    price: 3.5,
    description: 'meatball,  vegetables,  french fries, sandwich bread',
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Meatball Wrap',
    image: '283A0154.JPG',
    price: 6,
    description: 'meatball, vegetables,  french fries, tortilla bread',
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Chicken Wrap',
    image: '283A0125.JPG',
    price: 5,
    description: 'chicken,  vegetables, french fries, tortilla bread',
  },
  {
    category: 'WRAPS AND SANDWICHES',
    item: 'Beef Wrap',
    image: '283A0161.JPG',
    price: 6,
    description: 'beef,  vegetables, french fries, tortilla bread',
  },
  {
    category: 'DRINKS',
    item: 'Mango ',
    image: '283A9897.JPG',
    price: 2.5,
    description: '',
  },
  {
    category: 'DRINKS',
    item: 'Orange',
    image: '283A9929.JPG',
    price: 2.5,
    description: '',
  },
  {
    category: 'DRINKS',
    item: 'Watermelon',
    image: '283A9902.JPG',
    price: 1.75,
    description: '',
  },
  {
    category: 'DRINKS',
    item: 'Grape fruit',
    image: '283A9913.JPG',
    price: 2,
    description: '',
  },
  {
    category: 'DRINKS',
    item: 'Lemon',
    image: '283A9921.JPG',
    price: 1.75,
    description: '',
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
