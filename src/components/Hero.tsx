"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { usePrefersReducedMotion } from "@/hooks/useInView";

export function Hero() {
  const { couple, date, copy } = weddingConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const heroImage = couple.imageSrc;

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (isMobile()) {
        section.style.setProperty("--hero-shift", "0");
        return;
      }
      const rect = section.getBoundingClientRect();
      const shift = Math.max(0, -rect.top);
      section.style.setProperty("--hero-shift", `${Math.min(shift, 420)}`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="hero-enter relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
      aria-label="Abertura"
    >
      <div
        className="absolute inset-0 hero-parallax-bg"
        data-hero="bg"
        aria-hidden="true"
      >
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-[50%_28%] sm:object-[50%_32%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-deep/35 to-deep/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-deep/20 via-transparent to-deep/15" />
          </>
        ) : (
          <div className="absolute inset-0 hero-wash">
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/25 to-transparent" />
          </div>
        )}
      </div>

      <BotanicalAccent
        className="absolute -left-6 bottom-16 h-44 w-auto opacity-40 md:bottom-24 md:h-56"
        tone="serenity"
      />
      <BotanicalAccent
        className="absolute -right-4 top-24 h-40 w-auto rotate-180 opacity-35 md:top-28 md:h-52"
        tone="gold"
      />

      <div className="section-shell relative z-10 w-full pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="hero-parallax-content mx-auto max-w-3xl text-center text-warm [text-shadow:0_2px_14px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.5)]">
          <p
            data-hero="eyebrow"
            className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-champagne"
          >
            Nosso casamento
          </p>

          <h1 className="font-display text-[clamp(3.6rem,13vw,7rem)] font-normal leading-[1.05]">
            <span data-hero="name-1" className="block">
              {couple.partnerOne.firstName}
            </span>
            <span
              data-hero="amp"
              className="my-1 block font-sans text-[clamp(1.8rem,5.5vw,2.6rem)] italic font-normal text-gold"
            >
              &
            </span>
            <span data-hero="name-2" className="block">
              {couple.partnerTwo.firstName}
            </span>
          </h1>

          <p
            data-hero="date"
            className="mt-8 font-sans text-xl tracking-wide text-warm sm:text-2xl md:text-[1.75rem]"
          >
            {date.displayLong ?? date.display}
          </p>

          <div
            data-hero="rule"
            className="gold-rule mx-auto mt-8 opacity-80"
            aria-hidden="true"
          />

          <p
            data-hero="tagline"
            className="mx-auto mt-8 max-w-lg whitespace-pre-line text-sm leading-relaxed text-warm/90 sm:text-base"
          >
            {copy.heroTagline}
          </p>

          <div
            data-hero="cta"
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#rsvp" className="btn-primary min-w-[12rem]">
              Confirmar presença
            </a>
            <a
              href="#historia"
              className="btn-ghost min-w-[12rem] border-warm/35 text-warm hover:border-gold hover:bg-warm/10"
            >
              {copy.heroCtaStory}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
