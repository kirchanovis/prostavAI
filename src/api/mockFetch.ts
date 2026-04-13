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

  // Add endpoints here
  if (path === '/api/news') {
    const data = {
      items: [
        {
          id: 'welcome',
          title: 'Добро пожаловать на новостной портал Ставрополя',
          excerpt: 'Здесь будут публиковаться городские новости, анонсы и важные объявления.',
          publishedAt: new Date().toISOString(),
        },
      ],
    };

    return {
      ok: true,
      status: 200,
      json: async () => data as unknown as T,
    };
  }

  return {
    ok: false,
    status: 404,
    json: async () => ({ message: 'Not found', path } as unknown as T),
  };
}
