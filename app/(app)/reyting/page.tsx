import type { Metadata } from "next";
import { CalendarDays, Crown, Gift, Users } from "lucide-react";
import { PageHeader } from "@/components/app/page-header";
import { toneClasses } from "@/components/brand/tone";
import { Button } from "@/components/ui/button";
import { contests, leaderboard } from "@/lib/mock-data";
import { cn, formatNumber } from "@/lib/utils";

export const metadata: Metadata = { title: "Reyting" };

const medal = ["bg-sun text-white", "bg-[#cfd6e6] text-ink", "bg-[#f1c3a0] text-ink"];

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Reyting va tanlovlar" subtitle="Ball to‘pla, loyihalar bilan tanlovlarda qatnash va sovrinlar yut." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="card-soft p-5">
          <h2 className="mb-4 flex items-center gap-2 font-bold text-ink"><Crown className="size-5 text-sun-deep" /> Haftalik reyting</h2>
          <ol className="flex flex-col gap-2">
            {leaderboard.map((u, i) => (
              <li key={u.name} className={cn("flex items-center gap-4 rounded-2xl px-4 py-3", u.me ? "bg-sky-soft ring-2 ring-sky/40" : "hover:bg-mist")}>
                <span className={cn("grid size-9 shrink-0 place-items-center rounded-full font-heading font-bold", medal[i] ?? "bg-mist text-ink-soft")}>{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-ink">{u.name} {u.me && <span className="text-sm font-semibold text-sky-deep">(sen)</span>}</p>
                  <p className="truncate text-sm text-ink-soft">{u.school}</p>
                </div>
                <span className="font-heading font-bold text-lavender-deep">{formatNumber(u.xp)} XP</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-ink">Loyiha tanlovlari</h2>
          {contests.map((c) => (
            <article key={c.title} className={cn("rounded-3xl p-5", toneClasses[c.tone].soft)}>
              <h3 className="text-lg font-bold text-ink">{c.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink">
                <li className="flex items-center gap-1.5"><CalendarDays className="size-4" /> {c.deadline} gacha</li>
                <li className="flex items-center gap-1.5"><Gift className="size-4" /> {c.prize}</li>
                <li className="flex items-center gap-1.5"><Users className="size-4" /> {c.participants} ishtirokchi</li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4">Qatnashish</Button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
