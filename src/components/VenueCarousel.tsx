"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { VenueImage } from "@/types/wedding";
import { cn } from "@/lib/utils";

type VenueCarouselProps = {
  images: VenueImage[];
  className?: string;
};

export function VenueCarousel({ images, className }: VenueCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = useCallback(
    (next: number) => {
      if (total <= 1) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "ArrowRight") go(index + 1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  if (total === 0) return null;

  const current = images[index];

  return (
    <div className={cn("w-full", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-champagne/25 shadow-soft sm:aspect-[16/10] md:aspect-[2/1]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          quality={95}
          priority={index === 0}
          className="object-cover object-center"
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 1100px"
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-warm/85 text-lg text-deep shadow-soft backdrop-blur-sm transition hover:border-gold hover:bg-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:left-4"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-warm/85 text-lg text-deep shadow-soft backdrop-blur-sm transition hover:border-gold hover:bg-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-4"
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <>
          <div
            className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5 sm:gap-3"
            role="list"
            aria-label="Miniaturas das fotos do local"
          >
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                role="listitem"
                aria-label={`Mostrar foto ${i + 1} de ${total}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative h-14 w-14 overflow-hidden rounded-sm transition duration-300 sm:h-16 sm:w-20 md:h-[4.5rem] md:w-24",
                  i === index
                    ? "ring-2 ring-gold ring-offset-2 ring-offset-warm"
                    : "opacity-70 ring-1 ring-line hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Fotos do local"
          >
            {images.map((image, i) => (
              <button
                key={`dot-${image.src}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Foto ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-royal"
                    : "w-2 bg-line hover:bg-champagne",
                )}
              />
            ))}
          </div>
        </>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Foto {index + 1} de {total}
      </p>
    </div>
  );
}
