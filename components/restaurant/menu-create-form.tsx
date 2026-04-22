'use client';

import { useEffect, useState } from 'react';

import { Button, Flex, Heading, TextField } from '@radix-ui/themes';
import { MessageSquareWarningIcon, PlusIcon, SaveIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import type { Category, MenuForm as MenuFormType } from '@/data/types/dishMenu';
import { getRestaurantMenuById } from '@/lib/firebase/getRestaurantMenu';
import { saveNewMenuToFirestore } from '@/lib/firebase/restantMenu';
import { useFirmId } from '@/lib/firebase/useFirmId';

import EmptyCategoryForm from './empty-category-form';
import { EmptyMenu } from './empty-menu';

// const MenuCreateForm = ({ restaurantId }: { form: UseFormReturn<MenuFormType>, onHandleSubmit: string }) => {

const MenuRestaurantCreateForm = ({
  restaurantId,
  menuId,
}: {
  restaurantId: string;
  menuId?: string;
}) => {
  const t = useTranslations();
  const { firmId } = useFirmId();
  const form = useForm<MenuFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      menuName: '',
      categories: [],
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      if (firmId && restaurantId && menuId) {
        setIsLoading(true);
        const data = await getRestaurantMenuById(firmId, restaurantId, menuId);
        if (data) {
          form.reset({
            menuName: data.menuName || '',
            categories: data.categories || [],
          });
        }
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, [firmId, restaurantId, menuId, form]);

  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = form;
  const { fields, append, remove, move } = useFieldArray({
    name: 'categories',
    control,
  });
  const onAddNewCategory = () => {
    const category: Category = {
      id: crypto.randomUUID(),
      name: '',
      dishes: [],
    };
    append(category);
  };

  const onHandleMoveCategory = (categoryIndex: number, direction: 'up' | 'down') => {
    if (direction === 'up' && categoryIndex > 0) {
      move(categoryIndex, categoryIndex - 1);
    } else if (direction === 'down' && categoryIndex < fields.length - 1) {
      move(categoryIndex, categoryIndex + 1);
    }
  };

  const onHandleSubmit = async (data: MenuFormType) => {
    try {
      if (!firmId) {
        return;
      }
      const targetMenuId = menuId || crypto.randomUUID();
      await saveNewMenuToFirestore(firmId, restaurantId, targetMenuId, data);
      reset(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error saving menu:', error);
    }
  };

  const categoriesWatch = useWatch({
    control,
    name: 'categories',
  });

  const dishesCount = categoriesWatch.reduce((acc, category) => acc + category.dishes.length, 0);

  return (
    <PageSizeWrapper>
      <Flex direction="column" gap="1">
        <Flex direction="column" gap="2">
          <Heading>{t('menu_form.title')}</Heading>
          <p>{`${fields.length} ${fields.length === 1 ? t('menu_form.category') : t('menu_form.category_plural')}, ${dishesCount} ${dishesCount === 1 ? t('menu_form.dish') : t('menu_form.dish_plural')}`}</p>
        </Flex>
        <div className="flex p-2 items-center justify-between">
          <Flex direction="column" gap="2">
            <Flex direction="row" gap="2" align="center">
              <Heading>Nazwa menu:</Heading>
              <TextField.Root {...form.register('menuName')} size="3" placeholder="Nazwa menu" />
            </Flex>
            {isDirty ? (
              <div className="flex gap-2 text-amber-700 pt-3">
                <MessageSquareWarningIcon /> {t('menu_form.unsaved_changes')}
              </div>
            ) : null}
          </Flex>
          <Button
            color="brown"
            type="submit"
            size="3"
            onClick={handleSubmit(onHandleSubmit)}
            disabled={isLoading}
          >
            <SaveIcon /> {t('menu_form.save_menu')}
          </Button>
        </div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div>
            {fields.length === 0 ? (
              <EmptyMenu addNewCategory={onAddNewCategory} />
            ) : (
              fields.map((category, indexCategory) => (
                <EmptyCategoryForm
                  key={category.id}
                  form={form}
                  index={indexCategory}
                  category={category as Category}
                  onRemoveCategory={() => remove(indexCategory)}
                  onHandleMoveCategory={onHandleMoveCategory}
                />
              ))
            )}
          </div>
          {fields.length > 0 ? (
            <div className="flex justify-center mt-5 border p-10 border-solid rounded-md">
              <Button
                type="button"
                color="gray"
                variant="ghost"
                size="3"
                onClick={onAddNewCategory}
                className="
                                -full
                                py-6
                                bg-transparent
                                hover:bg-transparent
                                focus:bg-transparent
                                active:bg-transparent
                                focus:outline-none
                                focus:ring-0
                                shadow-none
                                "
              >
                <PlusIcon />
                {t('menu_form.add_category')}
              </Button>
            </div>
          ) : null}
        </form>
      </Flex>
    </PageSizeWrapper>
  );
};

export default MenuRestaurantCreateForm;
