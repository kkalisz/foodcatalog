import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { Category, MenuForm } from '@/data/types/dishMenu';
import { db } from '@/lib/firebase/client';

export const getRestaurantMenu = async (restaurantId: string): Promise<Category[]> => {
  const menuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');
  const menuSnap = await getDoc(menuRef);
  if (menuSnap.exists()) {
    return menuSnap.data().categories || [];
  }
  return [];
};

export const getMainMenuSourceId = async (restaurantId: string): Promise<string | null> => {
  const menuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');
  const menuSnap = await getDoc(menuRef);
  if (menuSnap.exists()) {
    return menuSnap.data().sourceMenuId || null;
  }
  return null;
};

export const getRestaurantMenuIds = async (
  firmId: string,
  restaurantId: string
): Promise<{ id: string; name: string }[]> => {
  const menuRef = collection(db, 'firms', firmId, 'restaurants', restaurantId, 'menu');
  const menuSnap = await getDocs(menuRef);
  return menuSnap.docs.map(docs => ({
    id: docs.id,
    name: docs.data().menuName || 'Menu (Brak nazwy)',
  }));
};

export const getRestaurantMenuById = async (
  firmId: string,
  restaurantId: string,
  menuId: string
): Promise<MenuForm | null> => {
  const menuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', menuId);
  const menuSnap = await getDoc(menuRef);
  if (menuSnap.exists()) {
    return menuSnap.data() as MenuForm;
  }
  return null;
};
