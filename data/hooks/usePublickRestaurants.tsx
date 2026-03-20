import { useEffect, useState } from 'react';

import { PublicRestaurant } from '../types/publicRestaurant';

import { filterRestaurant } from './filterRestaurant';

export const usePublicRestaurants = (categoryFilter: string, searchTerm: string) => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<PublicRestaurant[]>([]);

  useEffect(() => {
    const { fetchRestaurants } = filterRestaurant(categoryFilter, searchTerm);
    const getFiteredData = async () => {
      setLoading(true);
      const result = await fetchRestaurants();
      setRestaurants(result);
      setLoading(false);
    };
    getFiteredData();
  }, [categoryFilter, searchTerm]);

  return { loading, restaurants };
};
