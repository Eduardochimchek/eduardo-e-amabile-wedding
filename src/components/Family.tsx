import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Family() {
  const partners = weddingConfig.family.filter((m) => m.role === "partner");
  const children = weddingConfig.family.filter((m) => m.role === "child");

  return (
    <section
      id="familia"
      className="section-pad bg-warm"
      aria-labelledby="familia-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="familia-title"
            eyebrow="Com amor"
            title="Nossa família"
            description="Eduardo & Amábile — e Lili & Mili, que fazem dessa história um lar."
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:mt-16">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {partners.map((member) => (
                <figure key={member.id} className="text-center">
                  {member.imageSrc ? (
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={member.imageSrc}
                        alt={member.imageAlt ?? member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={`Foto de ${member.name}`} />
                  )}
                  <figcaption className="mt-4 font-display text-2xl text-deep">
                    {member.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
              <span className="h-px w-10 bg-line" />
              <span className="font-display text-3xl text-gold">+</span>
              <span className="h-px w-10 bg-line" />
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="grid gap-6 sm:mx-auto sm:max-w-xl sm:grid-cols-2">
              {children.map((member) => (
                <figure key={member.id} className="text-center">
                  {member.imageSrc ? (
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.imageSrc}
                        alt={member.imageAlt ?? member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={`Foto de ${member.name}`}
                      aspect="square"
                    />
                  )}
                  <figcaption className="mt-4 font-display text-2xl text-deep">
                    {member.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
