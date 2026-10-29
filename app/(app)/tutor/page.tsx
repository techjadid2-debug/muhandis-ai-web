import type { Metadata } from "next";
import { Map } from "lucide-react";
import { Bar } from "@/components/app/bar";
import { PageHeader } from "@/components/app/page-header";
import { TutorChat } from "@/components/app/tutor-chat";
import { roadmap, tutorChat, tutorSuggestions, weakTopics } from "@/lib/mock-data";

export const metadata: Metadata = { title: "AI Tutor" };

export default function TutorPage() {
  const current = roadmap.find((r) => r.state === "current");
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="AI Tutor" subtitle="Shaxsiy yordamching: tushunmagan joyingni sodda tilda tushuntiradi." />
      <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
        <aside className="flex flex-col gap-6">
          <section className="card-soft p-5">
            <h2 className="font-bold text-ink">Tushunmagan mavzularim</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {weakTopics.map((w) => (
                <li key={w.topic}>
                  <div className="mb-1.5 flex justify-between text-sm"><span className="font-semibold text-ink">{w.topic}</span><span className="text-ink-soft">{w.score}%</span></div>
                  <Bar value={w.score} color={w.tone === "blush" ? "bg-blush" : "bg-sun"} label={w.topic} />
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl bg-sky-soft p-5">
            <h2 className="flex items-center gap-2 font-bold text-ink"><Map className="size-5 text-sky-deep" /> Keyingi qadam</h2>
            <p className="mt-2 text-ink">{current?.title}</p>
            <p className="text-sm text-ink-soft">+{current?.xp} XP</p>
          </section>
        </aside>
        <TutorChat initial={tutorChat} suggestions={tutorSuggestions} />
      </div>
    </div>
  );
}
