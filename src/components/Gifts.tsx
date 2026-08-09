"use client";

import { useRef, useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { getEnabledGifts } from "@/data/gifts";
import { GiftCard } from "@/components/GiftCard";
import { PaymentModal } from "@/components/PaymentModal";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gifts() {
  const gifts = getEnabledGifts();
  const [selected, setSelected] = useState<GiftItem | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="presentes"
      className="section-pad section-anchor bg-warm"
      aria-labelledby="presentes-title"
    >
      <div className="section-shell">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="presentes-title"
              eyebrow={weddingConfig.copy.giftsEyebrow}
              title="Lista de presentes"
              description={weddingConfig.copy.giftsIntro}
            />
          </div>
        </MotionGroup>

        <MotionGroup
          as="ul"
          stagger
          className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gifts.map((gift) => (
            <li key={gift.id} data-m="scale" className="h-full">
              <GiftCard
                gift={gift}
                onSelect={(item, trigger) => {
                  triggerRef.current = trigger;
                  setSelected(item);
                }}
              />
            </li>
          ))}
        </MotionGroup>
      </div>

      <PaymentModal
        gift={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        returnFocusRef={triggerRef}
      />
    </section>
  );
}
