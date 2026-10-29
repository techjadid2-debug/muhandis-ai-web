"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Bot, CheckCircle2, Lightbulb, RotateCcw } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Bar } from "./bar";
import { cn } from "@/lib/utils";

type Q = { q: string; options: string[]; answer: number; topic: string };
const levels = ["Boshlang‘ich", "O‘rta", "Yuqori"];

export function QuizRunner({ topic, questions, scores }: { topic: string; questions: Q[]; scores: { topic: string; score: number }[] }) {
  const [level, setLevel] = useState<string | null>(null);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const done = i >= questions.length;

  if (!level)
    return (
      <div className="card-soft mx-auto max-w-2xl p-8 text-center">
        <p className="text-sm font-bold text-lavender-deep">{topic}</p>
        <h2 className="mt-2 text-2xl font-bold text-ink">Darajangni tanla</h2>
        <p className="mt-2 text-ink-soft">AI savollarni darajangga moslaydi. Xavotir olma — bu baho emas, o‘sish uchun xarita.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {levels.map((l, idx) => (
            <button key={l} onClick={() => setLevel(l)} className="rounded-2xl border-2 border-line bg-white p-5 font-bold text-ink transition-all hover:border-sky hover:bg-sky-soft">
              <span className="mb-1 block text-2xl">{"⭐".repeat(idx + 1)}</span>
              {l}
            </button>
          ))}
        </div>
      </div>
    );

  if (done) {
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
        <section className="card-soft flex flex-col items-center p-8 text-center">
          <CheckCircle2 className="size-14 text-mint-deep" />
          <h2 className="mt-3 text-2xl font-bold text-ink">Test yakunlandi!</h2>
          <p className="mt-1 text-ink-soft">{questions.length} tadan {correct} ta to‘g‘ri</p>
          <p className="mt-4 font-heading text-5xl font-bold text-gradient">{pct}%</p>
          <p className="mt-1 font-bold text-lavender-deep">+{correct * 15} XP</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button variant="outline" onClick={() => { setI(0); setCorrect(0); setPicked(null); setLevel(null); }}><RotateCcw /> Qayta topshirish</Button>
            <Link href="/tutor" className={buttonVariants({ variant: "secondary" })}><Bot /> Tahlilni muhokama qilish</Link>
          </div>
        </section>
        <section className="card-soft p-6">
          <h3 className="font-bold text-ink">Mavzular bo‘yicha natija</h3>
          <p className="text-sm text-ink-soft">AI tahlili: kuchli va kuchsiz tomonlaring</p>
          <ul className="mt-5 flex flex-col gap-4">
            {scores.map((s) => (
              <li key={s.topic}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-semibold text-ink">{s.topic}</span>
                  <span className="font-bold text-ink-soft">{s.score}%</span>
                </div>
                <Bar value={s.score} color={s.score >= 75 ? "bg-mint" : s.score >= 60 ? "bg-sun" : "bg-blush"} label={s.topic} />
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-lavender-soft p-4">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-lavender-deep" />
            <p className="text-ink"><b>Tavsiya:</b> “Ohm qonuni” darsini qayta ko‘rib, virtual laboratoriyada LED topshirig‘ini bajar.</p>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[i];
  const answered = picked !== null;
  return (
    <div className="card-soft mx-auto max-w-2xl p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <Bar value={(i / questions.length) * 100} color="bg-lavender" label="Test progressi" />
        <span className="shrink-0 text-sm font-bold text-ink-soft">{i + 1} / {questions.length}</span>
      </div>
      <p className="text-sm font-bold text-sky-deep">{q.topic} · {level}</p>
      <h2 className="mt-2 text-xl font-bold text-ink md:text-2xl">{q.q}</h2>
      <div className="mt-6 grid gap-3" role="radiogroup" aria-label="Javoblar">
        {q.options.map((o, idx) => {
          const isRight = idx === q.answer;
          const isPicked = picked === idx;
          return (
            <button
              key={o}
              role="radio"
              aria-checked={isPicked}
              disabled={answered}
              onClick={() => { setPicked(idx); if (isRight) setCorrect((c) => c + 1); }}
              className={cn(
                "flex min-h-13 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-semibold transition-all",
                !answered && "border-line bg-white text-ink hover:border-sky/50 hover:bg-sky-soft",
                answered && isRight && "border-mint bg-mint-soft text-mint-deep",
                answered && isPicked && !isRight && "border-sun bg-sun-soft text-sun-deep",
                answered && !isPicked && !isRight && "border-line bg-white text-ink-soft opacity-60",
              )}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-white/80 text-sm font-bold">{String.fromCharCode(65 + idx)}</span>
              {o}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="mt-5 min-h-12">
        {answered && (
          <p className={cn("rounded-2xl p-4", picked === q.answer ? "bg-mint-soft text-mint-deep" : "bg-sun-soft text-sun-deep")}>
            {picked === q.answer ? "To‘g‘ri! Zo‘r ketyapsan." : `Hechqisi yo‘q! To‘g‘ri javob: “${q.options[q.answer]}”. Bu mavzuni tahlilga qo‘shdik.`}
          </p>
        )}
      </div>
      <Button className="mt-4 w-full" size="lg" disabled={!answered} onClick={() => { setI(i + 1); setPicked(null); }}>
        {i + 1 === questions.length ? "Natijani ko‘rish" : "Keyingi savol"} <ArrowRight />
      </Button>
    </div>
  );
}
