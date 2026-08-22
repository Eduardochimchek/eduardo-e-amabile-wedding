"use client";

import { weddingConfig } from "@/config/wedding";
import { MotionGroup } from "@/components/motion/Motion";

export function FinalMessage() {
  return (
    <section
      id="mensagem"
      className="section-pad section-anchor relative overflow-hidden bg-[linear-gradient(180deg,var(--color-warm-white)_0%,color-mix(in_srgb,var(--color-serenity)_18%,var(--color-warm-white))_100%)]"
      aria-labelledby="mensagem-title"
    >
      <div className="section-shell">
        <MotionGroup className="mx-auto max-w-2xl text-center">
          <p data-m="fade" className="eyebrow">
            {weddingConfig.copy.finalEyebrow}
          </p>
          <h2
            id="mensagem-title"
            data-m="soft"
            className="mt-5 whitespace-pre-line font-display normal-case text-4xl leading-snug text-deep sm:text-5xl md:text-6xl"
          >
            {weddingConfig.copy.finalMessage}
          </h2>
          <div
            data-m="fade"
            className="gold-rule gold-rule-draw mx-auto mt-8"
            aria-hidden="true"
          />
          <p
            data-m="up"
            className="mt-8 font-display normal-case text-3xl text-royal sm:text-4xl"
            style={{ "--m-delay": "220ms" } as React.CSSProperties}
          >
            {weddingConfig.couple.partnerOne.firstName}
            <span className="mx-1.5">&amp;</span>
            {weddingConfig.couple.partnerTwo.firstName}
          </p>
          <p
            data-m="fade"
            className="mt-3 font-sans tracking-[0.28em] text-muted"
            style={{ "--m-delay": "320ms" } as React.CSSProperties}
          >
            {weddingConfig.date.displayCompact}
          </p>
          <p
            data-m="fade"
            className="mt-5 text-sm italic text-muted sm:text-base"
            style={{ "--m-delay": "400ms" } as React.CSSProperties}
          >
            {weddingConfig.copy.footerMessage}
          </p>
        </MotionGroup>
      </div>
    </section>
  );
}
