export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatMoney(amountMinor: number, currency: string, locale = 'en-IN'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amountMinor / 100);
}

export function clampPage(page: number, fallback = 1): number {
  if (!Number.isFinite(page) || page < 1) {
    return fallback;
  }

  return Math.floor(page);
}

export function clampPageSize(pageSize: number, fallback = 20, max = 100): number {
  if (!Number.isFinite(pageSize) || pageSize < 1) {
    return fallback;
  }

  return Math.min(Math.floor(pageSize), max);
}
