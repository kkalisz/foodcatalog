'use client';

import { useEffect, useState } from 'react';

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
import { AdvancedMarker, useMapsLibrary, Map } from '@vis.gl/react-google-maps';
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
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [center, setCenter] = useState<{ lat: number; lng: number }>();
  const [localization, setLocalization] = useState<{ lat: number; lng: number } | null>(null);
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { isSubmitting },
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
      lat: 0,
      lng: 0,
    },
  });
  const geocodingLibrary = useMapsLibrary('geocoding');
  const watchedCity = watch('city');
  const watchedStreet = watch('street');
  const watchedPostalCode = watch('postalCode');
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
        lat: restaurant.lat ?? 0,
        lng: restaurant.lng ?? 0,
      });
    };

    loadRestaurant();
  }, [restaurantId, user, reset]);
  useEffect(() => {
    if (!geocodingLibrary) {
      return;
    }
    const loadCenterMapPosition = new geocodingLibrary.Geocoder();
    loadCenterMapPosition.geocode(
      { address: `${watchedPostalCode}, ${watchedCity}, ${watchedStreet}, Polska` },
      (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const location = results[0].geometry.location;
          setCenter({ lat: location.lat(), lng: location.lng() });
          setPosition(null);
        }
      }
    );
  }, [geocodingLibrary, watchedCity, watchedPostalCode, watchedStreet]);
  const onSubmit = async (data: CreatePublicRestaurantForm) => {
    if (!user) {
      return;
    }
    const lat = center?.lat ?? data.lat;
    const lng = center?.lng ?? data.lng;
    try {
      if (restaurantId) {
        await updatePublicRestaurant(restaurantId, { ...data, lat, lng });
        alert(t('restaurant_form.saved_success'));
      } else {
        const newRestaurantId = await createRestaurant(data, user.uid);

        router.push(`/owner/restaurants/${newRestaurantId}/menu`);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="2">
        <Flex className="w-full" direction={{ initial: 'column', md: 'row' }} gap="5" py="3">
          <Flex className="flex-none w-full md:w-1/3 " direction="column" gap="2">
            <Card variant="surface">
              <Flex direction="column" gap="3">
                <Heading size="4">{t('restaurant_form.basic_info')}:</Heading>
                <TextField.Root
                  {...register('name')}
                  size="3"
                  variant="surface"
                  placeholder={t('restaurant_form.name_placeholder')}
                  required
                ></TextField.Root>
                <TextField.Root
                  {...register('city')}
                  placeholder={t('restaurant_form.city_placeholder')}
                  size="3"
                  variant="surface"
                  required
                ></TextField.Root>
                <TextField.Root
                  {...register('street')}
                  placeholder={t('restaurant_form.street_placeholder')}
                  size="3"
                  value={watchedStreet}
                  variant="surface"
                  required
                ></TextField.Root>
                <TextField.Root
                  {...register('postalCode')}
                  placeholder={t('restaurant_form.postalCode_placeholder')}
                  size="3"
                  variant="surface"
                  required
                ></TextField.Root>
                <TextField.Root
                  {...register('phone')}
                  placeholder={t('restaurant_form.phone_placeholder')}
                  size="3"
                  variant="surface"
                ></TextField.Root>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <Controller
                      name="delivery"
                      control={control}
                      render={({ field }) => (
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      )}
                    />
                    {t('restaurant_form.delivery')}
                  </Flex>
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex className="flex-1">
            <Card className="w-full h-full">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <CheckboxCards.Root
                    value={field.value}
                    className="h-full"
                    onValueChange={field.onChange}
                    size="1"
                    variant="classic"
                    columns={{ initial: '2', sm: '2', md: '4' }}
                  >
                    {CUISINES.map(cuisine => (
                      <CheckboxCards.Item key={cuisine} value={cuisine}>
                        <Flex>
                          <Box>{cuisine}</Box>
                        </Flex>
                      </CheckboxCards.Item>
                    ))}
                  </CheckboxCards.Root>
                )}
              />
            </Card>
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

        <Box className="border border-gray-200 w-full h-[30vh] rounded-lg overflow-hidden">
          <Map
            defaultZoom={13}
            center={center || { lat: 52.2297, lng: 21.0122 }}
            onCameraChanged={ev => setCenter(ev.detail.center)}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS}
          >
            <AdvancedMarker
              position={position || center || { lat: 52.2297, lng: 21.0122 }}
              draggable={true}
              onDragEnd={(ev: google.maps.MapMouseEvent) => {
                if (ev.latLng) {
                  const lat = ev.latLng.lat();
                  const lng = ev.latLng.lng();
                  setLocalization({ lat, lng });
                }
              }}
            />
          </Map>
        </Box>
      </Flex>
    </form>
  );
};
