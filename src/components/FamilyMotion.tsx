"use client";

import type { ReactNode } from "react";
import { MotionGroup } from "@/components/motion/Motion";

export function FamilyMotion({ children }: { children: ReactNode }) {
  return (
    <MotionGroup
      stagger
      threshold={0.14}
      className="mx-auto flex max-w-4xl flex-col items-center"
    >
      {children}
    </MotionGroup>
  );
}
