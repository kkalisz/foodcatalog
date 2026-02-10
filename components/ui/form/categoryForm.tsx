'use client'

import { Category, Dish, MenuForm } from '@/data/types/dishMenu'
import { Box, Button, Flex, TextArea, TextField } from '@radix-ui/themes'
import { useFieldArray, UseFormReturn } from 'react-hook-form'

import { MoveUpIcon, PlusIcon, TrashIcon } from 'lucide-react'
import DushLenghtInfo from './menuEditor/DishLenghtInfo'
import { useMenuForm } from '@/data/hooks/useMenuForm'
import ErrorLabel from './label/ErrorLabel'

type CategoryFormProps = {
  form: UseFormReturn<MenuForm>
  index: number
  category: Category
  onRemoveCategory: () => void
}

const CategoryForm = ({
  form,
  index,
  category,
  onRemoveCategory,
}: CategoryFormProps) => {
  const { register, errors, dishes, onAddNewDish, removeDish } = useMenuForm({
    form,
    index,
    category,
    onRemoveCategory,
  })

  return (
    <div className="border rounded-md pt-2">
      <Flex
        key={category.id}
        direction="column"
        gap="4"
        className="p-2 mt-4 border rounded-md "
      >
        <Flex className="flex items-center gap-2" height="100px">
          <Button
            type="button"
            variant="ghost"
            size="2"
            radius="medium"
            color="gray"
          >
            <MoveUpIcon />
          </Button>
          <Box width="80vw">
            <TextField.Root
              key={category.id}
              {...register(`categories.${index}.name`)}
              size="3"
              placeholder="Nazwa kategori..."
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
                    placeholder="Wpisz nazwę dania..."
                    {...register(
                      `categories.${index}.dishes.${indexDish}.name`,
                      {
                        required: true,
                        minLength: {
                          value: 3,
                          message: 'Nazwa dania musi mieć minimum 3 litery',
                        },
                      }
                    )}
                  />
                  <ErrorLabel
                    error={
                      errors.categories?.[index]?.dishes?.[indexDish]?.name
                        ?.message
                    }
                    id="minLength"
                  />
                </Box>
                <Box className="w-[140px]">
                  <TextField.Root
                    placeholder="Cena"
                    {...register(
                      `categories.${index}.dishes.${indexDish}.price`,
                      {
                        required: true,
                        min: {
                          value: 1,
                          message: 'Cena musi być większa od 0',
                        },
                      }
                    )}
                  />
                  <ErrorLabel
                    error={
                      errors.categories?.[index]?.dishes?.[indexDish]?.price
                        ?.message
                    }
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
                  placeholder="Krótko opisz potrawę..."
                  {...register(
                    `categories.${index}.dishes.${indexDish}.description`,
                    {
                      required: true,
                      minLength: {
                        value: 10,
                        message: 'Minimum 10 znaków',
                      },
                    }
                  )}
                />
                <ErrorLabel
                  error={
                    errors.categories?.[index]?.dishes?.[indexDish]?.description
                      ?.message
                  }
                  id="minLength"
                />
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
          Add first dish
        </Button>
      </div>
    </div>
  )
}

export default CategoryForm
