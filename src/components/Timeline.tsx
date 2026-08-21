"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { timelineEvents } from "@/data/story";
import type { TimelineEvent } from "@/types/wedding";
import { MotionGroup } from "@/components/motion/Motion";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView, usePrefersReducedMotion } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function Polaroid({
  event,
  tilt,
}: {
  event: TimelineEvent;
  tilt: "left" | "right";
}) {
  return (
    <figure
      className={cn(
        "mx-auto w-[min(100%,15.5rem)] bg-warm p-3 pb-8 shadow-soft sm:w-[16.5rem]",
        tilt === "left" ? "-rotate-2" : "rotate-2",
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-champagne/20">
        {event.imageSrc ? (
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? event.label}
            fill
            sizes="280px"
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder
            label="Foto em breve"
            aspect="portrait"
            className="h-full w-full rounded-none"
          />
        )}
      </div>
      <figcaption className="mt-4 text-center font-display text-lg tracking-wide text-deep">
        {event.year ?? event.label}
      </figcaption>
    </figure>
  );
}

function TimelineMemoryItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });
  const photoOnRight = index % 2 === 0;

  const textBlock = (
    <div
      className={cn(
        "m-item px-1",
        inView && "is-inview",
        photoOnRight ? "m-left md:text-right" : "m-right md:text-left",
      )}
      style={{ transitionDelay: "70ms" } as CSSProperties}
    >
      <p className="eyebrow text-sage">{event.label}</p>
      <p className="mt-3 font-sans text-xl leading-snug text-deep sm:text-2xl md:text-[1.65rem]">
        {event.description}
      </p>
    </div>
  );

  const photoBlock = (
    <div
      className={cn("m-item m-image", inView && "is-inview")}
      style={{ transitionDelay: "140ms" } as CSSProperties}
    >
      <Polaroid event={event} tilt={photoOnRight ? "right" : "left"} />
    </div>
  );

  return (
    <li
      ref={ref}
      className={cn(
        "timeline-item relative py-9 md:py-12",
        inView && "is-inview",
      )}
    >
      <span
        className="timeline-marker absolute left-3 top-14 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_4px_var(--color-warm-white)] md:left-1/2 md:top-1/2 md:-translate-y-1/2"
        aria-hidden="true"
      />

      <div className="grid grid-cols-[1.5rem_1fr] gap-4 md:hidden">
        <div className="col-start-2 space-y-5">
          {textBlock}
          {photoBlock}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1fr_3rem_1fr] md:items-center md:gap-6">
        <div>{photoOnRight ? textBlock : photoBlock}</div>
        <div aria-hidden="true" />
        <div>{photoOnRight ? photoBlock : textBlock}</div>
      </div>
    </li>
  );
}

export function Timeline() {
  const trackWrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = trackWrapRef.current;
    if (!wrap) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const view = window.innerHeight * 0.65;
      const raw = (view - rect.top) / rect.height;
      const progress = Math.min(1, Math.max(0, raw));
      wrap.style.setProperty("--timeline-progress", String(progress));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

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
              title="Nossa linha do tempo"
              description="Desde o começo, em fotos e pequenos capítulos."
            />
          </div>
        </MotionGroup>

        <div
          ref={trackWrapRef}
          className="relative mx-auto mt-12 max-w-4xl md:mt-16"
          style={{ "--timeline-progress": reduced ? 1 : 0 } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute left-3 top-2 bottom-2 w-px border-l border-dashed border-gold/45 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          <div
            className="timeline-track pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold/10 via-gold to-gold/25 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineMemoryItem key={event.id} event={event} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
