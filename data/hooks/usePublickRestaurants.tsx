import { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useTranslations } from 'next-intl';

import { db } from '@/lib/firebase/client';

import { PublicRestaurant } from '../types/publicRestaurant';

export const usePublickRestaurants = (filter: string) => {
  const [loading, setLoading] = useState(false);
  const [resteurants, setResteurants] = useState<PublicRestaurant[]>([]);
  const t = useTranslations();

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const baseRef = collection(db, 'public_restaurants');
      const q = query(baseRef, where('status', '==', 'active'));

      if (filter) {
        const filteredQuery = query(q, where('category', 'array-contains', filter));
        const snapshot = await getDocs(filteredQuery);

        if (!snapshot.empty) {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<PublicRestaurant, 'id'>),
          }));
          setResteurants(data);
          return;
        }
        setResteurants([]);
        return;
      }
      const allSnapshot = await getDocs(q);
      const allData = allSnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<PublicRestaurant, 'id'>),
      }));
      setResteurants(allData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return { loading, restaurants: resteurants, t };
};
