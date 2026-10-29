import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="-mt-[4.25rem] flex-1">{children}</main>
      <Footer />
    </>
  );
}
