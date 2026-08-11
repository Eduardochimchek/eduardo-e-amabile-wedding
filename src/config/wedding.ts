import type { WeddingConfig } from "@/types/wedding";

/**
 * Central configuration for the wedding site.
 * Edit names, date, venue, payment and copy here - not inside components.
 *
 * Do not invent unavailable details (venue, time, PIX, year).
 * Leave optional fields undefined until confirmed.
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    partnerOne: {
      firstName: "Amábile",
      fullName: "Amábile Lacombe Borges",
    },
    partnerTwo: {
      firstName: "Eduardo",
      fullName: "Eduardo Chimchek Jeronimo",
    },
    shortNames: "Amábile & Eduardo",
    imageSrc: "/images/couple/eduardo-amabile.jpg",
    imageAlt: "Amábile e Eduardo juntos em uma viagem",
  },

  date: {
    day: 13,
    month: 3,
    year: 2027,
    display: "13/03/2027",
    displayCompact: "13 • 03 • 2027",
  },

  details: {
    // time: "16:00",
    // dressCode: "Traje a definir",
    venue: {
      name: "Paróquia Nossa Senhora da Salete",
      address: "R. Gen. Osvaldo Pinto da Veiga, 1810",
      city: "Próspera, Criciúma/SC, 88811-700",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Par%C3%B3quia%20Nossa%20Senhora%20da%20Salete%2C%20R.%20Gen.%20Osvaldo%20Pinto%20da%20Veiga%2C%201810%20-%20Pr%C3%B3spera%2C%20Crici%C3%BAma%20-%20SC%2C%2088811-700",
      images: [
        {
          src: "/images/wedding/venue-01.jpg",
          alt: "Fachada da Paróquia Nossa Senhora da Salete com torre e telhado vermelho",
        },
        {
          src: "/images/wedding/venue-exterior.jpg",
          alt: "Vista da Paróquia Nossa Senhora da Salete em Criciúma",
        },
        {
          src: "/images/wedding/venue-02.jpg",
          alt: "Interior da Paróquia Nossa Senhora da Salete",
        },
        {
          src: "/images/wedding/venue-04.jpg",
          alt: "Entrada da Paróquia Nossa Senhora da Salete",
        },
      ],
      imageCredit: {
        author: "Alcimar Callegari",
        authorUrl:
          "https://commons.wikimedia.org/wiki/File:Crici%C3%BAma_SC_02.06.2014_088.JPG",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      },
    },
  },

  family: [
    {
      id: "amabile",
      name: "Amábile",
      role: "partner",
      imageAlt: "Foto de Amábile",
    },
    {
      id: "eduardo",
      name: "Eduardo",
      role: "partner",
      imageAlt: "Foto de Eduardo",
    },
    {
      id: "mili",
      name: "Mili",
      role: "child",
      imageSrc: "/images/family/mili.jpg",
      imageAlt: "Foto de Mili",
    },
    {
      id: "nina",
      name: "Nina",
      role: "child",
      imageSrc: "/images/family/nina.jpg",
      imageAlt: "Foto de Nina",
    },
  ],

  payment: {
    enabled: true,
    pix: {
      key: "489999315541",
      keyType: "phone",
      beneficiaryName: "Eduardo Chimchek Jeronimo",
      // qrCodeSrc: "/images/wedding/pix-qr.png",
      instructions:
        "Após realizar o PIX, guarde o comprovante. Agradecemos de coração.",
    },
  },

  seo: {
    title: "Amábile & Eduardo | Nosso Casamento",
    description:
      "Um pequeno espaço para compartilhar nossa história e celebrar o nosso casamento com quem amamos.",
    // Prefer NEXT_PUBLIC_SITE_URL in Vercel. Optional static fallback:
    // siteUrl: "https://eduardo-e-amabile-wedding.vercel.app",
    ogImage: "/images/wedding/og.jpg",
  },

  navigation: [
    { href: "#historia", label: "Nossa história" },
    { href: "#casamento", label: "O casamento" },
    { href: "#presentes", label: "Presentes" },
    { href: "#rsvp", label: "RSVP" },
  ],

  copy: {
    heroTagline: "Uma história que começou muito antes de imaginarmos.",
    storyEyebrow: "Desde o começo",
    storyLead: [
      "Algumas histórias começam quando duas pessoas se conhecem.",
      "A nossa começou muito antes de imaginarmos.",
    ],
    familyEyebrow: "Com amor",
    giftsEyebrow: "Lua de mel",
    finalEyebrow: "Até lá",
    rsvpTitle: "Você faz parte da nossa história.",
    rsvpSubtitle: "E queremos celebrar esse momento ao seu lado.",
    giftsIntro:
      "O melhor presente é celebrar conosco. Se quiser contribuir, montamos uma lista para a nossa lua de mel: leve, com humor e sem obrigação. Escolha o valor que fizer sentido para você.",
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
