import type { GiftItem } from "@/types/wedding";

/**
 * Gift registry focused on honeymoon contributions, plus special humor cotas.
 * Set `enabled: false` to hide without deleting.
 * Images live in /public/images/gifts/
 */
export const gifts: GiftItem[] = [
  {
    id: "hm-iced-coffee",
    title: "Um café gelado especial para dois",
    description:
      "Porque começar o dia juntos, sem pressa, já é um ótimo presente.",
    amount: 200,
    imageSrc: "/images/gifts/iced-coffee.jpg",
    imageAlt: "Café gelado especial para dois",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-toast",
    title: "Um brinde aos recém-casados",
    description:
      "Depois de todo o planejamento, finalmente chegou a hora de comemorar!",
    amount: 243.5,
    imageSrc: "/images/gifts/champagne-toast.jpg",
    imageAlt: "Brinde com taças de vinho",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-dessert",
    title: "Uma sobremesa especial",
    description: "Porque felicidade também pode vir acompanhada de açúcar.",
    amount: 286.75,
    imageSrc: "/images/gifts/dessert.jpg",
    imageAlt: "Sobremesa especial",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-dinner-romantic",
    title: "Um jantarzinho romântico",
    description: "Porque depois do casamento a gente merece comer bem.",
    amount: 327,
    imageSrc: "/images/gifts/dinner.jpg",
    imageAlt: "Mesa de jantar romântica",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-carefree-day",
    title: "Um dia sem preocupações",
    description:
      "Sem horários, sem pressa e, se possível, sem pensar em boleto.",
    amount: 389.9,
    imageSrc: "/images/gifts/relax-day.jpg",
    imageAlt: "Dia de descanso e relaxamento",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-outing",
    title: "Um passeio para o casal",
    description:
      "Mais uma experiência para transformar a viagem em boas lembranças.",
    amount: 418.9,
    imageSrc: "/images/gifts/couple-outing.jpg",
    imageAlt: "Passeio em paisagem de viagem",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-special-night",
    title: "Uma noite especial",
    description: "Porque uma vez na vida podemos nos dar esse luxo.",
    amount: 537.4,
    imageSrc: "/images/gifts/special-night.jpg",
    imageAlt: "Jantar romântico à noite",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-unforgettable",
    title: "Uma experiência inesquecível",
    description: "Porque queremos voltar com histórias para contar.",
    amount: 674.5,
    imageSrc: "/images/gifts/experience.jpg",
    imageAlt: "Experiência de viagem inesquecível",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-memory",
    title: "Um momento para guardar na memória",
    description:
      "Daqueles que rendem histórias e fotos que ninguém vai cansar de ver.",
    amount: 752.8,
    imageSrc: "/images/gifts/memory.jpg",
    imageAlt: "Fotos e memórias da viagem",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-newlywed-day",
    title: "Um dia de recém-casados",
    description:
      "A única obrigação é aproveitar. O resto a gente resolve depois.",
    amount: 918.3,
    imageSrc: "/images/gifts/newlyweds.jpg",
    imageAlt: "Casal de recém-casados",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-sponsor",
    title: "Patrocínio especial da lua de mel",
    description:
      "Você oficialmente está ajudando a financiar nossa felicidade.",
    amount: 987.45,
    imageSrc: "/images/gifts/travel-sponsor.jpg",
    imageAlt: "Patrocínio da viagem de lua de mel",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-big-gift",
    title: "Um grande presente para nossa viagem",
    description:
      "Uma contribuição que vai deixar nossa lua de mel ainda mais especial.",
    amount: 1000,
    imageSrc: "/images/gifts/big-gift.jpg",
    imageAlt: "Grande presente para a viagem",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "hm-dreams",
    title: "Lua de mel dos sonhos",
    description:
      "Itália, o sonho dela. Você acaba de se tornar oficialmente um dos patrocinadores da nossa viagem!",
    amount: 1329.9,
    imageSrc: "/images/gifts/honeymoon-dream.jpg",
    imageAlt: "Veneza, Itália: lua de mel dos sonhos",
    enabled: true,
    paymentType: "pix",
    group: "honeymoon",
  },
  {
    id: "extra-kids-question",
    title: "Cota “E os filhos, quando vêm?”",
    description:
      "A pergunta é gratuita. A resposta continua sendo: não sabemos.",
    amount: 276.75,
    imageSrc: "/images/gifts/kids-question.jpg",
    imageAlt: "Cota humorística sobre filhos",
    enabled: true,
    paymentType: "pix",
    group: "special",
  },
  {
    id: "extra-deserve",
    title: "Cota “Vocês merecem aproveitar”",
    description: "E nós vamos levar essa autorização muito a sério.",
    amount: 597.9,
    imageSrc: "/images/gifts/celebrate.jpg",
    imageAlt: "Cota vocês merecem aproveitar",
    enabled: true,
    paymentType: "pix",
    group: "special",
  },
  {
    id: "extra-enjoy-honeymoon",
    title: "Cota “VAI! APROVEITEM, É LUA DE MEL!”",
    description:
      "Essa é a que a gente espera receber e é de propósito: nosso número.",
    amount: 444.44,
    imageSrc: "/images/gifts/day-04.jpg",
    imageAlt: "Cota especial da lua de mel com valor 444,44",
    enabled: true,
    paymentType: "pix",
    group: "special",
  },
];

export function getEnabledGifts(): GiftItem[] {
  return gifts.filter((gift) => gift.enabled);
}

export function getGiftsByGroup(
  group: "honeymoon" | "special",
): GiftItem[] {
  return getEnabledGifts().filter(
    (gift) => (gift.group ?? "honeymoon") === group,
  );
}
