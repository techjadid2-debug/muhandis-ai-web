import Link from "next/link";
import { ArrowRight, Globe, Mail, Phone } from "lucide-react";
import { Blobs } from "@/components/brand/blobs";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { uz } from "@/content/uz";

export function CtaBanner() {
  const t = uz.cta;
  return (
    <section className="px-5 pb-20 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#e6f3fe] via-[#efeaff] to-[#fde9f3] px-8 py-16 text-center md:py-20">
        <Blobs variant="corner" />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink text-balance md:text-5xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">{t.text}</p>
        <Link href="/royxat" className={buttonVariants({ variant: "gradient", size: "lg", className: "mt-8" })}>
          {t.button} <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  const t = uz.footer;
  return (
    <footer className="border-t border-line bg-white px-5 pt-14 pb-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-ink-soft">{t.tagline}</p>
        </div>
        {t.columns.map((c) => (
          <div key={c.title}>
            <p className="mb-3 font-bold text-ink">{c.title}</p>
            <ul className="flex flex-col gap-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-soft hover:text-sky-deep">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="mb-3 font-bold text-ink">Bog‘lanish</p>
          <ul className="flex flex-col gap-2.5 text-ink-soft">
            <li><a href={t.contact.phoneHref} className="flex items-center gap-2 hover:text-sky-deep"><Phone className="size-4" /> {t.contact.phone}</a></li>
            <li><a href={`mailto:${t.contact.email}`} className="flex items-center gap-2 break-all hover:text-sky-deep"><Mail className="size-4 shrink-0" /> {t.contact.email}</a></li>
            <li className="flex items-center gap-2"><Globe className="size-4" /> {t.contact.site}</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-line pt-6 text-sm text-ink-soft">{t.copyright}</p>
    </footer>
  );
}
