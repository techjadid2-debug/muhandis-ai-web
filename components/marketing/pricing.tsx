import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Reveal } from "@/components/brand/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

export function Pricing() {
  const t = uz.pricing;
  return (
    <Section id="narxlar">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {t.plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-[1.75rem] p-7",
                p.highlight ? "bg-gradient-to-b from-[#eef6ff] to-[#f3efff] shadow-lift ring-2 ring-lavender/50" : "card-soft",
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-7 flex items-center gap-1 rounded-full bg-lavender-deep px-3 py-1 text-xs font-bold text-white">
                  <Star className="size-3.5 fill-current" /> Eng mashhur
                </span>
              )}
              <h3 className="text-xl font-bold text-ink">{p.name}</h3>
              <p className="mt-1 text-ink-soft">{p.text}</p>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-bold text-ink">{p.price}</span>
                <span className="text-ink-soft">{p.period}</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-ink">
                    <Check className="mt-1 size-4 shrink-0 text-mint-deep" strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={p.name === "Maktab" ? "/maktablar#sorov" : "/royxat"}
                className={buttonVariants({ variant: p.highlight ? "gradient" : "outline", size: "lg", className: "mt-8 w-full" })}
              >
                {p.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-ink-soft">{t.note}</p>
    </Section>
  );
}
