import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const EDITS = [
  {
    no: "01",
    title: "The Neutral Foundation",
    img: IMAGES.catSets,
    copy: "Start with cream, stone and clay. A neutral base lets one strong piece — a terracotta co-ord, a sage shirt — do the talking without shouting.",
  },
  {
    no: "02",
    title: "One Piece, Three Ways",
    img: IMAGES.dress,
    copy: "The silk midi works Monday with flats and a tote, Friday with heels, and Saturday under a blazer. Buy for versatility, not occasions.",
  },
  {
    no: "03",
    title: "Layer for the In-Between",
    img: IMAGES.blazer,
    copy: "A tailored blazer over a light dress handles the morning chill and the afternoon heat. Keep the layer structured and the base soft.",
  },
];

export default function StyleGuide() {
  return (
    <PageShell>
      <PageHeader
        label="The Journal"
        title="Style Guide"
        subtitle="Seasonal trend notes and styling inspiration — how to wear the current edit well, from the boutique floor."
      />
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20 md:pb-28 space-y-16 md:space-y-24">
        {EDITS.map((e, i) => (
          <Reveal key={e.no} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className={`aspect-[4/5] bg-stone overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={e.img} alt={e.title} fittingType="fill" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">Edit No. {e.no}</div>
              <h2 className="font-heading text-3xl md:text-4xl leading-tight">{e.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{e.copy}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}