import { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useTranslations } from 'next-intl';

import { db } from '@/lib/firebase/client';

import { PublicRestaurant } from '../types/publicRestaurant';

export const usePublickRestaurants = (filter: string) => {
  const [loading, setLoading] = useState(false);
  const [resteurants, setResteurants] = useState<PublicRestaurant[]>([]);

  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRestaurants = async () => {
    const queryConstraints = [where('status', '==', 'active')];
    if (filter) {
      queryConstraints.push(where('category', 'array-contains', filter));
    }

    try {
      const q = query(collection(db, 'public_restaurants'), ...queryConstraints);

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<PublicRestaurant, 'id'>),
      }));

      setResteurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return { loading, restaurants: resteurants, searchQuery, setSearchQuery, t };
};
