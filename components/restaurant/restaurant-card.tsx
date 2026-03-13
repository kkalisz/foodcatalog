'use client';

import { Box, Flex } from '@radix-ui/themes';
import { Timestamp } from 'firebase/firestore';
import { Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { restaurantImage } from '@/data/constants/icons';

interface Restaurant {
  id?: string;
  name: string;
  slug?: string;
  city: string;
  category?: string;
  shortDescription?: string;
  coverImage?: string | null;
  rating?: string;
  reviewsCount?: string;
  status?: string;
  firmId?: string;
  restaurantId?: string;
  delivery?: boolean;
  createdAt?: Timestamp;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const t = useTranslations();

  return (
    <Box style={{ flex: 1 }}>
      <Link href={`/restaurant/${restaurant.id}`}>
        <Card className="align-center justify-center overflow-hidden hover:shadow-lg transition-shadow cursor-pointer w-full">
          <Flex align="center" justify="center" direction="row" className="w-[10vw] h-[10vw]">
            <img
              className="align-center justify-center w-full h-full object-cover hover:scale-105 transition-transform"
              src={restaurant.coverImage || restaurantImage}
              alt={restaurant.name}
            />
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {t('restaurant_card.price_range')}
            </div>
          </Flex>
          <div className="p-4">
            <div className="mb-3">
              <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                {restaurant.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold text-foreground">{restaurant.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({restaurant.reviewsCount})</span>
              </div>
            </div>

            {/* Cuisine Tags */}
            <div className="flex flex-wrap gap-1 mb-3">{restaurant.category}</div>

            {/* Address */}
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{restaurant.city}</span>
            </div>
          </div>
        </Card>
      </Link>
    </Box>
  );
}
