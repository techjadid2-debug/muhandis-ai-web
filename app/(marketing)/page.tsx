import { Hero } from "@/components/marketing/hero";
import { Problem } from "@/components/marketing/problem";
import { Features } from "@/components/marketing/features";
import { Steps } from "@/components/marketing/steps";
import { Demo } from "@/components/marketing/demo";
import { Why } from "@/components/marketing/why";
import { Schools } from "@/components/marketing/schools";
import { Pricing } from "@/components/marketing/pricing";
import { Faq } from "@/components/marketing/faq";
import { CtaBanner } from "@/components/marketing/footer";

export default function HomePage() {
  return (
    <>
      <div className="pt-[4.25rem]">
        <Hero />
      </div>
      <Problem />
      <Features />
      <Steps />
      <Demo />
      <Why />
      <Schools />
      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  );
}
