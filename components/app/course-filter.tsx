"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Kartalar serverda chiziladi (rasm tekshiruvi uchun), filtr esa mijozda. */
export function CourseFilter({ categories, items, empty }: { categories: string[]; items: { category: string; node: ReactNode }[]; empty: ReactNode }) {
  const [active, setActive] = useState(categories[0]);
  const shown = items.filter((i) => active === categories[0] || i.category === active);
  return (
    <>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Yo‘nalishlar">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 font-semibold transition-colors",
              active === c ? "border-sky bg-sky text-white" : "border-line bg-white text-ink-soft hover:border-sky/50 hover:text-ink",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      {shown.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{shown.map((i, idx) => <div key={idx}>{i.node}</div>)}</div> : empty}
    </>
  );
}
