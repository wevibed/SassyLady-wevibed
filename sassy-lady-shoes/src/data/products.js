import { IMAGES } from "@/lib/site";

// PLACEHOLDER PRICING — we have no confirmed price list from Sassy Lady
// itself (only name, stall, phone, category from the prospect sheet).
// These are typical Harare retail prices for this product category, meant
// to demonstrate the site's structure. CONFIRM REAL PRICES AND STYLES
// WITH THE OWNER before this goes live to the client — do not treat
// these as verified stock or pricing.
export const PRODUCTS = [
  {
    id: "stiletto-heel-01",
    name: "Classic Stiletto Heel",
    price: 15,
    currency: "USD",
    category: "Heels",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Everyday stiletto heel. Price shown is a typical market rate — confirm current styles and pricing with the stall.",
    image_url: IMAGES.dress,
    image_url_2: IMAGES.catDresses,
    is_new_arrival: true,
    is_in_store: true,
    featured: true,
  },
  {
    id: "block-heel-01",
    name: "Block Heel Sandal",
    price: 14,
    currency: "USD",
    category: "Heels",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Comfortable block heel for all-day wear. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.dress,
    image_url_2: IMAGES.catDresses,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "ballet-flat-01",
    name: "Ballet Flat",
    price: 10,
    currency: "USD",
    category: "Flats",
    sizes: ["36", "37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Everyday ballet flat. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.top,
    image_url_2: IMAGES.catTops,
    is_new_arrival: true,
    is_in_store: true,
    featured: true,
  },
  {
    id: "loafer-01",
    name: "Classic Loafer",
    price: 12,
    currency: "USD",
    category: "Flats",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Smart-casual loafer. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.top,
    image_url_2: IMAGES.catTops,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "sneaker-01",
    name: "Everyday Sneaker",
    price: 18,
    currency: "USD",
    category: "Sneakers",
    sizes: ["37", "38", "39", "40", "41"],
    availability: "Ask In-Store",
    description: "Comfortable everyday sneaker. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.blazer,
    image_url_2: IMAGES.catOuterwear,
    is_new_arrival: true,
    is_in_store: true,
    featured: true,
  },
  {
    id: "slip-on-sandal-01",
    name: "Slip-On Sandal",
    price: 8,
    currency: "USD",
    category: "Sandals",
    sizes: ["36", "37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Easy slip-on sandal for everyday wear. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.set,
    image_url_2: IMAGES.catSets,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "strappy-sandal-01",
    name: "Strappy Evening Sandal",
    price: 16,
    currency: "USD",
    category: "Sandals",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Dressy strappy sandal for evenings out. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.set,
    image_url_2: IMAGES.catSets,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "ankle-boot-01",
    name: "Ankle Boot",
    price: 20,
    currency: "USD",
    category: "Boots",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Everyday ankle boot. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.shoes,
    image_url_2: IMAGES.catShoes,
    is_new_arrival: true,
    is_in_store: true,
    featured: true,
  },
  {
    id: "wedge-sandal-01",
    name: "Wedge Sandal",
    price: 17,
    currency: "USD",
    category: "Wedges",
    sizes: ["37", "38", "39", "40"],
    availability: "Ask In-Store",
    description: "Comfortable wedge sandal, easy height without the strain of a heel. Price shown is a typical market rate — confirm with the stall.",
    image_url: IMAGES.bag,
    image_url_2: IMAGES.catAccessories,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "wholesale-bundle-01",
    name: "Wholesale Footwear Bundle",
    price: 0,
    currency: "USD",
    category: "Flats",
    sizes: ["Bulk"],
    availability: "Ask In-Store",
    description: "Wholesale pricing for resellers — ask in-store for current bulk rates.",
    image_url: IMAGES.top,
    image_url_2: IMAGES.catTops,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
];

// Mirrors the subset of the Base44 entity SDK's call shape (filter/list/get)
// that this app used, so the consuming components didn't need fetch logic
// rewritten — only the import.
export const Product = {
  async filter(query = {}, _sort, limit) {
    let items = PRODUCTS.filter((p) =>
      Object.entries(query).every(([key, value]) => p[key] === value)
    );
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async list(_sort, limit) {
    let items = PRODUCTS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async get(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  },
};
