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
    displayLong: "13 de março de 2027",
  },

  details: {
    // time: "16:00",
    // dressCode: "Traje a definir",
    // time: leave undefined until confirmed (UI shows XXhXX placeholder)
    venue: {
      name: "Paróquia Nossa Senhora da Salete",
      address: "R. Gen. Osvaldo Pinto da Veiga, 1810",
      city: "Próspera • Criciúma/SC",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Par%C3%B3quia%20Nossa%20Senhora%20da%20Salete%2C%20R.%20Gen.%20Osvaldo%20Pinto%20da%20Veiga%2C%201810%20-%20Pr%C3%B3spera%2C%20Crici%C3%BAma%20-%20SC%2C%2088811-700",
      // Ordem: fachada (noite) → entrada → interior
      images: [
        {
          src: "/images/wedding/venue-01.jpg",
          alt: "Fachada da Paróquia Nossa Senhora da Salete ao entardecer",
        },
        {
          src: "/images/wedding/venue-04.jpg",
          alt: "Entrada da Paróquia Nossa Senhora da Salete",
        },
        {
          src: "/images/wedding/venue-02.jpg",
          alt: "Interior e altar da Paróquia Nossa Senhora da Salete",
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

  /**
   * Draft dress code - edit freely in one place.
   * Set enabled: false to hide the section.
   */
  dressCode: {
    enabled: true,
    eyebrow: "Traje",
    title: "Dress code",
    suggestion: "Esporte fino",
    lead: "Para celebrar esse dia tão especial, pedimos que sigam a sugestão de traje abaixo.",
    forHim: {
      label: "Para eles",
      style: "Esporte fino",
      text: "Calça social, camisa e sapato fechado. Blazer é bem-vindo; gravata opcional. Prefira tons sóbrios.",
    },
    forHer: {
      label: "Para elas",
      style: "Esporte fino",
      text: "Vestido midi ou longo, em estilo social. Tons clássicos ou suaves, com elegância e conforto.",
    },
    avoid: "Evitem cores claras como branco, off-white e tons muito próximos ao da noiva.",
    closing: "Agradecemos desde já!",
  },

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
    heroTagline:
      "Algumas histórias começam quando duas pessoas se encontram.\nA nossa começou muito antes disso.",
    storyEyebrow: "Desde o começo",
    storyLead: [
      "Algumas histórias começam quando duas pessoas se encontram.",
      "A nossa começou muito antes disso.",
    ],
    heroCtaStory: "Conheça nossa história ↓",
    detailsEyebrow: "O grande dia",
    detailsLead:
      "É aqui que daremos um dos passos mais importantes da nossa história.",
    detailsCarouselCaption:
      "É aqui que nossa história ganhará um novo capítulo.",
    detailsClosing:
      "Será uma alegria ter vocês conosco para celebrar esse momento tão especial!",
    detailsCtaMap: "Como chegar",
    giftsEyebrow: "Presentes",
    giftsSpecialEyebrow: "Cotas especiais",
    giftsIntro:
      "Escolha a contribuição que fizer sentido para você. Sem obrigação, com carinho.",
    giftsClosing:
      "Mais do que qualquer presente, ter vocês celebrando esse momento com a gente já é um presente enorme.",
    finalEyebrow: "Até lá",
    rsvpTitle: "Você vem celebrar com a gente?",
    rsvpSubtitle:
      "Sua presença é o presente que mais queremos receber. Mas precisamos saber se podemos contar com você nesse dia tão especial.",
    finalMessage:
      "Depois de tantos capítulos,\nchegou a hora de escrever o nosso próximo.",
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
