"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Faceless suit illustration — site palette (deep / royal / warm). */
function DressCodeHimArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* head */}
      <ellipse cx="100" cy="42" rx="28" ry="32" fill="#C9B8A6" />
      <path
        d="M72 38c4-22 20-34 40-32 14 1 26 12 30 26-8-6-18-8-28-6-12 2-22 8-28 16 0-2-2-3-4-4Z"
        fill="#2F485D"
      />
      {/* neck */}
      <path d="M88 68h24v14H88z" fill="#C9B8A6" />
      {/* shirt */}
      <path d="M78 82h44l6 28H72l6-28Z" fill="#F7F4EE" />
      <path d="M96 82v36" stroke="#D8C6A5" strokeWidth="1.2" />
      {/* jacket */}
      <path
        d="M54 88c8-10 22-16 46-16s38 6 46 16l12 150H42L54 88Z"
        fill="#2F485D"
      />
      <path
        d="M100 72c-4 28-6 70-6 118h12c0-48-2-90-6-118Z"
        fill="#1E3A8A"
        opacity="0.35"
      />
      <path d="M72 86l28 104M128 86l-28 104" stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
      {/* pocket accent */}
      <rect x="118" y="140" width="22" height="16" rx="1" fill="#1E3A8A" opacity="0.45" />
      {/* pants */}
      <path d="M70 230h28v78H70zM102 230h28v78h-28z" fill="#2F485D" />
      <path d="M98 230h4v78" fill="#1E3A8A" opacity="0.4" />
      {/* shoes */}
      <path d="M66 304h34v10c-8 4-24 4-34 0v-10Z" fill="#1E3A8A" />
      <path d="M100 304h34v10c-10 4-26 4-34 0v-10Z" fill="#1E3A8A" />
      {/* gold cuff hint */}
      <circle cx="58" cy="188" r="3" fill="#C5A66A" />
      <circle cx="142" cy="188" r="3" fill="#C5A66A" />
    </svg>
  );
}

/** Faceless gown illustration — champagne / royal accents. */
function DressCodeHerArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* hair bun */}
      <circle cx="118" cy="28" r="14" fill="#2F485D" />
      <path
        d="M70 48c6-24 28-36 52-28 10 3 20 12 24 24-16-8-34-6-48 4-6 4-12 10-16 16 0-6-4-12-12-16Z"
        fill="#2F485D"
      />
      {/* head */}
      <ellipse cx="100" cy="48" rx="26" ry="30" fill="#C9B8A6" />
      {/* neck */}
      <path d="M90 74h20v16H90z" fill="#C9B8A6" />
      {/* straps */}
      <path d="M78 92c-4 8-6 16-6 24" stroke="#8FAFC5" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M122 92c4 8 6 16 6 24" stroke="#8FAFC5" strokeWidth="2.5" strokeLinecap="round" />
      {/* bodice */}
      <path
        d="M74 96c8-6 18-8 26-8s18 2 26 8c4 10 6 22 4 34H70c-2-12 0-24 4-34Z"
        fill="#4F7DBA"
      />
      {/* waist */}
      <path d="M72 128h56c2 8 2 16 0 24H72c-2-8-2-16 0-24Z" fill="#1E3A8A" opacity="0.35" />
      {/* skirt */}
      <path
        d="M70 148c-8 36-14 78-10 140h80c6-60-2-104-10-140H70Z"
        fill="#4F7DBA"
      />
      <path
        d="M100 148c4 40 8 90 6 140h24c4-50-2-100-10-140H100Z"
        fill="#8FAFC5"
        opacity="0.35"
      />
      {/* slit hint */}
      <path d="M108 200c2 30 4 60 2 88" stroke="#F7F4EE" strokeWidth="1.5" opacity="0.45" />
      {/* clutch */}
      <rect x="132" y="168" width="28" height="16" rx="2" fill="#D8C6A5" />
      <rect x="136" y="172" width="20" height="2" fill="#C5A66A" />
      {/* gold earring */}
      <circle cx="76" cy="52" r="2.5" fill="#C5A66A" />
    </svg>
  );
}

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

export function DressCode() {
  const { dressCode } = weddingConfig;
  if (!dressCode.enabled) return null;

  return (
    <section
      id="traje"
      className="section-pad section-anchor relative overflow-hidden bg-warm"
      aria-labelledby="traje-title"
    >
      <BotanicalAccent
        className="pointer-events-none absolute -left-8 top-16 hidden h-48 w-auto opacity-30 md:block"
        tone="gold"
      />
      <BotanicalAccent
        className="pointer-events-none absolute -right-6 bottom-20 hidden h-44 w-auto rotate-180 opacity-25 md:block"
        tone="sage"
      />

      <div className="section-shell relative z-10">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="traje-title"
              eyebrow={dressCode.eyebrow}
              title={dressCode.title}
              description={dressCode.lead}
            />
          </div>
        </MotionGroup>

        <MotionGroup className="mx-auto mt-10 max-w-xl text-center">
          <div data-m="fade" className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
            <GoldHeart className="h-3.5 w-3.5 text-gold" />
            <span className="h-px w-10 bg-gold/50" aria-hidden="true" />
          </div>
          <p
            data-m="soft"
            className="mt-5 font-display text-4xl text-deep sm:text-5xl"
          >
            {dressCode.suggestion}
          </p>
        </MotionGroup>

        <MotionGroup
          className="mx-auto mt-12 grid max-w-4xl items-start gap-12 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-8"
        >
          {/* Para eles */}
          <div data-m="left" className="text-center">
            <DressCodeHimArt className="mx-auto h-56 w-auto sm:h-64" />
            <p className="eyebrow mt-6 text-gold">{dressCode.forHim.label}</p>
            <p className="mt-3 font-display text-3xl text-royal sm:text-[2rem]">
              {dressCode.forHim.style}
            </p>
            <p className="mx-auto mt-3 max-w-xs font-sans text-sm leading-relaxed text-muted">
              {dressCode.forHim.text}
            </p>
          </div>

          {/* Divider */}
          <div
            data-m="fade"
            className="hidden items-center justify-center md:flex"
            aria-hidden="true"
          >
            <div className="flex h-64 flex-col items-center gap-3">
              <span className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/45 text-gold">
                <GoldHeart className="h-3 w-3" />
              </span>
              <span className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>
          </div>

          {/* Para elas */}
          <div data-m="right" className="text-center">
            <DressCodeHerArt className="mx-auto h-56 w-auto sm:h-64" />
            <p className="eyebrow mt-6 text-gold">{dressCode.forHer.label}</p>
            <p className="mt-3 font-display text-3xl text-royal sm:text-[2rem]">
              {dressCode.forHer.style}
            </p>
            <p className="mx-auto mt-3 max-w-xs font-sans text-sm leading-relaxed text-muted">
              {dressCode.forHer.text}
            </p>
          </div>
        </MotionGroup>

        {dressCode.avoid ? (
          <MotionGroup className="mx-auto mt-12 max-w-2xl md:mt-14">
            <p
              data-m="up"
              className="rounded-sm border border-gold/40 bg-champagne/20 px-5 py-4 text-center text-sm font-medium uppercase tracking-[0.14em] text-deep sm:text-[0.8rem]"
            >
              {dressCode.avoid}
            </p>
          </MotionGroup>
        ) : null}

        {dressCode.closing ? (
          <MotionGroup className="mx-auto mt-10 max-w-xl text-center">
            <div data-m="fade" className="flex items-center justify-center gap-3">
              <GoldHeart className="h-3 w-3 text-gold" />
              <p className="font-display text-xl italic text-deep sm:text-2xl">
                {dressCode.closing}
              </p>
              <GoldHeart className="h-3 w-3 text-gold" />
            </div>
          </MotionGroup>
        ) : null}
      </div>
    </section>
  );
}
