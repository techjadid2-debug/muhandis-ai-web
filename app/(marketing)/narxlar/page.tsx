import type { Metadata } from "next";
import { Pricing } from "@/components/marketing/pricing";
import { Faq } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/footer";

export const metadata: Metadata = { title: "Narxlar" };

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
