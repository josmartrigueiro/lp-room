"use client";
import { AnimatePresence, motion } from "motion/react";
import { useRender } from "@base-ui-components/react/use-render";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
import { verticalBtnAnimationVariant } from "@/utils/animations";

const buttonVariants = cva(
  "inline-flex font-medium cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm transition-[transform,background] duration-100 will-change-transform disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative transition after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none after:content-[''] after:bg-[radial-gradient(ellipse_at_top,_oklch(1_0_0_/_1),_oklch(1_0_0_/_0))] after:bg-[length:100%_200%] after:bg-[position:0_100%] after:mix-blend-overlay after:transition-[background] after:duration-300",
  {
    variants: {
      variant: {
        default:
          // "bg-primary text-white shadow-[inset_0_1px_0_oklch(1_0_0_/_0.2),_0_0_0_1px_oklch(0.45_0.159482_254.7535),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09)] hover:bg-primary/90 [text-shadow:0_1px_1px_oklch(0.12_0.13_0.12_/_0.9)] after:opacity-45 hover:after:bg-[position:0_0] focus-visible:shadow-[inset_0_1px_0_oklch(1_0_0_/_0.25),_0_0_0_1px_oklch(0.45_0.159482_254.7535),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09),_0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.4885_0.159482_254.7535)] focus-visible:outline-none",
          "bg-[linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_#360099_65%,_var(--primary)_100%)] hover:bg-[linear-gradient(90deg,_rgba(0,0,0,0.35)_0%,_#4a00e0_55%,_var(--primary)_100%)] text-white shadow-[inset_0_1px_0_oklch(1_0_0_/_0.2),_0_0_0_1px_oklch(0.4931_0.2951_281.5),_0_0.3px_0.4px_oklch(0.4931_0.2951_281.5/_0.02),_0_0.9px_1.5px_oklch(0.4931_0.2951_281.5_/_0.045),_0_3.5px_6px_oklch(0.4931_0.2951_281.5/_0.09)] [text-shadow:0_1px_1px_oklch(0.12_0.13_0.12_/_0.9)] after:opacity-45 hover:after:bg-[position:0_0] focus-visible:shadow-[inset_0_1px_0_oklch(1_0_0_/_0.25),_0_0_0_1px_oklch(0.45_0.159482_254.7535),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09),_0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.4885_0.159482_254.7535)] focus-visible:outline-none",
        destructive:
          "bg-destructive text-white shadow-[inset_0_1px_0_oklch(1_0_0_/_0.2),_0_0_0_1px_oklch(0.45_0.245_27.325),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09)] hover:bg-destructive/90 [text-shadow:0_1px_1px_oklch(0.12_0.13_0.12_/_0.25)] after:opacity-45 hover:after:bg-[position:0_0] focus-visible:shadow-[inset_0_1px_0_oklch(1_0_0_/_0.25),_0_0_0_1px_oklch(0.45_0.245_27.325),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09),_0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.577_0.245_27.325)] focus-visible:outline-none disabled:bg-destructive/60",
        outline:
          "bg-background shadow-[inset_0_1px_0_oklch(1_0_0_/_0.2),_0_0_0_1px_var(--color-border),_0_1px_2px_0_rgb(0_0_0_/_0.05)] hover:bg-accent hover:shadow-[inset_0_1px_0_oklch(1_0_0_/_0.2),_0_0_0_1px_color-mix(in_oklch,_var(--color-border)_70%,_var(--color-sidebar-ring)),_0_2px_4px_0_rgb(0_0_0_/_0.1)] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:shadow-[inset_0_1px_0_oklch(1_0_0_/_0.15),_0_0_0_1px_var(--color-border),_0_1px_2px_0_rgb(0_0_0_/_0.05),_0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.4885_0.159482_254.7535)] focus-visible:outline-none disabled:bg-background/60",
        secondary:
          "transition-all border border-[#5F5285] bg-[linear-gradient(90deg,_#000_0%,_#000_55%,_rgba(82,66,132,0.4)_100%)]  hover:border-[#7a6bb0] hover:bg-[linear-gradient(90deg,_#000_0%,_#000_40%,_rgba(82,66,132,0.4)_100%)] text-white shadow-[inset_0_1px_0_oklch(oklch(0.4284_0.1066_292.48)/_0.2),_0_0_0_1px_oklch(0.35_0.15_280),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09)] hover:shadow-[inset_0_1px_0_oklch(oklch(0.4284_0.1066_292.48)/_0.25),_0_0_0_1px_oklch(0.4_0.16_280),_0_6px_12px_oklch(0.25_0.05_280/_0.25)] [text-shadow:0_1px_1px_oklch(0_0_0_/_0.5)] after:opacity-45 hover:after:bg-[position:0_0] focus-visible:shadow-[inset_0_1px_0_oklch(oklch(0.4284_0.1066_292.48)/_0.25),_0_0_0_1px_oklch(0.35_0.15_280),_0_0.3px_0.4px_oklch(0.12_0.13_0.12_/_0.02),_0_0.9px_1.5px_oklch(0.12_0.13_0.12_/_0.045),_0_3.5px_6px_oklch(0.12_0.13_0.12_/_0.09),_0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.35_0.15_280)] focus-visible:outline-none disabled:bg-[linear-gradient(90deg,_#000_0%,_#000_65%,_rgba(82,66,132,0.2)_100%)]/60",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:scale-[0.98] focus-visible:shadow-[0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.4885_0.159482_254.7535)] focus-visible:outline-none",
        link: "text-primary underline-offset-4 hover:underline active:scale-[0.98] focus-visible:shadow-[0_0_0_2px_oklch(1_0_0),_0_0_0_3.5px_oklch(0.4885_0.159482_254.7535)] focus-visible:outline-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-sm px-7 has-[>svg]:px-4 text-sm",
        icon: "size-8",
      },
      activeAnimation: {
        true: "active:translate-y-0.5",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      activeAnimation: false,
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  render?: useRender.RenderProp;
  activeAnimation?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

function Button({
  className,
  variant,
  size,
  render = <button type="button" />,
  activeAnimation = false,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return useRender({
    render,
    props: {
      "data-slot": "button",
      className: cn(
        buttonVariants({ variant, size, activeAnimation, className })
      ),
      disabled: props.disabled || isLoading,
      children: (
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            initial="initial"
            animate="visible"
            exit="exit"
            variants={verticalBtnAnimationVariant}
            key={isLoading.toString()}
            className="flex items-center justify-center gap-2"
          >
            {isLoading ? <Spinner /> : children}
          </motion.span>
        </AnimatePresence>
      ),
      ...props,
    },
  });
}

export { Button, buttonVariants };
