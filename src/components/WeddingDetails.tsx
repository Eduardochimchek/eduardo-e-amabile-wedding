"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { VenueCarousel } from "@/components/VenueCarousel";

function GoldHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 20.4S3.6 15.1 3.6 9.4A4.4 4.4 0 0 1 12 6.2a4.4 4.4 0 0 1 8.4 3.2C20.4 15.1 12 20.4 12 20.4Z" />
    </svg>
  );
}

function ChurchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 6v6" />
      <path d="M21 9h6" />
      <path d="M12 42V22l12-8 12 8v20" />
      <path d="M18 42v-10h12v10" />
      <path d="M22 22h4" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5L15 14" />
    </svg>
  );
}

function PartyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function WeddingDetails() {
  const { date, details, copy } = weddingConfig;
  const { venue } = details;
  const hasVenueDetails = Boolean(venue.name || venue.address || venue.city);
  const venueImages =
    venue.images && venue.images.length > 0
      ? venue.images
      : venue.imageSrc
        ? [{ src: venue.imageSrc, alt: venue.imageAlt ?? venue.name ?? "Local" }]
        : [];

  const ceremonyLabel = details.time?.trim()
    ? `Cerimônia • ${details.time.trim()}`
    : "Cerimônia • XXhXX";

  const reception = details.reception;
  const hasReceptionDetails = Boolean(
    reception && (reception.name || reception.address || reception.city),
  );
  const receptionImages =
    reception?.images && reception.images.length > 0
      ? reception.images
      : reception?.imageSrc
        ? [
            {
              src: reception.imageSrc,
              alt: reception.imageAlt ?? reception.name ?? "Local da festa",
            },
          ]
        : [];

  return (
    <section
      id="casamento"
      className="section-pad section-anchor botanical-wash relative overflow-hidden"
      aria-labelledby="casamento-title"
    >
      <BotanicalAccent
        className="pointer-events-none absolute -left-8 top-24 hidden h-48 w-auto opacity-30 md:block"
        tone="sage"
      />
      <BotanicalAccent
        className="pointer-events-none absolute -right-6 bottom-28 hidden h-44 w-auto rotate-180 opacity-25 md:block"
        tone="gold"
      />

      <div className="section-shell relative z-10">
        <MotionGroup>
          <header data-m="up" className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold">{copy.detailsEyebrow}</p>
            <GoldHeart className="mx-auto mt-4 h-4 w-4 text-gold" />
            <h2
              id="casamento-title"
              className="mt-5 font-sans text-[clamp(2.4rem,8vw,3.75rem)] font-medium tracking-wide text-deep"
            >
              {date.displayCompact}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base italic leading-relaxed text-muted sm:text-lg">
              {copy.detailsLead}
            </p>
          </header>
        </MotionGroup>

        {venueImages.length > 0 ? (
          <MotionGroup className="mx-auto mt-12 w-[90%] max-w-5xl md:mt-14">
            <div data-m="image">
              <VenueCarousel images={venueImages} />
              <p className="mt-6 text-center font-sans text-lg italic leading-relaxed text-deep sm:text-xl">
                {copy.detailsCarouselCaption}{" "}
                <GoldHeart className="mb-0.5 inline-block h-3.5 w-3.5 align-middle text-gold" />
              </p>
              {venue.imageCredit ? (
                <p className="mt-3 text-center text-[0.65rem] leading-relaxed tracking-wide text-muted">
                  Parte das fotos:{" "}
                  {venue.imageCredit.authorUrl ? (
                    <a
                      href={venue.imageCredit.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-2 transition-colors hover:text-royal"
                    >
                      {venue.imageCredit.author}
                    </a>
                  ) : (
                    venue.imageCredit.author
                  )}
                  {" · "}
                  {venue.imageCredit.licenseUrl ? (
                    <a
                      href={venue.imageCredit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-2 transition-colors hover:text-royal"
                    >
                      {venue.imageCredit.license}
                    </a>
                  ) : (
                    venue.imageCredit.license
                  )}
                </p>
              ) : null}
            </div>
          </MotionGroup>
        ) : null}

        {hasVenueDetails ? (
          <MotionGroup className="mx-auto mt-12 max-w-xl md:mt-14">
            <div
              data-m="up"
              className="rounded-lg border border-gold/45 bg-warm/70 px-6 py-10 text-center shadow-soft sm:px-10 sm:py-12"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                <ChurchIcon className="h-7 w-7" />
              </div>

              {venue.name ? (
                <h3 className="mt-6 font-sans text-xl uppercase tracking-[0.12em] text-deep sm:text-2xl">
                  {venue.name}
                </h3>
              ) : null}

              <p className="mt-5 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.18em] text-muted">
                <ClockIcon className="h-4 w-4 shrink-0 text-gold" />
                <span>{ceremonyLabel}</span>
              </p>

              <GoldHeart className="mx-auto mt-5 h-3.5 w-3.5 text-gold" />

              {(venue.address || venue.city) && (
                <div className="mt-5 flex items-start justify-center gap-2 text-sm leading-relaxed text-muted sm:text-base">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    {venue.address ? <span className="block">{venue.address}</span> : null}
                    {venue.city ? <span className="block">{venue.city}</span> : null}
                  </p>
                </div>
              )}

              {venue.mapUrl ? (
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 inline-flex min-w-[11rem] items-center justify-center gap-2"
                >
                  <PinIcon className="h-4 w-4 text-gold" />
                  {copy.detailsCtaMap}
                </a>
              ) : null}
            </div>
          </MotionGroup>
        ) : (
          <MotionGroup className="mx-auto mt-10 max-w-3xl">
            <p data-m="fade" className="text-center body-copy text-sm">
              Local, horário e demais detalhes serão publicados em breve.
            </p>
          </MotionGroup>
        )}

        {hasReceptionDetails ? (
          <>
            <MotionGroup className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
              <div data-m="fade" className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
                <PartyIcon className="h-4 w-4 text-gold" />
                <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
              </div>
              <p data-m="fade" className="eyebrow mt-4 text-gold">
                {copy.receptionEyebrow}
              </p>
              <h3
                data-m="soft"
                className="mt-3 font-display normal-case text-4xl text-deep sm:text-5xl"
              >
                {copy.receptionTitle}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base italic leading-relaxed text-muted sm:text-lg">
                {copy.receptionLead}
              </p>
            </MotionGroup>

            {receptionImages.length > 0 ? (
              <MotionGroup className="mx-auto mt-10 w-[90%] max-w-5xl md:mt-12">
                <div data-m="image">
                  <VenueCarousel images={receptionImages} />
                </div>
              </MotionGroup>
            ) : null}

            <MotionGroup className="mx-auto mt-10 max-w-xl md:mt-12">
              <div
                data-m="up"
                className="rounded-lg border border-gold/45 bg-warm/70 px-6 py-10 text-center shadow-soft sm:px-10 sm:py-12"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <PartyIcon className="h-7 w-7" />
                </div>

                {reception?.name ? (
                  <h3 className="mt-6 font-sans text-xl uppercase tracking-[0.12em] text-deep sm:text-2xl">
                    {reception.name}
                  </h3>
                ) : null}

                {(reception?.address || reception?.city) && (
                  <div className="mt-5 flex items-start justify-center gap-2 text-sm leading-relaxed text-muted sm:text-base">
                    <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>
                      {reception?.address ? (
                        <span className="block">{reception.address}</span>
                      ) : null}
                      {reception?.city ? (
                        <span className="block">{reception.city}</span>
                      ) : null}
                    </p>
                  </div>
                )}

                {reception?.mapUrl ? (
                  <a
                    href={reception.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 inline-flex min-w-[11rem] items-center justify-center gap-2"
                  >
                    <PinIcon className="h-4 w-4 text-gold" />
                    {copy.detailsCtaMap}
                  </a>
                ) : null}
              </div>
            </MotionGroup>
          </>
        ) : null}

        <MotionGroup className="mx-auto mt-12 max-w-xl text-center md:mt-14">
          <div data-m="fade">
            <GoldHeart className="mx-auto h-4 w-4 text-gold" />
          </div>
          <p
            data-m="up"
            className="mt-4 font-sans text-lg italic leading-relaxed text-deep sm:text-xl"
          >
            {copy.detailsClosing}
          </p>
          <div
            data-m="fade"
            className="gold-rule mx-auto mt-8 opacity-80"
            aria-hidden="true"
          />
        </MotionGroup>
      </div>
    </section>
  );
}
