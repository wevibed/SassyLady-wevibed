import { useState } from "react";
import { Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi Sassy Lady! My name is ${form.name}${form.email ? ` (${form.email})` : ""}. ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    setSent(true);
  };

  const field = (label, prop, type = "text") => (
    <div>
      <label className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">{label}</label>
      <input
        type={type}
        value={form[prop]}
        onChange={(e) => setForm({ ...form, [prop]: e.target.value })}
        className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-foreground outline-none transition-colors"
      />
    </div>
  );

  return (
    <PageShell>
      <PageHeader
        label="Get in Touch"
        title="Contact"
        subtitle="Questions about a piece, a size, or a visit? Send a message — we usually reply the same day on WhatsApp."
      />
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal className="space-y-6">
            <div>
              <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-2">Address</div>
              <p className="font-heading text-2xl">{SITE.addressLine1}</p>
              <p className="font-heading text-2xl">{SITE.addressLine2}</p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase border-b border-foreground pb-1 hover:text-accent transition-colors"
              >
                Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
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
            <div className="relative aspect-[4/3] bg-stone overflow-hidden grayscale mt-2">
              <iframe
                title="Sassy Lady Shoes location"
                src="https://www.google.com/maps?q=Eastgate+Centre+Harare&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={submit} className="space-y-5">
              {field("Name", "name")}
              {field("Email (optional)", "email", "email")}
              <div>
                <label className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-foreground outline-none resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-[11px] tracking-wide-luxe uppercase hover:bg-accent hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Send via WhatsApp
              </button>
              {sent && (
                <p className="text-xs text-muted-foreground text-center">
                  Opening WhatsApp with your message — if it didn't open, tap the button again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}