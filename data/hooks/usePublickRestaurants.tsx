import { useEffect, useState } from 'react';

import { Dish } from '../types/dishMenu';

import { FilteredRestaurant, filterRestaurant } from './filterRestaurant';

export const usePublicRestaurants = (categoryFilter: string, searchTerm: string) => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<FilteredRestaurant[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const getFiteredData = async () => {
      setLoading(true);
      const result = await filterRestaurant(categoryFilter, searchTerm);
      const dishes = result.flatMap(r => r.filteredDishes);
      setFilteredDishes(dishes);
      setRestaurants(result);
      setLoading(false);
    };
    getFiteredData();
  }, [categoryFilter, searchTerm]);

  return { loading, restaurants, filteredDishes };
};
