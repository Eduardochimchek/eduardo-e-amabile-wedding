/**
 * In-memory rate limiter for serverless.
 *
 * LIMITATION (documented, not false security):
 * On Vercel, each warm instance has its own memory. This slows casual abuse
 * but does not guarantee a global limit across all edge/serverless instances.
 * For stronger protection, add a free external layer later (e.g. Upstash).
 */

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;

export function checkRateLimit(key: string): {
  allowed: boolean;
  retryAfterSec: number;
} {
  const now = Date.now();
  const current = store.get(key);

  if (!current || now >= current.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  store.set(key, current);
  return { allowed: true, retryAfterSec: 0 };
}

/** Best-effort client key from request headers (no PII persistence). */
export function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
