import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeading } from "./section";
import { uz } from "@/content/uz";

export function Faq() {
  const t = uz.faq;
  return (
    <Section id="savollar">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="card-soft mx-auto max-w-3xl px-6 py-2">
        <Accordion>
          {t.items.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-line">
              <AccordionTrigger className="py-5 text-lg font-bold text-ink hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-base text-ink-soft">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
