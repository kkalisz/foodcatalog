'use client';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import MenuRestaurantCreateForm from '@/components/restaurant/forms/restaurant-menu-form';
import type { MenuForm as MenuFormType } from '@/data/types/dishMenu';
import { saveNewMenuToFirestore } from '@/lib/firebase/restantMenu';
import { useFirmId } from '@/lib/firebase/useFirmId';

export const CreateMenu = () => {
  const params = useParams<{ id: string }>();
  const restaurantId = params?.id;
  const { firmId } = useFirmId();
  const form = useForm<MenuFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      categories: [],
    },
  });
  const onHandleSubmit = async (data: MenuFormType) => {
    try {
      if (!firmId) {
        return;
      }
      const id = crypto.randomUUID();
      await saveNewMenuToFirestore(firmId, restaurantId, id, data);
      form.reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error saving menu:', error);
    }
  };
  return (
    <div className="mt-4 shadow-md bg-white p-10 border border-solid rounded-md text-center gap-5 flex flex-col items-center">
      <MenuRestaurantCreateForm
        form={form}
        onHandleSubmit={onHandleSubmit}
        restaurantId={restaurantId}
      />
    </div>
  );
};

export default CreateMenu;
