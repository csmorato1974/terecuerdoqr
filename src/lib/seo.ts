/**
 * Centralized site URL for SEO tags (canonical + og:url).
 *
 * When the final custom domain is chosen, change SITE_URL in this one
 * place and every route's canonical/og:url updates automatically.
 */
export const SITE_URL = "https://memori-qr.lovable.app";

/** Build an absolute URL for a given route path (e.g. "/contacto"). */
export function canonicalUrl(path: string = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
