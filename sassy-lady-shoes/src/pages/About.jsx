import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <PageShell>
      <PageHeader
        label="Our Story"
        title="About Sassy Lady"
        subtitle="Footwear for every day and every occasion, at Eastgate Centre."
      />
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20 md:pb-28 space-y-20 md:space-y-28">
        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="aspect-[4/5] bg-stone overflow-hidden">
            <Image src={IMAGES.edit} alt="Sassy Lady Shoes" fittingType="fill" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Philosophy</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">
              A pair for every step of your week.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From office-ready flats to evening heels, everyday sneakers to weekend sandals, Sassy Lady keeps a wide range of women's footwear in stock — comfortable, current, and priced fairly. New styles arrive regularly.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="md:order-2 aspect-[4/5] bg-stone overflow-hidden">
            <Image src={IMAGES.catDresses} alt="The stall" fittingType="fill" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Stall</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">Eastgate Centre, Stall F26.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Find us at Stall F26, Eastgate Centre. Message us on WhatsApp to check sizes, current stock and opening hours before you visit.
            </p>
          </div>
        </Reveal>

        <Reveal className="border-t border-border pt-12 text-center">
          <p className="font-heading text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
            "Heels, flats, and everything in between."
          </p>
          <p className="mt-4 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">— Sassy Lady Shoes</p>
        </Reveal>
      </section>
    </PageShell>
  );
}
