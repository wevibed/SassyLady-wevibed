# Base44 removal & prospect build — Sassy Lady Shoes

This site was migrated off the Base44 platform to deploy as a plain static Vite/React site on
Cloudflare Pages, then built out as a real WeVibed prospect site for Sassy Lady Shoes (Stall F26,
Eastgate Centre, Harare — from the Eastgate prospect research sheet).

## Base44 removal

- Removed `@base44/sdk` and `@base44/vite-plugin` from `package.json` and `vite.config.js`. Added
  a plain `@` → `src` path alias in `vite.config.js` (the Base44 plugin used to provide this).
- Deleted the Base44 auth wrapper and all five auth pages: `src/api/base44Client.js`,
  `src/lib/app-params.js`, `src/lib/AuthContext.jsx`, `src/lib/authReturnTo.js`,
  `src/components/AuthLayout.jsx`, `src/components/GoogleIcon.jsx`,
  `src/components/ProtectedRoute.jsx`, `src/components/UserNotRegisteredError.jsx`,
  `src/pages/Login.jsx`, `src/pages/Register.jsx`, `src/pages/ForgotPassword.jsx`,
  `src/pages/ResetPassword.jsx`, `src/pages/OAuthConsent.jsx`. Removed the
  `AuthProvider`/loading/error branching from `App.jsx` — it now renders routes directly.
- Rewrote `src/lib/PageNotFound.jsx` to drop the Base44 `auth.me()` admin-note lookup.
- **Product & Testimonial data** used to be fetched live from Base44's `Product`/`Testimonial`
  entities; the export contained only the schemas, no records. Replaced with static
  `src/data/products.js` / `src/data/testimonials.js` exposing the same `filter`/`list`/`get`
  call shape, so `Home.jsx`, `Shop.jsx`, `ProductDetail.jsx`, `Testimonials.jsx` etc. only needed
  their import swapped.
- Removed the `base44/` entity-schema folder and `.env.local`. `index.html`: removed the Base44
  favicon link and the `/manifest.json` reference. Regenerated `package-lock.json` against the
  trimmed `package.json`, and added a `jiti` override to `package.json` to avoid a known
  `npm ci` lockfile-sync failure on Cloudflare Pages (see the WeVibed Website Playbook, §5).

## Prospect build — what's real vs. placeholder

- **Real, confirmed:** business name, Eastgate Centre / Stall F26, phone number (used for both
  display and the WhatsApp link).
- **Placeholder, flagged in-code:** Facebook/Instagram links (no confirmed handle exists yet —
  `site.js` points at a Facebook search query as a stand-in), opening hours (not confirmed —
  wording says "See WhatsApp for hours" rather than inventing a schedule), all 10 product
  prices in `products.js` (typical Harare footwear market rates, not Sassy Lady's real prices —
  every product description says so explicitly), and the 3 testimonials in `testimonials.js`
  (illustrative only).
- **Images:** seeded Lorem Picsum placeholders throughout `IMAGES` in `site.js` — not real photos
  of the stall's inventory.

None of this should be treated as verified until the prospect is actually contacted and the
catalogue/socials/hours are confirmed — see `README.md`'s "Before you go live" section.

## Verified

- `npm install` installs cleanly with no Base44 packages, no `package-lock.json` conflicts.
- `npm run build` succeeds with no errors (one harmless pre-existing Tailwind class-ambiguity
  warning, unrelated to content).
- Whole-tree brand sweep (`grep -rln "Tiffany\|Avondale"`) — clean.

## Deploy to Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables needed.

## Reuse as a footwear template

See the "Using this as a template for other footwear prospects" section in `README.md` — this
repo is meant to be forked for other shoe businesses on the Eastgate prospect list (Quality
Formal Shoes, Kids Shoes / VanJay V, Unique Fashions), the same way `tiffanys-closet` was forked
for 4orless and Carol's Closet.
