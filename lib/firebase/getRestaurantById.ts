import { doc, getDoc } from 'firebase/firestore';

import { PublicRestaurant } from '@/data/types/publicRestaurant';
import { db } from '@/lib/firebase/client';

export const getRestaurantById = async (restaurantId: string): Promise<PublicRestaurant | null> => {
  const ref = doc(db, 'public_restaurants', restaurantId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return null;
  }

  return {
    id: snap.id,
    ...(snap.data() as Omit<PublicRestaurant, 'id'>),
  };
};
