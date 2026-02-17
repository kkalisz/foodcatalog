'use client';

import { useParams } from 'next/navigation';

import MenuForm from '@/components/MenuForm/MenuForm';

const Menu = () => {
  const params = useParams<{ id: string }>();
  const restaurantId = params?.id;
  return <MenuForm restaurantId={restaurantId} />;
};

export default Menu;
