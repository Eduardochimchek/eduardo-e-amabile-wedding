import { weddingConfig } from "@/config/wedding";
import { getVisibleWeddingDetails } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WeddingDetails() {
  const items = getVisibleWeddingDetails(
    weddingConfig.details,
    weddingConfig.date.display,
  );

  return (
    <section
      id="casamento"
      className="section-pad botanical-wash"
      aria-labelledby="casamento-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="casamento-title"
            eyebrow="Celebração"
            title="Nosso casamento"
            description="As informações confirmadas do nosso grande dia. Demais detalhes serão atualizados aqui assim que estiverem definidos."
          />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-3xl" delayMs={80}>
          <dl className="grid gap-0 divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border sm:border-line">
            {items.map((item) => (
              <div
                key={item.label}
                className="px-6 py-8 text-center sm:px-8 sm:py-10"
              >
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-4 font-display text-2xl text-deep sm:text-3xl">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-royal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {items.length <= 1 ? (
            <p className="mt-8 text-center body-copy text-sm">
              Local, horário e demais detalhes serão publicados em breve.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
