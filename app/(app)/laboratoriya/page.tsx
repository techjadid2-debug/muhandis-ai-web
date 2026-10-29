import type { Metadata } from "next";
import { LabBoard } from "@/components/app/lab-board";
import { PageHeader } from "@/components/app/page-header";
import { labComponents } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Virtual laboratoriya" };

export default function LabPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Virtual laboratoriya"
        subtitle="Sxemani yig‘, ishga tushir va natijani kuzat. Bu yerda xato qilish xavfsiz — hech narsa kuymaydi!"
        action={<span className="rounded-full bg-mint-soft px-3 py-1.5 text-sm font-bold text-mint-deep">1-topshiriq · LED</span>}
      />
      <LabBoard components={labComponents} />
    </div>
  );
}
