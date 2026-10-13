export interface MenuItemDetail {
  name?: string;
  price?: string;
  description?: string;
  badge?: string;
}

export const menuDetails: Record<string, MenuItemDetail> = {
  'deal 1': {
    name: 'Smash Burger Combo Deal 1',
    price: 'Rs. 990',
    description: 'Crispy Zinger Burger, seasoned fries & chilled drink.',
    badge: 'HOT DEAL',
  },
  'deal 2': {
    name: 'Double Smash Monster Deal 2',
    price: 'Rs. 1,450',
    description: '2 Double Smash Cheeseburgers, loaded cheese fries & 2 drinks.',
    badge: 'BEST VALUE',
  },
  'Double Decker Chicken Paradise': {
    name: 'Double Decker Chicken Paradise',
    price: 'Rs. 1,150',
    description: 'Double stacked crispy chicken fillets, double cheddar, lettuce & secret sauce.',
    badge: "CHEF'S SPECIAL",
  },
  'Double_smash_cheeseburger': {
    name: 'Double Smash Cheeseburger',
    price: 'Rs. 950',
    description: 'Two 100% Angus smash beef patties, melted sharp cheddar & caramelized onions.',
    badge: 'BESTSELLER',
  },
  'Juicy_BBQ_burger': {
    name: 'Juicy BBQ Smash Burger',
    price: 'Rs. 890',
    description: 'Smokey BBQ sauce infused smashed beef patty, onion rings & crispy bacon.',
  },
  'Zinger_burger': {
    name: 'Crispy Zinger Burger',
    price: 'Rs. 690',
    description: 'Golden fried spicy chicken breast fillet, crisp lettuce & house mayo on brioche.',
    badge: 'CLASSIC',
  },
  'Chicken_Tikka_Pizza_': {
    name: 'Chicken Tikka Pizza',
    price: 'Rs. 1,290',
    description: 'Char-grilled tikka chicken, red onions, bell peppers & 100% mozzarella.',
  },
  'Fajita_pizza_with_bell_peppers_': {
    name: 'Chicken Fajita Pizza',
    price: 'Rs. 1,350',
    description: 'Mexican-spiced fajita chicken, sweet bell peppers, onions & gooey mozzarella.',
  },
  'Family_deal_pizza': {
    name: 'Family Pizza Feast',
    price: 'Rs. 2,490',
    description: '1 Large Gourmet Pizza, 1 Regular Pizza, Garlic Bread & 1.5L Drink.',
    badge: 'MEGA SAVER',
  },
  'Italian_pizza': {
    name: 'Classic Italian Margherita',
    price: 'Rs. 1,190',
    description: 'San Marzano tomato reduction, fresh mozzarella fior di latte & aromatic basil.',
  },
  'Malai_Tikka_Pizza': {
    name: 'Malai Tikka Supreme Pizza',
    price: 'Rs. 1,490',
    description: 'Creamy malai tikka chunks, jalapenos, mushrooms & liquid cheese drizzle.',
    badge: 'SIGNATURE',
  },
  'single_deal': {
    name: 'Solo Pizza Deal',
    price: 'Rs. 850',
    description: '1 Small Gourmet Pizza + 1 Soft Drink.',
    badge: 'SOLO SPECIAL',
  },
  'BBQ_roll_with_onin': {
    name: 'BBQ Chicken Paratha Roll',
    price: 'Rs. 420',
    description: 'Flame-grilled BBQ chicken with pickled onions and mint garlic mayo in crisp paratha.',
  },
  'Crunchy_chicken_pasta_dish_': {
    name: 'Crunchy Chicken Pasta',
    price: 'Rs. 790',
    description: 'Penne pasta baked in four-cheese sauce topped with crispy fried chicken tenders.',
  },
  'Flaming_wings_': {
    name: 'Flaming Buffalo Wings (6 Pcs)',
    price: 'Rs. 590',
    description: 'Crispy fried wings tossed in house spicy habanero buffalo sauce.',
    badge: 'SPICY',
  },
  'Fried_chicken_nuggets': {
    name: 'Crispy Nuggets (8 Pcs)',
    price: 'Rs. 490',
    description: 'Golden fried 100% chicken breast nuggets served with garlic dip.',
  },
  'Malai_Tikka_cheese_roll_': {
    name: 'Malai Tikka Cheese Roll',
    price: 'Rs. 480',
    description: 'Melt-in-mouth creamy malai chicken with melted mozzarella wrapped in warm paratha.',
    badge: 'MUST TRY',
  },
  'Malai_Tikka_Grilled_Sandwich': {
    name: 'Malai Tikka Grilled Sandwich',
    price: 'Rs. 550',
    description: 'Triple-decker toasted sandwich stuffed with creamy chicken malai tikka & melted cheese.',
  },
};
