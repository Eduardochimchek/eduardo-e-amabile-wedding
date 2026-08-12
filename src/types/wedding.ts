export type CouplePerson = {
  firstName: string;
  fullName: string;
};

export type WeddingDate = {
  /** Day of the month (1-31) */
  day: number;
  /** Month (1-12) */
  month: number;
  /** Optional year - leave undefined until confirmed */
  year?: number;
  /** Display label, e.g. "13/03" */
  display: string;
  /** Compact hero label, e.g. "13 • 03 • 2027" */
  displayCompact: string;
  /** Long form for hero, e.g. "13 de março de 2027" */
  displayLong?: string;
};

export type VenueImage = {
  src: string;
  alt: string;
};

export type VenueInfo = {
  name?: string;
  address?: string;
  city?: string;
  mapUrl?: string;
  /** Gallery for the venue carousel (order is display order) */
  images?: VenueImage[];
  /** @deprecated Prefer `images` */
  imageSrc?: string;
  imageAlt?: string;
  /** Required when using CC-licensed venue photos */
  imageCredit?: {
    author: string;
    authorUrl?: string;
    license: string;
    licenseUrl?: string;
  };
};

export type WeddingDetailsConfig = {
  time?: string;
  dressCode?: string;
  additionalNotes?: string;
  venue: VenueInfo;
};

export type FamilyMember = {
  id: string;
  name: string;
  role: "partner" | "child" | "family";
  /** Path under /public, e.g. "/images/family/nina.jpg" */
  imageSrc?: string;
  imageAlt?: string;
};

export type TimelineEvent = {
  id: string;
  label: string;
  description: string;
  /** Optional ISO-like or display date string */
  date?: string;
  /** Year or short caption under the polaroid */
  year?: string;
  /** Path under /public, e.g. "/images/timeline/infancia.jpg" */
  imageSrc?: string;
  imageAlt?: string;
};

export type StoryChapter = {
  id: string;
  title?: string;
  paragraphs: string[];
};

export type PaymentMethod = "pix" | "other";

export type GiftItem = {
  id: string;
  title: string;
  description: string;
  /** Leave undefined until a value is confirmed */
  amount?: number;
  /** When true, price is shown as "A partir de ..." */
  fromPrice?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  enabled: boolean;
  paymentType: PaymentMethod;
  /** honeymoon = main list; special = cotas especiais */
  group?: "honeymoon" | "special";
};

export type PixConfig = {
  /** Public PIX key only - never store secrets here */
  key?: string;
  keyType?: "cpf" | "cnpj" | "email" | "phone" | "random";
  beneficiaryName?: string;
  /** Optional path to a QR code image under /public */
  qrCodeSrc?: string;
  instructions?: string;
};

export type PaymentConfig = {
  pix: PixConfig;
  /** When false, payment UI shows a “coming soon” state */
  enabled: boolean;
};

export type NavItem = {
  href: string;
  label: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  siteUrl?: string;
  ogImage?: string;
};

export type DressCodeNote = {
  label: string;
  text: string;
};

export type DressCodeConfig = {
  /** When false, the section is hidden */
  enabled: boolean;
  eyebrow: string;
  title: string;
  suggestion: string;
  lead: string;
  notes: DressCodeNote[];
  closing?: string;
};

export type WeddingConfig = {
  couple: {
    partnerOne: CouplePerson;
    partnerTwo: CouplePerson;
    shortNames: string;
    /** Shared couple portrait under /public */
    imageSrc?: string;
    imageAlt?: string;
  };
  date: WeddingDate;
  details: WeddingDetailsConfig;
  dressCode: DressCodeConfig;
  family: FamilyMember[];
  payment: PaymentConfig;
  seo: SeoConfig;
  navigation: NavItem[];
  copy: {
    heroTagline: string;
    heroCtaStory: string;
    detailsEyebrow: string;
    detailsLead: string;
    detailsCarouselCaption: string;
    detailsClosing: string;
    detailsCtaMap: string;
    storyEyebrow: string;
    storyLead: [string, string];
    familyEyebrow: string;
    giftsEyebrow: string;
    giftsSpecialEyebrow: string;
    giftsIntro: string;
    giftsClosing: string;
    finalEyebrow: string;
    rsvpTitle: string;
    rsvpSubtitle: string;
    finalMessage: string;
    footerMessage: string;
    numberFourTitle: string;
    numberFourBody: string[];
  };
};
