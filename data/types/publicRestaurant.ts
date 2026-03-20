import { Timestamp } from 'firebase/firestore';

import { Amenity } from '@/data/constants/amenity';

export type PublicRestaurant = {
  logoImage: string;
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
