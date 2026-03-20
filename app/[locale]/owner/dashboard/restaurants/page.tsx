'use client';
import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import { RestaurantForm } from '@/components/restaurant/restaurant-form';

const NewResteurant = () => {
  return (
    <PageSizeWrapper>
      <RestaurantForm />
    </PageSizeWrapper>
  );
};

export default NewResteurant;
