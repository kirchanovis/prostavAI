import { newsMockData } from '../mocks/news';
import { photosData } from '../mocks/photos';
import { reportData } from '../mocks/report';

export type MockResponse<T> = {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
};

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * Very small fetch-like helper for local mock endpoints.
 * Later you can replace it with real fetch() calls.
 */
export async function mockFetch<T>(path: string, opts?: { delayMs?: number }): Promise<MockResponse<T>> {
  const delayMs = opts?.delayMs ?? 250;
  await delay(delayMs);

  if (path === '/api/news') {
    return {
      ok: true,
      status: 200,
      json: async () => ({ items: newsMockData } as unknown as T),
    };
  }

  if (path === '/api/photos') {
    return {
      ok: true,
      status: 200,
      json: async () => ({ items: photosData } as unknown as T),
    };
  }

  if (path === '/api/report') {
    return {
      ok: true,
      status: 200,
      json: async () => ({ items: reportData } as unknown as T),
    };
  }

  return {
    ok: false,
    status: 404,
    json: async () => ({ message: 'Not found', path } as unknown as T),
  };
}
