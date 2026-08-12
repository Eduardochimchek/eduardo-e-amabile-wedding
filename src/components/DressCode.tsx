"use client";

import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        className="pointer-events-none absolute -left-8 top-20 hidden h-44 w-auto opacity-25 md:block"
        tone="sage"
      />
      <BotanicalAccent
        className="pointer-events-none absolute -right-6 bottom-16 hidden h-40 w-auto rotate-180 opacity-20 md:block"
        tone="gold"
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

        <MotionGroup className="mx-auto mt-12 max-w-xl text-center md:mt-14">
          <p data-m="fade" className="eyebrow text-gold">
            Sugestão
          </p>
          <p
            data-m="soft"
            className="mt-4 font-display text-4xl text-deep sm:text-5xl md:text-[3.25rem]"
          >
            {dressCode.suggestion}
          </p>
          <div
            data-m="fade"
            className="gold-rule mx-auto mt-8"
            aria-hidden="true"
          />
        </MotionGroup>

        <MotionGroup
          stagger
          className="mx-auto mt-12 grid max-w-4xl gap-10 md:mt-14 md:grid-cols-3 md:gap-8"
        >
          {dressCode.notes.map((note) => (
            <div key={note.label} data-m="up" className="text-center md:text-left">
              <p className="eyebrow text-sage">{note.label}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {note.text}
              </p>
            </div>
          ))}
        </MotionGroup>

        {dressCode.closing ? (
          <MotionGroup className="mx-auto mt-14 max-w-xl text-center">
            <p
              data-m="fade"
              className="font-display text-xl italic leading-relaxed text-deep sm:text-2xl"
            >
              {dressCode.closing}
            </p>
          </MotionGroup>
        ) : null}
      </div>
    </section>
  );
}
