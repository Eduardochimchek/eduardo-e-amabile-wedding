import { weddingConfig } from "@/config/wedding";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";

export function Hero() {
  const { couple, date, copy } = weddingConfig;

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center"
      aria-label="Abertura"
    >
      {/* Full-bleed atmospheric plane — replace with couple photo when available */}
      <div className="absolute inset-0 hero-wash" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/25 to-transparent" />
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
        <div className="mx-auto max-w-3xl text-center text-warm">
          <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-champagne">
            Nosso casamento
          </p>

          <h1 className="font-display text-[clamp(3.4rem,12vw,6.5rem)] font-medium leading-[0.95] tracking-wide">
            <span className="block">{couple.partnerOne.firstName}</span>
            <span className="my-2 block font-display text-[clamp(2rem,6vw,3rem)] font-normal text-gold">
              &
            </span>
            <span className="block">{couple.partnerTwo.firstName}</span>
          </h1>

          <p className="mt-8 font-display text-2xl tracking-[0.35em] text-warm sm:text-3xl">
            {date.displayCompact}
          </p>

          <div className="gold-rule mx-auto mt-8 opacity-80" aria-hidden="true" />

          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-warm/90 sm:text-base">
            {copy.heroTagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#rsvp" className="btn-primary min-w-[12rem]">
              Confirmar presença
            </a>
            <a
              href="#historia"
              className="btn-ghost min-w-[12rem] border-warm/35 text-warm hover:border-gold hover:bg-warm/10"
            >
              Nossa história
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
