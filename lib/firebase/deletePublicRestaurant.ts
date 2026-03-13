import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/lib/firebase/client';

export const deletePublicRestaurant = async (restaurantId: string) => {
  const ref = doc(db, 'public_restaurants', restaurantId);
  await deleteDoc(ref);
};
