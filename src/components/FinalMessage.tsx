import { weddingConfig } from "@/config/wedding";

export function FinalMessage() {
  return (
    <section
      id="mensagem"
      className="section-pad section-anchor relative overflow-hidden bg-[linear-gradient(180deg,var(--color-warm-white)_0%,color-mix(in_srgb,var(--color-serenity)_18%,var(--color-warm-white))_100%)]"
      aria-labelledby="mensagem-title"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{weddingConfig.copy.finalEyebrow}</p>
          <h2
            id="mensagem-title"
            className="mt-5 font-display text-3xl leading-snug text-deep sm:text-4xl md:text-5xl"
          >
            {weddingConfig.copy.finalMessage}
          </h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mt-8 font-display text-2xl text-royal">
            {weddingConfig.couple.shortNames}
          </p>
          <p className="mt-3 tracking-[0.28em] text-muted">
            {weddingConfig.date.displayCompact}
          </p>
        </div>
      </div>
    </section>
  );
}
