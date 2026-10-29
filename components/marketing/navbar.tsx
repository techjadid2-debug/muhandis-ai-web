"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const t = uz.nav;
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line/80 bg-white/75 py-2 pr-2 pl-4 shadow-soft backdrop-blur-xl">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {t.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:bg-mist hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/kirish" className={buttonVariants({ variant: "ghost" })}>{t.login}</Link>
          <Link href="/royxat" className={buttonVariants()}>{t.cta}</Link>
        </div>
        <button
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-white p-3 shadow-lift md:hidden">
          <ul className="flex flex-col">
            {t.links.map((l) => (
              <li key={l.href}>
                <Link onClick={() => setOpen(false)} href={l.href} className="block rounded-2xl px-4 py-3 font-semibold text-ink hover:bg-mist">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link href="/kirish" className={buttonVariants({ variant: "outline" })}>{t.login}</Link>
            <Link href="/royxat" className={buttonVariants()}>{t.cta}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
