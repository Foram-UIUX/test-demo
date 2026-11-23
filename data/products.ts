export interface Product {
  id: string;
  name: string;
  code: string;
  collection: string;
  finish: string;
  colorFamily: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "walnut-oak",
    name: "Walnut Oak",
    code: "WL-204",
    collection: "Woodgrains",
    finish: "Matte",
    colorFamily: "Brown",
    image: "/images/products/walnut-oak.jpg",
    description: "A deep, rich walnut woodgrain with realistic ticking and a sophisticated matte finish. Perfect for luxury wardrobes and executive office spaces.",
  },
  {
    id: "charcoal-matte",
    name: "Charcoal Matte",
    code: "SM-112",
    collection: "Solid Colors",
    finish: "Matte",
    colorFamily: "Black",
    image: "/images/products/charcoal-matte.jpg",
    description: "An ultra-matte, anti-fingerprint solid charcoal surface. Ideal for contemporary kitchen cabinetry and minimalist interiors.",
  },
  {
    id: "statuario-marble",
    name: "Statuario Marble",
    code: "ST-305",
    collection: "Stone & Marble",
    finish: "High Gloss",
    colorFamily: "White",
    image: "/images/products/statuario-marble.jpg",
    description: "A brilliant high-gloss marble pattern featuring striking grey veins against a pure white background. Excellent for feature walls and luxurious reception desks.",
  },
  {
    id: "terracotta-blush",
    name: "Terracotta Blush",
    code: "SC-418",
    collection: "Solid Colors",
    finish: "Matte",
    colorFamily: "Red",
    image: "/images/products/terracotta-blush.jpg",
    description: "A warm, earthy terracotta tone with a smooth tactile finish. Adds warmth and character to commercial spaces and modern living areas.",
  },
  {
    id: "brushed-brass",
    name: "Brushed Brass",
    code: "MT-502",
    collection: "Metallic",
    finish: "Brushed",
    colorFamily: "Gold",
    image: "/images/products/brushed-brass.jpg",
    description: "A premium metallic laminate featuring a directional brushed texture. Provides an opulent gold/brass accent for luxury retail and hospitality interiors.",
  },
  {
    id: "ash-wood",
    name: "Nordic Ash",
    code: "WL-215",
    collection: "Woodgrains",
    finish: "Textured",
    colorFamily: "Beige",
    image: "/images/products/nordic-ash.jpg",
    description: "A light, Scandinavian-inspired ash woodgrain with a pronounced texture that feels like real wood. Brings brightness to small spaces.",
  }
];
