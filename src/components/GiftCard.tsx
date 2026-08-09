import type { GiftItem } from "@/types/wedding";
import { formatCurrencyBRL } from "@/lib/utils";

type GiftCardProps = {
  gift: GiftItem;
  onSelect: (gift: GiftItem) => void;
};

export function GiftCard({ gift, onSelect }: GiftCardProps) {
  return (
    <article className="flex h-full flex-col border border-line bg-warm/60 px-6 py-8 transition-[border-color,background] duration-300 hover:border-champagne hover:bg-warm">
      <h3 className="font-display text-2xl text-deep sm:text-[1.75rem]">
        {gift.title}
      </h3>
      <p className="mt-3 flex-1 body-copy text-sm sm:text-base">
        {gift.description}
      </p>
      {typeof gift.amount === "number" ? (
        <p className="mt-5 font-display text-xl text-royal">
          {formatCurrencyBRL(gift.amount)}
        </p>
      ) : (
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-gold">
          Valor livre
        </p>
      )}
      <button
        type="button"
        className="btn-ghost mt-6 w-full"
        onClick={() => onSelect(gift)}
      >
        Presentear
      </button>
    </article>
  );
}
