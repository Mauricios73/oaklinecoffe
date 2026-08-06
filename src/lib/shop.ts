export const shop = {
  name: "Oakline Coffee",
  tagline: "Your neighborhood coffee stop",
  street: "118 NW Alder Street",
  city: "Portland",
  region: "OR",
  zip: "97209",
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@oaklinecoffee.com",
  mapsQuery: "118+NW+Alder+Street+Portland+OR+97209",
  rating: 4.8,
  reviewCount: 372,
};

export const fullAddress = `${shop.street}, ${shop.city}, ${shop.region} ${shop.zip}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${shop.mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${shop.mapsQuery}&output=embed`;

export const hours = [
  { day: "Monday – Friday", time: "6:30 AM – 8:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "7:00 AM – 6:00 PM" },
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  labels?: string[];
  allergens?: string;
  options?: string;
};

export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Espresso drinks",
    items: [
      { name: "Espresso", description: "Double shot of our Alder Street blend, pulled to order.", price: "$3.00", options: "Single or double" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk in a 4 oz glass.", price: "$3.75", allergens: "Milk" },
      { name: "Cappuccino", description: "Velvet microfoam over a balanced double shot.", price: "$4.25", allergens: "Milk", options: "Oat, almond, whole (+$0.75)" },
      { name: "House Caramel Latte", description: "Slow-cooked salted caramel, espresso, steamed milk.", price: "$5.50", allergens: "Milk", options: "Hot or iced • extra shot +$1" },
      { name: "Mocha", description: "Single-origin dark chocolate ganache and espresso.", price: "$5.25", allergens: "Milk" },
    ],
  },
  {
    category: "Brewed coffee",
    items: [
      { name: "Drip Coffee", description: "Freshly brewed every 30 minutes. Free refills in-house.", price: "$2.75", labels: ["Vegan"] },
      { name: "Pour Over", description: "Rotating single origin, brewed one cup at a time.", price: "$4.75", labels: ["Vegan"] },
      { name: "Americano", description: "Espresso lengthened with hot water.", price: "$3.50", labels: ["Vegan"] },
    ],
  },
  {
    category: "Cold drinks",
    items: [
      { name: "Cold Brew", description: "Steeped 18 hours for a smooth, low-acid cup.", price: "$4.50", labels: ["Vegan"], options: "Add sweet cream +$0.75" },
      { name: "Iced Shaken Espresso", description: "Three shots shaken with ice and a touch of maple.", price: "$5.25", labels: ["Vegan"] },
      { name: "Sparkling Citrus Espresso", description: "Espresso, orange, sparkling water. Seasonal.", price: "$5.50", labels: ["Vegan", "Seasonal"] },
    ],
  },
  {
    category: "Tea",
    items: [
      { name: "Loose Leaf Tea", description: "Earl grey, jasmine green, peppermint, or rooibos.", price: "$3.50", labels: ["Vegan"] },
      { name: "Masala Chai Latte", description: "House-spiced chai concentrate with steamed milk.", price: "$4.95", allergens: "Milk" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, whisked to order.", price: "$5.25", allergens: "Milk" },
    ],
  },
  {
    category: "Breakfast",
    items: [
      { name: "Bacon, Egg & Cheddar", description: "Soft egg, thick-cut bacon, aged cheddar on brioche.", price: "$8.50", allergens: "Egg, milk, gluten" },
      { name: "Avocado Toast", description: "Sourdough, smashed avocado, chili, lemon, sea salt.", price: "$9.00", labels: ["Vegan"], allergens: "Gluten" },
      { name: "Steel-Cut Oats", description: "Slow-cooked oats, maple, toasted almond, berries.", price: "$6.75", labels: ["Vegetarian", "GF"], allergens: "Nuts" },
    ],
  },
  {
    category: "Lunch",
    items: [
      { name: "Turkey & Havarti", description: "Roast turkey, havarti, herb aioli, greens on ciabatta.", price: "$11.50", allergens: "Gluten, milk, egg" },
      { name: "Roasted Veg Wrap", description: "Squash, kale, hummus, pickled onion in a spinach wrap.", price: "$10.50", labels: ["Vegan"], allergens: "Gluten, sesame" },
      { name: "Tomato Soup & Grilled Cheese", description: "Three-cheese melt with a cup of basil tomato soup.", price: "$12.00", labels: ["Vegetarian"], allergens: "Gluten, milk" },
    ],
  },
  {
    category: "Pastries & desserts",
    items: [
      { name: "Almond Croissant", description: "Laminated in-house, filled with almond frangipane.", price: "$4.75", labels: ["Vegetarian"], allergens: "Gluten, nuts, milk, egg" },
      { name: "Morning Bun", description: "Cardamom sugar, orange zest, baked before sunrise.", price: "$4.25", labels: ["Vegetarian"], allergens: "Gluten, milk" },
      { name: "Olive Oil Lemon Cake", description: "Dense, citrus-forward, dusted with sugar.", price: "$4.50", labels: ["Vegetarian"], allergens: "Gluten, egg" },
      { name: "Chocolate Chunk Cookie", description: "Brown butter, sea salt, 70% chocolate.", price: "$3.75", labels: ["Vegetarian"], allergens: "Gluten, milk, egg" },
    ],
  },
  {
    category: "Beans & merch",
    items: [
      { name: "Alder Street Blend — 12 oz", description: "Chocolate, cherry, brown sugar. Roasted weekly in NE Portland.", price: "$18.00", labels: ["Vegan"] },
      { name: "Single Origin — Ethiopia Guji", description: "Floral and bright. Whole bean or ground to order.", price: "$22.00", labels: ["Vegan"] },
      { name: "Oakline Ceramic Mug", description: "Locally thrown stoneware, 10 oz.", price: "$26.00" },
    ],
  },
];