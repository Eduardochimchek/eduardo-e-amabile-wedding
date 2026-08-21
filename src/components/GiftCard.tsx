import Image from "next/image";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { formatGiftAmount } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type GiftCardProps = {
  gift: GiftItem;
  onSelect: (gift: GiftItem, trigger: HTMLButtonElement) => void;
};

export function GiftCard({ gift, onSelect }: GiftCardProps) {
  const ctaLabel = weddingConfig.payment.enabled ? "Presentear" : "Contribuir";

  return (
    <article className="gift-card flex h-full flex-col overflow-hidden rounded-md bg-warm shadow-soft ring-1 ring-line/70">
      <div className="gift-card__media relative aspect-square w-full overflow-hidden bg-warm">
        {gift.imageSrc ? (
          <Image
            src={gift.imageSrc}
            alt={gift.imageAlt ?? gift.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder label={gift.title} aspect="square" />
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center sm:px-6">
        <h3 className="font-sans text-[1.35rem] font-medium leading-snug tracking-wide text-deep sm:text-[1.5rem]">
          {gift.title}
        </h3>
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {gift.description}
        </p>

        {typeof gift.amount === "number" ? (
          <p className="mt-4 font-sans text-sm font-semibold tracking-tight text-royal sm:text-base">
            {formatGiftAmount(gift.amount, { fromPrice: gift.fromPrice })}
          </p>
        ) : (
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Contribuição livre
          </p>
        )}

        <button
          type="button"
          className="btn-primary mt-5 w-full"
          onClick={(event) => onSelect(gift, event.currentTarget)}
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
