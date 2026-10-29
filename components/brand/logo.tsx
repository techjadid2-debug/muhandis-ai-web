import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9 shrink-0", className)} aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3BA7F5" />
          <stop offset="0.55" stopColor="#9B8AFB" />
          <stop offset="1" stopColor="#F5A3C7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#lm)" />
      <path
        d="M10 27V14l10 9 10-9v13"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="27" r="2.6" fill="#fff" />
      <circle cx="30" cy="27" r="2.6" fill="#fff" />
    </svg>
  );
}

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link href={href} className={cn("flex items-center gap-2.5 font-heading text-lg font-bold whitespace-nowrap text-ink", className)}>
      <LogoMark />
      <span>
        Muhandis <span className="text-gradient">AI</span>
      </span>
    </Link>
  );
}
