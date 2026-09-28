import { useEffect, useState } from "react";
import { Image } from "@/components/ui/image";
import { Testimonial } from "@/data/testimonials";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Testimonial.list("-created_date", 50)
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageShell>
      <PageHeader
        label="From Our Customers"
        title="Testimonials"
        subtitle="Real customers, real pairs, real visits to Eastgate Centre."
      />
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28">
        {loading ? (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-stone animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {items.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.06} className="bg-secondary/40 flex flex-col">
                {t.image_url && (
                  <div className="aspect-[4/5] bg-stone overflow-hidden">
                    <Image src={t.image_url} alt={t.customer_name} fittingType="fill" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-1 mb-3 text-accent text-sm">
                    {Array.from({ length: t.rating || 5 }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                  <p className="font-heading text-xl leading-snug">"{t.quote}"</p>
                  <div className="mt-5 pt-4 border-t border-border mt-auto">
                    <div className="text-sm font-medium">{t.customer_name}</div>
                    {t.location && (
                      <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
                        {t.location}
                        {t.product_name ? ` · ${t.product_name}` : ""}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}