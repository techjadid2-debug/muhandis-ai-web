import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-4 focus-visible:ring-ring/40 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.1em]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_rgba(31,143,224,.55)] hover:bg-[#1a80cb]",
        gradient:
          "bg-gradient-to-r from-[#1f8fe0] via-[#6f5ff0] to-[#c95a9a] text-white shadow-[0_10px_24px_-8px_rgba(111,95,240,.6)] hover:brightness-105",
        outline: "border-line bg-white text-ink hover:border-sky/50 hover:bg-sky-soft",
        secondary: "bg-lavender-soft text-lavender-deep hover:bg-[#e4dfff]",
        ghost: "text-ink hover:bg-mist",
        soft: "bg-sky-soft text-sky-deep hover:bg-[#d4ebfd]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-[0.95rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
