import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';

import { CreatePublicRestaurantForm } from '@/data/types/createPublicRestaurantForm';
import { db } from '@/lib/firebase/client';
import { generateSlug } from '@/lib/utils/slug';

export const updatePublicRestaurant = async (
  restaurantId: string,
  data: CreatePublicRestaurantForm
) => {
  const ref = doc(db, 'public_restaurants', restaurantId);

  const updatePayload = {
    name: data.name ?? '',
    city: data.city ?? '',
    street: data.street ?? '',
    postalCode: data.postalCode ?? '',
    phone: data.phone ?? '',
    category: data.category ?? [],
    shortDescription: data.shortDescription ?? '',
    coverImage: data.coverImage ?? '',
    logoImage: data.logoImage ?? '',
    delivery: data.delivery ?? false,
    lat: data.lat ?? 0,
    lng: data.lng ?? 0,

    slug: generateSlug(data.name),
    updatedAt: serverTimestamp(),
  };

  // eslint-disable-next-line no-console
  console.log('🔥 [DEBUG] Sending this exact payload to updateDoc:', updatePayload);
  await updateDoc(ref, updatePayload);
};
