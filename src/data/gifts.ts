import type { GiftItem } from "@/types/wedding";

/**
 * Gift registry items.
 * Set `enabled: false` to hide an item without deleting it.
 * Leave `amount` undefined until values are confirmed.
 * Optional images: place files in /public/images/gifts/ and set imageSrc.
 */
export const gifts: GiftItem[] = [
  {
    id: "home",
    title: "Nossa casa",
    description: "Para contribuir com o lar que estamos construindo juntos.",
    // amount: 150,
    enabled: true,
    paymentType: "pix",
  },
  {
    id: "honeymoon",
    title: "Nossa lua de mel",
    description: "Um gesto para os primeiros dias da nossa nova etapa.",
    // amount: 200,
    enabled: true,
    paymentType: "pix",
  },
  {
    id: "dinner",
    title: "Um jantar especial",
    description: "Para uma noite a dois, com calma e carinho.",
    // amount: 100,
    enabled: true,
    paymentType: "pix",
  },
  {
    id: "moment",
    title: "Um momento para nós",
    description: "Um presente livre, para o que fizer mais sentido no momento.",
    enabled: true,
    paymentType: "pix",
  },
];

export function getEnabledGifts(): GiftItem[] {
  return gifts.filter((gift) => gift.enabled);
}
