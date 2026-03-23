import { doc, increment, updateDoc } from 'firebase/firestore';

import { db } from './client';

export const RestaurantsCounter = async (restaurantId: string) => {
  if (!restaurantId) {
    return;
  }
  const ref = doc(db, 'public_restaurants', restaurantId);
  try {
    await updateDoc(ref, {
      views: increment(1),
    });
  } catch (error) {
    console.log(error);
  }
};
export default RestaurantsCounter;
