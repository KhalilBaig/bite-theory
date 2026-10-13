export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'rolls' | 'pizza';
  price: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface LayerCallout {
  framePercent: number; // 0 to 100 percentage range of explosion
  title: string;
  description: string;
  side: 'left' | 'right';
  topPercent: number;
}

export const siteContent = {
  hero: {
    headline: "BITE THEORY",
    subheadline: "THE SCIENCE OF HIGH-ENERGY FAST FOOD",
    tagline: "Fresh. Fast. Fired up.",
    ctaText: "Order Now",
    scrollHint: "Scroll to Deconstruct The Theory",
  },
  breakdown: {
    sectionTitle: "THE THEORY OF THE BURGER",
    sectionSub: "Precision engineered layers designed for maximum flavor impact.",
    callouts: [
      {
        framePercent: 20,
        title: "Artisanal Brioche Bun",
        description: "Toasted in real butter, pillowy soft with golden sesame seed crown.",
        side: "left",
        topPercent: 25,
      },
      {
        framePercent: 35,
        title: "House Secret Sauce",
        description: "Smoky, tangy emulsion whipped daily in 50L batches.",
        side: "right",
        topPercent: 35,
      },
      {
        framePercent: 50,
        title: "Crisp Hydroponic Greens & Pickles",
        description: "Zero-wilt romaine, vine-ripened tomatoes and hand-cut dill pickles.",
        side: "left",
        topPercent: 48,
      },
      {
        framePercent: 65,
        title: "Double Aged Cheddar Melt",
        description: "18-month aged sharp cheddar, melted to gooey perfection.",
        side: "right",
        topPercent: 60,
      },
      {
        framePercent: 80,
        title: "Smashed Prime Beef",
        description: "100% Angus beef smashed hard on high-heat steel, seared crisp.",
        side: "left",
        topPercent: 72,
      },
    ] as LayerCallout[],
  },
  craft: {
    title: "UNCOMPROMISING FAST FOOD CRAFT",
    subtitle: "Built fast. Served hot. Never frozen.",
    highlights: [
      {
        number: "01",
        title: "100% Fresh Ingredients",
        description: "Sourced fresh every morning from local partner farms. No frozen patties ever.",
      },
      {
        number: "02",
        title: "Made To Order",
        description: "Every item is fired up the exact moment your order hits our kitchen display.",
      },
      {
        number: "03",
        title: "Signature House Sauces",
        description: "Crafted from scratch daily using custom spice rubs and slow-simmered reductions.",
      },
    ],
  },
  pizza: {
    headline: "THE PIZZA EXPERIENCE",
    subheadline: "72-Hour Fermented Dough. Wood-Fired Heat.",
    cheesePullText: "THE CHEESE PULL MOMENT",
    callouts: [
      {
        framePercent: 25,
        title: "72-Hour Slow Dough",
        description: "High-protein Italian flour fermented for crisp air pockets and rich chew.",
        side: "left",
        topPercent: 30,
      },
      {
        framePercent: 55,
        title: "San Marzano Plum Tomato Sauce",
        description: "Crushed sweet tomatoes infused with wild oregano and garlic oil.",
        side: "right",
        topPercent: 50,
      },
      {
        framePercent: 80,
        title: "Whole Milk Mozzarella Pull",
        description: "Freshly shredded fior di latte yielding our legendary golden stretch.",
        side: "left",
        topPercent: 70,
      },
    ] as LayerCallout[],
  },
  menu: {
    headline: "THE SIGNATURE MENU",
    subheadline: "Crafted for cravings. Pick your weapon.",
    categories: [
      { id: "all", label: "All Items" },
      { id: "burgers", label: "Burgers" },
      { id: "rolls", label: "Rolls & Wraps" },
      { id: "pizza", label: "Pizzas" },
    ],
    items: [
      {
        id: "b1",
        name: "Smash Theory Double",
        category: "burgers",
        price: "$12.99",
        description: "Double smashed Angus beef, double cheddar, grilled onions, house sauce on brioche.",
        popular: true,
        badge: "BESTSELLER",
      },
      {
        id: "b2",
        name: "Triple Threat Monster",
        category: "burgers",
        price: "$15.99",
        description: "Three 3oz smash patties, crispy beef bacon, jalapeno whip, double cheese.",
        popular: true,
      },
      {
        id: "b3",
        name: "Firecracker Chicken",
        category: "burgers",
        price: "$11.99",
        description: "Buttermilk fried chicken breast, spicy habanero mayo, slaw, pickle crunch.",
      },
      {
        id: "r1",
        name: "Charred Beef Steak Roll",
        category: "rolls",
        price: "$10.99",
        description: "Marinated flank steak, charred pepper relish, garlic aioli in toasted lavash wrap.",
        popular: true,
        badge: "POPULAR",
      },
      {
        id: "r2",
        name: "Crispy Dynamite Chicken Wrap",
        category: "rolls",
        price: "$9.99",
        description: "Crispy chicken tenders, sriracha mayo, iceberg crunch, avocado slices.",
      },
      {
        id: "p1",
        name: "Hot Honey Pepperoni Pizza",
        category: "pizza",
        price: "$18.99",
        description: "Cupped pepperoni, hot honey drizzle, fresh basil, San Marzano sauce, mozzarella.",
        popular: true,
        badge: "SIGNATURE",
      },
      {
        id: "p2",
        name: "Truffle Mushroom Blitz",
        category: "pizza",
        price: "$19.99",
        description: "Wild roasted mushrooms, black truffle oil, garlic cream base, aged parmesan.",
      },
      {
        id: "p3",
        name: "The BITE Supreme",
        category: "pizza",
        price: "$21.99",
        description: "Smash beef crumble, pepperoni, smoked bacon, bell peppers, red onion, extra cheese.",
      },
    ] as MenuItem[],
  },
  cta: {
    headline: "READY TO EXPERIENCE THE THEORY?",
    description: "Order online for lightning-fast delivery or skip-the-line local pickup.",
    orderUrl: "https://wa.me/923001234567?text=Hi%20BITE%20THEORY,%20I'd%20like%20to%20place%20an%20order!",
    phone: "+92 300 1234567",
    deliveryInfo: "Delivery within 30 mins or your order is free.",
    pickupInfo: "Hot pickup ready in 12 minutes.",
    hours: "11:00 AM – 2:00 AM (Open Daily)",
    location: "Commercial Market, Satellite Town, Rawalpindi",
    city: "Rawalpindi",
  },
  footer: {
    copyright: "© 2026 BITE THEORY Fast Food Lab. All rights reserved.",
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "TikTok", url: "https://tiktok.com" },
      { name: "Facebook", url: "https://facebook.com" },
    ],
  },
};
