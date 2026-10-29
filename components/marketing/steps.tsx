import { BookOpen, Rocket, Wrench } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { toneClasses } from "@/components/brand/tone";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

const icons = [BookOpen, Wrench, Rocket];

export function Steps() {
  const t = uz.steps;
  return (
    <Section id="qanday-ishlaydi" className="bg-mist">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="relative grid gap-6 md:grid-cols-3">
        <div aria-hidden className="absolute top-[4.5rem] right-[16%] left-[16%] hidden border-t-2 border-dashed border-sky/40 md:block" />
        {t.items.map((s, i) => {
          const tone = toneClasses[s.tone];
          const Icon = icons[i];
          return (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <span className={cn("relative z-10 mb-5 grid size-14 place-items-center rounded-full font-heading text-xl font-bold text-white shadow-soft ring-8 ring-mist", tone.solid)}>
                  {i + 1}
                </span>
                <div className="card-soft lift w-full p-6">
                  <div className="mx-auto mb-4 w-40">
                    <Illustration src={s.image} alt={s.title} width={600} height={600} tone={s.tone} icon={Icon} />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
