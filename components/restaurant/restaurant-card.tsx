'use client';

import { Avatar, Box, Flex, Heading, IconButton, Tooltip } from '@radix-ui/themes';
import { Star, MapPin, CarIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { restaurantImage } from '@/data/constants/icons';
import { FilteredRestaurant } from '@/data/hooks/filterRestaurant';
import { Dish } from '@/data/types/dishMenu';

import FiltersDiscoveryDishPage from '../search/filters-discovery-dish-page';

interface RestaurantCardProps {
  filteredRestaurant: FilteredRestaurant;
  filteredDishes: Dish[];
}

export function RestaurantCard({ filteredRestaurant, filteredDishes }: RestaurantCardProps) {
  const { restaurant } = filteredRestaurant;
  const tRest = useTranslations('restaurant_components');

  return (
    <Box>
      <Link href={`/restaurant/${restaurant.id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer w-full">
          <Flex direction="row">
            <Flex position="absolute" className="rounded-full p-2">
              <Avatar
                className="bg-white border-1 border-white"
                size="7"
                src={restaurant.logoImage || restaurantImage}
                fallback={''}
              />
            </Flex>
            <Flex className="h-48 overflow-hidden flex-1">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform"
                src={restaurant.coverImage || restaurantImage}
                alt={restaurant.name}
              />
            </Flex>
            <Flex className="flex-1" align="center">
              <div className="p-4">
                <div className="mb-3">
                  <Flex align="center" justify="between">
                    <Flex align="center" gap="1">
                      <Heading size="4">{restaurant.name}</Heading>
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold text-foreground">{restaurant.rating}</span>
                    </Flex>
                    <span className="text-sm text-muted-foreground">
                      ({restaurant.reviewsCount})
                    </span>
                  </Flex>

                  <Flex mt="2">
                    {restaurant.delivery ? (
                      <Flex align="center" gap="1">
                        <Tooltip content={tRest('delivery')}>
                          <IconButton radius="full">
                            <CarIcon />
                          </IconButton>
                        </Tooltip>
                      </Flex>
                    ) : (
                      <p>{tRest('no_delivery')}</p>
                    )}
                  </Flex>
                </div>
                <Flex className="flex flex-wrap mb-3">
                  {restaurant.category?.map(category => (
                    <p key={category} className="text-sm text-muted-foreground">
                      {category} |
                    </p>
                  ))}
                </Flex>
                <Flex className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{restaurant.city}</span>
                </Flex>
              </div>
            </Flex>
          </Flex>

          <FiltersDiscoveryDishPage filteredDishes={filteredDishes} />
        </Card>
      </Link>
    </Box>
  );
}
