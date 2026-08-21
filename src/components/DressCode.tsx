"use client";

import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
            <Image
              src="/images/wedding/dresscode-homens-transparent.png"
              alt="Sugestões de traje esporte fino para convidados: blazer bege ou terno azul-marinho"
              width={551}
              height={819}
              className="mx-auto h-64 w-auto object-contain sm:h-72 md:h-80"
            />
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
            <Image
              src="/images/wedding/dresscode-mulheres-transparent.png"
              alt="Sugestões de traje esporte fino para convidadas: vestido verde ou terracota"
              width={518}
              height={739}
              className="mx-auto h-64 w-auto object-contain sm:h-72 md:h-80"
            />
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
              <p className="font-display text-xl text-deep sm:text-2xl">
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
