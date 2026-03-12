import { Amenity } from '../constans/amenity';

export type CreatePublicRestaurantForm = {
  name: string;
  city: string;
  street: string;
  postalCode: string;
  phone: string;
  category: string[];
  shortDescription: string;
  coverImage?: string;
  delivery: boolean;
  lat: number;
  lng: number;
  extra: Amenity[];
};
