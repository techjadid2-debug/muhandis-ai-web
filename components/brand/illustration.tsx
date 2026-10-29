import "server-only";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toneClasses, type Tone } from "./tone";

type Props = {
  /** `public/` ga nisbatan yo‘l, masalan `/images/hero/hero-student-robot.png` */
  src: string;
  alt: string;
  width: number;
  height: number;
  tone?: Tone;
  icon?: LucideIcon;
  className?: string;
  priority?: boolean;
  /** Placeholder ichidagi kichik izoh (dizayn vaqtida qaysi rasm ekanini ko‘rsatadi) */
  label?: string;
};

function exists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

/**
 * Codex generatsiya qiladigan rasm. Fayl hali yo‘q bo‘lsa — pastel placeholder ko‘rsatiladi,
 * fayl `public/` ga qo‘yilishi bilan avtomatik haqiqiy rasm chiqadi (CODEX_IMAGE_TASKS.md).
 */
export function Illustration({ src, alt, width, height, tone = "sky", icon: Icon = ImageIcon, className, priority, label }: Props) {
  if (exists(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn("h-auto w-full object-contain", className)}
      />
    );
  }
  const t = toneClasses[tone];
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br",
        t.gradient,
        className,
      )}
    >
      <div className={cn("blob size-2/3 opacity-60", t.solid)} />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className={cn("grid size-16 place-items-center rounded-2xl bg-white/80 shadow-soft", t.deep)}>
          <Icon className="size-8" strokeWidth={1.75} />
        </span>
        {label && <span className="max-w-[14rem] text-xs font-semibold text-ink-soft/80">{label}</span>}
      </div>
    </div>
  );
}
