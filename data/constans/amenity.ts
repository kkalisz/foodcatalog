export const RESTAURANT_AMENITIES = [
  'parking',
  'disabled_access',
  'pet_friendly',
  'air_conditioning',
  'outdoor_seating',
  'wifi',
  'kids_area',
  'vegan_options',
  'delivery',
  'card_payments',
] as const;

export type Amenity = (typeof RESTAURANT_AMENITIES)[number];
