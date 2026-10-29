import { Bot, ClipboardCheck, Cpu, PlayCircle, Trophy, type LucideIcon } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { toneClasses } from "@/components/brand/tone";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "ai-tutor": Bot,
  "video-lessons": PlayCircle,
  "virtual-lab": Cpu,
  "ai-tests": ClipboardCheck,
  gamification: Trophy,
};

// Bento: birinchi ikkitasi keng, qolgan uchtasi bir qatorda
const spans = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export function Features() {
  const t = uz.features;
  return (
    <Section id="imkoniyatlar">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="grid gap-5 md:grid-cols-6">
        {t.items.map((f, i) => {
          const tone = toneClasses[f.tone];
          const Icon = icons[f.key];
          const wide = i < 2;
          return (
            <Reveal key={f.key} delay={i * 0.06} className={spans[i]}>
              <article className={cn("lift card-soft flex h-full overflow-hidden", wide ? "flex-col sm:flex-row" : "flex-col")}>
                <div className={cn("flex flex-1 flex-col gap-3 p-7", wide && "sm:justify-center")}>
                  <span className={cn("grid size-12 place-items-center rounded-2xl", tone.soft, tone.deep)}>
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-2xl font-bold text-ink">{f.title}</h3>
                  <p className="text-ink-soft">{f.text}</p>
                </div>
                <div className={cn("p-4 pt-0", wide ? "sm:w-[46%] sm:p-4" : "")}>
                  <Illustration src={f.image} alt={f.title} width={800} height={800} tone={f.tone} icon={Icon} className={wide ? "" : "aspect-[4/3]!"} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
