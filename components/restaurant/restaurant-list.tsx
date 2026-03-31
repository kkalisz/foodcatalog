'use client';

import { Button, Flex } from '@radix-ui/themes';
import { Star, Edit2, Trash, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { restaurantImage } from '@/data/constants/icons';
import { PublicRestaurant } from '@/data/types/publicRestaurant';
import { deletePublicRestaurant } from '@/lib/firebase/deletePublicRestaurant';

type RestaurantsListProps = {
  restaurants: PublicRestaurant[];
};

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const router = useRouter();
  const t = useTranslations();
  const tRest = useTranslations('restaurant_components');

  const handleDelete = async (restaurantId: string) => {
    if (!confirm(t('restaurants_list.confirm_delete'))) {
      return;
    }
    try {
      await deletePublicRestaurant(restaurantId);
      alert(t('restaurants_list.deleted_success'));
      router.refresh();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };
  return (
    <div className="space-y-4">
      {restaurants.map(restaurant => (
        <Card key={restaurant.id} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <Flex className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden">
              <img
                src={restaurant.coverImage || restaurantImage}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </Flex>

            {/* Info */}
            <Flex direction="column" className="flex-1">
              <Flex direction="column">
                <h3 className="font-bold text-lg">{restaurant.name}</h3>
                <div
                  className={`px-2 py-1 w-fit rounded-full ${
                    restaurant.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {restaurant.status === 'active'
                    ? t('restaurants_list.active')
                    : t('restaurants_list.inactive')}
                </div>

                <Flex className="flex items-center gap-1">
                  <p>{tRest('reviews')}</p>
                  <Star className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </Flex>
                <Flex className="flex items-center gap-1">
                  <p>{tRest('views')}</p>
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{restaurant.views}</span>
                </Flex>
              </Flex>
            </Flex>

            {/* Actions */}
            <div className="flex gap-2 sm:flex-col">
              <Button
                size="2"
                variant="outline"
                onClick={() => router.push(`/owner/restaurants/${restaurant.id}/edit`)}
              >
                <Edit2 className="w-4 h-4 mr-2" />
                {t('restaurants_list.edit')}
              </Button>
              <Button onClick={() => router.push(`/owner/restaurants/${restaurant.id}/menu`)}>
                {t('restaurants_list.add_edit_menu')}
              </Button>
              <Button size="2" color="red" onClick={() => handleDelete(restaurant.id)}>
                <Trash className="w-4 h-4 mr-2" />
                {t('restaurants_list.delete')}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
