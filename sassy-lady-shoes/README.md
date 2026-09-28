# Sassy Lady Shoes

Marketing/shop-front site for Sassy Lady Shoes — women's footwear (heels, flats, sneakers,
sandals, boots, wedges), Stall F26, Eastgate Centre, Harare.

Static Vite + React site. No backend, no auth — product data lives in `src/data/products.js`.

This repo also doubles as the base template for other footwear prospects — see the note at the
bottom of this file.

## ⚠️ Before you go live

This is a real prospect, not yet confirmed as a client. Everything in `src/lib/site.js` marked
PLACEHOLDER (Facebook/Instagram links) is unverified — the business's phone number, stall number,
and centre are confirmed real; the rest is not. `src/data/products.js` holds 10 products at
typical Harare footwear market rates, explicitly **not** Sassy Lady's real prices — every
description says so. Confirm the real catalogue, pricing, and social handles with the owner
before this goes live.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables are required.

## Notes

- All images are seeded Lorem Picsum placeholders (see `src/lib/site.js`) — not real photos of
  Sassy Lady's inventory. Swap for real product photos once available.
- To add or edit products, edit `src/data/products.js` directly — the whole site reads from it.

## Using this as a template for other footwear prospects

The category structure (Heels, Flats, Sneakers, Sandals, Boots, Wedges) and the product schema in
`products.js` are generic to footwear retail, not specific to Sassy Lady. To fork this for another
shoe prospect (e.g. Quality Formal Shoes, Kids Shoes / VanJay V, Unique Fashions):

1. Copy this folder, rename it to the new business's slug.
2. Rewrite `src/lib/site.js` — brand, address, phone/WhatsApp, socials, categories if the mix
   differs (e.g. a kids'-only shoe shop won't need "Heels").
3. Rewrite `src/data/products.js` — same schema, new products. Use `"Ask In-Store"` for any price
   you can't confirm, never a guessed number.
4. Rewrite `src/data/testimonials.js` — placeholder quotes, clearly commented as such.
5. Re-grep the whole tree for "Sassy Lady" / "Eastgate" / "F26" to catch anything left over from
   this fork, the same way this repo was checked against "Tiffany" / "Avondale" before it shipped.

## Design system (premium redesign)
- **Palette:** paper `#F7F4F9`, plum ink `#2A0E38`, magenta accent `#E9308F`-range, blush plate `#F6DCE9` — all in `src/index.css` tokens.
- **Type:** Bodoni Moda (headings, prices) + Hanken Grotesk (body). Labels and buttons are sentence case.
- **Signature:** the hero size picker (36–41), built from the catalogue's sizes, deep-links to `/shop?size=38`. Shop filters by style and size via the URL.
- **Images:** photos sit on a blush plate with `mix-blend-multiply`, so mixed or white-background product photos look consistent.
- Scroll fade-ins were removed on purpose (`Reveal` is a plain wrapper).
