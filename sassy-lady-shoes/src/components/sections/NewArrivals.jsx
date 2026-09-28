import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Product.filter({ is_new_arrival: true }, "-created_date", 6)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="new-arrivals" className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <Reveal className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Just In</div>
          <h2 className="font-heading text-5xl md:text-6xl">New Arrivals</h2>
        </div>
        <a href="#collections" className="hidden md:block text-[11px] tracking-wide-luxe uppercase border-b border-foreground pb-1 hover:text-accent transition-colors">
          View All
        </a>
      </Reveal>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-stone animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}