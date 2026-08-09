export type CouplePerson = {
  firstName: string;
  fullName: string;
};

export type WeddingDate = {
  /** Day of the month (1–31) */
  day: number;
  /** Month (1–12) */
  month: number;
  /** Optional year — leave undefined until confirmed */
  year?: number;
  /** Display label, e.g. "13/03" */
  display: string;
  /** Compact hero label, e.g. "13 • 03" */
  displayCompact: string;
};

export type VenueInfo = {
  name?: string;
  address?: string;
  city?: string;
  mapUrl?: string;
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
  /** Path under /public, e.g. "/images/family/lili.jpg" */
  imageSrc?: string;
  imageAlt?: string;
};

export type TimelineEvent = {
  id: string;
  label: string;
  description: string;
  /** Optional ISO-like or display date string */
  date?: string;
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
  imageSrc?: string;
  enabled: boolean;
  paymentType: PaymentMethod;
};

export type PixConfig = {
  /** Public PIX key only — never store secrets here */
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

export type WeddingConfig = {
  couple: {
    partnerOne: CouplePerson;
    partnerTwo: CouplePerson;
    shortNames: string;
  };
  date: WeddingDate;
  details: WeddingDetailsConfig;
  family: FamilyMember[];
  payment: PaymentConfig;
  seo: SeoConfig;
  navigation: NavItem[];
  copy: {
    heroTagline: string;
    storyLead: [string, string];
    rsvpTitle: string;
    rsvpSubtitle: string;
    giftsIntro: string;
    finalMessage: string;
    footerMessage: string;
    numberFourTitle: string;
    numberFourBody: string[];
  };
};
