"use client";

import Image from "next/image";
import { collagePhotos } from "@/data/story";
import { MotionGroup } from "@/components/motion/Motion";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Deterministic per-photo tilt/offset so the mosaic reads as casual, not aligned. */
const TILTS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];
const OFFSETS = ["md:translate-y-0", "md:translate-y-6", "md:-translate-y-3", "md:translate-y-3"];

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

        <MotionGroup
          stagger
          className="mx-auto mt-12 max-w-5xl columns-2 gap-5 sm:columns-3 md:mt-16 lg:columns-4"
        >
          {collagePhotos.map((photo, index) => (
            <figure
              key={photo.src}
              data-m="scale"
              className={`mb-5 break-inside-avoid bg-warm p-2 pb-4 shadow-soft ${TILTS[index % TILTS.length]} ${OFFSETS[index % OFFSETS.length]}`}
            >
              <div className="relative overflow-hidden bg-champagne/20">
                <Image
                  src={photo.src}
                  alt="Amábile e Eduardo"
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>
          ))}
        </MotionGroup>
      </div>
    </section>
  );
}
