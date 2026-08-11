import type { StoryChapter, TimelineEvent } from "@/types/wedding";

/**
 * Narrative chapters for the story section.
 * Keep tone elegant and restrained - emotion without excess.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: "infancia",
    title: "Cia dos Anjos",
    paragraphs: [
      "Amábile e Eduardo se conheciam ainda crianças, na Cia dos Anjos. Naquela época, eram apenas duas crianças dividindo os mesmos dias, sem imaginar que, muitos anos depois, suas histórias voltariam a se encontrar.",
    ],
  },
  {
    id: "caminhos",
    title: "Caminhos que se afastam",
    paragraphs: [
      "O tempo passou e cada um seguiu seu próprio caminho. A infância ficou para trás, os anos passaram e a vida tratou de colocá-los em lugares diferentes. Até que, um dia, o acaso resolveu mudar tudo.",
    ],
  },
  {
    id: "reencontro",
    title: "O reencontro",
    paragraphs: [
      "Amábile viu Eduardo no ônibus. Talvez ele nem imaginasse, mas aquele encontro despertou uma lembrança. Ela puxou assunto, enviou uma foto dos dois na infância e perguntou: “é você?”.",
      "Era. E, a partir dali, uma conversa que parecia simples acabou dando início a uma nova história.",
    ],
  },
  {
    id: "primeiro-encontro",
    title: "4 de janeiro de 2020",
    paragraphs: [
      "Eles combinaram de sair. Foi o primeiro encontro, o começo.",
    ],
  },
  {
    id: "namoro",
    title: "O dia em que virou nós dois",
    paragraphs: [
      "04 de novembro de 2020. Eduardo pediu Amábile em namoro. E, desde então, o dia 04 passou a carregar um significado especial para os dois: a união oficial de uma história que já vinha sendo escrita pelo acaso.",
    ],
  },
  {
    id: "familia",
    title: "Uma vida a dois e a quatro",
    paragraphs: [
      "Ao longo de mais de seis anos, construíram uma vida juntos, cheia de planos, mudanças, aprendizados e pequenos momentos que se tornaram grandes memórias.",
      "E, no caminho, a família cresceu. Mili e Nina chegaram para completar a história, ocupando um lugar especial em cada capítulo dessa vida que construímos juntos.",
    ],
  },
  {
    id: "casamento",
    title: "O nosso sim",
    paragraphs: [
      "Depois de tantos encontros, desencontros, reencontros, conversas, escolhas e uma vida construída juntos, chegou o momento de dizer “sim”.",
      "13 de março de 2024. Um novo capítulo começa, dessa vez, para ser vivido para sempre.",
    ],
  },
];

/**
 * Timeline events - labels and copy stay configurable here.
 */
export const timelineEvents: TimelineEvent[] = [
  {
    id: "infancia",
    label: "Infância",
    description: "Cia dos Anjos. Quando nossas histórias começaram a se cruzar.",
  },
  {
    id: "caminhos",
    label: "Caminhos",
    description: "Cada um seguiu seu caminho, até o acaso mudar tudo.",
  },
  {
    id: "reencontro",
    label: "Reencontro",
    description: "Amábile viu Eduardo no ônibus e perguntou: “é você?”.",
  },
  {
    id: "primeiro-encontro",
    label: "04/01/2020",
    description: "O primeiro encontro. O começo.",
    date: "2020-01-04",
  },
  {
    id: "namoro",
    label: "04/11/2020",
    description: "O dia em que virou nós dois.",
    date: "2020-11-04",
  },
  {
    id: "anos",
    label: "+6 anos",
    description: "Uma vida construída juntos.",
  },
  {
    id: "mili-nina",
    label: "Mili & Nina",
    description: "Chegaram para completar a nossa história.",
  },
  {
    id: "casamento",
    label: "13/03/2024",
    description: "O nosso sim. Um novo capítulo para sempre.",
    date: "2024-03-13",
  },
];
