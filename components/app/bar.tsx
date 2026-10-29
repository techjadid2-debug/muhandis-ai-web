import { cn } from "@/lib/utils";

/** Yumshoq gorizontal progress chizig‘i (shadcn Progress’dan soddaroq, server komponent). */
export function Bar({ value, className, color = "bg-sky", label }: { value: number; className?: string; color?: string; label?: string }) {
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label} className={cn("h-2.5 w-full overflow-hidden rounded-full bg-[#EEF1F8]", className)}>
      <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${value}%` }} />
    </div>
  );
}
