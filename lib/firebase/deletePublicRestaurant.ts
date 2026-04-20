import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/lib/firebase/client';

export const deletePublicRestaurant = async (restaurantId: string) => {
  const ref = doc(db, 'public_restaurants', restaurantId);
  await deleteDoc(ref);
};

export const deleteRestaurantMenu = async (
  firmId: string,
  restaurantId: string,
  menuId: string
) => {
  const ref = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', menuId);
  await deleteDoc(ref);
};
