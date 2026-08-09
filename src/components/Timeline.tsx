import { timelineEvents } from "@/data/story";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="section-pad section-anchor section-breath bg-deep text-warm"
      aria-labelledby="timeline-title"
    >
      <div className="section-shell">
        <SectionHeading
          id="timeline-title"
          eyebrow="Capítulos"
          title="Nossa linha do tempo"
          tone="light"
        />

        <div className="relative mx-auto mt-14 max-w-2xl md:mt-16">
          <div
            className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold/10 via-gold/45 to-gold/10 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="relative">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={event.id}
                  className="relative grid grid-cols-[1.5rem_1fr] gap-5 py-6 md:grid-cols-2 md:gap-10 md:py-8"
                >
                  <span
                    className="absolute left-3 top-8 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_4px_var(--color-deep-blue)] md:left-1/2"
                    aria-hidden="true"
                  />

                  <div
                    className={
                      isLeft
                        ? "col-start-2 md:col-start-1 md:pr-10 md:text-right"
                        : "col-start-2 md:col-start-2 md:pl-10 md:text-left"
                    }
                  >
                    <p className="eyebrow text-gold">{event.label}</p>
                    <p className="mt-3 font-display text-xl leading-snug text-warm sm:text-2xl">
                      {event.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
