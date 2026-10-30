import { API_PREFIX } from '@detach/shared';

const fallbackApiUrl = `http://localhost:4000${API_PREFIX}`;

export function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? fallbackApiUrl;
}

export function getAppName(): string {
  return process.env.NEXT_PUBLIC_APP_NAME ?? 'DETACH Admin';
}
