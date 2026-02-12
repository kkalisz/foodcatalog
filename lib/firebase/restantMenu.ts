import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

import type { MenuForm } from '@/data/types/dishMenu';
import { db } from '@/lib/firebase/client';

export const saveMenuToFirestore = async (firmId: string, restaurantId: string, data: MenuForm) => {
  const ownerMenuRef = doc(db, 'firms', firmId, 'restaurants', restaurantId, 'menu', 'main');

  const publicMenuRef = doc(db, 'public_restaurants', restaurantId, 'menu', 'main');

  const payload = {
    categories: data.categories,
    updatedAt: serverTimestamp(),
  };

  await Promise.all([setDoc(ownerMenuRef, payload), setDoc(publicMenuRef, payload)]);
};
