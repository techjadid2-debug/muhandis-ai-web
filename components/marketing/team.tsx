import { UserRound } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { toneClasses } from "@/components/brand/tone";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

export function Team() {
  const t = uz.team;
  return (
    <Section id="jamoa" className="bg-white">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="grid gap-5 sm:grid-cols-3">
        {t.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <div className="card-soft lift flex flex-col items-center p-8 text-center">
              <div className="w-32 overflow-hidden rounded-full">
                <Illustration src={m.image} alt={m.name} width={512} height={512} tone={m.tone} icon={UserRound} className="rounded-full" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{m.name}</h3>
              <span className={cn("mt-2 rounded-full px-3 py-1 text-sm font-bold", toneClasses[m.tone].soft, toneClasses[m.tone].deep)}>{m.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
