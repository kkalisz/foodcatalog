import { doc, getDoc } from 'firebase/firestore';

import { Category } from '@/data/types/dishMenu';
import { db } from '@/lib/firebase/client';

export const getRestaurantMenu = async (restaurantId: string): Promise<Category[]> => {
  const menuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');
  const menuSnap = await getDoc(menuRef);
  if (menuSnap.exists()) {
    return menuSnap.data().categories || [];
  }
  return [];
};
