// REAL BUSINESS — Sassy Lady Shoes
// Eastgate Centre, Stall F26, Harare. Phone is confirmed real.
// No verified Facebook/Instagram handle exists in our research yet —
// social links below are placeholders. Confirm with the owner and
// replace before this goes live to a real client.
export const SITE = {
  brand: "SASSY LADY SHOES",
  tagline: "Heels, Flats & Everything In Between",
  subtagline: "Women's footwear for every day and every occasion — heels, flats, sneakers, sandals and boots at Eastgate Centre.",
  addressLine1: "Eastgate Centre, Stall F26",
  addressLine2: "Robert Mugabe Rd, Harare",
  // Hours are not confirmed in our research — neutral wording only, no invented times.
  hours: "See WhatsApp for hours",
  status: "Message Us On WhatsApp",
  whatsapp: "263772297600",
  phoneDisplay: "077 229 7600",
  // PLACEHOLDER — no confirmed social handle found. Replace with the
  // real Facebook page URL once confirmed with the owner.
  instagram: "https://www.facebook.com/search/top?q=Sassy%20Lady%20Shoes",
  facebook: "https://www.facebook.com/search/top?q=Sassy%20Lady%20Shoes",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eastgate+Centre+Harare",
};

// Placeholder stock photography (Lorem Picsum, seeded for consistency).
// NOT real photos of Sassy Lady's actual inventory — swap for real
// product photos from the stall as soon as they're available.
export const IMAGES = {
  hero: "https://picsum.photos/seed/sassylady-hero/1600/1000",
  edit: "https://picsum.photos/seed/sassylady-edit/1200/1500",
  dress: "https://picsum.photos/seed/sassylady-heels/900/1100",
  top: "https://picsum.photos/seed/sassylady-flats/900/1100",
  blazer: "https://picsum.photos/seed/sassylady-sneakers/900/1100",
  set: "https://picsum.photos/seed/sassylady-sandals/900/1100",
  shoes: "https://picsum.photos/seed/sassylady-boots/900/1100",
  bag: "https://picsum.photos/seed/sassylady-wedges/900/1100",
  catDresses: "https://picsum.photos/seed/sassylady-cat-heels/700/900",
  catTops: "https://picsum.photos/seed/sassylady-cat-flats/700/900",
  catOuterwear: "https://picsum.photos/seed/sassylady-cat-sneakers/700/900",
  catSets: "https://picsum.photos/seed/sassylady-cat-sandals/700/900",
  catShoes: "https://picsum.photos/seed/sassylady-cat-boots/700/900",
  catAccessories: "https://picsum.photos/seed/sassylady-cat-wedges/700/900",
};

export const CATEGORIES = [
  { name: "Heels", image: IMAGES.catDresses },
  { name: "Flats", image: IMAGES.catTops },
  { name: "Sneakers", image: IMAGES.catOuterwear },
  { name: "Sandals", image: IMAGES.catSets },
  { name: "Boots", image: IMAGES.catShoes },
  { name: "Wedges", image: IMAGES.catAccessories },
];

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product, size) {
  const msg = `Hi Sassy Lady, I'm interested in the ${product.name}${size ? ` in size ${size}` : ""}. Is it in stock?`;
  return whatsappLink(msg);
}
