import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { Category, Dish, MenuForm } from '../types/dishMenu';

type FormCategoryProps = {
  form: UseFormReturn<MenuForm, any, MenuForm>;
  index: number;
  category: Category;
  onRemoveCategory: () => void;
  isSaved?: (value: boolean) => void;
};
export const useMenuForm = ({ form, index }: FormCategoryProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = form;
  const {
    append,
    remove: removeDish,
    fields: dishes,
  } = useFieldArray({
    name: `categories.${index}.dishes`,
    control,
  });
  const onAddNewDish = () => {
    append({
      id: crypto.randomUUID(),
      name: '',
      price: null,
      description: '',
    });
  };

  return {
    control,
    register,
    errors,
    dishes,
    onAddNewDish,
    removeDish,
  };
};
