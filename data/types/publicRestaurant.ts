import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

export type PublicRestaurant = {
  postalCode: string | undefined;
  street: string | undefined;
  id: string;
  name: string;
  street: string;
  postalCode: string;
  phone: string;
  slug: string;
  city: string;
  category: string;
  shortDescription: string;
  coverImage?: string;
  rating?: string;
  reviewsCount?: string;
  status?: string;
  firmId?: string;
  restaurantId?: string;
  delivery: boolean;
  createdAt: Timestamp;
};
