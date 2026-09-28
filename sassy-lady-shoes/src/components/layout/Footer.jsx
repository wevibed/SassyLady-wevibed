import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const EXPLORE = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", to: "/" },
  { label: "Collections", to: "/" },
  { label: "About", to: "/about" },
  { label: "Style Guide", to: "/style-guide" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-heading text-2xl tracking-[0.18em]">{SITE.brand}</div>
          <p className="mt-4 text-sm text-background/60 max-w-xs">{SITE.subtagline}</p>
        </div>
        <div className="text-sm">
          <div className="text-[11px] tracking-wide-luxe uppercase text-background/50 mb-4">Explore</div>
          <ul className="space-y-2">
            {EXPLORE.map((e) => (
              <li key={e.label}>
                <Link to={e.to} className="hover:text-accent transition-colors">{e.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-[11px] tracking-wide-luxe uppercase text-background/50 mb-4">Visit</div>
          <p>{SITE.addressLine1}</p>
          <p>{SITE.addressLine2}</p>
          <p className="mt-3 text-background/60">{SITE.hours}</p>
          <div className="flex gap-4 mt-5">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="w-[18px] h-[18px]" /></a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="w-[18px] h-[18px]" /></a>
            <a href={whatsappLink("Hi Sassy Lady!")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle className="w-[18px] h-[18px]" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-[10px] tracking-wide-luxe uppercase text-background/40">
        © {new Date().getFullYear()} {SITE.brand} · Eastgate Centre, Harare
      </div>
    </footer>
  );
}