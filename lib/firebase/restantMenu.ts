import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

import type { MenuForm } from '@/data/types/dishMenu';
import { db } from '@/lib/firebase/client';

export const saveMenuToFirestore = async (firmId: string, restaurantId: string, data: MenuForm) => {
  const ownerMenuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', 'main');

  const publicMenuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');

  const payload = {
    categories: data.categories,
    menuName: data.menuName,
    updatedAt: serverTimestamp(),
  };

  await Promise.all([setDoc(ownerMenuRef, payload), setDoc(publicMenuRef, payload)]);
};

export const setMenuAsMain = async (
  firmId: string,
  restaurantId: string,
  menuId: string
): Promise<void> => {
  const ownerMenuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', menuId);
  const menuSnap = await getDoc(ownerMenuRef);
  if (!menuSnap.exists()) {
    throw new Error('Menu not found');
  }
  const data = menuSnap.data();
  const publicMenuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');
  await setDoc(publicMenuRef, {
    categories: data.categories,
    menuName: data.menuName,
    updatedAt: serverTimestamp(),
    sourceMenuId: menuId,
  });
};

export const saveNewMenuToFirestore = async (
  firmId: string,
  restaurantId: string,
  id: string,
  data: MenuForm
) => {
  const ownerMenuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', id);

  const publicMenuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');

  const payload = {
    categories: data.categories,
    menuName: data.menuName,
    updatedAt: serverTimestamp(),
  };

  await Promise.all([setDoc(ownerMenuRef, payload), setDoc(publicMenuRef, payload)]);
};
