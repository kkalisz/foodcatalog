import { Timestamp } from 'firebase/firestore';

export type ImageBucket = 'logo' | 'dish' | 'background' | 'gallery';

export type Image = {
  url: string;
  s3key: string;
  restaurantId: string;
  uploadedAt: Timestamp;
  order: number;
};
