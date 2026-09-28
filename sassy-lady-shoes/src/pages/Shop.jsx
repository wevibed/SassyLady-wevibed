import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "@/data/products";
import { CATEGORIES } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";

const CATS = ["All", ...CATEGORIES.map((c) => c.name)];

const chip = (on) =>
  `rounded-full border px-4 py-2 text-sm transition-colors ${
    on ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
  }`;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cat = CATS.includes(params.get("category")) ? params.get("category") : "All";
  const size = params.get("size") || "";

  useEffect(() => {
    Product.list("-created_date", 100).then(setProducts).finally(() => setLoading(false));
  }, []);

  const sizes = useMemo(
    () => [...new Set(products.flatMap((p) => p.sizes || []))].filter((s) => /^\d+$/.test(s)).sort((a, b) => a - b),
    [products]
  );
  const set = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };
  const filtered = products.filter(
    (p) => (cat === "All" || p.category === cat) && (!size || (p.sizes || []).includes(size))
  );

  return (
    <PageShell>
      <PageHeader
        label="Shoes"
        title="Shop"
        subtitle="Choose a style and your size, then message us on WhatsApp to confirm what is in stock before you visit."
      />
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28">
        <div className="mb-10 border-b border-border pb-6 space-y-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Style">
            {CATS.map((c) => (
              <button key={c} onClick={() => set("category", c === "All" ? "" : c)} className={chip(cat === c)} aria-pressed={cat === c}>
                {c}
              </button>
            ))}
          </div>
          {sizes.length > 0 && (
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Size">
              <span className="text-sm text-muted-foreground mr-2">Size</span>
              {sizes.map((s) => (
                <button key={s} onClick={() => set("size", size === s ? "" : s)} className={`${chip(size === s)} font-heading !px-3.5`} aria-pressed={size === s}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-stone animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-10">
            <p className="font-heading text-2xl">Nothing listed in that style and size.</p>
            <button onClick={() => setParams({}, { replace: true })} className="mt-4 text-sm font-medium border-b border-foreground pb-0.5">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
