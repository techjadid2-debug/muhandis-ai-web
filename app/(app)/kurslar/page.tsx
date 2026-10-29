import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, PackageOpen, Zap } from "lucide-react";
import { Bar } from "@/components/app/bar";
import { CourseFilter } from "@/components/app/course-filter";
import { PageHeader } from "@/components/app/page-header";
import { Illustration } from "@/components/brand/illustration";
import { toneClasses } from "@/components/brand/tone";
import { categories, courses } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Kurslar" };

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Kurslar" subtitle="Qiziqishingga mos yo‘nalishni tanla — har bir kurs amaliy loyiha bilan tugaydi." />
      <CourseFilter
        categories={categories}
        empty={
          <div className="mx-auto max-w-xs py-10 text-center">
            <Illustration src="/images/empty/no-courses.png" alt="Kurs topilmadi" width={500} height={500} tone="lavender" icon={PackageOpen} />
            <p className="mt-4 font-bold text-ink">Bu yo‘nalishda hozircha kurs yo‘q</p>
            <p className="text-ink-soft">Tez orada qo‘shamiz!</p>
          </div>
        }
        items={courses.map((c) => ({
          category: c.category,
          node: (
            <Link href={`/kurslar/${c.slug}/dars/1`} className="card-soft lift flex h-full flex-col overflow-hidden">
              <div className="p-3">
                <Illustration src={c.image} alt={c.title} width={1200} height={750} tone={c.tone} icon={Zap} className="rounded-2xl" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 pt-2 pb-5">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className={cn("rounded-full px-2.5 py-1", toneClasses[c.tone].soft, toneClasses[c.tone].deep)}>{c.category}</span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-ink-soft">{c.level}</span>
                </div>
                <h2 className="text-lg font-bold text-ink">{c.title}</h2>
                <p className="flex items-center gap-1.5 text-sm text-ink-soft"><BookOpen className="size-4" /> {c.lessons} ta dars</p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <Bar value={c.progress} color={c.progress === 100 ? "bg-mint" : "bg-sky"} label={`${c.title} progressi`} />
                  <span className="w-20 shrink-0 text-right text-sm font-bold text-ink-soft">
                    {c.progress === 100 ? "Tugallandi" : c.progress ? `${c.progress}%` : "Boshlash"}
                  </span>
                </div>
              </div>
            </Link>
          ),
        }))}
      />
    </div>
  );
}
