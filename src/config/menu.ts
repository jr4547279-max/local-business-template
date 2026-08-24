export type MenuItem = { name: string; price: number; description?: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const menuSections: MenuSection[] = [
  { title: "Most popular", items: [
    ["Chicken Tikka", 4.95, ""], ["Pilaw Rice", 3.50, ""], ["Pasanda", 7.95, "Mild, with red wine, fresh cream, almonds and coconut."], ["Jalfry", 7.95, "Hot and exotic with onions and green peppers."], ["Butter", 7.95, "Mild, cooked with coconut and cream."], ["Madras", 7.95, "Hot."], ["Biryani", 7.95, "Mixed with rice."], ["Dansak", 7.95, "Medium spicy, sweet and sour lentil sauce."], ["Korma", 7.95, "Mild and creamy."], ["Masala", 7.95, "Mild, creamy with almonds and coconut."]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Starters", items: [
    ["Papadom", .95, ""], ["Spicy Papadom", .95, ""], ["Onion Bhajee", 3.95, ""], ["Chicken Tikka", 4.95, ""], ["Lamb Tikka", 4.95, ""], ["Tandoori King Prawn", 6.95, ""], ["Sheek Kebab", 4.95, ""], ["Tikka Platter", 5.50, "Chicken tikka, lamb tikka, sheek kebab and onion bhajee."], ["Meat Samosas", 3.50, ""], ["Vegetable Samosas", 3.50, "Vegetarian."], ["Chicken Chaat Puri", 4.50, ""], ["King Prawn Puri", 5.50, ""], ["Tiger Prawn Puri", 5.50, ""]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Main dishes", items: [
    ["Korma", 7.95, "Mild and creamy."], ["Masala", 7.95, "Mild, creamy with almonds and coconut."], ["Pasanda", 7.95, "Mild, with red wine, fresh cream, almonds and coconut."], ["Butter", 7.95, "Mild, cooked with coconut and cream."], ["Curry", 7.95, "Medium spicy."], ["Bhuna", 7.95, "Slightly dry, medium spicy."], ["Garlic Bhuna", 7.95, "Slightly dry, medium spicy."], ["Saag", 7.95, "Medium spicy with spinach."], ["Dupiaza", 7.95, "Medium spicy with onions."], ["Dansak", 7.95, "Medium spicy, sweet and sour lentil sauce."], ["Balti", 7.95, "Slightly dry, medium spicy with onions and green peppers."], ["Korai", 7.95, "Slightly dry, medium spicy with onions and green peppers."], ["Rogon", 7.95, "Medium spicy with tomatoes."], ["Rezala", 7.95, "Medium spicy, slightly dry with mince meat."], ["Biryani", 7.95, "Mixed with rice."], ["Pathia", 7.95, "Medium hot, sweet and sour."], ["Jalfry", 7.95, "Hot and exotic with onions and green peppers."], ["Madras", 7.95, "Hot."], ["Garlic Chilli", 7.95, "Hot."], ["Chilli Masala", 7.95, "Hot."], ["Vindaloo", 7.95, "Very hot."], ["Kabull Lamb", 9.50, "Lamb cooked with chickpeas in a medium spiced onion and tomato bhuna sauce."], ["Chilli Naga Special", 10, "A choice of chicken, lamb, vegetables, or prawns cooked in a Madras sauce with Bangladeshi hot pepper pickle."], ["Grandma's Deal", 8.95, "Fresh vegetables including spinach, lentils and chickpeas, cooked in a medium spiced sauce."], ["Balti Chilli Naga", 10.95, "Traditional balti infused with naga chilli pickle (madras hot)."]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Tandoori dishes", items: [
    ["Chicken Tikka", 9.95, ""], ["Lamb Tikka", 9.95, ""], ["Tandoori King Prawn", 12.95, ""], ["Tandoori Mixed Grill Special", 10.95, "Chicken tikka, lamb tikka, sheek kebab and naan."], ["Chicken Shashlik", 10.95, ""], ["Lamb Shashlik", 11.95, ""]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Side dishes", items: [
    ["Vegetable Curry", 3.95, "Vegetarian."], ["Vegetable Bhajee", 3.95, "Vegetarian."], ["Mushroom Bhajee", 3.95, ""], ["Bombay Aloo", 3.95, ""], ["Saag Aloo", 3.95, ""], ["Saag Bhajee", 3.95, ""], ["Saag Paneer", 3.95, ""], ["Tarka Dall", 3.95, ""], ["Chana Masala", 3.95, ""], ["Mushroom Aloo", 3.95, ""], ["Saag Mushroom", 3.95, ""], ["Garlic Mushroom", 3.95, ""], ["Muttor Paneer", 3.95, ""], ["Aloo Muttor", 3.95, ""], ["Gobi Bhajee", 3.95, ""], ["Aloo Gobi", 3.95, ""]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Rice", items: [
    ["Plain Rice", 3.50, "Basmati."], ["Pilaw Rice", 3.50, ""], ["Mushroom Fried Rice", 3.95, ""], ["Special Fried Rice", 3.95, "Peas, prawns & egg."], ["Egg Fried Rice", 3.95, ""], ["Coconut Rice", 3.95, ""], ["Keema Rice", 3.95, ""], ["Vegetable Rice", 3.95, "Vegetarian."], ["Garlic Fried Rice", 3.95, ""]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Breads", items: [
    ["Naan", 3.50, ""], ["Peshwari Naan", 3.50, ""], ["Garlic Naan", 3.50, ""], ["Vegetable Naan", 3.50, "Vegetarian."], ["Chilli Naan", 3.50, ""], ["Keema Naan", 3.50, ""], ["Chilli Keema Naan", 3.50, ""]
  ].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Extras", items: [["Mint Sauce", .95, ""], ["Mango Chutney", .95, ""], ["Lime Pickle", .95, ""], ["Onion Salad", .95, ""]].map(([name, price, description]) => ({ name, price, description })) },
  { title: "Drinks", items: [["Coke 0.33l", 2.25, ""], ["Diet Coke 0.33l", 2.25, ""], ["Sprite 0.33l", 2.25, ""], ["Fanta 0.33l", 2.25, ""], ["Coke 1.5l", 3.50, ""], ["Diet Coke 1.5l", 3.50, ""]].map(([name, price, description]) => ({ name, price, description })) },
];
