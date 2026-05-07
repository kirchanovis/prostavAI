import { newsMockData } from './news';
import { newsDetailsMockData } from './newsDetails';

export type NewsItem = (typeof newsMockData)[number];
export type NewsResponse = { items: NewsItem[] };

export type NewsDetailItem = (typeof newsDetailsMockData)[number];
export type NewsDetailResponse = { items: NewsDetailItem[] };

const newsApi = {
  getNews(cb: (value: NewsResponse) => void) {
    setTimeout(() => cb({ items: [...newsMockData] }), 100);
  },

  getNewsDetailById(id: number, cb: (value: NewsDetailResponse) => void) {
    setTimeout(() => cb({ items: newsDetailsMockData.filter((n) => n.id === id) }), 100);
  },
};

export default newsApi;
