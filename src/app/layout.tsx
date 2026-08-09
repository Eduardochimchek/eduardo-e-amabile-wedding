import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { weddingConfig } from "@/config/wedding";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = weddingConfig.seo.siteUrl;

export const metadata: Metadata = {
  title: weddingConfig.seo.title,
  description: weddingConfig.seo.description,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    type: "website",
    locale: "pt_BR",
    ...(weddingConfig.seo.ogImage
      ? { images: [{ url: weddingConfig.seo.ogImage }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
