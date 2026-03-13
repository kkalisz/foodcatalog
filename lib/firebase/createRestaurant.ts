import { doc, serverTimestamp, writeBatch } from 'firebase/firestore';

import { CreatePublicRestaurantForm } from '@/data/types/createPublicRestaurantForm';
import { db } from '@/lib/firebase/client';
import { generateSlug } from '@/lib/utils/slug';

export const createRestaurant = async (data: CreatePublicRestaurantForm, firmId: string) => {
  const restaurantId = crypto.randomUUID();
  const batch = writeBatch(db);

  const publicRef = doc(db, 'public_restaurants', restaurantId);
  batch.set(publicRef, {
    ...data,
    firmId,
    status: 'active',
    rating: 0,
    reviewsCount: 0,
    slug: generateSlug(data.name),
    createdAt: serverTimestamp(),
  });
  const firmRestaurantRef = doc(db, 'firms', firmId, 'restaurants', restaurantId);
  batch.set(firmRestaurantRef, {
    name: data.name,
    status: 'active',
    slug: generateSlug(data.name),
    createdAt: serverTimestamp(),
  });
  const roleRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'roles', firmId);

  batch.set(roleRef, {
    role: 'restaurant_admin',
    createdAt: serverTimestamp(),
  });
  await batch.commit();
  return restaurantId;
};
