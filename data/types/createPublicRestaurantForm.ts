import { Amenity } from '../constants/amenity';

export type CreatePublicRestaurantForm = {
  name: string;
  city: string;
  street: string;
  postalCode: string;
  phone: string;
  category: string[];
  shortDescription: string;
  coverImage: string;
  logoImage: string;
  delivery: boolean;
  lat: number;
  lng: number;
  extra: Amenity[];
};
