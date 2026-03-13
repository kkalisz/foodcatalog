import { Flex, Heading } from '@radix-ui/themes';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PublicRestaurant } from '@/data/types/publicRestaurant';

interface RestaurantHeroProps {
  restaurant: PublicRestaurant;
}

export const RestaurantHero = async ({ restaurant }: RestaurantHeroProps) => {
  const t = await getTranslations('restaurant_detail');

  return (
    <div className="md:col-span-2">
      <div className="relative h-64 sm:h-80 md:h-96 bg-muted overflow-hidden mb-6">
        {restaurant.coverImage && (
          <img
            src={restaurant.coverImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        )}
        <Link
          href="/discover"
          className="absolute top-4 left-4 bg-background/80 hover:bg-background rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </div>
      <Heading size="7">{restaurant.name}</Heading>
      <Flex py="3" direction="row" gap="4">
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
              ? restaurant.category.join(', ')
              : restaurant.category}
          </span>
        )}
      </Flex>
    </div>
  );
};
