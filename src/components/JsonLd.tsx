import { weddingConfig } from "@/config/wedding";
import { getAbsoluteUrl, getSiteUrl } from "@/lib/site";

/**
 * Event structured data - only with confirmed fields.
 * Does not invent year, time, venue, or address.
 */
export function JsonLd() {
  const siteUrl = getSiteUrl() ?? weddingConfig.seo.siteUrl;
  const { couple, date, details, seo } = weddingConfig;

  const event: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Casamento de ${couple.shortNames}`,
    description: seo.description,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Person",
      name: couple.shortNames,
    },
  };

  if (siteUrl) {
    event.url = siteUrl;
  }

  if (date.year) {
    const month = String(date.month).padStart(2, "0");
    const day = String(date.day).padStart(2, "0");
    const time = details.time?.trim();
    event.startDate = time
      ? `${date.year}-${month}-${day}T${normalizeTime(time)}`
      : `${date.year}-${month}-${day}`;
  }

  const venueName = details.venue.name?.trim();
  const address = details.venue.address?.trim();
  const city = details.venue.city?.trim();

  if (venueName || address || city) {
    const location: Record<string, unknown> = {
      "@type": "Place",
    };
    if (venueName) location.name = venueName;
    if (address || city) {
      location.address = {
        "@type": "PostalAddress",
        ...(address ? { streetAddress: address } : {}),
        ...(city ? { addressLocality: city } : {}),
        addressCountry: "BR",
      };
    }
    event.location = location;
  }

  const ogAbsolute = seo.ogImage
    ? getAbsoluteUrl(seo.ogImage) ??
      (seo.ogImage.startsWith("http") ? seo.ogImage : undefined)
    : undefined;

  if (ogAbsolute) {
    event.image = [ogAbsolute];
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
    />
  );
}

function normalizeTime(time: string): string {
  const match = time.match(/(\d{1,2})\D+(\d{2})/);
  if (!match) return "00:00:00";
  return `${match[1].padStart(2, "0")}:${match[2]}:00`;
}
