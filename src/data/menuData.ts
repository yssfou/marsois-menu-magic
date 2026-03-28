export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  priceMoy?: string;
  priceMaxi?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
  hasSizes?: boolean;
}

export const menuSections: MenuSection[] = [
  {
    id: "sandwich",
    title: "SANDWICH",
    icon: "🥪",
    items: [
      { name: "Thon avec frites", description: "Thon frais, frites croustillantes", price: "7dt" },
      { name: "Jambon avec frites", description: "Jambon fumé, frites dorées", price: "7dt" },
      { name: "Escalope", description: "Escalope panée croustillante", price: "8dt" },
      { name: "Escalope Panée", description: "Dorée à la perfection", price: "9dt" },
      { name: "Viande Hachée", description: "Viande hachée épicée maison", price: "9dt" },
      { name: "Merguez", description: "Merguez grillée généreuse", price: "9dt" },
      { name: "Foie", description: "Foie tendre et savoureux", price: "9dt" },
      { name: "Chevrettes", description: "Chevrettes sautées à l'ail", price: "10dt" },
      { name: "Mixte", description: "Mélange généreux de viandes", price: "11dt" },
    ],
  },
  {
    id: "makloud",
    title: "MAKLOUD",
    icon: "🫓",
    items: [
      { name: "Thon avec frites", price: "8dt" },
      { name: "Jambon avec frites", price: "8dt" },
      { name: "Escalope", price: "11dt" },
      { name: "Escalope Panée", price: "10dt" },
      { name: "Viande Hachée", price: "10dt" },
      { name: "Merguez", price: "10dt" },
      { name: "Foie", price: "11dt" },
      { name: "Chevrettes", price: "13dt" },
      { name: "Mixte", price: "13dt" },
    ],
  },
  {
    id: "baguette",
    title: "BAGUETTE FARCIE / CORNET",
    icon: "🥖",
    hasSizes: true,
    items: [
      { name: "Thon avec frites", priceMoy: "12dt", priceMaxi: "17dt" },
      { name: "Jambon avec frites", priceMoy: "12dt", priceMaxi: "17dt" },
      { name: "Escalope", priceMoy: "13.5dt", priceMaxi: "19dt" },
      { name: "Escalope Panée", priceMoy: "14.5dt", priceMaxi: "20dt" },
      { name: "Viande Hachée", priceMoy: "14.5dt", priceMaxi: "20dt" },
      { name: "Merguez", priceMoy: "14.5dt", priceMaxi: "20dt" },
      { name: "Foie", priceMoy: "16dt", priceMaxi: "23dt" },
      { name: "Chevrettes", priceMoy: "17dt", priceMaxi: "23dt" },
      { name: "Mixte", description: "Prix sur demande" },
    ],
  },
  {
    id: "supplements",
    title: "SUPPLÉMENTS",
    icon: "➕",
    items: [
      { name: "Gruyère", price: "4dt" },
      { name: "Mozzarella", price: "3.5dt" },
      { name: "Boisson", price: "3dt" },
      { name: "Frite", price: "2.5dt" },
      { name: "Thon", price: "4dt" },
      { name: "Jambon", price: "3dt" },
      { name: "Escalope", price: "5dt" },
      { name: "Escalope Panée", price: "5dt" },
      { name: "Viande / Merguez / Foie", price: "6dt" },
      { name: "Champignon", price: "3dt" },
      { name: "Slice", price: "3dt" },
    ],
  },
];
