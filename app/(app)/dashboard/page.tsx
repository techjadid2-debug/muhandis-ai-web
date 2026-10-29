import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Check, Lock, PlayCircle, Sparkles, Zap } from "lucide-react";
import { BadgeMedal } from "@/components/app/badge-medal";
import { Bar } from "@/components/app/bar";
import { ProgressRing } from "@/components/app/progress-ring";
import { Illustration } from "@/components/brand/illustration";
import { buttonVariants } from "@/components/ui/button";
import { badges, continueLesson, roadmap, student, weakTopics, weeklyActivity } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Bosh sahifa" };

export default function DashboardPage() {
  const goalPct = Math.round((student.dailyGoal.done / student.dailyGoal.total) * 100);
  const maxMin = Math.max(...weeklyActivity.map((d) => d.minutes));
  const c = continueLesson;

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
      {/* Salomlashish + kunlik maqsad */}
      <section className="card-soft relative overflow-hidden p-6 lg:col-span-2 md:p-8">
        <div aria-hidden className="blob -top-16 -right-16 size-64 bg-lavender/25" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-ink-soft">{student.grade} · {student.level}-daraja</p>
            <h1 className="mt-1 text-3xl font-bold text-ink">Xush kelibsan, {student.name}!</h1>
            <p className="mt-2 max-w-md text-ink-soft">Bugun yana bitta darsni tugatsang, kunlik maqsadingga erishasan. Davom et — sen zo‘r ketyapsan!</p>
          </div>
          <ProgressRing value={goalPct} color="#5FD3B0">
            <div>
              <p className="font-heading text-2xl font-bold text-ink">{student.dailyGoal.done}/{student.dailyGoal.total}</p>
              <p className="text-xs font-semibold text-ink-soft">bugungi dars</p>
            </div>
          </ProgressRing>
        </div>
      </section>

      {/* AI Tutor tavsiyasi */}
      <section className="flex flex-col rounded-3xl bg-gradient-to-br from-[#eef6ff] to-[#f3efff] p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 overflow-hidden rounded-2xl">
            <Illustration src="/images/app/tutor-avatar.png" alt="AI Tutor" width={256} height={256} tone="lavender" icon={Bot} className="rounded-2xl [&_span.grid]:size-8 [&_svg]:size-5" />
          </div>
          <div>
            <p className="font-bold text-ink">AI Tutor tavsiyasi</p>
            <p className="text-xs text-ink-soft">Kechagi test asosida</p>
          </div>
        </div>
        <p className="mt-4 text-ink">“<b>Ohm qonuni</b> mavzusini 5 daqiqa takrorlasak, keyingi dars ancha oson bo‘ladi.”</p>
        <Link href="/tutor" className={buttonVariants({ variant: "secondary", className: "mt-auto self-start" })}>
          <Sparkles /> Takrorlash
        </Link>
      </section>

      {/* Davom ettirish */}
      <section className="card-soft overflow-hidden lg:col-span-2">
        <div className="grid sm:grid-cols-[14rem_1fr]">
          <div className="p-3 sm:p-4">
            <Illustration src={c.course.image} alt={c.course.title} width={1200} height={750} tone={c.course.tone} icon={Zap} className="rounded-2xl" />
          </div>
          <div className="flex flex-col justify-center gap-3 p-6 sm:pl-2">
            <p className="text-sm font-bold text-sky-deep">Davom ettirish · {c.course.title}</p>
            <h2 className="text-xl font-bold text-ink">{c.title}</h2>
            <div className="flex items-center gap-3">
              <Bar value={c.progress} label="Dars progressi" />
              <span className="shrink-0 text-sm font-semibold text-ink-soft">{c.minutesLeft} daq qoldi</span>
            </div>
            <Link href={`/kurslar/${c.course.slug}/dars/${c.lessonId}`} className={buttonVariants({ className: "self-start" })}>
              <PlayCircle /> Darsni davom ettirish
            </Link>
          </div>
        </div>
      </section>

      {/* Haftalik faollik */}
      <section className="card-soft p-6">
        <h2 className="font-bold text-ink">Haftalik faollik</h2>
        <p className="text-sm text-ink-soft">Jami {weeklyActivity.reduce((a, d) => a + d.minutes, 0)} daqiqa</p>
        <div className="mt-5 flex h-32 items-end justify-between gap-2">
          {weeklyActivity.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-24 w-full items-end">
                <div
                  className={cn("w-full rounded-xl", d.minutes ? "bg-gradient-to-t from-sky to-lavender" : "bg-[#EEF1F8]")}
                  style={{ height: `${d.minutes ? Math.max(12, (d.minutes / maxMin) * 100) : 8}%` }}
                  title={`${d.minutes} daqiqa`}
                />
              </div>
              <span className="text-xs font-bold text-ink-soft">{d.day}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="card-soft p-6 lg:col-span-2">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-ink">Mening yo‘l xaritam</h2>
            <p className="text-sm text-ink-soft">AI Tutor sening darajangga qarab tuzgan</p>
          </div>
          <Link href="/kurslar" className="text-sm font-bold text-sky-deep hover:underline">Barchasi</Link>
        </div>
        <ol className="relative flex flex-col gap-3">
          {roadmap.map((n, i) => (
            <li key={n.title} className="relative flex items-center gap-4">
              {i < roadmap.length - 1 && <span aria-hidden className={cn("absolute top-11 left-[1.15rem] h-6 w-0.5", n.state === "done" ? "bg-mint" : "bg-line")} />}
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-full",
                  n.state === "done" && "bg-mint text-white",
                  n.state === "current" && "bg-sky text-white ring-6 ring-sky/20",
                  n.state === "locked" && "bg-mist text-ink-soft",
                )}
              >
                {n.state === "done" ? <Check className="size-5" strokeWidth={3} /> : n.state === "locked" ? <Lock className="size-4" /> : <PlayCircle className="size-5" />}
              </span>
              <div className={cn("flex flex-1 items-center justify-between rounded-2xl px-4 py-3", n.state === "current" ? "bg-sky-soft" : "bg-transparent")}>
                <span className={cn("font-semibold", n.state === "locked" ? "text-ink-soft" : "text-ink")}>{n.title}</span>
                <span className="shrink-0 pl-2 text-sm font-bold whitespace-nowrap text-lavender-deep">+{n.xp} XP</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Kuchsiz mavzular + nishonlar */}
      <div className="flex flex-col gap-6">
        <section className="card-soft p-6">
          <h2 className="font-bold text-ink">Takrorlash kerak</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {weakTopics.map((w) => (
              <li key={w.topic}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-semibold text-ink">{w.topic}</span>
                  <span className="font-bold text-ink-soft">{w.score}%</span>
                </div>
                <Bar value={w.score} color={w.tone === "blush" ? "bg-blush" : "bg-sun"} label={w.topic} />
              </li>
            ))}
          </ul>
          <Link href="/testlar" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-sky-deep hover:underline">
            Mashq testini boshlash <ArrowRight className="size-4" />
          </Link>
        </section>
        <section className="card-soft p-6">
          <h2 className="font-bold text-ink">Nishonlarim</h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {badges.map((b) => (
              <BadgeMedal key={b.key} k={b.key} title={b.title} earned={b.earned} tone={b.tone} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
