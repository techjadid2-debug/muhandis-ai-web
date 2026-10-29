import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Bot, ChevronLeft, CircleCheck, CirclePlay, NotebookPen } from "lucide-react";
import { LessonDemo } from "@/components/marketing/lesson-demo";
import { buttonVariants } from "@/components/ui/button";
import { courses, lesson } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Dars" };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug, id: "1" }));
}

export default function LessonPage({ params }: PageProps<"/kurslar/[slug]/dars/[id]">) {
  return (
    <Suspense fallback={<LessonSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}

function LessonSkeleton() {
  return (
    <div className="mx-auto grid max-w-6xl animate-pulse gap-6 lg:grid-cols-[1fr_20rem]" aria-busy>
      <div className="aspect-video rounded-3xl bg-mist" />
      <div className="h-80 rounded-3xl bg-mist" />
    </div>
  );
}

async function Lesson({ params }: Pick<PageProps<"/kurslar/[slug]/dars/[id]">, "params">) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();
  const cp = lesson.checkpoints[0];

  return (
    <div className="mx-auto max-w-6xl">
      <Link href="/kurslar" className="mb-4 inline-flex items-center gap-1 font-semibold text-ink-soft hover:text-ink">
        <ChevronLeft className="size-4" /> {course.title}
      </Link>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-ink md:text-3xl">{lesson.title}</h1>
        <span className="rounded-full bg-sky-soft px-3 py-1 text-sm font-bold text-sky-deep">
          {lesson.number}-dars / {lesson.total}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="flex flex-col gap-6">
          <LessonDemo lesson={`To‘xtash nuqtasi · ${cp.at}`} question={cp.question} options={cp.options} />
          <div className="card-soft flex flex-wrap items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-lavender-soft text-lavender-deep"><Bot className="size-5" /></span>
              <p className="text-ink"><b>Tushunmadingmi?</b> AI Tutor shu mavzuni boshqacha tushuntirib beradi.</p>
            </div>
            <Link href="/tutor" className={buttonVariants({ variant: "secondary" })}>AI Tutor’dan so‘rash</Link>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <section className="card-soft p-5">
            <h2 className="mb-3 font-bold text-ink">Dars bo‘limlari</h2>
            <ol className="flex flex-col gap-1">
              {lesson.chapters.map((ch, i) => (
                <li key={ch} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5", i === 2 ? "bg-sky-soft font-bold text-sky-deep" : "text-ink")}>
                  {i < 2 ? <CircleCheck className="size-5 text-mint-deep" /> : <CirclePlay className={cn("size-5", i === 2 ? "" : "text-ink-soft/50")} />}
                  {ch}
                </li>
              ))}
            </ol>
          </section>
          <section className="rounded-3xl bg-sun-soft p-5">
            <h2 className="mb-3 flex items-center gap-2 font-bold text-ink"><NotebookPen className="size-5 text-sun-deep" /> Konspekt</h2>
            <ul className="flex flex-col gap-2 text-ink">
              {lesson.notes.map((n) => <li key={n} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sun-deep" />{n}</li>)}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
