"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export type MotionVariant =
  | "up"
  | "fade"
  | "scale"
  | "image"
  | "left"
  | "right"
  | "soft";

type MotionProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  delay?: number;
  as?: "div" | "header" | "article" | "li" | "figure" | "span";
};

const variantClass: Record<MotionVariant, string> = {
  up: "m-up",
  fade: "m-fade",
  scale: "m-scale",
  image: "m-image",
  left: "m-left",
  right: "m-right",
  soft: "m-soft",
};

/** Single-element reveal — use sparingly; prefer MotionGroup for lists. */
export function Motion({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: MotionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn("m-item", variantClass[variant], inView && "is-inview", className)}
      style={delay ? ({ "--m-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

type MotionGroupProps = {
  children: ReactNode;
  className?: string;
  /** Applies staggered delays to direct `[data-m]` children via CSS */
  stagger?: boolean;
  threshold?: number;
  as?: "div" | "ul" | "ol";
};

/** One observer for a whole section block — children use data-m + variant classes. */
export function MotionGroup({
  children,
  className,
  stagger = false,
  threshold = 0.16,
  as: Tag = "div",
}: MotionGroupProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold });

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "m-group",
        stagger && "m-stagger",
        inView && "is-inview",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
