"use client";

import { useRef, useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { getGiftsByGroup } from "@/data/gifts";
import { GiftCard } from "@/components/GiftCard";
import { PaymentModal } from "@/components/PaymentModal";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gifts() {
  const honeymoonGifts = getGiftsByGroup("honeymoon");
  const specialGifts = getGiftsByGroup("special");
  const [selected, setSelected] = useState<GiftItem | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function openGift(item: GiftItem, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(item);
  }

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
              title="Nossos presentes"
              description={weddingConfig.copy.giftsIntro}
            />
          </div>
        </MotionGroup>

        <MotionGroup
          as="ul"
          stagger
          className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {honeymoonGifts.map((gift) => (
            <li key={gift.id} data-m="scale" className="h-full">
              <GiftCard gift={gift} onSelect={openGift} />
            </li>
          ))}
        </MotionGroup>

        {specialGifts.length > 0 ? (
          <>
            <MotionGroup className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
              <p data-m="fade" className="eyebrow">
                {weddingConfig.copy.giftsSpecialEyebrow}
              </p>
              <div
                data-m="fade"
                className="gold-rule mx-auto mt-5"
                aria-hidden="true"
              />
            </MotionGroup>

            <MotionGroup
              as="ul"
              stagger
              className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {specialGifts.map((gift) => (
                <li key={gift.id} data-m="scale" className="h-full">
                  <GiftCard gift={gift} onSelect={openGift} />
                </li>
              ))}
            </MotionGroup>
          </>
        ) : null}

        <MotionGroup className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <p
            data-m="up"
            className="font-display text-2xl leading-snug text-deep sm:text-3xl"
          >
            {weddingConfig.copy.giftsClosing}
          </p>
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
