"use client";

import { useState } from "react";
import { BatteryFull, Bell, Cpu, Lightbulb, Play, RotateCcw, SquareDot, Waves, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toneClasses, type Tone } from "@/components/brand/tone";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = { battery: BatteryFull, resistor: Waves, led: Lightbulb, button: SquareDot, arduino: Cpu, buzzer: Bell };

type Comp = { key: string; title: string; tone: Tone };
type Result = { kind: "ok" | "warn" | "info"; text: string } | null;

/**
 * Virtual laboratoriya maketi: komponentlarni platga qo‘shib, "Ishga tushirish" bosiladi.
 * Hozircha soddalashtirilgan qoidalar — haqiqiy sxema simulyatori keyingi bosqichda.
 */
export function LabBoard({ components }: { components: Comp[] }) {
  const [placed, setPlaced] = useState<string[]>(["battery", "led"]);
  const [result, setResult] = useState<Result>(null);
  const has = (k: string) => placed.includes(k);
  const lit = result?.kind === "ok" && has("led");

  function toggle(k: string) {
    setResult(null);
    setPlaced((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));
  }

  function run() {
    if (!has("battery")) return setResult({ kind: "info", text: "Zanjirda energiya manbai yo‘q. Batareya qo‘shib ko‘r." });
    if (has("led") && !has("resistor"))
      return setResult({ kind: "warn", text: "Ehtiyot bo‘l! Rezistorsiz LED orqali juda katta tok o‘tadi va u kuyib qolishi mumkin. 330 Ω rezistor qo‘sh." });
    if (has("led")) return setResult({ kind: "ok", text: "Ajoyib! Tok ≈ (9V − 2V) / 330 Ω ≈ 21 mA. LED xavfsiz yondi. +20 XP" });
    if (has("buzzer")) return setResult({ kind: "ok", text: "Buzzer ovoz chiqardi! Endi tugma qo‘shib, uni boshqarib ko‘r." });
    setResult({ kind: "info", text: "Zanjir yopiq, lekin natijani ko‘rsatadigan qism yo‘q. LED yoki buzzer qo‘sh." });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
      <section className="card-soft p-4">
        <h2 className="mb-3 px-1 font-bold text-ink">Komponentlar</h2>
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {components.map((c) => {
            const Icon = icons[c.key];
            const on = has(c.key);
            return (
              <li key={c.key}>
                <button
                  onClick={() => toggle(c.key)}
                  aria-pressed={on}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl border-2 p-2.5 text-left text-sm font-semibold transition-all",
                    on ? "border-sky bg-sky-soft text-ink" : "border-line bg-white text-ink-soft hover:border-sky/40",
                  )}
                >
                  <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", toneClasses[c.tone].soft, toneClasses[c.tone].deep)}>
                    <Icon className="size-5" />
                  </span>
                  {c.title}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 px-1 text-xs text-ink-soft">Komponentni bosib platga qo‘sh yoki olib tashla.</p>
      </section>

      <section className="flex flex-col gap-4">
        <div
          className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-line bg-white"
          style={{ backgroundImage: "radial-gradient(#dfe3f0 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
        >
          <svg viewBox="0 0 600 340" className="absolute inset-0 size-full" role="img" aria-label="Sxema maketi">
            {/* simlar */}
            <path d="M120 250 V90 H480 V250 H120" fill="none" stroke={lit ? "#5FD3B0" : "#c9cfe0"} strokeWidth="5" strokeLinejoin="round" strokeDasharray={lit ? "0" : "10 8"} />
            {has("battery") && (
              <g transform="translate(80 140)">
                <rect width="80" height="64" rx="14" fill="#fff4dc" stroke="#9a5b00" strokeWidth="2.5" />
                <text x="40" y="40" textAnchor="middle" className="fill-[#9a5b00] font-bold" fontSize="18">9V</text>
              </g>
            )}
            {has("resistor") && (
              <g transform="translate(230 72)">
                <rect width="90" height="36" rx="12" fill="#efecff" stroke="#5b45d6" strokeWidth="2.5" />
                <path d="M18 18h8l5-9 8 18 8-18 8 18 5-9h12" fill="none" stroke="#5b45d6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}
            {has("led") && (
              <g transform="translate(450 150)">
                {lit && <circle cx="30" cy="30" r="46" fill="#5FD3B0" opacity=".25" />}
                <circle cx="30" cy="30" r="26" fill={lit ? "#5FD3B0" : "#e2f8f1"} stroke="#13795b" strokeWidth="2.5" />
                <path d="M20 30h20M30 22v16" stroke="#13795b" strokeWidth="2.5" strokeLinecap="round" opacity={lit ? 0 : 1} />
              </g>
            )}
            {has("buzzer") && (
              <g transform="translate(260 225)">
                <circle cx="25" cy="25" r="24" fill="#fdeaf3" stroke="#b8336f" strokeWidth="2.5" />
                <circle cx="25" cy="25" r="6" fill="#b8336f" />
              </g>
            )}
            {has("button") && (
              <g transform="translate(360 70)">
                <rect width="44" height="40" rx="10" fill="#e4f3fe" stroke="#1373c4" strokeWidth="2.5" />
                <circle cx="22" cy="20" r="8" fill="#1373c4" />
              </g>
            )}
            {has("arduino") && (
              <g transform="translate(200 160)">
                <rect width="120" height="56" rx="10" fill="#e4f3fe" stroke="#1373c4" strokeWidth="2.5" />
                {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={12 + i * 13} y="8" width="7" height="7" rx="1.5" fill="#1373c4" />)}
              </g>
            )}
          </svg>
          {!placed.length && <p className="absolute inset-0 grid place-items-center font-semibold text-ink-soft">Plat bo‘sh — chapdan komponent tanla</p>}
        </div>

        <div className="card-soft flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <Button onClick={run}><Play /> Ishga tushirish</Button>
            <Button variant="outline" size="icon" aria-label="Tozalash" onClick={() => { setPlaced([]); setResult(null); }}><RotateCcw /></Button>
          </div>
          <p
            aria-live="polite"
            className={cn(
              "flex-1 rounded-2xl px-4 py-3",
              !result && "bg-mist text-ink-soft",
              result?.kind === "ok" && "bg-mint-soft text-mint-deep",
              result?.kind === "warn" && "bg-sun-soft text-sun-deep",
              result?.kind === "info" && "bg-sky-soft text-sky-deep",
            )}
          >
            {result?.text ?? "Topshiriq: LED ni xavfsiz yondir. Maslahat — tokni cheklash kerak."}
          </p>
        </div>
      </section>
    </div>
  );
}
