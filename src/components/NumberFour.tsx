"use client";

import { useEffect, type CSSProperties } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView, usePrefersReducedMotion } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function NumberFour() {
  const { numberFourTitle, numberFourBody } = weddingConfig.copy;
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.35 });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = ref.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.matchMedia("(max-width: 767px)").matches) {
        section.style.setProperty("--four-shift", "0");
        return;
      }
      const rect = section.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      section.style.setProperty("--four-shift", `${mid * -0.15}`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced, ref, inView]);

  return (
    <section
      ref={ref}
      id="numero-04"
      className={cn(
        "number-four section-pad section-anchor section-breath relative overflow-hidden bg-warm",
        inView && "is-inview",
      )}
      aria-labelledby="numero-04-title"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="number-four-mark select-none font-display text-[min(70vw,22rem)] font-medium leading-none text-gold">
          {numberFourTitle}
        </span>
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="numero-04-title"
            className={cn("m-item m-scale font-display text-7xl text-gold sm:text-8xl", inView && "is-inview")}
          >
            {numberFourTitle}
          </h2>
          <div
            className="gold-rule gold-rule-draw mx-auto mt-6"
            aria-hidden="true"
          />
          <div className="mt-8 space-y-4">
            {numberFourBody.map((line, index) => (
              <p
                key={line}
                className={cn("m-item m-soft font-display text-xl leading-relaxed text-deep sm:text-2xl", inView && "is-inview")}
                style={{ "--m-delay": `${160 + index * 70}ms` } as CSSProperties}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
