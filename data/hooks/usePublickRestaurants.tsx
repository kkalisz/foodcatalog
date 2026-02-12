import { useEffect, useState } from 'react';
import { PublicRestaurant } from '../types/publicRestaurant';
import { useTranslation } from 'react-i18next';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/client';

export const usePublickRestaurants = () => {
  const [loading, setLoading] = useState(false);
  const [resteurants, setResteurants] = useState<PublicRestaurant[]>([]);

  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRestaurants = async () => {
    try {
      const q = query(collection(db, 'public_restaurants'), where('status', '==', 'active'));

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<PublicRestaurant, 'id'>),
      }));

      setResteurants(data as unknown as PublicRestaurant[]);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
    setLoading(true);
  }, []);
  return { loading, resteurants, searchQuery, setSearchQuery, t };
};
