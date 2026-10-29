import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, PlayCircle, Sparkles, Zap } from "lucide-react";
import { Blobs } from "@/components/brand/blobs";
import { Illustration } from "@/components/brand/illustration";
import { Reveal } from "@/components/brand/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "./section";
import { uz } from "@/content/uz";

export function Hero() {
  const t = uz.hero;
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-20 sm:px-8 md:pt-20 md:pb-28">
      <Blobs variant="hero" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="flex flex-col items-start gap-6">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="text-[2.6rem] leading-[1.05] font-bold text-ink text-balance sm:text-6xl lg:text-[4.2rem]">
            {t.title} <span className="text-gradient">{t.titleAccent}</span>
          </h1>
          <p className="max-w-xl text-lg text-ink-soft text-pretty md:text-xl">{t.subtitle}</p>
          <p className="rounded-full border-2 border-sky/40 bg-white/70 px-4 py-1.5 font-semibold text-ink">{t.motto}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/royxat" className={buttonVariants({ variant: "gradient", size: "lg" })}>
              {t.primary} <ArrowRight />
            </Link>
            <Link href="/#demo" className={buttonVariants({ variant: "outline", size: "lg" })}>
              <PlayCircle className="text-sky" /> {t.secondary}
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm font-semibold text-ink-soft">
            {t.trust.map((x) => (
              <li key={x} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-mint-deep" /> {x}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <Illustration
            src="/images/hero/hero-student-robot.png"
            alt="Ikki o‘quvchi noutbuk va elektron sxema ustida ishlamoqda, yonida do‘stona AI robot"
            width={1600}
            height={1200}
            tone="lavender"
            icon={Bot}
            label="Hero: o‘quvchilar + AI robot (TASK-01)"
            priority
          />
          {/* Suzuvchi kartochkalar — platformadan "jonli" lavhalar */}
          <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-left-6">
            <span className="grid size-10 place-items-center rounded-xl bg-mint-soft text-mint-deep"><Zap className="size-5" /></span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">LED yondi!</p>
              <p className="text-xs text-ink-soft">+20 XP · Virtual lab</p>
            </div>
          </div>
          <div className="absolute top-4 right-2 flex items-center gap-2 rounded-2xl border border-line bg-white/90 px-3.5 py-2.5 shadow-lift backdrop-blur sm:-right-4">
            <Sparkles className="size-4 text-lavender-deep" />
            <p className="text-sm font-semibold text-ink">AI Tutor: “Ohm qonunini takrorlaymizmi?”</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
