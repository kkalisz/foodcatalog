import { useEffect, useState } from 'react';

import { FilteredRestaurant, filterRestaurant } from './filterRestaurant';

export const usePublicRestaurants = (categoryFilter: string, searchTerm: string) => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<FilteredRestaurant[]>([]);

  useEffect(() => {
    const getFiteredData = async () => {
      setLoading(true);
      const result = await filterRestaurant(categoryFilter, searchTerm);
      setRestaurants(result);
      setLoading(false);
    };
    getFiteredData();
  }, [categoryFilter, searchTerm]);

  return { loading, restaurants };
};
