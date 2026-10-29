import { Award, BookOpen, Bot, Flame, Lightbulb, Search, type LucideIcon } from "lucide-react";
import { Illustration } from "@/components/brand/illustration";
import { toneClasses, type Tone } from "@/components/brand/tone";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "first-lesson": BookOpen,
  "streak-7": Flame,
  "circuit-master": Lightbulb,
  "test-champion": Award,
  "project-author": Bot,
  explorer: Search,
};

export function BadgeMedal({ k, title, earned, tone }: { k: string; title: string; earned: boolean; tone: Tone }) {
  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", !earned && "opacity-45 grayscale")}>
      <div className={cn("w-16 overflow-hidden rounded-full ring-4", toneClasses[tone].ring)}>
        <Illustration src={`/images/app/badges/${k}.png`} alt={title} width={256} height={256} tone={tone} icon={icons[k]} className="rounded-full [&_span.grid]:size-9 [&_svg]:size-5" />
      </div>
      <span className="text-xs font-bold text-ink">{title}</span>
    </div>
  );
}
