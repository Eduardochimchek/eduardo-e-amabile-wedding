"use client";

import { weddingConfig } from "@/config/wedding";
import { storyChapters } from "@/data/story";
import { Motion, MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Story() {
  const [leadOne, leadTwo] = weddingConfig.copy.storyLead;

  return (
    <section
      id="historia"
      className="section-pad section-anchor botanical-wash"
      aria-labelledby="historia-title"
    >
      <div className="section-shell">
        <MotionGroup stagger>
          <div data-m="fade">
            <SectionHeading
              id="historia-title"
              eyebrow={weddingConfig.copy.storyEyebrow}
              title="Nossa história"
            />
          </div>

          <p
            data-m="up"
            className="mx-auto mt-10 max-w-2xl text-center font-sans text-2xl italic leading-snug text-deep sm:text-3xl"
          >
            {leadOne}
          </p>
          <p
            data-m="up"
            className="mx-auto mt-4 max-w-2xl text-center font-sans text-2xl italic leading-snug text-royal sm:text-3xl"
          >
            {leadTwo}
          </p>
        </MotionGroup>

        <ol className="mx-auto mt-16 max-w-3xl space-y-12 md:mt-20 md:space-y-16">
          {storyChapters.map((chapter, index) => (
            <Motion as="li" key={chapter.id} variant="up" delay={Math.min(index * 40, 160)}>
              <article className="grid gap-4 md:grid-cols-[5.5rem_1fr] md:gap-8">
                <div className="flex items-start md:justify-end">
                  <span className="font-display text-4xl text-gold/70 md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="border-t border-line pt-4 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  {chapter.title ? (
                    <h3 className="font-display text-2xl text-deep md:text-[1.75rem]">
                      {chapter.title}
                    </h3>
                  ) : null}
                  <div className="mt-3 space-y-3">
                    {chapter.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={`${chapter.id}-${pIndex}`}
                        className="body-copy font-medium text-deep"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </Motion>
          ))}
        </ol>
      </div>
      <div className="section-divider mt-16 opacity-70" aria-hidden="true" />
    </section>
  );
}
