import Link from "next/link";
import { ArrowRight, CheckCircle2, School } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";

export function Schools({ showCta = true }: { showCta?: boolean }) {
  const t = uz.schools;
  return (
    <Section id="maktablar" className="bg-mist">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Illustration
            src="/images/schools/teacher-dashboard.png"
            alt="O‘qituvchi sinfda katta ekranda o‘quvchilar progressini ko‘rsatmoqda"
            width={1400}
            height={1000}
            tone="sky"
            icon={School}
            label="O‘qituvchi va sinf (TASK-12)"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading align="left" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <ul className="-mt-4 grid gap-3 sm:grid-cols-2">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-white p-4 font-semibold text-ink shadow-soft">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky" /> {p}
              </li>
            ))}
          </ul>
          {showCta && (
            <Link href="/maktablar#sorov" className={buttonVariants({ size: "lg", className: "mt-8" })}>
              {t.cta} <ArrowRight />
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
