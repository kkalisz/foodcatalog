'use client';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Dish } from '@/data/types/dishMenu';

type MenuDishFormProps = {
  onAddDish: (dish: Dish) => void;
};
type DishFormData = {
  name: string;
  price: number;
  description?: string;
  ingriediens?: string;
};
const DishForm = ({ onAddDish }: MenuDishFormProps) => {
  const { register, handleSubmit, reset } = useForm<DishFormData>();
  const t = useTranslations('restaurant_components');

  const onSubmit = (data: DishFormData) => {
    const newDish: Dish = {
      id: Date.now().toString(),
      ...data,
    };
    onAddDish(newDish);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <input
          {...register('name')}
          placeholder={t('dish_name')}
          className="w-full p-2 border rounded"
          required
        />
        <input
          {...register('price', { valueAsNumber: true })}
          type="number"
          placeholder={t('price')}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          {...register('description')}
          placeholder={t('description')}
          className="w-full h-50 p-2 border rounded"
        />
        <input
          {...register('ingriediens')}
          placeholder={t('ingredients_placeholder')}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="p-2 border rounded bg-green-600 text-white">
          {t('add_dish')}
        </button>
      </div>
    </form>
  );
};

export default DishForm;
