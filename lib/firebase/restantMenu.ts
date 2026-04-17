import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

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

export const saveNewMenuToFirestore = async (
  firmId: string,
  restaurantId: string,
  id: string,
  data: MenuForm
) => {
  const ownerMenuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', id);

  const publicMenuRef = doc(db, 'public_restaurants', restaurantId, 'menu', id);

  const payload = {
    categories: data.categories,
    menuName: data.menuName,
    updatedAt: serverTimestamp(),
  };

  await Promise.all([setDoc(ownerMenuRef, payload), setDoc(publicMenuRef, payload)]);
};
