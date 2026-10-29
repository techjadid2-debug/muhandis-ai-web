import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/brand/reveal";
import { LogoMark } from "@/components/brand/logo";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

const pillarPos = [
  "top-0 left-1/2 -translate-x-1/2 bg-sky-soft text-sky-deep",
  "top-1/2 right-0 -translate-y-1/2 bg-mint-soft text-mint-deep",
  "bottom-0 left-1/2 -translate-x-1/2 bg-blush-soft text-blush-deep",
  "top-1/2 left-0 -translate-y-1/2 bg-lavender-soft text-lavender-deep",
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <span className="relative inline-grid size-7 place-items-center rounded-full bg-mint-soft text-mint-deep">
        <Check className="size-4" strokeWidth={3} />
        <span className="sr-only">Bor</span>
      </span>
    );
  if (v === false)
    return (
      <span className="relative inline-grid size-7 place-items-center rounded-full bg-mist text-ink-soft/60">
        <Minus className="size-4" />
        <span className="sr-only">Yo‘q</span>
      </span>
    );
  return <span className="rounded-full bg-sun-soft px-2.5 py-1 text-xs font-bold text-sun-deep">{v}</span>;
}

export function Why() {
  const t = uz.why;
  return (
    <Section id="nega">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Markaziy diagramma (deck 4-slayd) */}
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
            <div className="absolute inset-[18%] rounded-full border-2 border-dashed border-lavender/40" />
            <div className="absolute inset-[30%] grid place-items-center rounded-full bg-gradient-to-br from-[#3ba7f5] via-[#8b7bf7] to-[#f0a0c8] shadow-lift">
              <div className="flex flex-col items-center gap-1 text-white">
                <LogoMark className="size-11 drop-shadow" />
                <span className="font-heading text-lg font-bold">Muhandis AI</span>
              </div>
            </div>
            {t.pillars.map((p, i) => (
              <span key={p} className={cn("absolute rounded-full border-2 border-white px-5 py-2.5 font-heading font-bold shadow-soft", pillarPos[i])}>
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Bozor raqamlari */}
        <div className="grid grid-cols-2 gap-4">
          {t.market.map((m, i) => (
            <Reveal key={m.text} delay={i * 0.06}>
              <div className="card-soft h-full p-6">
                <p className="font-heading text-3xl font-bold text-gradient md:text-4xl">{m.value}</p>
                <p className="mt-1.5 text-ink-soft">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Taqqoslash jadvali (deck 7-slayd) */}
      <Reveal className="mt-16">
        <div className="card-soft relative overflow-x-auto">
          <table className="w-full min-w-[44rem] text-left">
            <caption className="sr-only">Raqobatchilar bilan taqqoslash</caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-6 py-5 text-sm font-bold text-ink-soft">Platforma</th>
                {t.compare.columns.map((c) => (
                  <th key={c} scope="col" className="px-3 py-5 text-center text-sm font-bold text-ink-soft">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((r) => (
                <tr key={r.name} className={cn("border-b border-line last:border-0", r.highlight && "bg-sky-soft/60")}>
                  <th scope="row" className={cn("px-6 py-4 font-semibold text-ink", r.highlight && "font-heading font-bold text-sky-deep")}>{r.name}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-3 py-4 text-center"><Cell v={v} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
