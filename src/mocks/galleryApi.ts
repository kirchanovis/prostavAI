import { galleriesMockData } from './galleries';

export type GalleryDetail = (typeof galleriesMockData)[number];
export type GalleryResponse = { items: GalleryDetail[] };

const galleryApi = {
  getGalleryById(id: number, cb: (value: GalleryResponse) => void) {
    setTimeout(() => cb({ items: galleriesMockData.filter((g) => g.id === id) }), 100);
  },
};

export default galleryApi;
