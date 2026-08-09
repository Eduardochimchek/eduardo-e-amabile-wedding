import { weddingConfig } from "@/config/wedding";

export function NumberFour() {
  const { numberFourTitle, numberFourBody } = weddingConfig.copy;

  return (
    <section
      id="numero-04"
      className="section-pad section-anchor section-breath relative overflow-hidden bg-warm"
      aria-labelledby="numero-04-title"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="select-none font-display text-[min(70vw,22rem)] font-medium leading-none text-gold/[0.12]">
          {numberFourTitle}
        </span>
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="numero-04-title"
            className="font-display text-7xl text-gold sm:text-8xl"
          >
            {numberFourTitle}
          </h2>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
          <div className="mt-8 space-y-4">
            {numberFourBody.map((line) => (
              <p
                key={line}
                className="font-display text-xl leading-relaxed text-deep sm:text-2xl"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
