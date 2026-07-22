
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Smart Refrigerator',
    description: 'A spacious smart refrigerator with an interactive display and energy-efficient cooling.',
    price: 1299.99,
    imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Refrigerator',
  },
  {
    id: 'prod-002',
    name: 'Dishwasher Pro',
    description: 'Quiet and powerful dishwasher with multiple wash cycles and smart sensor technology.',
    price: 799.00,
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Dishwasher',
  },
  {
    id: 'prod-003',
    name: 'Electric Oven Range',
    description: 'Modern electric oven range with convection baking and a large capacity oven.',
    price: 949.50,
    imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Oven',
  },
  {
    id: 'prod-004',
    name: 'Microwave Smart Chef',
    description: 'Countertop microwave with smart cooking presets and sensor reheating.',
    price: 149.99,
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Microwave',
  },
  {
    id: 'prod-005',
    name: 'Blender PowerMix',
    description: 'High-speed blender perfect for smoothies, soups, and crushing ice.',
    price: 89.95,
    imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Blender',
  },
  {
    id: 'prod-006',
    name: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with a built-in grinder and thermal carafe.',
    price: 199.00,
    imageUrl: 'https://via.placeholder.com/150/00FFFF/000000?text=CoffeeMaker',
  },
  {
    id: 'prod-007',
    name: 'Toaster Oven Compact',
    description: 'Compact toaster oven with bake, broil, and toast functions, ideal for small kitchens.',
    price: 65.75,
    imageUrl: 'https://via.placeholder.com/150/800000/FFFFFF?text=ToasterOven',
  },
];
