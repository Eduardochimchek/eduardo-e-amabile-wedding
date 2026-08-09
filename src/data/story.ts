import type { StoryChapter, TimelineEvent } from "@/types/wedding";

/**
 * Narrative chapters for the story section.
 * Keep tone elegant and restrained — emotion without excess.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: "infancia",
    title: "CIA dos Anjos",
    paragraphs: [
      "Eduardo e Amábile estudaram juntos na CIA dos Anjos quando ainda eram pequenos. Foi ali que suas histórias começaram a se cruzar — sem que soubessem o que o tempo ainda guardava.",
    ],
  },
  {
    id: "caminhos",
    title: "Caminhos que se afastam",
    paragraphs: [
      "Com o tempo, cada um seguiu sua vida. Anos se passaram. Distâncias se abriram. Até que o destino decidiu que ainda havia um capítulo por escrever.",
    ],
  },
  {
    id: "reencontro",
    title: "O reencontro",
    paragraphs: [
      "Amábile viu Eduardo no ônibus. Em vez de deixar o momento passar, puxou assunto enviando uma foto dos dois na infância, perguntando se ele era a mesma pessoa.",
      "Era. E a partir daí, começaram a conversar novamente.",
    ],
  },
  {
    id: "primeiro-encontro",
    title: "04 de janeiro de 2020",
    paragraphs: [
      "Eles combinaram de sair. Foi o primeiro encontro — o começo consciente de uma nova história, construída com conversas, presença e escolha.",
    ],
  },
  {
    id: "namoro",
    title: "04 de novembro",
    paragraphs: [
      "Eduardo pediu Amábile em namoro. Desde então, o dia 04 passou a ter um significado especial para os dois — um lembrete discreto de que algumas datas carregam mais do que números.",
    ],
  },
  {
    id: "familia",
    title: "Uma vida a dois — e a quatro",
    paragraphs: [
      "Ao longo de mais de seis anos, construíram uma vida juntos e formaram uma família. Lili e Mili fazem parte essencial dessa história, com carinho e presença em cada capítulo.",
    ],
  },
  {
    id: "casamento",
    title: "O sim",
    paragraphs: [
      "Agora chega o momento do casamento: 13/03. Um novo capítulo — celebrado com quem os acompanha.",
    ],
  },
];

/**
 * Timeline events — labels and copy stay configurable here.
 */
export const timelineEvents: TimelineEvent[] = [
  {
    id: "infancia",
    label: "Infância",
    description: "Quando nossas histórias começaram a se cruzar.",
  },
  {
    id: "reencontro",
    label: "Reencontro",
    description: "O destino resolveu nos colocar no mesmo caminho novamente.",
  },
  {
    id: "primeiro-encontro",
    label: "04/01/2020",
    description: "Nosso primeiro encontro.",
    date: "2020-01-04",
  },
  {
    id: "namoro",
    label: "04/11",
    description: "O dia em que começamos oficialmente nossa história de amor.",
  },
  {
    id: "anos",
    label: "+6 anos",
    description: "Uma vida construída juntos.",
  },
  {
    id: "lili-mili",
    label: "Lili & Mili",
    description: "Nossa família.",
  },
  {
    id: "casamento",
    label: "13/03",
    description: "O dia em que diremos sim.",
  },
];
