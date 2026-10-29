import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/brand/reveal";

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white/70 px-3.5 py-1 text-sm font-bold text-sky-deep backdrop-blur", className)}>
      <span className="size-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("mb-12 flex flex-col gap-4 md:mb-16", align === "center" ? "items-center text-center" : "items-start")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-3xl font-bold text-ink text-balance md:text-[2.75rem] md:leading-[1.1]">{title}</h2>
      {subtitle && <p className="max-w-2xl text-lg text-ink-soft text-pretty">{subtitle}</p>}
    </Reveal>
  );
}
