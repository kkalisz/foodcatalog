import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

import { Amenity } from '../constants/amenity';

export type PublicRestaurant = {
  postalCode?: string;
  street?: string;
  id: string;
  name: string;
  phone: string;
  slug: string;
  city: string;
  category: string[];
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
