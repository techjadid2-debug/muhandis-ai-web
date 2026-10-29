"use client";

import { useState } from "react";
import { CheckCircle2, Lightbulb, Pause, Play, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Option = { text: string; correct: boolean; hint: string };

/** Interaktiv dars mini-demosi: video to‘xtaydi, savol beradi; to‘g‘ri javob — davom etadi. */
export function LessonDemo({ lesson, question, options }: { lesson: string; question: string; options: Option[] }) {
  const [picked, setPicked] = useState<number | null>(null);
  const solved = picked !== null && options[picked].correct;

  return (
    <div className="card-soft overflow-hidden">
      {/* Video kadr maketi */}
      <div className="relative aspect-video bg-gradient-to-br from-[#e9f1ff] via-[#efeaff] to-[#fde9f3]">
        <svg viewBox="0 0 320 180" className="absolute inset-0 size-full" aria-hidden>
          <g fill="none" stroke="#1e2340" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round">
            <path d="M70 60h60m40 0h80v70H70V60" />
          </g>
          <rect x="130" y="52" width="40" height="16" rx="5" fill="#ffc96b" stroke="#1e2340" strokeOpacity=".55" strokeWidth="2.5" />
          <g stroke="#1e2340" strokeOpacity=".55" strokeWidth="2.5">
            <line x1="62" y1="88" x2="78" y2="88" />
            <line x1="66" y1="98" x2="74" y2="98" />
          </g>
          <circle cx="250" cy="95" r="11" fill={solved ? "#5fd3b0" : "#ffffff"} stroke="#1e2340" strokeOpacity=".55" strokeWidth="2.5" />
          {solved && <circle cx="250" cy="95" r="22" fill="#5fd3b0" opacity=".25" />}
        </svg>
        <span className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-ink backdrop-blur">{lesson}</span>
        <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white/85 text-ink backdrop-blur">
          {solved ? <Play className="size-4" /> : <Pause className="size-4" />}
        </span>
        {/* Progress */}
        <div className="absolute inset-x-3 bottom-3 h-1.5 overflow-hidden rounded-full bg-white/70">
          <div className={cn("h-full rounded-full bg-sky transition-all duration-[1500ms]", solved ? "w-[72%]" : "w-[46%]")} />
        </div>
      </div>

      {/* Savol kartasi */}
      <div className="flex flex-col gap-4 p-6">
        <p className="flex items-center gap-2 text-sm font-bold text-lavender-deep">
          <Sparkles className="size-4" /> Savol vaqti
        </p>
        <p className="text-lg font-bold text-ink">{question}</p>
        <div className="grid gap-2.5 sm:grid-cols-3" role="radiogroup" aria-label="Javob variantlari">
          {options.map((o, i) => {
            const isPicked = picked === i;
            return (
              <button
                key={o.text}
                role="radio"
                aria-checked={isPicked}
                disabled={solved}
                onClick={() => setPicked(i)}
                className={cn(
                  "min-h-12 rounded-2xl border-2 px-4 py-2.5 font-semibold transition-all",
                  !isPicked && "border-line bg-white text-ink hover:border-sky/50 hover:bg-sky-soft",
                  isPicked && o.correct && "border-mint bg-mint-soft text-mint-deep",
                  isPicked && !o.correct && "border-sun bg-sun-soft text-sun-deep",
                  solved && !isPicked && "opacity-50",
                )}
              >
                {o.text}
              </button>
            );
          })}
        </div>
        <div aria-live="polite" className="min-h-[3.5rem]">
          {picked !== null && (
            <div className={cn("flex items-start gap-3 rounded-2xl p-4", solved ? "bg-mint-soft" : "bg-sun-soft")}>
              {solved ? <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint-deep" /> : <Lightbulb className="mt-0.5 size-5 shrink-0 text-sun-deep" />}
              <p className="text-ink">{options[picked].hint}</p>
            </div>
          )}
        </div>
        {solved && (
          <Button variant="ghost" size="sm" className="self-start" onClick={() => setPicked(null)}>
            <RotateCcw /> Qaytadan sinash
          </Button>
        )}
      </div>
    </div>
  );
}
