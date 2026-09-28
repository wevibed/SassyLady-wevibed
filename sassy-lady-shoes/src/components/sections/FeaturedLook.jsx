import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { Product } from "@/data/products";

export default function FeaturedLook() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    Product.filter({ featured: true }, "-created_date", 1).then(
      (items) => setFeatured(items[0] || null)
    );
  }, []);

  return (
    <section id="about" className="bg-foreground text-background">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative order-2 md:order-1">
          <Image
            src={IMAGES.edit}
            alt="The Sassy Lady Edit"
            fittingType="fill"
            className="w-full h-full object-cover min-h-[60vh] md:min-h-full"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <Reveal>
            <div className="text-[11px] tracking-luxe uppercase text-background/50 mb-4">
              The Sassy Lady Edit · No. 01
            </div>
            <h2 className="font-heading text-5xl md:text-6xl leading-[0.95]">
              One look.<br />Multiple occasions.
            </h2>
            <p className="mt-5 text-background/70 max-w-md">
              A curated edit of pieces that move from day to evening without missing a beat — styled for the woman who dresses with intention.
            </p>
            {featured && (
              <Link
                to={`/product/${featured.id}`}
                className="mt-9 inline-flex items-center gap-2 border border-background px-7 py-3.5 text-[11px] tracking-wide-luxe uppercase hover:bg-background hover:text-foreground transition-colors w-fit"
              >
                Explore the Edit <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}