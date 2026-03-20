import { doc, getDoc } from 'firebase/firestore';

import { db } from './client';

export const getDish = async (restaurantId: string) => {
  const dishRef = doc(db, 'public_restaurant', restaurantId, 'menu', 'main', 'categories');
  const dishSnap = await getDoc(dishRef);
  if (dishSnap.exists()) {
    return dishSnap.data().categories.dishes || [];
  }
  return [];
};
