"use client";

import { useRef, useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { getEnabledGifts } from "@/data/gifts";
import { GiftCard } from "@/components/GiftCard";
import { PaymentModal } from "@/components/PaymentModal";
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
        <SectionHeading
          id="presentes-title"
          eyebrow={weddingConfig.copy.giftsEyebrow}
          title="Presentes"
          description={weddingConfig.copy.giftsIntro}
        />

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.map((gift) => (
            <li key={gift.id} className="h-full">
              <GiftCard
                gift={gift}
                onSelect={(item, trigger) => {
                  triggerRef.current = trigger;
                  setSelected(item);
                }}
              />
            </li>
          ))}
        </ul>
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
