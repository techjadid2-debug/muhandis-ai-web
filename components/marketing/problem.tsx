import { HelpCircle } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { toneClasses } from "@/components/brand/tone";
import { CountUp } from "./count-up";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

export function Problem() {
  const t = uz.problem;
  return (
    <Section id="muammo" className="bg-white">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <Illustration
            src="/images/problem/curious-student.png"
            alt="Video ekran oldida savollar bilan o‘ylanib o‘tirgan o‘quvchi"
            width={900}
            height={900}
            tone="blush"
            icon={HelpCircle}
            label="Hayron o‘quvchi (TASK-11)"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.stats.map((s, i) => {
            const tone = toneClasses[s.tone];
            return (
              <Reveal key={s.text} delay={i * 0.06}>
                <div className={cn("lift h-full rounded-3xl p-6", tone.soft)}>
                  <p className={cn("font-heading text-4xl font-bold", tone.deep)}>
                    <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-ink">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
