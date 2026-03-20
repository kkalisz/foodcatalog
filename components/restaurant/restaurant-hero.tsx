import { Avatar, Button, Flex, Heading } from '@radix-ui/themes';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PublicRestaurant } from '@/data/types/publicRestaurant';

interface RestaurantHeroProps {
  restaurant: PublicRestaurant;
  images?: string[];
}

export const RestaurantHero = async ({ restaurant, images }: RestaurantHeroProps) => {
  const t = await getTranslations('restaurant_detail');

  return (
    <Flex direction="column" className="md:col-span-2">
      <Flex className="bg-orange-500 relative h-64 sm:h-80 md:h-96 bg-muted overflow-hidden mb-6">
        {restaurant.coverImage && (
          <Flex className="w-full h-full">
            <Avatar
              size="8"
              className="absolute bottom-4 right-4 w-24 h-24 rounded-full"
              src={restaurant.logoImage}
              fallback={''}
            ></Avatar>
            <img
              src={restaurant.coverImage}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
          </Flex>
        )}
        <Link
          href="/discover"
          className="absolute top-4 left-4 bg-background/80 hover:bg-background rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </Flex>
      <Flex>
        <Button size="3" variant="solid" color="gray">
          Złóż zamówienie
        </Button>
      </Flex>

      <Flex py="3" direction="row" gap="4" align="center">
        <Heading size="7">{restaurant.name}</Heading>
        <Flex direction="row" gap="2" align="center">
          <Star className="w-5 h-5 fill-primary text-primary" />
          <span>{restaurant.rating}</span>
        </Flex>
        <span>
          ({restaurant.reviewsCount} {t('reviews')})
        </span>
        {restaurant.category && (
          <span>
            Cuisine:{' '}
            {Array.isArray(restaurant.category)
              ? restaurant.category.join(' | ')
              : restaurant.category}
          </span>
        )}
      </Flex>
    </Flex>
  );
};
