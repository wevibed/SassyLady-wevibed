import { Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function StoreSection() {
  return (
    <section id="contact" className="bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal className="mb-10 md:mb-14">
          <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Boutique</div>
          <h2 className="font-heading text-5xl md:text-6xl">Come Find Us</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6">
            <div>
              <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">Address</div>
              <p className="font-heading text-2xl">{SITE.addressLine1}</p>
              <p className="font-heading text-2xl">{SITE.addressLine2}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5" /> Hours
                </div>
                <p className="text-sm">{SITE.hours}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <p className="text-sm">{SITE.phoneDisplay}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-[11px] tracking-wide-luxe uppercase hover:bg-accent hover:text-foreground transition-colors"
              >
                Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappLink("Hi Sassy Lady! I'd like to enquire about a pair.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[11px] tracking-wide-luxe uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-stone overflow-hidden grayscale">
            <iframe
              title="Sassy Lady Shoes location"
              src="https://www.google.com/maps?q=Eastgate+Centre+Harare&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}