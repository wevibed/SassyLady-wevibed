import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { CATEGORIES } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function ShopByCategory() {
  return (
    <section id="collections" className="bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal className="mb-10 md:mb-14">
          <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Browse</div>
          <h2 className="font-heading text-5xl md:text-6xl">Shop by Category</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <Link to={`/shop?category=${encodeURIComponent(c.name)}`} className="group block relative overflow-hidden aspect-[3/4]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-heading text-2xl md:text-3xl text-background">{c.name}</h3>
                  <span className="text-[10px] tracking-wide-luxe uppercase text-background/80 border-b border-background/60 pb-0.5">
                    Shop {c.name}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}