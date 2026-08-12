"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Faceless formal attire — soft shaded vector, site palette. */
function DressCodeHimArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="him-skin" x1="90" y1="20" x2="130" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8D5C4" />
          <stop offset="1" stopColor="#C9B8A6" />
        </linearGradient>
        <linearGradient id="him-suit" x1="60" y1="90" x2="170" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A5A72" />
          <stop offset="0.45" stopColor="#2F485D" />
          <stop offset="1" stopColor="#243A4A" />
        </linearGradient>
        <linearGradient id="him-lapel" x1="100" y1="95" x2="118" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E3A8A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#1E3A8A" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="him-hair" x1="80" y1="18" x2="140" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A5568" />
          <stop offset="1" stopColor="#2F485D" />
        </linearGradient>
      </defs>

      {/* shoes */}
      <path d="M74 336c-2 4 0 8 8 10h28c6-1 8-5 6-9l-4-7H78l-4 6Z" fill="#1E3A8A" />
      <path d="M114 330l-3 7c-2 4 1 8 8 10h30c7-1 10-5 8-10l-5-9h-38Z" fill="#1A336F" />

      {/* trousers */}
      <path
        d="M78 228c2 28 4 62 2 98h28c1-34 0-68-2-98l-28 0Z"
        fill="url(#him-suit)"
      />
      <path
        d="M114 228c-1 30 1 64 3 98h30c0-36-3-70-5-98H114Z"
        fill="#2A4154"
      />
      <path d="M106 228v98" stroke="#1E3A8A" strokeWidth="1.2" opacity="0.35" />

      {/* jacket body */}
      <path
        d="M62 98c10-14 28-22 48-22s38 8 48 22l14 18v108c0 8-4 14-12 16l-18 4H78l-18-4c-8-2-12-8-12-16V116l14-18Z"
        fill="url(#him-suit)"
      />
      {/* lapels */}
      <path d="M100 88l-28 12-8 96 22 8 14-116Z" fill="url(#him-lapel)" />
      <path d="M100 88l28 12 8 96-22 8L100 88Z" fill="#1E3A8A" opacity="0.28" />
      {/* pocket square */}
      <path d="M128 148h22v12c0 1-1 2-2 2h-18c-1 0-2-1-2-2v-12Z" fill="#D8C6A5" />
      <path d="M130 148l4-5 4 5 4-4 4 4v2H130v-2Z" fill="#C5A66A" />
      {/* buttons */}
      <circle cx="108" cy="168" r="2.2" fill="#C5A66A" />
      <circle cx="108" cy="186" r="2.2" fill="#C5A66A" />

      {/* shirt + collar */}
      <path d="M88 90h24l4 42H84l4-42Z" fill="#F7F4EE" />
      <path d="M92 90l8 14 8-14" fill="#F7F4EE" stroke="#D8C6A5" strokeWidth="1" />
      <path d="M100 104v28" stroke="#D8C6A5" strokeWidth="1" />
      {/* tie */}
      <path d="M100 104l-5 8 5 6 5-6-5-8Z" fill="#1E3A8A" />
      <path d="M97 118h6l2 52-5 8-5-8 2-52Z" fill="#4F7DBA" />
      <path d="M100 118v58" stroke="#1E3A8A" strokeWidth="0.8" opacity="0.5" />

      {/* arms — left in pocket, right relaxed */}
      <path
        d="M62 116c-10 18-14 40-12 62 2 10 8 16 16 14l6-4c-4-18-2-40 6-58l-16-14Z"
        fill="#2F485D"
      />
      <path
        d="M158 116c10 18 14 40 12 62-2 10-8 16-16 14l-6-4c4-18 2-40-6-58l16-14Z"
        fill="#2A4154"
      />
      <circle cx="58" cy="188" r="3" fill="#C5A66A" opacity="0.9" />
      <circle cx="162" cy="188" r="3" fill="#C5A66A" opacity="0.9" />

      {/* neck + head */}
      <path d="M92 78c2 8 6 12 8 14 2-2 6-6 8-14H92Z" fill="url(#him-skin)" />
      <ellipse cx="100" cy="52" rx="26" ry="30" fill="url(#him-skin)" />
      {/* hair — side part */}
      <path
        d="M74 48c2-22 18-36 40-34 12 1 24 8 30 20-10-8-22-10-34-6-10 3-18 10-24 18-4-2-8-2-12 2Z"
        fill="url(#him-hair)"
      />
      <path
        d="M76 52c8-14 22-22 38-20 6 1 12 3 16 8-14-4-28-2-38 8-4 4-8 8-12 10 0-2-2-4-4-6Z"
        fill="#243A4A"
        opacity="0.45"
      />
    </svg>
  );
}

/** Faceless midi gown — soft shaded vector, site palette. */
function DressCodeHerArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="her-skin" x1="90" y1="28" x2="130" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8D5C4" />
          <stop offset="1" stopColor="#C9B8A6" />
        </linearGradient>
        <linearGradient id="her-dress" x1="70" y1="100" x2="160" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B93C4" />
          <stop offset="0.4" stopColor="#4F7DBA" />
          <stop offset="1" stopColor="#3A6499" />
        </linearGradient>
        <linearGradient id="her-drape" x1="100" y1="108" x2="140" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8FAFC5" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8FAFC5" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="her-hair" x1="80" y1="20" x2="140" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A5568" />
          <stop offset="1" stopColor="#2F485D" />
        </linearGradient>
      </defs>

      {/* heels */}
      <path d="M78 338h22c2 0 4 2 3 4l-2 6H76c-2 0-3-2-2-4l4-6Z" fill="#1E3A8A" />
      <path d="M78 348h8v6c-6 2-12 1-14-2 2-2 4-4 6-4Z" fill="#1A336F" />
      <path d="M120 336h24c2 0 4 2 3 4l-2 6h-24c-2 0-3-2-2-4l1-6Z" fill="#1E3A8A" />
      <path d="M140 348h8c4 0 8 2 6 4-4 2-10 2-16 0 1-2 2-4 2-4Z" fill="#1A336F" />

      {/* skirt — soft A-line with fold */}
      <path
        d="M78 168c-6 28-12 72-8 156h80c8-82 0-128-8-156H78Z"
        fill="url(#her-dress)"
      />
      <path
        d="M108 168c6 36 10 90 8 156h28c4-66-2-120-10-156H108Z"
        fill="url(#her-drape)"
      />
      <path
        d="M118 210c1 28 2 56 1 90"
        stroke="#F7F4EE"
        strokeWidth="1.2"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* bodice with soft drape */}
      <path
        d="M80 112c8-10 20-14 30-14s22 4 30 14c6 12 8 28 4 42H76c-4-14-2-30 4-42Z"
        fill="url(#her-dress)"
      />
      <path
        d="M86 120c10-8 20-10 28-8 6 14 8 28 6 40H82c0-12 2-24 4-32Z"
        fill="#8FAFC5"
        opacity="0.35"
      />
      {/* waist sash */}
      <path d="M76 150h68c1 6 1 12 0 18H76c-1-6-1-12 0-18Z" fill="#1E3A8A" opacity="0.28" />
      <path d="M108 150v18" stroke="#C5A66A" strokeWidth="1" opacity="0.7" />

      {/* straps */}
      <path
        d="M84 108c-3 10-5 20-5 30"
        stroke="#8FAFC5"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M136 108c3 10 5 20 5 30"
        stroke="#8FAFC5"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* arm + clutch */}
      <path
        d="M150 128c8 16 10 34 6 50-2 6-8 8-12 4l-4-6c4-14 4-30-2-44l12-4Z"
        fill="url(#her-skin)"
      />
      <rect x="148" y="176" width="30" height="15" rx="2.5" fill="#D8C6A5" />
      <rect x="152" y="180" width="22" height="1.8" rx="0.5" fill="#C5A66A" />
      <path d="M163 176v-6" stroke="#C5A66A" strokeWidth="1.2" strokeLinecap="round" />

      {/* neck + head */}
      <path d="M98 88c1 8 4 12 7 14 3-2 6-6 7-14h-14Z" fill="url(#her-skin)" />
      <ellipse cx="110" cy="58" rx="24" ry="28" fill="url(#her-skin)" />

      {/* low bun hair */}
      <circle cx="128" cy="36" r="13" fill="url(#her-hair)" />
      <circle cx="132" cy="32" r="7" fill="#243A4A" opacity="0.35" />
      <path
        d="M86 58c4-22 22-34 42-30 8 2 16 8 20 16-12-6-26-6-38 2-6 4-12 10-16 16 0-2-4-4-8-4Z"
        fill="url(#her-hair)"
      />
      <path
        d="M90 62c8-12 22-18 36-14 4 10 4 22 0 32-10-8-22-10-32-4-2-4-4-10-4-14Z"
        fill="#243A4A"
        opacity="0.3"
      />

      {/* gold earring */}
      <circle cx="88" cy="64" r="2.2" fill="#C5A66A" />
      <circle cx="88" cy="70" r="1.2" fill="#C5A66A" opacity="0.7" />
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
            <DressCodeHimArt className="mx-auto h-64 w-auto sm:h-72 md:h-80" />
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
            <div className="flex h-72 flex-col items-center gap-3 md:h-80">
              <span className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/45 text-gold">
                <GoldHeart className="h-3 w-3" />
              </span>
              <span className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>
          </div>

          {/* Para elas */}
          <div data-m="right" className="text-center">
            <DressCodeHerArt className="mx-auto h-64 w-auto sm:h-72 md:h-80" />
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
