import { newsMockData } from './news';

export type NewsItem = (typeof newsMockData)[number];
export type NewsResponse = { items: NewsItem[] };

const newsApi = {
  getNews(cb: (value: NewsResponse) => void) {
    setTimeout(() => cb({ items: [...newsMockData] }), 100);
  },
};

export default newsApi;
