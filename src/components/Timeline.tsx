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

/**
 * Mix in occasional two-column "featured" tiles for landscape photos, like
 * the varied-size mosaics common on wedding photo pages — still plain CSS
 * Grid (col-span), never `columns`, which is confirmed broken on iOS Safari
 * for this project (see Timeline history).
 */
function layoutCells() {
  let landscapeSeen = 0;
  return collagePhotos.map((photo, index) => {
    const isLandscape = photo.width > photo.height;
    let wide = false;
    if (isLandscape) {
      landscapeSeen += 1;
      wide = landscapeSeen % 2 === 1;
    }
    if (photo.wide !== undefined) wide = photo.wide;
    return { photo, index, wide };
  });
}

export function Timeline() {
  const cells = layoutCells();

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
            while grid-template-columns (incl. col-span) has no such history
            on any browser. Landscape photos occasionally span 2 columns for
            a varied-size mosaic instead of a flat uniform grid. */}
        <MotionGroup
          stagger
          className="mx-auto mt-12 grid max-w-6xl grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-5 md:mt-16 md:grid-cols-5 lg:grid-cols-6 grid-flow-row-dense"
        >
          {cells.map(({ photo, index, wide }) => (
            <figure
              key={photo.src}
              data-m="fade"
              className={`self-start bg-warm p-1.5 pb-3 shadow-soft sm:p-2 sm:pb-4 ${wide ? "col-span-2" : ""} ${OFFSETS[index % OFFSETS.length]}`}
            >
              <div
                className={`relative overflow-hidden bg-champagne/20 ${wide ? "aspect-[3/2]" : "aspect-[3/4]"} ${wide ? "" : TILTS[index % TILTS.length]}`}
              >
                <Image
                  src={photo.src}
                  alt="Amábile e Eduardo"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 22vw, 30vw"
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
