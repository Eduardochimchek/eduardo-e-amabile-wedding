"use client";

import { useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { getEnabledGifts } from "@/data/gifts";
import { GiftCard } from "@/components/GiftCard";
import { PaymentModal } from "@/components/PaymentModal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gifts() {
  const gifts = getEnabledGifts();
  const [selected, setSelected] = useState<GiftItem | null>(null);

  return (
    <section
      id="presentes"
      className="section-pad bg-warm"
      aria-labelledby="presentes-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="presentes-title"
            eyebrow="Com carinho (e humor)"
            title="Presentes"
            description={weddingConfig.copy.giftsIntro}
          />
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.map((gift, index) => (
            <li key={gift.id} className="h-full">
              <Reveal className="h-full" delayMs={Math.min(index * 40, 200)}>
                <GiftCard gift={gift} onSelect={setSelected} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <PaymentModal
        gift={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
