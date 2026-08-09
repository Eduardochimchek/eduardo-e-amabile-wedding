/**
 * Public site URL helpers.
 * Prefer NEXT_PUBLIC_SITE_URL in Vercel; never invent a production domain.
 */
export function getSiteUrl(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return undefined;
}

export function getAbsoluteUrl(path = "/"): string | undefined {
  const base = getSiteUrl();
  if (!base) return undefined;
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
