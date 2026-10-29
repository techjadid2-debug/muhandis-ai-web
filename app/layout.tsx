import type { Metadata } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";

const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhandis.ai"),
  title: {
    default: "Muhandis AI — AI asosidagi STEM platforma",
    template: "%s · Muhandis AI",
  },
  description:
    "O‘zbek tilidagi AI asosidagi STEM platforma: AI Tutor, interaktiv videodarslar, virtual laboratoriya va AI-testlar. O‘rgan, sinab ko‘r, yaratuvchiga aylan.",
  openGraph: {
    images: ["/og-image.png"],
    locale: "uz_UZ",
    siteName: "Muhandis AI",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
