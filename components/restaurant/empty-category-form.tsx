'use client';

import { Box, Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { MoveDownIcon, MoveUpIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { UseFormReturn, useWatch } from 'react-hook-form';

import ErrorLabel from '@/components/ui/form/label/ErrorLabel';
import { useMenuForm } from '@/data/hooks/useMenuForm';
import { Category, MenuForm } from '@/data/types/dishMenu';

import { S3ImageUpload } from '../shared/s3-image-upload';

import DushLenghtInfo from './dish-length-info';

type DishFormRowProps = {
  form: UseFormReturn<MenuForm>;
  categoryIndex: number;
  dishIndex: number;
  dishId: string;
  restaurantId: string;
  removeDish: (index: number) => void;
  register: UseFormReturn<MenuForm>['register'];
  errors: UseFormReturn<MenuForm>['formState']['errors'];
};

function DishFormRow({
  form,
  categoryIndex,
  dishIndex,
  dishId,
  restaurantId,
  removeDish,
  register,
  errors,
}: DishFormRowProps) {
  const t = useTranslations();
  const imageUrl = useWatch({
    control: form.control,
    name: `categories.${categoryIndex}.dishes.${dishIndex}.imageUrl`,
  });

  return (
    <Box key={dishId} className="rounded-md px-5 py-5 bg-white">
      <Flex align="center" gap="4">
        <Box className="flex-1">
          <TextField.Root
            placeholder={t('category_form.dish_name_placeholder')}
            {...register(`categories.${categoryIndex}.dishes.${dishIndex}.name`, {
              required: true,
              minLength: {
                value: 3,
                message: t('category_form.dish_name_min_length'),
              },
            })}
          />
          <ErrorLabel
            error={errors.categories?.[categoryIndex]?.dishes?.[dishIndex]?.name?.message}
            id="minLength"
          />
        </Box>
        <Box className="w-[140px]">
          <TextField.Root
            placeholder={t('category_form.price_placeholder')}
            {...register(`categories.${categoryIndex}.dishes.${dishIndex}.price`, {
              required: true,
              min: {
                value: 1,
                message: t('category_form.price_min'),
              },
            })}
          />
          <ErrorLabel
            error={errors.categories?.[categoryIndex]?.dishes?.[dishIndex]?.price?.message}
            id="min"
          />
        </Box>
        <Box>{t('restaurant_components.currency_pln')}</Box>
        <Button
          type="button"
          color="red"
          variant="ghost"
          size="2"
          onClick={() => removeDish(dishIndex)}
        >
          <TrashIcon />
        </Button>
      </Flex>
      <Box className="mt-4">
        <TextArea
          placeholder={t('category_form.description_placeholder')}
          {...register(`categories.${categoryIndex}.dishes.${dishIndex}.description`, {
            required: true,
            minLength: {
              value: 10,
              message: t('category_form.description_min_length'),
            },
          })}
        />
        <ErrorLabel
          error={errors.categories?.[categoryIndex]?.dishes?.[dishIndex]?.description?.message}
          id="minLength"
        />
      </Box>
      <Box className="mt-4">
        <S3ImageUpload
          dishImagesOnly={true}
          restaurantId={restaurantId}
          selectedImageUrl={imageUrl}
          onUploadComplete={url =>
            form.setValue(`categories.${categoryIndex}.dishes.${dishIndex}.imageUrl`, url)
          }
        />
      </Box>
    </Box>
  );
}

type CategoryFormProps = {
  form: UseFormReturn<MenuForm>;
  index: number;
  category: Category;
  restaurantId: string;
  onRemoveCategory: () => void;
  onHandleMoveCategory: (categoryIndex: number, direction: 'up' | 'down') => void;
};

const EmptyCategoryForm = ({
  form,
  index,
  category,
  restaurantId,
  onRemoveCategory,
  onHandleMoveCategory,
}: CategoryFormProps) => {
  const t = useTranslations();
  const { register, errors, dishes, onAddNewDish, removeDish } = useMenuForm({
    form,
    index,
    category,
    onRemoveCategory,
  });

  return (
    <div className="pt-2">
      <Flex key={category.id} direction="column" gap="4" className="p-2 mt-4 border rounded-md ">
        <Flex className="flex items-center gap-2" height="100px">
          <Button onClick={() => onHandleMoveCategory(index, 'up')} size="2">
            <MoveUpIcon />
          </Button>
          <Button onClick={() => onHandleMoveCategory(index, 'down')} color="orange">
            <MoveDownIcon />
          </Button>
          <Box width="80vw">
            <TextField.Root
              key={category.id}
              {...register(`categories.${index}.name`)}
              size="3"
              placeholder={t('category_form.category_name_placeholder')}
              variant="soft"
              className="shadow-[var(--shadow-3)]"
              color="gray"
            />
          </Box>
          <DushLenghtInfo>{dishes.length}</DushLenghtInfo>
          <Box className="flex">
            <Button
              type="button"
              color="gray"
              variant="ghost"
              size="2"
              radius="medium"
              onClick={onRemoveCategory}
            >
              <TrashIcon />
            </Button>
          </Box>
        </Flex>

        <Flex direction="column" gap="2">
          {dishes.map((dish, indexDish) => (
            <DishFormRow
              key={dish.id}
              form={form}
              categoryIndex={index}
              dishIndex={indexDish}
              dishId={dish.id}
              restaurantId={restaurantId}
              removeDish={removeDish}
              register={register}
              errors={errors}
            />
          ))}
        </Flex>
      </Flex>
      <div className="flex justify-center  m-0 border p-10 border-solid rounded-md">
        <Button
          onClick={onAddNewDish}
          type="button"
          color="gray"
          variant="ghost"
          size="3"
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
          {t('category_form.add_first_dish')}
        </Button>
      </div>
    </div>
  );
};

export default EmptyCategoryForm;
