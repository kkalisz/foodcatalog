'use client';
import { RestaurantForm } from '@/components/restaurant/restaurant-form';
import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';

export const NewResteurant = () => {
  return (
    <PageSizeWrapper>
      <RestaurantForm />
    </PageSizeWrapper>
  );
};

export default NewResteurant;
