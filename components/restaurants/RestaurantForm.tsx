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
  Card,
} from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
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

import { RestaurantMap } from '../restaurant-map';
import { Input } from '../ui/input';

type Props = {
  restaurantId?: string;
};

export const RestaurantForm = ({ restaurantId }: Props) => {
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreatePublicRestaurantForm>({
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
  const watchedCity = watch('city');
  const watchedStreet = watch('street');
  const fullAddress = `${watchedStreet || ''} ${watchedCity || ''}`.trim();
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

      reset({
        name: restaurant.name ?? '',
        city: restaurant.city ?? '',
        street: restaurant.street ?? '',
        postalCode: restaurant.postalCode ?? '',
        phone: restaurant.phone ?? '',
        category: Array.isArray(restaurant.category) ? restaurant.category : [restaurant.category],
        shortDescription: restaurant.shortDescription ?? '',
        coverImage: restaurant.coverImage ?? '',
        delivery: restaurant.delivery ?? false,
      });
    };

    loadRestaurant();
  }, [restaurantId, user, reset]);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="2">
        <Flex direction="row" gap="5" py="7">
          <Flex direction="column" gap="2">
            <Box>
              <Heading size="4">{t('restaurant_form.basic_info')}:</Heading>
            </Box>
            <Box>
              <TextField.Root
                {...register('name')}
                size="3"
                variant="surface"
                placeholder={t('restaurant_form.name_placeholder')}
                required
              ></TextField.Root>
            </Box>
            <Box>
              <TextField.Root
                {...register('city')}
                placeholder={t('restaurant_form.city_placeholder')}
                size="3"
                variant="surface"
                required
              ></TextField.Root>
            </Box>
            <Box>
              <TextField.Root
                {...register('street')}
                placeholder={t('restaurant_form.street_placeholder')}
                size="3"
                value={watchedStreet}
                variant="surface"
                required
              ></TextField.Root>
            </Box>
            <Box>
              <TextField.Root
                {...register('postalCode')}
                placeholder={t('restaurant_form.postalCode_placeholder')}
                size="3"
                variant="surface"
                required
              ></TextField.Root>
            </Box>
            <Box>
              <TextField.Root
                {...register('phone')}
                placeholder={t('restaurant_form.phone_placeholder')}
                size="3"
                variant="surface"
              ></TextField.Root>
            </Box>
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                {t('restaurant_form.delivery')}
              </Flex>
            </Text>
          </Flex>
          <Flex width="full">
            <Card className="p-4">
              <Heading size="5">{t('restaurant_detail.location')}</Heading>
              <RestaurantMap
                address={fullAddress || 'Warszawa'}
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS || ''}
              />
            </Card>
          </Flex>
          <Flex className="flex-1 w-full">
            <Box className="w-full">
              <CheckboxCards.Root
                {...register('category')}
                size="3"
                variant="surface"
                columns={{ initial: '1', sm: '2', md: '3' }}
              >
                {CUISINES.map(cuisine => (
                  <CheckboxCards.Item key={cuisine} value={cuisine}>
                    <Flex>
                      <Box>{cuisine}</Box>
                    </Flex>
                  </CheckboxCards.Item>
                ))}
              </CheckboxCards.Root>
            </Box>
          </Flex>
        </Flex>

        <Box>
          <Heading>{t('restaurant_form.cuisine_type')}:</Heading>
        </Box>

        <Box>
          <TextArea
            {...register('shortDescription')}
            placeholder={t('restaurant_form.description_placeholder')}
            size="3"
            variant="surface"
          ></TextArea>
        </Box>

        <Box>
          <TextField.Root
            {...register('coverImage')}
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

        <Button type="submit" disabled={isSubmitting} size="3" variant="surface">
          {isSubmitting
            ? t('restaurant_form.saving')
            : restaurantId
              ? t('restaurant_form.save_changes')
              : t('restaurant_form.add_restaurant')}
        </Button>
      </Flex>
    </form>
  );
};
