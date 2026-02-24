'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Text,
  Checkbox,
  CheckboxCards,
  Flex,
  Heading,
  TextArea,
  TextField,
  Button,
} from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CUISINES } from '@/data/constans/cusines';
import { CreatePublicRestaurantForm } from '@/data/types/createPublicRestaurantForm';
import {
  updatePublicRestaurant,
  getRestaurantById,
  createRestaurant,
} from '@/lib/firebase/restaurants';
import { createPublickRestaurantSchema } from '@/lib/validators/createPublickRestaurantSchema';
import { useAuth } from '@/providers/AuthContext';

import { Input } from '../ui/input';

type Props = {
  restaurantId?: string;
};

export const RestaurantForm = ({ restaurantId }: Props) => {
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  const form = useForm<CreatePublicRestaurantForm>({
    resolver: zodResolver(createPublickRestaurantSchema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      street: '',
      postalCode: '',
      category: [],
      shortDescription: '',
      coverImage: '',
      delivery: false,
    },
  });

  useEffect(() => {
    if (!restaurantId || !user) {
      return;
    }

    const loadRestaurant = async () => {
      const restaurant = await getRestaurantById(restaurantId);
      if (!restaurant) {
        return;
      }
      if (restaurant.firmId !== user.uid) {
        return;
      }

      form.reset({
        name: restaurant.name,
        phone: restaurant.phone,
        city: restaurant.city,
        street: restaurant.street,
        postalCode: restaurant.postalCode,
        category: Array.isArray(restaurant.category) ? restaurant.category : [restaurant.category],
        shortDescription: restaurant.shortDescription,
        coverImage: restaurant.coverImage,
        delivery: restaurant.delivery,
      });
    };

    loadRestaurant();
  }, [restaurantId, user, form.reset]);

  const onSubmit = async (data: CreatePublicRestaurantForm) => {
    if (!user) {
      return;
    }

    try {
      if (restaurantId) {
        await updatePublicRestaurant(restaurantId, data);
        alert(t('restaurant_form.saved_success'));
      } else {
        const newRestaurantId = await createRestaurant(data, user.uid);

        router.push(`/owner/restaurants/${newRestaurantId}/menu`);
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Flex direction="column" gap="2">
        <Box>
          <Heading>{t('restaurant_form.basic_info')}</Heading>
        </Box>
        <Box>
          <TextField.Root
            {...form.register('name')}
            size="3"
            variant="surface"
            placeholder={t('restaurant_form.name_placeholder')}
            required
          ></TextField.Root>
        </Box>
        <Box>
          <TextField.Root
            {...form.register('city')}
            placeholder={t('restaurant_form.city_placeholder')}
            size="3"
            variant="surface"
            required
          ></TextField.Root>
        </Box>
        <Flex gap="2">
          <Box>
            <TextField.Root
              {...form.register('street')}
              placeholder={t('restaurant_form.street_placeholder')}
              size="3"
              variant="surface"
              required
            ></TextField.Root>
          </Box>
          <Box>
            <TextField.Root
              {...form.register('postalCode')}
              placeholder={t('restaurant_form.postalCode_placeholder')}
              size="3"
              variant="surface"
              required
            ></TextField.Root>
          </Box>
        </Flex>

        <Box>
          <Heading>{t('restaurant_form.cuisine_type')}:</Heading>
        </Box>
        <Box>
          <Controller
            control={form.control}
            name="category"
            render={({ field }) => (
              <CheckboxCards.Root
                size="3"
                variant="surface"
                value={field.value}
                onValueChange={field.onChange}
              >
                {CUISINES.map(cuisine => (
                  <CheckboxCards.Item key={cuisine} value={cuisine}>
                    <Flex direction="column" width="100%">
                      <Box>{cuisine}</Box>
                    </Flex>
                  </CheckboxCards.Item>
                ))}
              </CheckboxCards.Root>
            )}
          />
        </Box>
        <Box>
          <TextArea
            {...form.register('shortDescription')}
            placeholder={t('restaurant_form.description_placeholder')}
            size="3"
            variant="surface"
          ></TextArea>
        </Box>
        <Box>
          <TextField.Root
            {...form.register('phone')}
            placeholder={t('restaurant_form.phone_placeholder')}
            size="3"
            variant="surface"
          ></TextField.Root>
        </Box>
        <Box>
          <TextField.Root
            {...form.register('coverImage')}
            placeholder={t('restaurant_form.image_url_placeholder')}
            size="3"
            variant="surface"
          ></TextField.Root>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <Input type="file" className="w-[10vw] m-2" />
            <Button size="3" variant="surface">
              {t('restaurant_form.upload')}
            </Button>
          </Flex>
        </Box>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox />
            {t('restaurant_form.delivery')}
          </Flex>
        </Text>
        <Button type="submit" disabled={form.formState.isSubmitting} size="3" variant="surface">
          {form.formState.isSubmitting
            ? t('restaurant_form.saving')
            : restaurantId
              ? t('restaurant_form.save_changes')
              : t('restaurant_form.add_restaurant')}
        </Button>
      </Flex>
    </form>
  );
};
