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
      "13 de março de 2027. Um novo capítulo começa, dessa vez, para ser vivido para sempre.",
    ],
  },
];

/**
 * Photo collage - a mixed, unordered mosaic (no captions, no chronology).
 * Photos live in /public/images/couple. Width/height are the source
 * image's intrinsic size, used by next/image to avoid layout shift.
 */
export const collagePhotos: { src: string; width: number; height: number }[] = [
  { src: "/images/couple/couple-08.jpg", width: 1080, height: 1160 },
  { src: "/images/couple/couple-16.jpg", width: 637, height: 806 },
  { src: "/images/couple/couple-01.jpg", width: 1280, height: 960 },
  { src: "/images/couple/couple-02.jpg", width: 1280, height: 960 },
  { src: "/images/couple/couple-03.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-04.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-05.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-06.jpg", width: 1280, height: 960 },
  { src: "/images/couple/couple-07.jpg", width: 1066, height: 1600 },
  { src: "/images/couple/couple-09.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-10.jpg", width: 1080, height: 1290 },
  { src: "/images/couple/couple-11.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-12.jpg", width: 1200, height: 1600 },
  { src: "/images/couple/couple-13.jpg", width: 1280, height: 960 },
  { src: "/images/couple/couple-14.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-15.jpg", width: 790, height: 1600 },
  { src: "/images/couple/couple-17.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-18.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-19.jpg", width: 1500, height: 1125 },
  { src: "/images/couple/couple-20.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-21.jpg", width: 1500, height: 1125 },
  { src: "/images/couple/couple-22.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-23.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-24.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-25.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-26.jpg", width: 1500, height: 1000 },
  { src: "/images/couple/couple-27.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-28.jpg", width: 1500, height: 1000 },
  { src: "/images/couple/couple-29.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-30.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-31.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-32.jpg", width: 1500, height: 1500 },
  { src: "/images/couple/couple-33.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-34.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-35.jpg", width: 741, height: 1500 },
  { src: "/images/couple/couple-36.jpg", width: 741, height: 1500 },
  { src: "/images/couple/couple-37.jpg", width: 960, height: 1280 },
  { src: "/images/couple/couple-38.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-39.jpg", width: 1125, height: 1500 },
  { src: "/images/couple/couple-40.jpg", width: 720, height: 1440 },
  { src: "/images/couple/couple-41.jpg", width: 960, height: 960 },
  { src: "/images/couple/couple-42.jpg", width: 1080, height: 1500 },
  { src: "/images/couple/couple-43.jpg", width: 1500, height: 998 },
  { src: "/images/couple/couple-44.jpg", width: 999, height: 1500 },
];

/**
 * Timeline / Memory Lane - photos in /public/images/timeline.
 */
export const timelineEvents: TimelineEvent[] = [
  {
    id: "infancia",
    label: "Infância",
    year: "Cia dos Anjos",
    description: "Quando nossas histórias começaram a se cruzar.",
    imageSrc: "/images/timeline/infancia.jpg",
    imageAlt: "Amábile e Eduardo na infância, Cia dos Anjos",
  },
  {
    id: "caminhos",
    label: "Caminhos",
    description: "Cada um seguiu seu caminho, até o acaso mudar tudo.",
    imageSrc: "/images/timeline/caminhos.jpg",
    imageAlt: "Eduardo e Amábile cada um no seu caminho",
  },
  {
    id: "reencontro",
    label: "Reencontro",
    description: "Amábile viu Eduardo no ônibus e perguntou: “é você?”.",
    imageSrc: "/images/timeline/reencontro.jpg",
    imageAlt: "Conversa do reencontro",
  },
  {
    id: "primeiro-encontro",
    label: "Primeiro encontro",
    year: "2020",
    description: "O primeiro encontro. O começo.",
    date: "2020-01-04",
    imageSrc: "/images/timeline/familia.jpg",
    imageAlt: "Primeiro encontro de Amábile e Eduardo",
  },
  {
    id: "namoro",
    label: "Namoro",
    description: "Passeios, planos e uma vida sendo construída a dois.",
    imageSrc: "/images/timeline/namoro.jpg",
    imageAlt: "Amábile e Eduardo durante o namoro",
  },
  {
    id: "mili-nina",
    label: "Família",
    year: "Mili & Nina",
    description: "Chegaram para completar a nossa história.",
  },
  {
    id: "casamento",
    label: "O nosso sim",
    description: "Um novo capítulo para sempre.",
    date: "2027-03-13",
    imageSrc: "/images/timeline/casamento.jpg",
    imageAlt: "O nosso sim",
  },
];
