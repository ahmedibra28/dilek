const data = [
  {
    category: 'BREAKFAST',
    item: 'Mixed Turkish Breakfast for (2)',
    image: 'mixed.jpg',
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
    item: 'Menemen(Shakshuka)',
    description: 'tomato,  pepper, eggs,  sunflower oil,  salt',
    image: '283A0381.JPG',
    price: 3,
  },
  {
    category: 'BREAKFAST',
    item: 'Menemen(Shakshuka Cheese)',
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
    category: 'STATER',
    item: 'Mediterranean Salad',
    description:
      'feta cheese,  limon, cucumber,  tomato, slices olives,  sweet corn,  lettuce, white cabbage, Red cabbage, olive oil,  pomegranate syrup',
    image: '283A8606.JPG',
    price: 6,
  },
  {
    category: 'STATER',
    item: 'Crunchy Chicken Breast Salad',
    description:
      'chicken breast,  panko bread,  limon,  cucumber, tomato,  slices olives, sweet corn,  lettuce,  white cabbage, Red cabbage, olive oil,  pomegranate syrup',
    image: '283A8594.JPG',
    price: 6,
  },
  {
    category: 'STATER',
    item: 'Caesar’s Salad with Chicken',
    description:
      'chicken breast,  limon, cucumber,  tomato,  slices olives,  sweet corn,  lettuce, white cabbage, Red cabbage, olive oil, pomegranate syrup',
    image: '283A8597.JPG',
    price: 6,
  },
  {
    category: 'STATER',
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
    item: 'Meat shish',
    image: 'lamb shish.jpg',
    description: 'Beef, tomato, pepper, onion, rice, lavash',
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
    description: 'chicken, rice, pepper, onion, tomato.',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken shish',
    image: 'chicken shish.jpg',
    description: 'chicken, rice, pepper, onion, tomato.',
    price: 8,
  },
  {
    category: 'CHICKEN MENU KEBAB',
    item: 'Chicken wings',
    image: 'chicken wings.jpg',
    description: 'Chicken wings, rice, pepper, onion, tomato.',
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
    description:
      'Minced beef, tomato, pepper, onion, persley, pepper paste, sunflower oil, black pepper, salt, red cabbage, carrot, lettuce, lemon',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Minced meat Pide',
    image: 'DSC09913.JPG',
    price: 8,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, minced meat, onion, green pepper, red pepper, tomato.',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Meat pide',
    image: 'DSC09975.JPG',
    price: 9,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, tenderloin, onion, green pepper, tomato, red pepper.',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Cheese pide',
    image: 'DSC09920.JPG',
    price: 7,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, mozarella cheese',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Mixed pide',
    image: 'DSC09980.JPG',
    price: 9,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, minced meat, tenderloin, mozarella cheese onion, green pepper, red pepper, tomato, tomato paste, black pepper',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Mediterranean pide',
    image: 'DSC09930.JPG',
    price: 7,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, feta cheese, persley',
  },
  {
    category: 'LAHMACUN AND PIDE',
    item: 'Vegetable pide',
    image: 'DSC09936.JPG',
    price: 7,
    description:
      'Milk, Yeast, Sugar, Salt, Flour, Sunflower oil, mozarella cheese, tomato, green pepper, slice olives',
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
    item: 'Meat Shish DURUM',
    image: '283A0156.JPG',
    description: 'Beef meat, tomato, onion, pepper, french fries',
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
  {
    category: 'Hot Drinks',
    item: 'Espresso',
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
    image: '283A9672.JPG',
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
    image: '283A9611.JPG',
    price: 2.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Black Tea',
    image: '283A9653.JPG',
    price: 1,
  },
  {
    category: 'Hot Drinks',
    item: 'Somali Tea',
    image: '283A9684.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Masala Tea',
    image: '283A9658.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Chai Tea',
    image: '283A9649.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Qaxwo Somali',
    image: '283A9627.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Hot Chocolate',
    image: '283A9638.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Dawa Tea',
    image: '283A9624.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'iced cappuccino',
    image: '283A0376.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'iced latte',
    image: '283A0370.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'iced mocha',
    image: '283A0394.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'iced americano',
    image: '283A0365.JPG',
    price: 1.5,
  },
  {
    category: 'Cold Drinks',
    item: 'iced spanish latte',
    image: '283A0384.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'Classic Iced Tea',
    image: 'DSC02239.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'Strawberry Iced Tea',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'Peach Iced Tea',
    image: 'DSC02247.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'mango Iced Tea',
    image: '283A0349.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'Caramel cafe frappe',
    image: '283A0276 (1).JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'vanilla cafe frappe',
    image: '283A0274.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'mocha frappe',
    image: '283A0261.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'strawberry frappe',
    image: '283A0187.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'blueberry frappe',
    image: '283A0205.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'Peach frappe',
    image: '283A0229.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'Classic Mojito',
    image: 'DSC02155.JPG',
    price: 2,
  },
  {
    category: 'Cold Drinks',
    item: 'Strawberry Mojito',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'Blueberry Mojito',
    image: 'DSC02192.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'Peach Mojito',
    image: 'DSC02212.JPG',
    price: 2.5,
  },
  {
    category: 'Cold Drinks',
    item: 'Mango smoothie',
    image: '283A0340.jpg',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'Strawberry smoothie',
    image: '283A4254.jpg',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'Blueberry smoothie',
    image: '283A0317.JPG',
    price: 3,
  },
  {
    category: 'Cold Drinks',
    item: 'Peach Smoothie',
    image: '283A03400.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Rice Pudding',
    image: '283A8873.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Kaskul',
    image: '283A9945.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'kazandibi',
    image: '283A0306.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Caramel Dream',
    image: '283A8864.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Trilice Raspberry',
    image: '283A8870.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Trilice Caramel',
    image: 'Trilice Caramel.jpg',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Trilice Lotus',
    image: 'Trilice Lotus.jpg',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Éclair (Big)',
    image: 'Éclair (Big).JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Éclair (Small)',
    image: 'Éclair (Small).JPG',
    price: 1.5,
  },
  {
    category: 'Desserts',
    item: 'French Eclair',
    image: 'French Eclair.jpg',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Donut',
    image: 'Donut.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Berliner',
    image: 'Berliner.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Magnolia (Oreo)',
    image: '283A0293.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Magnolia Strawberry',
    image: '283A8883.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Sufle',
    image: 'Sufle.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Basbousa',
    image: '283A8955.JPG',
    price: 1.5,
  },
  {
    category: 'Desserts',
    item: 'Sekerpare',
    image: 'Sekerpare.JPG',
    price: 1.5,
  },
  {
    category: 'Desserts',
    item: 'Mango Pie',
    image: 'Mango Pie.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Apple Pie',
    image: '283A4409.jpg',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Revani',
    image: 'Revani.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Izmir Bombası',
    image: 'Izmir Bombası.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Pürüzyen',
    image: 'Pürüzyen.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Cinnamon Role',
    image: '283A9954.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Cupcake',
    image: 'Cupcake.JPG',
    price: 1.5,
  },
  {
    category: 'Desserts',
    item: 'English cake',
    image: 'DSC00213.JPG',
    price: 5,
  },
  {
    category: 'Desserts',
    item: 'Chocolate cake',
    image: '283A8876.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Carrot cake',
    image: 'Carrot cake.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Orange cake',
    image: 'Orange cake.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Brownie cake',
    image: 'Brownie cake.JPG',
    price: 2,
  },
  {
    category: 'Desserts',
    item: 'Pistachio slice cake',
    image: '283A8908.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Nescafe Slice Cake',
    image: '283A8812.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Raspbery Slice Cake',
    image: '283A8915.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Orange Slice Cake',
    image: '283A8828.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Cheesecake Raspberry',
    image: '283A0323.JPG',
    price: 4,
  },
  {
    category: 'Desserts',
    item: 'Cheesecake Caramel',
    image: '283A0327.JPG',
    price: 4,
  },
  {
    category: 'Desserts',
    item: 'Cheesecake Lotus',
    image: 'DSC00151.JPG',
    price: 4,
  },
  {
    category: 'Desserts',
    item: 'Cheesecake Oreo',
    image: 'DSC00245.JPG',
    price: 4,
  },
  {
    category: 'Desserts',
    item: 'Roll Cake',
    image: '283A8902.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Tiramisu',
    image: '283A9276.JPG',
    price: 3,
  },
  {
    category: 'Desserts',
    item: 'Orange Cookies',
    image: 'Orange Cookies.jpg',
    price: 1.5,
  },
  {
    category: 'Desserts',
    item: 'Baklava Pistachio',
    image: 'Baklava Pistachio.JPG',
    price: 5.5,
  },
  {
    category: 'Desserts',
    item: 'Baklava Walnut',
    image: 'Baklava Walnut.JPG',
    price: 4,
  },
  {
    category: 'Desserts',
    item: 'Baklava Pistachio Roll',
    image: 'Baklava Pistachio Roll.JPG',
    price: 7.5,
  },
  {
    category: 'Desserts',
    item: 'Baklava Walnut Roll',
    image: 'Baklava Walnut Roll.jpg',
    price: 4.5,
  },
  {
    category: 'Desserts',
    item: 'Baklava Pistachio Prenses',
    image: 'Baklava Pistachio Prenses.JPG',
    price: 5.5,
  },
  {
    category: 'Desserts',
    item: 'Baklava Şöbiyet',
    image: 'Baklava Şöbiyet.JPG',
    price: 4.5,
  },
  {
    category: 'Desserts',
    item: 'Cold Baklava',
    image: 'DSC00266.JPG',
    price: 4.5,
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
