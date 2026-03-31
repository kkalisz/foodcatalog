'use client';
import { useEffect } from 'react';

import { RestaurantsCounter } from '@/lib/firebase/restaurantsCounter';

export function ViewTracker({ id }: { id: string }) {
  useEffect(() => {
    const hasViewed = sessionStorage.getItem(`viewed_${id}`);
    if (!hasViewed) {
      RestaurantsCounter(id);
      sessionStorage.setItem(`viewed_${id}`, 'true');
    }
  }, [id]);

  return null;
}
