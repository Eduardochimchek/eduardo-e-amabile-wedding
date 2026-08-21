import type { Metadata, Viewport } from "next";
import { weddingConfig } from "@/config/wedding";
import { getSiteUrl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";

/* Self-hosted fonts — avoid next/font Google CDN fetch failures on Vercel */
import "@fontsource/allura/latin-400.css";
import "@fontsource/allura/latin-ext-400.css";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-ext-400.css";
import "@fontsource/montserrat/latin-ext-500.css";
import "@fontsource/montserrat/latin-ext-600.css";
import "@fontsource/montserrat/latin-400-italic.css";
import "@fontsource/montserrat/latin-ext-400-italic.css";

import "./globals.css";

const siteUrl = getSiteUrl() ?? weddingConfig.seo.siteUrl;
const ogImagePath = weddingConfig.seo.ogImage;

export const metadata: Metadata = {
  title: weddingConfig.seo.title,
  description: weddingConfig.seo.description,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    type: "website",
    locale: "pt_BR",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(ogImagePath ? { images: [{ url: ogImagePath }] } : {}),
  },
  twitter: {
    card: ogImagePath ? "summary_large_image" : "summary",
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    ...(ogImagePath ? { images: [ogImagePath] } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // Meta theme-color requires a concrete color; mirrors --color-royal-blue
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
    <html lang="pt-BR">
      <body className="min-h-dvh font-sans antialiased">
        <SkipLink />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
