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
          {/* Mobile: column layout. md+: row layout */}
          <Flex direction="column" className="md:flex-row">
            {/* Cover image */}
            <Flex className="relative h-48 md:h-auto md:w-48 overflow-hidden shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                src={restaurant.coverImage || restaurantImage}
                alt={restaurant.name}
              />
              {/* Avatar overlaid on image */}
              <Flex
                position="absolute"
                className="bottom-2 left-2 rounded-full p-1 bg-white/80 backdrop-blur-sm"
              >
                <Avatar
                  className="border border-white"
                  size="3"
                  src={restaurant.logoImage || restaurantImage}
                  fallback={''}
                />
              </Flex>
            </Flex>

            {/* Content */}
            <Flex className="flex-1" align="start">
              <div className="p-4 w-full">
                <div className="mb-3">
                  <Flex align="center" justify="between" wrap="wrap" gap="1">
                    <Flex align="center" gap="1" className="min-w-0">
                      <Heading size="4" className="truncate">
                        {restaurant.name}
                      </Heading>
                      <Star className="w-4 h-4 fill-primary text-primary shrink-0" />
                      <span className="font-semibold text-foreground shrink-0">
                        {restaurant.rating}
                      </span>
                    </Flex>
                    <span className="text-sm text-muted-foreground shrink-0">
                      ({restaurant.reviewsCount})
                    </span>
                  </Flex>

                  <Flex mt="2">
                    {restaurant.delivery ? (
                      <Flex align="center" gap="1">
                        <Tooltip content={tRest('delivery')}>
                          <IconButton radius="full" size="1">
                            <CarIcon className="w-3 h-3" />
                          </IconButton>
                        </Tooltip>
                      </Flex>
                    ) : (
                      <p className="text-sm text-muted-foreground">{tRest('no_delivery')}</p>
                    )}
                  </Flex>
                </div>

                <Flex className="flex flex-wrap gap-1 mb-3">
                  {restaurant.category?.map(category => (
                    <span
                      key={category}
                      className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </Flex>

                <Flex className="items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
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
