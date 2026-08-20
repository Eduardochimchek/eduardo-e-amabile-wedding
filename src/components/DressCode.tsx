"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Guest attire — refined faceless silhouette, couture proportions (navy / gold). */
function DressCodeHimArt({ className }: { className?: string }) {
  const skin = "#E8CDB0";
  const hair = "#161F29";
  const blazer = "#1C2733";
  const shirt = "#F7F4EE";
  const gold = "#C5A66A";

  return (
    <svg
      viewBox="0 0 160 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* shoes */}
      <path d="M56 404h20l6 10H50l6-10Z" fill={hair} />
      <path d="M84 404h20l6 10H90l-6-10Z" fill={hair} />

      {/* trousers */}
      <path d="M58 196h18l-6 208H62l-4-208Z" fill={blazer} />
      <path d="M84 196h18l4 208H90l-6-208Z" fill={blazer} />
      <path d="M67 206v190" stroke={gold} strokeWidth="1" opacity="0.35" strokeLinecap="round" />
      <path d="M93 206v190" stroke={gold} strokeWidth="1" opacity="0.35" strokeLinecap="round" />
      <path d="M58 187h44" stroke={gold} strokeWidth="1.1" opacity="0.6" strokeLinecap="round" />

      {/* arms */}
      <path
        d="M52 82C42 100 38 130 40 158C41 174 42 186 46 195L51 195C47 186 45 174 45 158C43 130 47 100 58 84Z"
        fill={blazer}
      />
      <ellipse cx="46" cy="199" rx="4.5" ry="5.5" fill={skin} />
      <path
        d="M108 82C118 100 122 130 120 158C119 174 118 186 114 195L109 195C113 186 115 174 115 158C117 130 113 100 102 84Z"
        fill={blazer}
      />
      <ellipse cx="114" cy="199" rx="4.5" ry="5.5" fill={skin} />

      {/* blazer */}
      <path
        d="M56 78C46 96 44 122 50 148C46 166 48 180 58 190L102 190C112 180 114 166 110 148C116 122 114 96 104 78C96 70 64 70 56 78Z"
        fill={blazer}
      />
      <path d="M80 84v90" stroke={gold} strokeWidth="1.1" opacity="0.55" strokeLinecap="round" />
      <path d="M68 78l9 11" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M92 78l-9 11" stroke={gold} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <circle cx="80" cy="146" r="1.8" fill={gold} />
      <path d="M96 150l9 7" stroke={gold} strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />

      {/* open-collar shirt */}
      <path d="M80 68 67 72 76 94Z" fill={shirt} />
      <path d="M80 68 93 72 84 94Z" fill={shirt} />

      {/* neck */}
      <path d="M73 58h14l-2 10h-10l-2-10Z" fill={skin} />

      {/* head */}
      <ellipse cx="80" cy="40" rx="18" ry="22" fill={skin} />

      {/* face */}
      <path d="M71 41c1.5 1 3 1 4.5 0" stroke={hair} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" fill="none" />
      <path d="M85 41c1.5 1 3 1 4.5 0" stroke={hair} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" fill="none" />
      <path d="M80 44v4.5" stroke="#C9A184" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* hair */}
      <path
        d="M62 34c2-14 12-22 26-21 12 1 20 10 20 22-6-8-16-12-26-11-9 1-16 5-20 12-1-1 0-1 0-2Z"
        fill={hair}
      />
    </svg>
  );
}

/** Guest attire — refined faceless silhouette, one-shoulder gown (navy / gold). */
function DressCodeHerArt({ className }: { className?: string }) {
  const skin = "#E8CDB0";
  const hair = "#161F29";
  const gown = "#1C2733";
  const gold = "#C5A66A";
  const clutch = "#D8C6A5";

  return (
    <svg
      viewBox="0 0 160 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* gown */}
      <path
        d="M62 78C50 110 52 150 68 168C58 190 50 205 52 230C40 300 24 350 26 402Q82 420 138 402C140 350 124 300 112 230C114 205 106 190 96 168C112 150 114 110 108 92C100 80 80 68 62 78Z"
        fill={gown}
      />
      <path d="M68 168c8 4 16 4 24 0" stroke={gold} strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M100 240c-4 50-8 100-6 158" stroke={gold} strokeWidth="1.1" fill="none" opacity="0.45" strokeLinecap="round" />
      <path d="M62 78c14-10 34-11 46 2" stroke={gold} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />

      {/* arm + clutch */}
      <path
        d="M108 92c10 16 12 40 4 62-3 8-9 12-15 10l-3-6c8-14 8-34 2-52 4-6 8-11 12-14Z"
        fill={skin}
      />
      <rect x="88" y="176" width="26" height="16" rx="3" fill={clutch} />
      <rect x="92" y="182" width="18" height="2" rx="1" fill={gold} />

      {/* neck + pendant */}
      <path d="M75 58h14l-2 10h-10l-2-10Z" fill={skin} />
      <circle cx="82" cy="66" r="1.6" fill={gold} />

      {/* head */}
      <ellipse cx="82" cy="40" rx="18" ry="22" fill={skin} />

      {/* face */}
      <path d="M73 41c1.5 1 3 1 4.5 0" stroke={hair} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" fill="none" />
      <path d="M87 41c1.5 1 3 1 4.5 0" stroke={hair} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" fill="none" />
      <path d="M82 44v4.5" stroke="#C9A184" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* hair — low bun */}
      <path
        d="M65 28c3-12 14-19 27-16 9 2 15 9 16 18-8-8-19-11-30-8-6 2-11 6-13 12-1-2-1-4 0-6Z"
        fill={hair}
      />
      <circle cx="103" cy="32" r="9" fill={hair} />
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
