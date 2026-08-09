"use client";

import { weddingConfig } from "@/config/wedding";
import { cn, getVisibleWeddingDetails } from "@/lib/utils";
import { MotionGroup } from "@/components/motion/Motion";
import { VenueCarousel } from "@/components/VenueCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WeddingDetails() {
  const { venue } = weddingConfig.details;
  const items = getVisibleWeddingDetails(
    weddingConfig.details,
    weddingConfig.date.display,
  );
  const multi = items.length > 1;
  const hasVenueDetails = Boolean(venue.name || venue.address || venue.city);
  const venueImages =
    venue.images && venue.images.length > 0
      ? venue.images
      : venue.imageSrc
        ? [{ src: venue.imageSrc, alt: venue.imageAlt ?? venue.name ?? "Local" }]
        : [];

  return (
    <section
      id="casamento"
      className="section-pad section-anchor botanical-wash"
      aria-labelledby="casamento-title"
    >
      <div className="section-shell">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="casamento-title"
              eyebrow="Celebração"
              title="Nosso casamento"
              description="As informações confirmadas do nosso grande dia. Demais detalhes serão atualizados aqui assim que estiverem definidos."
            />
          </div>
        </MotionGroup>

        {venueImages.length > 0 ? (
          <MotionGroup className="mx-auto mt-12 max-w-4xl md:mt-14">
            <div data-m="image">
              <VenueCarousel images={venueImages} />
            </div>
          </MotionGroup>
        ) : null}

        <MotionGroup
          stagger
          className={cn(
            "mx-auto mt-14 grid max-w-3xl gap-0 divide-y divide-line border-y border-line",
            multi &&
              "sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border sm:border-line",
            !multi && "sm:border sm:border-line sm:divide-y-0",
          )}
        >
          {items.map((item) => (
            <div
              key={item.label}
              data-m="up"
              className="px-6 py-8 text-center transition-colors duration-300 hover:bg-warm/40 sm:px-8 sm:py-10"
            >
              <p className="eyebrow">{item.label}</p>
              <p className="mt-4 font-display text-2xl text-deep sm:text-3xl">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-royal"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          ))}
        </MotionGroup>

        {!hasVenueDetails ? (
          <MotionGroup className="mx-auto mt-8 max-w-3xl">
            <p data-m="fade" className="text-center body-copy text-sm">
              Local, horário e demais detalhes serão publicados em breve.
            </p>
          </MotionGroup>
        ) : null}
      </div>
    </section>
  );
}
