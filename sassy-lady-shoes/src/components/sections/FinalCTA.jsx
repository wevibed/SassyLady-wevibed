import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <Image src={IMAGES.hero} alt="" fittingType="fill" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <Reveal className="relative px-6 max-w-2xl">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.95]">
          Your next look<br />is waiting.
        </h2>
        <p className="mt-5 text-muted-foreground">Browse the latest arrivals or visit us at Eastgate Centre.</p>
        <a
          href="#new-arrivals"
          className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-[11px] tracking-wide-luxe uppercase hover:bg-accent hover:text-foreground transition-colors"
        >
          Shop New Arrivals <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </Reveal>
    </section>
  );
}