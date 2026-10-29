export type Tone = "sky" | "lavender" | "blush" | "mint" | "sun";

export const toneClasses: Record<Tone, { soft: string; deep: string; solid: string; ring: string; gradient: string }> = {
  sky: { soft: "bg-sky-soft", deep: "text-sky-deep", solid: "bg-sky", ring: "ring-sky/30", gradient: "from-sky-soft to-white" },
  lavender: { soft: "bg-lavender-soft", deep: "text-lavender-deep", solid: "bg-lavender", ring: "ring-lavender/30", gradient: "from-lavender-soft to-white" },
  blush: { soft: "bg-blush-soft", deep: "text-blush-deep", solid: "bg-blush", ring: "ring-blush/30", gradient: "from-blush-soft to-white" },
  mint: { soft: "bg-mint-soft", deep: "text-mint-deep", solid: "bg-mint", ring: "ring-mint/30", gradient: "from-mint-soft to-white" },
  sun: { soft: "bg-sun-soft", deep: "text-sun-deep", solid: "bg-sun", ring: "ring-sun/40", gradient: "from-sun-soft to-white" },
};
