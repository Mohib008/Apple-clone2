export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  highlights: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "Titanium. So strong. So light. So Pro.",
    price: 999,
    image: "/images/products/iPhone-16-Pro-Max.jpg",
    colors: ["#7D7C78", "#E4E3DB", "#50514F", "#F5F5F5"],
    highlights: [
      "A17 Pro chip with 6-core GPU",
      "Pro camera system with 48MP Main",
      "Titanium design with textured matte glass back",
      "Dynamic Island",
    ],
  },
  {
    id: "2",
    name: 'MacBook Pro 14"',
    description: "Mind-blowing. Head-turning.",
    price: 1599,
    image: "/images/products/Macbook-Pro.jpg",
    colors: ["#31363B", "#E4E4E2"],
    highlights: [
      "M3 Pro or M3 Max chip",
      "Up to 18-core CPU, 40-core GPU",
      "Up to 128GB unified memory",
      "Liquid Retina XDR display",
    ],
  },
  {
    id: "3",
    name: "Apple Watch Ultra 2",
    description: "Next-level adventure.",
    price: 799,
    image: "/images/products/Watch-Ultra-2.jpg",
    colors: ["#2A2A2A", "#E9E9E5"],
    highlights: [
      "49mm titanium case",
      "Dual-frequency GPS",
      "Depth gauge with water temperature sensor",
      "Up to 36 hours of battery life",
    ],
  },
  {
    id: "4",
    name: "Apple Watch Ultra 2",
    description: "Next-level adventure.",
    price: 799,
    image: "/images/products/watch.jpg",
    colors: ["#2A2A2A", "#E9E9E5"],
    highlights: [
      "49mm titanium case",
      "Dual-frequency GPS",
      "Depth gauge with water temperature sensor",
      "Up to 36 hours of battery life",
    ],
  },
];
