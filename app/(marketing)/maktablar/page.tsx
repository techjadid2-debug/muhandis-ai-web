import type { Metadata } from "next";
import { BarChart3, BookOpenCheck, FlaskConical, GraduationCap } from "lucide-react";
import { Blobs } from "@/components/brand/blobs";
import { Reveal } from "@/components/brand/reveal";
import { ContactForm } from "@/components/marketing/contact-form";
import { Schools } from "@/components/marketing/schools";
import { Eyebrow, Section, SectionHeading } from "@/components/marketing/section";
import { Pricing } from "@/components/marketing/pricing";

export const metadata: Metadata = { title: "Maktablar uchun" };

const benefits = [
  { icon: FlaskConical, title: "Laboratoriyasiz amaliyot", text: "Maktablarning atigi 11% ida laboratoriya bor. Virtual lab bu bo‘shliqni yopadi.", tone: "bg-mint-soft text-mint-deep" },
  { icon: BarChart3, title: "Sinf tahlili", text: "Har bir o‘quvchining kuchli va kuchsiz mavzulari bitta panelda.", tone: "bg-sky-soft text-sky-deep" },
  { icon: BookOpenCheck, title: "Tayyor dars rejalari", text: "O‘qituvchilarning 70% amaliy kontent yetishmasligini aytadi — biz tayyorlab beramiz.", tone: "bg-lavender-soft text-lavender-deep" },
  { icon: GraduationCap, title: "AI sertifikatlash", text: "O‘quvchi yutuqlari AI asosidagi sertifikat bilan tasdiqlanadi.", tone: "bg-blush-soft text-blush-deep" },
];

export default function SchoolsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-36 pb-16 text-center sm:px-8">
        <Blobs variant="soft" />
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <Eyebrow>B2B hamkorlik</Eyebrow>
          <h1 className="text-4xl font-bold text-ink text-balance md:text-6xl">
            Maktabingizga <span className="text-gradient">muhandislik laboratoriyasi</span> — brauzerda
          </h1>
          <p className="max-w-2xl text-lg text-ink-soft">Muhandis AI maktablar va o‘quv markazlari uchun o‘qituvchi paneli, tayyor darslar va virtual laboratoriyani taqdim etadi.</p>
        </Reveal>
      </section>
      <Section className="pt-0 md:pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="card-soft lift h-full p-6">
                <span className={`grid size-12 place-items-center rounded-2xl ${b.tone}`}><b.icon className="size-6" /></span>
                <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Schools showCta={false} />
      <Section id="sorov">
        <SectionHeading eyebrow="So‘rov qoldiring" title="Keling, maktabingiz uchun reja tuzamiz" subtitle="Formani to‘ldiring — biz bepul demo va narx taklifini tayyorlaymiz." />
        <div className="card-soft mx-auto max-w-3xl p-6 md:p-10">
          <ContactForm />
        </div>
      </Section>
      <Pricing />
    </>
  );
}
