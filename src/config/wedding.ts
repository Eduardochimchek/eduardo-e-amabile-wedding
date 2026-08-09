import type { WeddingConfig } from "@/types/wedding";

/**
 * Central configuration for the wedding site.
 * Edit names, date, venue, payment and copy here — not inside components.
 *
 * Do not invent unavailable details (venue, time, PIX, year).
 * Leave optional fields undefined until confirmed.
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    partnerOne: {
      firstName: "Eduardo",
      fullName: "Eduardo Chimchek Jeronimo",
    },
    partnerTwo: {
      firstName: "Amábile",
      fullName: "Amábile Lacombe Borges",
    },
    shortNames: "Eduardo & Amábile",
  },

  date: {
    day: 13,
    month: 3,
    // year: undefined until confirmed
    display: "13/03",
    displayCompact: "13 • 03",
  },

  details: {
    // time: "16:00",
    // dressCode: "Traje a definir",
    venue: {
      // name: "Nome do local",
      // address: "Endereço completo",
      // city: "Cidade — UF",
      // mapUrl: "https://maps.google.com/...",
    },
  },

  family: [
    {
      id: "eduardo",
      name: "Eduardo",
      role: "partner",
      // imageSrc: "/images/couple/eduardo.jpg",
      imageAlt: "Foto de Eduardo",
    },
    {
      id: "amabile",
      name: "Amábile",
      role: "partner",
      // imageSrc: "/images/couple/amabile.jpg",
      imageAlt: "Foto de Amábile",
    },
    {
      id: "lili",
      name: "Lili",
      role: "child",
      // imageSrc: "/images/family/lili.jpg",
      imageAlt: "Foto de Lili",
    },
    {
      id: "mili",
      name: "Mili",
      role: "child",
      // imageSrc: "/images/family/mili.jpg",
      imageAlt: "Foto de Mili",
    },
  ],

  payment: {
    enabled: false,
    pix: {
      // key: "sua-chave-pix-publica",
      // keyType: "email",
      // beneficiaryName: "Nome do beneficiário",
      // qrCodeSrc: "/images/wedding/pix-qr.png",
      instructions:
        "Após realizar o PIX, guarde o comprovante. Agradecemos de coração.",
    },
  },

  seo: {
    title: "Eduardo & Amábile | Nosso Casamento",
    description:
      "Um pequeno espaço para compartilhar nossa história e celebrar o nosso casamento com quem amamos.",
    // siteUrl: "https://seu-dominio.vercel.app",
    // ogImage: "/images/wedding/og.jpg",
  },

  navigation: [
    { href: "#historia", label: "Nossa história" },
    { href: "#casamento", label: "O casamento" },
    { href: "#presentes", label: "Presentes" },
    { href: "#rsvp", label: "RSVP" },
  ],

  copy: {
    heroTagline: "Uma história que começou muito antes de imaginarmos.",
    storyLead: [
      "Algumas histórias começam quando duas pessoas se conhecem.",
      "A nossa começou muito antes de imaginarmos.",
    ],
    rsvpTitle: "Você faz parte da nossa história.",
    rsvpSubtitle: "E queremos celebrar esse momento ao seu lado.",
    giftsIntro:
      "O melhor presente é ter você conosco nesse dia. Mas, se quiser contribuir, montamos uma lista mais descontraída — com humor, carinho e zero obrigação.",
    finalMessage:
      "Mal podemos esperar para celebrar esse dia cercados de quem amamos.",
    footerMessage: "Com amor, para sempre.",
    numberFourTitle: "04",
    numberFourBody: [
      "Alguns números são apenas números.",
      "Para nós, não.",
      "Foi no dia 04 que nossa história ganhou novos capítulos.",
      "E desde então, o dia 04 ganhou um lugar especial na nossa família.",
    ],
  },
};

/** Design tokens mirrored from CSS — single source for JS consumers if needed */
export const colorTokens = {
  royalBlue: "#1E3A8A",
  mediumBlue: "#4F7DBA",
  serenity: "#8FAFC5",
  deepBlue: "#2F485D",
  warmWhite: "#F7F4EE",
  sage: "#7D8A70",
  champagne: "#D8C6A5",
  softGold: "#C5A66A",
} as const;
