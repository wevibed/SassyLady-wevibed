import Reveal from "@/components/Reveal";

export default function PageHeader({ label, title, subtitle }) {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14">
      <Reveal>
        {label && (
          <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">{label}</div>
        )}
        <h1 className="font-heading text-5xl md:text-7xl leading-[0.95]">{title}</h1>
        {subtitle && <p className="mt-5 text-muted-foreground max-w-xl">{subtitle}</p>}
      </Reveal>
    </section>
  );
}