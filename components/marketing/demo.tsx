import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/brand/reveal";
import { LessonDemo } from "./lesson-demo";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";

export function Demo() {
  const t = uz.demo;
  return (
    <Section id="demo" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading align="left" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <ul className="-mt-4 flex flex-col gap-3">
            {["Passiv tomosha o‘rniga faol o‘ylash", "Xato — o‘rganish imkoniyati, jazo emas", "Har bir javob AI Tutor tahliliga tushadi"].map((x) => (
              <li key={x} className="flex items-center gap-3 font-semibold text-ink">
                <CheckCircle2 className="size-5 text-mint-deep" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1}>
          <LessonDemo lesson={t.lesson} question={t.question} options={t.options} />
        </Reveal>
      </div>
    </Section>
  );
}
