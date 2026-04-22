'use client';

import { useContext } from 'react';

import { useParams } from 'next/navigation';

import MenuRestaurantCreateForm from '@/components/restaurant/menu-create-form';
import { UserContext } from '@/providers/UserContext';

export default function SingleMenuPage() {
  const context = useContext(UserContext);
  const firm = context?.firm;
  const firmId = context?.firmId;

  const params = useParams();
  const menuId = params.menuId as string;
  const restaurantId = params.id as string;

  return (
    <div>
      <MenuRestaurantCreateForm restaurantId={restaurantId} menuId={menuId} />
    </div>
  );
}
