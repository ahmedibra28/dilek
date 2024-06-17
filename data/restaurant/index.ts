const data = [
  {
    category: 'BREAKFAST',
    item: 'Mixed Turkish Breakfast for (2)',
    image: 'mixed breakfast.jpg',
    description:
      'kol börek, boiled egg, feta cheese, mozarella cheese, french fries, jam, butter, honey, cream shockella, black olives, green olives, salami, tomato, cucumber, poğaça (açma, simit), bread and Turkish tea',
    price: 20,
  },
  {
    category: 'BREAKFAST',
    item: 'Turkish Luxury Breakfast',
    description:
      ' mozarella cheese, feta cheese,  french fries, jam, butter, honey,  cream shockella,  black olives,  green olives,  salami,  tomato,  cucumber, poğaça (açma, simit), scrambled egg, bread and Turkish tea',
    image: '283A0396.JPG',
    price: 6,
  },
  {
    category: 'BREAKFAST',
    item: 'Omelettes',
    description: 'eggs,  sunflower oil,  salt',
    image: '283A0358.JPG',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Omelette cheese',
    image: '283A0358.JPG',
    description: 'eggs,  sunflower oil,  salt, cheese',
    price: 3.5,
  },
  {
    category: 'BREAKFAST',
    item: 'Shakshuka ',
    description: 'tomato,  pepper, eggs,  sunflower oil,  salt',
    image: '283A0381.JPG',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Shakshuka cheese',
    image: '283A0381.JPG',
    description: 'tomato,  pepper, eggs,  sunflower oil,  salt, cheese.',
    price: 3.5,
  },
  {
    category: 'BREAKFAST',
    item: 'Scrambled Eggs',
    description: 'eggs, sunflower oil,  salt',
    image: '283A0400.JPG',
    price: 2.5,
  },
  {
    category: 'BREAKFAST',
    item: 'Acma ',
    description: 'Plain,  Feta cheese, Mozzarella cheese, Olives.',
    image: '283A4318.jpg',
    price: 1.25,
  },
  {
    category: 'BREAKFAST',
    item: 'Pogaca',
    description: 'Plain,  Feta cheese, Mozzarella cheese, Olives.',
    image: '283A4404.jpg',
    price: 1.25,
  },
  {
    category: 'BREAKFAST',
    item: 'Simit',
    description: 'bur, sokor, cusbo, saliid cadey, margarine, sisin',
    image: '283A4307.jpg',
    price: 1,
  },
  {
    category: 'BREAKFAST',
    item: 'Borek',
    description: 'Minced meat, Potato, Cheese.',
    image: 'DSC00238.JPG',
    price: 1.5,
  },
  {
    category: 'BREAKFAST',
    item: 'Extras',
    description:
      'kol börek,  feta cheese, mozarella cheese, french fries, jam,  butter,  honey, cream shockella,  black olives,  green olives,  salami, tomato, cucumber.',
    image: 'Extras.jpg',
    price: 1.5,
  },
  {
    category: 'STATER',
    item: 'Strained Lentil Soup ',
    description: ' lentil,  flour,  salt,  sunflower oil, tumeric',
    image: '283A0336.JPG',
    price: 3,
  },
  {
    category: 'STATER',
    item: 'Vegetable Chicken Soup',
    description: 'chicken, carrot, salt, flour, sunflower oil, cream',
    image: '283A8578.JPG',
    price: 3,
  },
  {
    category: 'SALADS',
    item: 'Mediterranean Salad',
    description:
      'feta cheese,  limon, cucumber,  tomato, slices olives,  sweet corn,  lettuce, white cabbage, Red cabbage, olive oil,  pomegranate syrup',
    image: '283A8606.JPG',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Crunchy Chicken Breast Salad',
    description:
      'chicken breast,  panko bread,  limon,  cucumber, tomato,  slices olives, sweet corn,  lettuce,  white cabbage, Red cabbage, olive oil,  pomegranate syrup',
    image: '283A8594.JPG',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Caesar’s Salad with Chicken',
    description:
      'chicken breast,  limon, cucumber,  tomato,  slices olives,  sweet corn,  lettuce, white cabbage, Red cabbage, olive oil, pomegranate syrup',
    image: '283A8597.JPG',
    price: 6,
  },
  {
    category: 'SALADS',
    item: 'Grilled Meatball Salad',
    description:
      'meatballs,  limon, cucumber,  tomato,  slices olives,  sweet corn, lettuce,  white cabbage, Red cabbage, olive oil,  pomegranate syrup',
    image: '283A8585.JPG',
    price: 6.5,
  },
  {
    category: 'DONER MENU',
    item: 'Chicken DONER plate',
    description: 'DONER meat, rice, tomato, pepper, onion, french fries',
    image: 'DSC00036.JPG',
    price: 8,
  },
  {
    category: 'DONER MENU',
    item: 'Meat DONER plate',
    description: 'DONER meat, rice, tomato, pepper, onion, french fries',
    image: 'DSC00041.JPG',
    price: 8.5,
  },
  {
    category: 'DONER MENU',
    item: 'Meat DONER iskender ',
    description: 'DONER meat, youghurt, iskender sauce, bread, butter',
    price: 11,
    image: 'DSC09863.JPG',
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Mixed kebab',
    image: 'DSC03466.JPG',
    description:
      'Meat doner, chicken shish, chicken wings shish, Adana kebab, lamb shish',
    price: 15,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Adana kebab',
    image: 'DSC03430.JPG',
    description: 'meat,  tomato, pepper,  onion, rice, lavash',
    price: 8,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Urfa kebab',
    image: 'DSC03430.JPG',
    description: 'meat, tomato,  pepper, onion, rice,  lavash',
    price: 8,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Beyti kebab',
    image: 'DSC00019.JPG',
    description:
      'meat,  youghurt, tomato paste, cheese, butter, tomato,  pepper, rice, lavash',
    price: 9,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Lamb shish',
    image: 'lamb shish.jpg',
    description: 'Meat,  tomato, pepper,  onion,  rice, lavash',
    price: 10.5,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Lamb liver shish',
    image: 'lamb liver shish.jpg',
    description: 'liver, tail fat, tomato, pepper, onion, rice,  lavash',
    price: 8.5,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Grilled Meatballs',
    description: 'meat, tomato, pepper, onion, bread',
    image: '283A0179.JPG',
    price: 8,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Lamb Tandoori',
    description: 'lamb meat, rice, pide bread',
    image: 'Lamb Tandoori.JPG',
    price: 10.5,
  },
  {
    category: 'MEAT KEBAB MENU',
    item: 'Meat sac tava',
    image: 'DSC03418.JPG',
    description: 'meat, rice, pepper, tomato, onion, pide bread',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Grilled Chicken Steak',
    description: 'chicken, french fries, sunflower oil, salt',
    image: '283A0405.JPG',
    price: 7.5,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken chops',
    image: 'chicken chops.jpg',
    description: 'chicken,  french fries,  sunflower oil, salt, rice',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken shish',
    image: 'chicken shish.jpg',
    description: 'chicken,  vegetables, sunflower oil,  salt,  rice',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken wings',
    image: 'chicken wings.jpg',
    description:
      'chicken, french fries, mozarella cheese, milk, flour,  salt, sunflower oil, rice',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken sac tava',
    image: 'DSC03418.JPG',
    description: 'chicken, rice, pepper, tomato, onion, pide bread',
    price: 7,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Lahmacun',
    image: 'DSC09891.JPG',
    price: 3.5,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Minced meat Pide',
    image: 'DSC09913.JPG',
    price: 8,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Meat pide',
    image: 'DSC09975.JPG',
    price: 9,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Cheese pide',
    image: 'DSC09920.JPG',
    price: 7,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Mixed pide',
    image: 'DSC09980.JPG',
    price: 9,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Mediterranean pide',
    image: 'DSC09930.JPG',
    price: 7,
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Vegetable pide',
    image: 'DSC09936.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Penne',
    description: 'beef, penne pasta, Napliten sauce,  parmesan cheese',
    image: '283A0459.JPG',
    price: 8,
  },
  {
    category: 'PASTA MENU',
    item: 'Spaghetti bolognese',
    description: 'penne pasta,  bolognese sauce, parmesan cheese',
    image: '283A0461.JPG',
    price: 8,
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken with Penne',
    description: 'chicken, penne pasta, Napoliten sauce,  parmesan cheese',
    image: '283A0498.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Meatballs with Penne',
    description: 'meatballs, penne pasta, Napoliten sauce, parmesan cheese',
    image: '283A0494.JPG',
    price: 8,
  },
  {
    category: 'PASTA MENU',
    item: 'Chicken Alfredo',
    description: 'chicken,  Fettuccine pasta, cream sauce, parmesan cheese',
    image: '283A0511.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Fettuccine with Chicken Pane',
    description: 'chicken, Fettuccine pasta, Napoliten sauce, parmesan cheese',
    image: '283A0517.JPG',
    price: 7,
  },
  {
    category: 'PASTA MENU',
    item: 'Beef with Fettuccine',
    description: 'beef, Fettuccine pasta, cream sauce, parmesan cheese',
    image: '283A0534.JPG',
    price: 8,
  },
  {
    category: 'PIZZA',
    item: 'Margarita pizza',
    description:
      'mozarella cheese, flour, salt,  sunflower oil, egg,  yeast,  milk,  tomato.',
    image: '283A9960.JPG',
    price: 7,
  },
  {
    category: 'PIZZA',
    item: 'Special Pizza',
    description:
      'mozarella cheese,  flour, salt, sunflower oil,  egg, yeast,  milk,  sosis, salami,  tomato, sweet corn, pepper,  slice olives,  mushroom',
    image: '283A0142.JPG',
    price: 7.5,
  },
  {
    category: 'PIZZA',
    item: 'Chicken Pizza',
    description:
      'mozarella cheese,  flour,  salt, sunflower oil,  egg,  yeast,  milk,  vegetables, sweet corn,  chicken',
    image: '283A0135.JPG',
    price: 7.5,
  },
  {
    category: 'PIZZA',
    item: 'Beef Pizza',
    description:
      'mozarella cheese,  flour, salt, sunflower oil, egg,  yeast, milk,  vegetables,  sweet corn,  beef',
    image: '283A0133.JPG',
    price: 8,
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Burger',
    description:
      'chicekn, burger bread, pickle,onion, tomato, lettuce,  french fries, ketchup, moyannaise',
    image: '283A0340.JPG',
    price: 6,
  },
  {
    category: 'BURGERS ',
    item: 'Chicken Cheseeburger',
    description:
      'chicekn, burger bread, pickle,onion, tomato, lettuce, french fries, ketchup, moyannaise, cheddar cheese',
    image: '283A0333.JPG',
    price: 6.5,
  },
  {
    category: 'BURGERS ',
    item: 'Cheese Burger',
    description:
      'meatball, burger bread, pickle, onion, tomato, lettuce, french fries, ketchup, mayonnaise, cheddar cheese',
    image: 'cheese Burger.JPG',
    price: 7,
  },
  {
    category: 'BURGERS ',
    item: 'Meatball Burger',
    description:
      'meatball, burger bread, pickle, onion, tomato, lettuce,  french fries, ketchup, mayonnaise',
    image: '283A0341.JPG',
    price: 6.5,
  },
  {
    category: 'DURUM',
    item: 'Meat DONER DURUM',
    description: 'meat, tomato, onion, pepper, french fries',
    price: 6.5,
    image: '283A0156 (1).JPG',
  },
  {
    category: 'DURUM',
    item: 'Chicken DONER DURUM',
    description: 'chicken, tomato, onion, pepper, french fries',
    price: 6,
    image: '283A0122 (1).JPG',
  },
  {
    category: 'DURUM',
    item: 'Adana DURUM',
    image: '283A0150.JPG',
    description: 'meat, tomato, onion, pepper, french fries',
    price: 6.5,
  },
  {
    category: 'DURUM',
    item: 'Beyti DURUM',
    description: 'meat, tomato, onion, pepper, french fries',
    price: 6.5,
    image: '283A0150.JPG',
  },
  {
    category: 'DURUM',
    item: 'Urfa DURUM',
    description: 'meat, tomato, onion, pepper, french fries',
    price: 6.5,
    image: '283A0150.JPG',
  },
  {
    category: 'DURUM',
    item: 'Lamb shish DURUM',
    image: '283A0156.JPG',
    description: 'lamb meat, tomato, onion, pepper, french fries',
    price: 6.5,
  },
  {
    category: 'DURUM',
    item: 'Chicken shish DURUM',
    image: '283A0122.JPG',
    description: 'chicken, tomato, onion, pepper, french fries',
    price: 6,
  },
  {
    category: 'DURUM',
    item: 'Lamb liver DURUM',
    image: '283A0156.JPG',
    description: 'liver, tail fat, tomato, onion, pepper, french fries',
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
