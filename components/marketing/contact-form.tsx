"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fields = [
  { name: "school", label: "Maktab yoki markaz nomi", placeholder: "Masalan: 21-maktab, Toshkent", type: "text" },
  { name: "name", label: "Ismingiz", placeholder: "Ism Familiya", type: "text" },
  { name: "phone", label: "Telefon", placeholder: "+998 __ ___ __ __", type: "tel" },
  { name: "students", label: "O‘quvchilar soni (taxminan)", placeholder: "300", type: "number" },
];

/** Hozircha mock: yuborilganda faqat tasdiq ko‘rsatadi. Backend ulanishi keyingi bosqichda. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="size-12 text-mint-deep" />
        <p className="text-xl font-bold text-ink">Rahmat! So‘rovingiz qabul qilindi.</p>
        <p className="text-ink-soft">Jamoamiz 1 ish kuni ichida siz bilan bog‘lanadi.</p>
      </div>
    );
  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {fields.map((f) => (
        <label key={f.name} className="flex flex-col gap-1.5 text-sm font-bold text-ink">
          {f.label}
          <Input required name={f.name} type={f.type} placeholder={f.placeholder} className="h-12 rounded-2xl bg-white px-4 text-base" />
        </label>
      ))}
      <Button type="submit" size="lg" className="sm:col-span-2">
        <Send /> So‘rov yuborish
      </Button>
    </form>
  );
}
