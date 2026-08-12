"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Guest attire — flat modern vector (navy / neutrals). */
function DressCodeHimArt({ className }: { className?: string }) {
  const skin = "#D4B8A0";
  const navy = "#2C3E50";
  const navyDeep = "#1F2D3A";
  const navyMid = "#34495E";
  const white = "#F7F4EE";
  const accent = "#C5A66A";

  return (
    <svg
      viewBox="0 0 200 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* shoes */}
      <path d="M62 352h36c4 0 6 3 5 6l-3 8H60c-3 0-5-3-4-6l6-8Z" fill={navyDeep} />
      <path d="M102 352h36c4 0 7 3 6 6l-4 8H100c-3 0-5-3-4-6l6-8Z" fill={navyDeep} />

      {/* trousers */}
      <path d="M70 236h28v116H70z" fill={navy} />
      <path d="M102 236h28v116h-28z" fill={navyMid} />
      <path d="M98 236h4v116" fill={navyDeep} opacity="0.5" />

      {/* jacket */}
      <path
        d="M48 108c12-16 30-24 52-24s40 8 52 24l16 22v120c0 10-6 16-16 18l-20 4H68l-20-4c-10-2-16-8-16-18V130l16-22Z"
        fill={navy}
      />
      {/* structured lapels */}
      <path d="M100 96L68 112l-10 108 26 10L100 96Z" fill={navyDeep} />
      <path d="M100 96l32 16 10 108-26 10L100 96Z" fill={navyMid} />
      {/* pocket */}
      <rect x="122" y="168" width="24" height="14" rx="1" fill={navyDeep} />
      <path d="M124 168h20v3H124z" fill={accent} opacity="0.85" />
      {/* buttons */}
      <circle cx="106" cy="178" r="2.5" fill={accent} />
      <circle cx="106" cy="196" r="2.5" fill={accent} />

      {/* shirt */}
      <path d="M84 100h32l5 48H79l5-48Z" fill={white} />
      <path d="M88 100l12 18 12-18" fill={white} stroke="#D8C6A5" strokeWidth="1" />
      {/* tie */}
      <path d="M100 118l-6 8 6 7 6-7-6-8Z" fill={navyDeep} />
      <path d="M96 132h8l3 58-7 10-7-10 3-58Z" fill={navyMid} />

      {/* arms */}
      <path
        d="M48 130c-12 22-16 48-12 74 2 10 10 14 18 10l4-6c-6-20-4-44 4-64L48 130Z"
        fill={navy}
      />
      <path
        d="M152 130c12 22 16 48 12 74-2 10-10 14-18 10l-4-6c6-20 4-44-4-64L152 130Z"
        fill={navyMid}
      />
      {/* cuff links */}
      <circle cx="46" cy="208" r="3" fill={accent} />
      <circle cx="154" cy="208" r="3" fill={accent} />

      {/* neck */}
      <path d="M90 88c2 10 6 14 10 16 4-2 8-6 10-16H90Z" fill={skin} />

      {/* head */}
      <ellipse cx="100" cy="56" rx="28" ry="32" fill={skin} />

      {/* hair — slicked back */}
      <path
        d="M72 52c3-26 22-42 42-40 14 1 28 10 32 26-12-12-28-16-44-10-10 4-18 12-24 22-2-2-4-2-6 2Z"
        fill={navyDeep}
      />
      <path
        d="M74 56c10-18 28-28 46-24 4 8 4 20-6 28-12-10-28-12-40-4Z"
        fill={navy}
        opacity="0.55"
      />

      {/* face — simple expressive */}
      <ellipse cx="88" cy="58" rx="2.2" ry="2.8" fill={navyDeep} />
      <ellipse cx="112" cy="58" rx="2.2" ry="2.8" fill={navyDeep} />
      <path d="M98 66c2 3 4 4 4 4" stroke="#B8957E" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M92 78c4 4 12 4 16 0"
        stroke={navyDeep}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Guest attire — flat modern vector (navy midi, not bridal white). */
function DressCodeHerArt({ className }: { className?: string }) {
  const skin = "#D4B8A0";
  const navy = "#2C3E50";
  const navyDeep = "#1F2D3A";
  const navySoft = "#3D566E";
  const accent = "#C5A66A";
  const clutch = "#D8C6A5";

  return (
    <svg
      viewBox="0 0 200 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* heels */}
      <path d="M68 350h26c3 0 5 2 4 5l-2 7H66c-3 0-4-3-3-5l5-7Z" fill={navyDeep} />
      <path d="M68 360h7v8c-8 2-14 0-16-4 2-2 5-4 9-4Z" fill={navy} />
      <path d="M108 348h28c3 0 5 2 4 5l-3 7h-26c-3 0-4-3-3-5l4-7Z" fill={navyDeep} />
      <path d="M128 360h8c5 0 10 2 8 5-5 2-12 2-18-1 1-2 2-4 2-4Z" fill={navy} />

      {/* midi skirt — defined waist, soft A-line */}
      <path
        d="M66 176c-4 36-10 90-6 164h80c8-72 2-128-6-164H66Z"
        fill={navy}
      />
      <path
        d="M100 176c4 40 8 96 6 164h26c4-68-2-124-10-164H100Z"
        fill={navySoft}
        opacity="0.55"
      />
      <path
        d="M112 220c1 30 2 64 1 100"
        stroke="#F7F4EE"
        strokeWidth="1"
        opacity="0.25"
        strokeLinecap="round"
      />

      {/* bodice + marked waist */}
      <path
        d="M72 118c10-12 22-16 34-16s24 4 34 16c5 12 6 28 2 42H70c-4-14-3-30 2-42Z"
        fill={navy}
      />
      <path d="M70 156h72c1 6 1 12 0 18H70c-1-6-1-12 0-18Z" fill={navyDeep} />
      <circle cx="106" cy="165" r="2" fill={accent} />

      {/* straps */}
      <path d="M80 116c-2 12-4 24-4 36" stroke={navySoft} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M132 116c2 12 4 24 4 36" stroke={navySoft} strokeWidth="2.6" strokeLinecap="round" />

      {/* arm holding clutch */}
      <path
        d="M142 136c10 18 12 40 6 58-2 6-8 8-12 4l-4-8c6-16 6-34 0-50l10-4Z"
        fill={skin}
      />
      <rect x="140" y="188" width="32" height="16" rx="3" fill={clutch} />
      <rect x="144" y="193" width="24" height="2" rx="1" fill={accent} />

      {/* neck + necklace */}
      <path d="M96 100c1 8 5 12 8 14 3-2 7-6 8-14H96Z" fill={skin} />
      <path
        d="M94 112c6 6 18 6 24 0"
        stroke={accent}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="106" cy="118" r="2" fill={accent} />

      {/* head */}
      <ellipse cx="106" cy="62" rx="26" ry="30" fill={skin} />

      {/* hair — elegant low bun */}
      <circle cx="124" cy="38" r="14" fill={navyDeep} />
      <circle cx="128" cy="34" r="7" fill={navy} opacity="0.4" />
      <path
        d="M80 62c5-24 24-36 44-32 10 2 18 10 22 18-14-8-30-8-44 0-6 4-12 10-16 16-2-2-4-4-6-2Z"
        fill={navyDeep}
      />
      <path
        d="M84 66c10-14 26-20 40-14 2 10 0 22-4 30-12-8-26-10-36-2Z"
        fill={navy}
        opacity="0.4"
      />

      {/* face — simple expressive */}
      <ellipse cx="94" cy="64" rx="2.1" ry="2.7" fill={navyDeep} />
      <ellipse cx="116" cy="64" rx="2.1" ry="2.7" fill={navyDeep} />
      <path d="M104 72c2 2 4 3 4 0" stroke="#B8957E" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M98 82c4 3.5 12 3.5 16 0"
        stroke={navyDeep}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* earring */}
      <circle cx="82" cy="70" r="2.2" fill={accent} />
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
