import Image from "next/image";
import type { GiftItem } from "@/types/wedding";
import { formatCurrencyBRL } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type GiftCardProps = {
  gift: GiftItem;
  onSelect: (gift: GiftItem) => void;
};

export function GiftCard({ gift, onSelect }: GiftCardProps) {
  const priceLabel =
    typeof gift.amount === "number"
      ? gift.fromPrice
        ? `A partir de ${formatCurrencyBRL(gift.amount)}`
        : formatCurrencyBRL(gift.amount)
      : null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-[#FBF8F2] shadow-[0_8px_28px_rgb(47_72_93_/0.06)] ring-1 ring-line/70 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgb(47_72_93_/0.1)]">
      <div className="relative aspect-square w-full overflow-hidden bg-warm">
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
        <h3 className="font-sans text-[0.95rem] font-medium leading-snug text-deep sm:text-base">
          {gift.description}
        </h3>

        {priceLabel ? (
          <p className="mt-4 font-sans text-lg font-semibold tracking-tight text-deep sm:text-xl">
            {priceLabel}
          </p>
        ) : (
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Valor livre
          </p>
        )}

        <button
          type="button"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-sage px-5 text-sm font-medium tracking-[0.04em] text-warm transition-[background,transform] duration-200 hover:bg-[color-mix(in_srgb,var(--color-sage)_88%,black)] active:translate-y-px"
          onClick={() => onSelect(gift)}
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
