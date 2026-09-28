# AGENTS.md

## Project Context

This is the Sassy Lady Shoes marketing/shop-front site — a static Vite + React app deployed on
Cloudflare Pages. It was migrated off the Base44 platform (Base44 SDK, auth, and build plugin
removed); treat it as plain, user-owned application code and preserve existing conventions.

It also serves as the base template for other WeVibed footwear prospect sites — see the last
section of `README.md` before assuming a change should only apply to this one business.

## Key Files

- `src/`: frontend application source.
- `src/lib/site.js`: brand info, contact details, `IMAGES`, and `CATEGORIES` — the single file
  every page/component reads branding and images from.
- `src/data/products.js`: the product catalogue and the `Product` helper (`list`/`filter`/`get`)
  that `Home.jsx`, `Shop.jsx`, and `ProductDetail.jsx` read from. Prices here are typical-market
  estimates, explicitly flagged as unverified — not Sassy Lady's real prices.
- `src/data/testimonials.js`: placeholder customer quotes, clearly flagged as illustrative.
- `vite.config.js`: plain Vite + React config with an explicit `@` → `src` alias.

## Working Notes

- `npm run dev` / `npm run build` are the only commands needed — no CLI, no local backend, no auth.
- There is no live database or API behind this site. To change the catalogue, edit
  `src/data/products.js` directly.
- Images are Lorem Picsum placeholders, referenced by URL only — no SDK call, no CDN dependency.
- Before treating any fact on this site as confirmed (hours, socials, pricing), check
  `src/lib/site.js` and `src/data/products.js` for the comments flagging what's real vs.
  placeholder — this business has not yet been contacted to confirm most of it.
