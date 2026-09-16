const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/** Format a date for display, e.g. "Jun 14, 2026". */
export function formatDate(date: Date): string {
  return dateFormat.format(date);
}

/**
 * Reading time in minutes. Uses the explicit frontmatter value when
 * provided; otherwise estimates at ~200 words per minute.
 */
export function readingTime(body: string, override?: number): number {
  if (override && override > 0) return override;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Canonical URL for an article, from its collection id. */
export function postUrl(id: string): string {
  return `/writing/${id}/`;
}
