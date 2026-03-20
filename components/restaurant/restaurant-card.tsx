'use client';

import { useEffect, useState } from 'react';

import { Avatar, Box, Flex } from '@radix-ui/themes';
import { Timestamp } from 'firebase/firestore';
import { Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { restaurantImage } from '@/data/constants/icons';
import { FilteredRestaurant } from '@/data/hooks/filterRestaurant';
import { Category } from '@/data/types/dishMenu';
import { getRestaurantMenu } from '@/lib/firebase/getRestaurantMenu';
interface Restaurant {
  id?: string;
  name: string;
  slug?: string;
  city: string;
  category?: string[];
  shortDescription?: string;
  coverImage?: string | null;
  logoImage?: string | null;
  rating?: string;
  reviewsCount?: string;
  status?: string;
  firmId?: string;
  restaurantId?: string;
  delivery?: boolean;
  createdAt?: Timestamp;
}

interface RestaurantCardProps {
  filteredRestaurant: FilteredRestaurant;
}

export function RestaurantCard({ filteredRestaurant }: RestaurantCardProps) {
  const params = useSearchParams();
  const { restaurant } = filteredRestaurant;
  const t = useTranslations();
  const [menu, setMenu] = useState<Category[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      if (restaurant.id) {
        const categories = await getRestaurantMenu(restaurant.id);
        setMenu(categories);
      }
    };
    fetchMenu();
  }, [restaurant.id]);

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
            <Flex className="flex-1">
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
                    <span className="text-sm text-muted-foreground">
                      ({restaurant.reviewsCount})
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {restaurant.category?.map(category => (
                    <span key={category} className="text-sm text-muted-foreground">
                      {category} |
                    </span>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{restaurant.city}</span>
                </div>
              </div>
            </Flex>
          </Flex>
          <Box className="p-2">
            {menu.map(item => (
              <div key={item.id}>
                {item.dishes
                  .filter(dish =>
                    dish.name.toLowerCase().includes(params.get('serched')?.toLowerCase() || '')
                  )
                  .map(dish => (
                    <Card key={dish.name} className="p-4">
                      {dish.name.toLocaleUpperCase()} : {dish.price}zł
                    </Card>
                  ))}
              </div>
            ))}
          </Box>
        </Card>
      </Link>
    </Box>
  );
}
