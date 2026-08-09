import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { getFamilyDescriptionFromConfig } from "@/lib/family";
import { FamilyMotion } from "@/components/FamilyMotion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Family() {
  const { couple } = weddingConfig;
  const partners = weddingConfig.family.filter((m) => m.role === "partner");
  const children = weddingConfig.family.filter((m) => m.role === "child");
  const description = getFamilyDescriptionFromConfig(weddingConfig);
  const couplePhoto = couple.imageSrc;

  return (
    <section
      id="familia"
      className="section-pad section-anchor section-breath bg-warm"
      aria-labelledby="familia-title"
    >
      <div className="section-shell">
        <FamilyMotion>
          <div data-m="up" className="w-full">
            <SectionHeading
              id="familia-title"
              eyebrow={weddingConfig.copy.familyEyebrow}
              title="Nossa família"
              description={description}
            />
          </div>

          {couplePhoto ? (
            <figure data-m="image" className="mx-auto mt-14 w-full max-w-xl md:mt-16">
              <div className="m-image relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                <Image
                  src={couplePhoto}
                  alt={couple.imageAlt ?? couple.shortNames}
                  fill
                  quality={95}
                  className="object-cover object-[50%_28%]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 640px"
                />
              </div>
              <figcaption className="mt-5 text-center font-display text-2xl text-deep sm:text-3xl">
                {couple.shortNames}
              </figcaption>
            </figure>
          ) : (
            <div
              data-m="fade"
              className="mt-14 grid w-full max-w-4xl gap-6 self-center sm:grid-cols-2 md:mt-16"
            >
              {partners.map((member) => (
                <figure key={member.id} className="text-center">
                  <div className="m-image overflow-hidden">
                    {member.imageSrc ? (
                      <div className="relative aspect-[3/4]">
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
                  </div>
                  <figcaption className="mt-4 font-display text-2xl text-deep">
                    {member.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div
            data-m="fade"
            className="flex items-center justify-center gap-4 py-2"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-line" />
            <span className="font-display text-3xl text-gold">+</span>
            <span className="h-px w-10 bg-line" />
          </div>

          <div
            data-m="image"
            className="grid w-full max-w-xl gap-6 self-center sm:grid-cols-2"
          >
            {children.map((member) => (
              <figure key={member.id} className="text-center">
                {member.imageSrc ? (
                  <div className="m-image relative aspect-square overflow-hidden">
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt ?? member.name}
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 280px"
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
        </FamilyMotion>
      </div>
      <div className="section-divider mt-16 opacity-70" aria-hidden="true" />
    </section>
  );
}
