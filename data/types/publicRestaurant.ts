import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

import { Amenity } from '../constans/amenity';

export type PublicRestaurant = {
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
  lat?: number;
  lng?: number;
  extra?: Amenity[];
};
