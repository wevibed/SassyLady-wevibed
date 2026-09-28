import { IMAGES } from "@/lib/site";

// PLACEHOLDER testimonials — illustrative only, not real customer quotes.
// Replace with genuine reviews from Sassy Lady customers before this
// site goes live to the actual client.
export const TESTIMONIALS = [
  {
    id: "t1",
    customer_name: "Ngoni T.",
    location: "Harare",
    quote: "Found a comfortable pair of heels that actually fit right the first time. Rare find.",
    rating: 5,
    image_url: IMAGES.dress,
    product_name: "Classic Stiletto Heel",
  },
  {
    id: "t2",
    customer_name: "Michelle C.",
    location: "Harare",
    quote: "My go-to for everyday flats — good quality without the boutique price tag.",
    rating: 5,
    image_url: IMAGES.top,
    product_name: "Ballet Flat",
  },
  {
    id: "t3",
    customer_name: "Blessing K.",
    location: "Harare",
    quote: "Great sneaker selection and the stall is easy to find at Eastgate Centre.",
    rating: 4,
    image_url: IMAGES.blazer,
    product_name: "Everyday Sneaker",
  },
];

// Mirrors the subset of the Base44 entity SDK's call shape used here.
export const Testimonial = {
  async list(_sort, limit) {
    let items = TESTIMONIALS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
};
