"use client";

import Image from "next/image";
import { collagePhotos } from "@/data/story";
import { MotionGroup } from "@/components/motion/Motion";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Deterministic per-photo tilt/offset so the mosaic reads as casual, not aligned. */
const TILTS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];
/** Real margin-top (not transform) so rows never overlap, staggered on every breakpoint. */
const OFFSETS = ["mt-0", "mt-6", "mt-2", "mt-8", "mt-1", "mt-5"];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="section-pad section-anchor section-breath botanical-wash relative overflow-hidden"
      aria-labelledby="timeline-title"
    >
      <BotanicalAccent
        className="pointer-events-none absolute -right-4 top-16 hidden h-40 w-auto opacity-30 md:block"
        tone="sage"
      />
      <BotanicalAccent
        className="pointer-events-none absolute -left-6 bottom-20 hidden h-44 w-auto rotate-180 opacity-25 md:block"
        tone="gold"
      />

      <div className="section-shell relative z-10">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="timeline-title"
              eyebrow="Memórias"
              title="Nossa história em fotos"
            />
          </div>
        </MotionGroup>

        {/* Plain CSS grid, not `columns` — Safari has long-standing bugs
            balancing multi-column layouts (confirmed broken on iOS here),
            while grid-template-columns has no such history on any browser. */}
        <MotionGroup
          stagger
          className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:mt-16 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {collagePhotos.map((photo, index) => (
            <figure
              key={photo.src}
              data-m="fade"
              className={`self-start bg-warm p-2 pb-4 shadow-soft ${OFFSETS[index % OFFSETS.length]}`}
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden bg-champagne/20 ${TILTS[index % TILTS.length]}`}
              >
                <Image
                  src={photo.src}
                  alt="Amábile e Eduardo"
                  fill
                  sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 19vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </MotionGroup>
      </div>
    </section>
  );
}
