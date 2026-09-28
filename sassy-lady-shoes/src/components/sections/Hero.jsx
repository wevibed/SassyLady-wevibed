import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { SITE, IMAGES, whatsappLink } from "@/lib/site";
import { PRODUCTS } from "@/data/products";

// Sizes come from the catalogue, so the picker always matches what the shop lists.
const SIZES = [...new Set(PRODUCTS.flatMap((p) => p.sizes || []))]
  .filter((s) => /^\d+$/.test(s))
  .sort((a, b) => a - b);

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-8 md:pt-14 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 md:gap-12 items-end">
        <div className="md:col-span-7 order-2 md:order-1">
          <h1 className="font-heading text-[clamp(2.9rem,7.6vw,6.75rem)] leading-[0.92]">{SITE.tagline}</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{SITE.subtagline}</p>

          {SIZES.length > 0 && (
            <div className="mt-10">
              <p className="text-sm font-medium mb-3">Start with your size</p>
              <div className="flex flex-wrap gap-2.5">
                {SIZES.map((s) => (
                  <Link
                    key={s}
                    to={`/shop?size=${s}`}
                    className="h-12 w-12 rounded-full border border-foreground/25 grid place-items-center font-heading text-lg hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={whatsappLink("Hi Sassy Lady Shoes! Can you help me find a pair?")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
            <Link to="/shop" className="text-sm font-medium border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
              Browse all shoes
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2 relative mr-3 mt-3 md:mr-5 md:mt-5">
          <div className="absolute inset-0 translate-x-3 -translate-y-3 md:translate-x-5 md:-translate-y-5 bg-accent" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <Image src={IMAGES.hero} alt="Sassy Lady Shoes" fittingType="fill" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
