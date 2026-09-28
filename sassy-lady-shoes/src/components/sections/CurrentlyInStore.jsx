import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function CurrentlyInStore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Product.filter({ is_in_store: true }, "-created_date", 12)
      .then((items) => setProducts(items.filter((p) => !p.is_new_arrival)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="in-store" className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <Reveal className="mb-10 md:mb-14 max-w-2xl">
        <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Live Catalogue</div>
        <h2 className="font-heading text-5xl md:text-6xl">Currently in Store</h2>
        <p className="mt-4 text-muted-foreground">
          Fresh pieces available at the boutique now. Availability is kept current — if it's marked sold, it's gone.
        </p>
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