'use client';

import { Star, Edit2, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Button } from '@radix-ui/themes';
import { Card } from '@/components/ui/card';
import { restaurantImage } from '@/data/constans/icons';
import { PublicRestaurant } from '@/data/types/publicRestaurant';
import { deletePublicRestaurant } from '@/lib/firebase/restaurants';

type RestaurantsListProps = {
  restaurants: PublicRestaurant[];
};

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const router = useRouter();
  const { t } = useTranslation();

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
            <div className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden">
              <img
                src={restaurant.coverImage || restaurantImage}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>

              <div className="flex items-center gap-4 text-sm mt-2">
                <span
                  className={`px-2 py-1 rounded-full ${
                    restaurant.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {restaurant.status === 'active'
                    ? t('restaurants_list.active')
                    : t('restaurants_list.inactive')}
                </span>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
              </div>
            </div>

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
