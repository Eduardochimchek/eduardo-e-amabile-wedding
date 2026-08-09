"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { timelineEvents } from "@/data/story";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView, usePrefersReducedMotion } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function TimelineItem({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  const isLeft = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={cn(
        "timeline-item relative grid grid-cols-[1.5rem_1fr] gap-5 py-6 md:grid-cols-2 md:gap-10 md:py-8",
        inView && "is-inview",
      )}
    >
      <span
        className="timeline-marker absolute left-3 top-8 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_4px_var(--color-deep-blue)] md:left-1/2"
        aria-hidden="true"
      />

      <div
        className={cn(
          "m-item m-soft",
          inView && "is-inview",
          isLeft
            ? "col-start-2 md:col-start-1 md:pr-10 md:text-right"
            : "col-start-2 md:col-start-2 md:pl-10 md:text-left",
        )}
        style={{ transitionDelay: "80ms" } as CSSProperties}
      >
        <p className="eyebrow text-gold">{event.label}</p>
        <p className="mt-3 font-display text-xl leading-snug text-warm sm:text-2xl">
          {event.description}
        </p>
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
      className="section-pad section-anchor section-breath bg-deep text-warm"
      aria-labelledby="timeline-title"
    >
      <div className="section-shell">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="timeline-title"
              eyebrow="Capítulos"
              title="Nossa linha do tempo"
              tone="light"
            />
          </div>
        </MotionGroup>

        <div
          ref={trackWrapRef}
          className="relative mx-auto mt-14 max-w-2xl md:mt-16"
          style={{ "--timeline-progress": reduced ? 1 : 0 } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gold/15 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          <div
            className="timeline-track pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold/20 via-gold to-gold/30 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
