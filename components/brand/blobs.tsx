import { cn } from "@/lib/utils";

/** Deck’dagi blur gradient "blob"larning yorug‘ fonga moslangan pastel varianti. */
export function Blobs({ className, variant = "hero" }: { className?: string; variant?: "hero" | "soft" | "corner" }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {variant === "hero" && (
        <>
          <div className="blob -top-24 right-[-8%] size-[34rem] bg-sky/35" />
          <div className="blob top-40 right-[18%] size-[22rem] bg-blush/40" />
          <div className="blob -bottom-20 right-[2%] size-[26rem] bg-lavender/35" />
          <div className="blob top-10 -left-40 size-[22rem] bg-mint/20" />
        </>
      )}
      {variant === "soft" && (
        <>
          <div className="blob -top-20 left-1/4 size-[26rem] bg-lavender/20" />
          <div className="blob -bottom-24 right-1/4 size-[24rem] bg-sky/20" />
        </>
      )}
      {variant === "corner" && (
        <>
          <div className="blob -bottom-24 -left-24 size-[22rem] bg-sky/30" />
          <div className="blob -top-24 -right-24 size-[20rem] bg-blush/30" />
        </>
      )}
      <div className="noise absolute inset-0 opacity-[0.06] mix-blend-multiply" />
    </div>
  );
}
