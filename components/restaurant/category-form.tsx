'use client';

import { Box, Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { ImageIcon, MoveUpIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';

import ErrorLabel from '@/components/ui/form/label/ErrorLabel';
import { useMenuForm } from '@/data/hooks/useMenuForm';
import { Category, MenuForm } from '@/data/types/dishMenu';

import DushLenghtInfo from './dish-length-info';

type CategoryFormProps = {
  form: UseFormReturn<MenuForm>;
  index: number;
  category: Category;
  onRemoveCategory: () => void;
};

const CategoryForm = ({ form, index, category, onRemoveCategory }: CategoryFormProps) => {
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
          <Button type="button" variant="ghost" size="2" radius="medium" color="gray">
            <MoveUpIcon />
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

        <Flex direction="column" gap="6">
          {dishes.map((dish, indexDish) => (
            <Box key={dish.id} className=" pl-10 pr-10 pb-5 bg-white">
              <Flex align="center" gap="4">
                <Box className="flex-1">
                  <TextField.Root
                    placeholder={t('category_form.dish_name_placeholder')}
                    {...register(`categories.${index}.dishes.${indexDish}.name`, {
                      required: true,
                      minLength: {
                        value: 3,
                        message: t('category_form.dish_name_min_length'),
                      },
                    })}
                  />
                  <ErrorLabel
                    error={errors.categories?.[index]?.dishes?.[indexDish]?.name?.message}
                    id="minLength"
                  />
                </Box>
                <Box className="w-[140px]">
                  <TextField.Root
                    placeholder={t('category_form.price_placeholder')}
                    {...register(`categories.${index}.dishes.${indexDish}.price`, {
                      required: true,
                      min: {
                        value: 1,
                        message: t('category_form.price_min'),
                      },
                    })}
                  />
                  <ErrorLabel
                    error={errors.categories?.[index]?.dishes?.[indexDish]?.price?.message}
                    id="min"
                  />
                </Box>

                <Box>zł</Box>

                <Button
                  type="button"
                  color="red"
                  variant="ghost"
                  size="2"
                  onClick={() => removeDish(indexDish)}
                >
                  <TrashIcon />
                </Button>
              </Flex>
              <Box className="mt-4">
                <TextArea
                  placeholder={t('category_form.description_placeholder')}
                  {...register(`categories.${index}.dishes.${indexDish}.description`, {
                    required: true,
                    minLength: {
                      value: 10,
                      message: t('category_form.description_min_length'),
                    },
                  })}
                />
                <ErrorLabel
                  error={errors.categories?.[index]?.dishes?.[indexDish]?.description?.message}
                  id="minLength"
                />
              </Box>
              <Box className="mt-4">
                <TextField.Root
                  placeholder="https://example.com/image.jpg"
                  {...register(`categories.${index}.dishes.${indexDish}.imageUrl`)}
                >
                  <TextField.Slot>
                    <ImageIcon />
                  </TextField.Slot>
                </TextField.Root>
              </Box>
            </Box>
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

export default CategoryForm;
