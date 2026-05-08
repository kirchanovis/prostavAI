import { reportsMockData } from './reports';

export type ReportDetail = (typeof reportsMockData)[number];
export type ReportResponse = { items: ReportDetail[] };

const reportApi = {
  getReportById(id: number, cb: (value: ReportResponse) => void) {
    setTimeout(() => cb({ items: reportsMockData.filter((r) => r.id === id) }), 100);
  },
};

export default reportApi;
