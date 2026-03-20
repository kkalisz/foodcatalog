import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/lib/firebase/client';

//import { Dish } from '../types/dishMenu';
import { PublicRestaurant } from '../types/publicRestaurant';

export interface FilteredRestaurant {
  restaurant: PublicRestaurant;
  //filteredDishes: Dish[];
}

export const filterRestaurant = (
  categoryFilter: string,
  searchTerm: string
): Promise<FilteredRestaurant[]> => {
  const fetchRestaurants = async (): Promise<FilteredRestaurant[]> => {
    try {
      const restaurantsRef = collection(db, 'public_restaurants');
      let q = query(restaurantsRef, where('status', '==', 'active'));
      if (categoryFilter) {
        q = query(q, where('category', 'array-contains', categoryFilter));
      }

      const snapshot = await getDocs(q);
      const allActiveRestaurants = snapshot.docs.map(docs => ({
        id: docs.id,
        ...(docs.data() as Omit<PublicRestaurant, 'id'>),
      }));

      if (!searchTerm) {
        //return allActiveRestaurants;
        return allActiveRestaurants.map(restaurant => ({
          restaurant,
        }));
      }

      const searchLower = searchTerm.toLowerCase();
      const matchedByRestaurant = allActiveRestaurants.filter(restaurant => {
        const nameMatch = restaurant.name?.toLowerCase().includes(searchLower);
        const categoryMatch = restaurant.category?.some(c => c.toLowerCase().includes(searchLower));
        return nameMatch || categoryMatch;
      });

      if (matchedByRestaurant.length > 0) {
        return matchedByRestaurant.map(restaurant => ({
          restaurant,
        }));
      }

      const filteredByDish: (FilteredRestaurant | null)[] = await Promise.all(
        allActiveRestaurants.map(async restaurant => {
          const menuRef = doc(db, 'public_restaurants', restaurant.id, 'menu', 'main');
          const menuSnap = await getDoc(menuRef);

          if (menuSnap.exists()) {
            const menuData = menuSnap.data();
            const hasDish = menuData.categories?.some((cat: any) =>
              cat.dishes?.some((dish: any) => dish.name.toLowerCase().includes(searchLower))
            );
            return hasDish ? { restaurant: restaurant } : null;
          }
          return null;
        })
      );

      return filteredByDish.filter(
        (r): r is FilteredRestaurant => r !== null
      ) as FilteredRestaurant[];
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return [];
    }
  };
  return fetchRestaurants();
};
