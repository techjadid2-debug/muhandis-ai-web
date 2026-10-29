"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Msg = { from: "tutor" | "me"; text: string };

/** Mock chat: javoblar hozircha tayyor matn. Keyingi bosqichda Claude API bilan ulanadi. */
export function TutorChat({ initial, suggestions }: { initial: Msg[]; suggestions: string[] }) {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [msgs, typing]);

  function send(t: string) {
    const v = t.trim();
    if (!v) return;
    setMsgs((m) => [...m, { from: "me", text: v }]);
    setText("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "tutor", text: "Yaxshi savol! Keling, uni kichik qadamlarga bo‘lamiz. Avval o‘zing nima deb o‘ylaysan? 🙂 (Bu demo javob — haqiqiy AI Tutor tez orada ulanadi.)" }]);
    }, 900);
  }

  return (
    <section className="card-soft flex h-[min(70vh,40rem)] flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-sky to-lavender text-white"><Bot className="size-5" /></span>
        <div>
          <p className="font-bold text-ink">AI Tutor</p>
          <p className="flex items-center gap-1.5 text-xs text-mint-deep"><span className="size-2 rounded-full bg-mint" /> Onlayn</p>
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto bg-cream/60 p-5" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
            <p className={cn("max-w-[80%] rounded-3xl px-4 py-3", m.from === "me" ? "rounded-br-lg bg-sky text-white" : "rounded-bl-lg border border-line bg-white text-ink")}>{m.text}</p>
          </div>
        ))}
        {typing && (
          <div className="flex gap-1 rounded-3xl rounded-bl-lg border border-line bg-white px-4 py-3.5 w-fit" aria-label="Yozmoqda">
            {[0, 1, 2].map((d) => <span key={d} className="size-2 animate-bounce rounded-full bg-lavender" style={{ animationDelay: `${d * 120}ms` }} />)}
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div className="border-t border-line p-4">
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
          {suggestions.map((s) => (
            <button key={s} onClick={() => send(s)} className="shrink-0 rounded-full border border-lavender/40 bg-lavender-soft px-3.5 py-1.5 text-sm font-semibold text-lavender-deep hover:bg-[#e4dfff]">{s}</button>
          ))}
        </div>
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); send(text); }}>
          <label htmlFor="tutor-input" className="sr-only">Savolingni yoz</label>
          <input id="tutor-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Savolingni yoz…" className="h-12 flex-1 rounded-full border border-input bg-white px-5 outline-none focus-visible:ring-4 focus-visible:ring-ring/30" />
          <Button type="submit" size="icon" aria-label="Yuborish"><SendHorizonal /></Button>
        </form>
      </div>
    </section>
  );
}
