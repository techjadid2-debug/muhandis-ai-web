"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Bell, Flame, Sparkles, Star } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { navItems } from "./nav-items";
import { student } from "@/lib/mock-data";
import { cn, formatNumber } from "@/lib/utils";

function useActive() {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname.startsWith(href + "/");
}

export function AppShell({ children }: { children: ReactNode }) {
  const isActive = useActive();
  return (
    <div className="flex min-h-screen bg-cream">
      {/* Sidebar — desktop */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-line bg-white px-4 py-6 lg:flex">
        <Logo href="/dashboard" className="px-2" />
        <nav className="mt-8 flex flex-col gap-1" aria-label="Asosiy menyu">
          {navItems.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3.5 py-3 font-semibold transition-colors",
                  active ? "bg-sky-soft text-sky-deep" : "text-ink-soft hover:bg-mist hover:text-ink",
                )}
              >
                <n.icon className="size-5" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto rounded-3xl bg-gradient-to-br from-[#eef6ff] to-[#f3efff] p-5">
          <Sparkles className="size-6 text-lavender-deep" />
          <p className="mt-2 font-bold text-ink">Premium’ga o‘ting</p>
          <p className="mt-1 text-sm text-ink-soft">Cheksiz AI Tutor va to‘liq virtual laboratoriya.</p>
          <Link href="/narxlar" className="mt-3 inline-block text-sm font-bold text-lavender-deep hover:underline">Batafsil →</Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-line bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-8">
          <Logo href="/dashboard" className="lg:hidden [&>span]:hidden sm:[&>span]:inline" />
          <div className="hidden text-ink-soft lg:block">
            Salom, <span className="font-bold text-ink">{student.name}</span> 👋
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-sun-soft px-3 py-1.5 text-sm font-bold text-sun-deep" title="Ketma-ket kunlar">
              <Flame className="size-4" /> {student.streak}
              <span className="sr-only">kunlik seriya</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-lavender-soft px-3 py-1.5 text-sm font-bold whitespace-nowrap text-lavender-deep" title="Tajriba ballari">
              <Star className="size-4" /> {formatNumber(student.xp)}<span className="hidden sm:inline">XP</span>
            </span>
            <button className="hidden size-10 place-items-center rounded-full text-ink-soft hover:bg-mist sm:grid" aria-label="Bildirishnomalar">
              <Bell className="size-5" />
            </button>
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-sky to-lavender font-heading font-bold text-white" aria-label={student.fullName}>
              {student.name[0]}
            </span>
          </div>
        </header>

        <main className="flex-1 px-4 pt-6 pb-28 sm:px-8 lg:pb-12">{children}</main>
      </div>

      {/* Pastki tab bar — mobil */}
      <nav aria-label="Asosiy menyu" className="fixed inset-x-3 bottom-3 z-50 flex justify-between rounded-3xl border border-line bg-white/95 p-1.5 shadow-lift backdrop-blur lg:hidden">
        {navItems.map((n) => {
          const active = isActive(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={cn("flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl py-2 text-[0.7rem] font-bold", active ? "bg-sky-soft text-sky-deep" : "text-ink-soft")}
            >
              <n.icon className="size-5" />
              <span className="truncate">{n.short}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
