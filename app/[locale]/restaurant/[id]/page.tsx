import { Heading } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { RestaurantHero } from '@/components/restaurant/restaurant-hero';
import { RestaurantInfo } from '@/components/restaurant/restaurant-info';
import { RestaurantMap } from '@/components/restaurant/restaurant-map';
import { RestaurantMenu } from '@/components/restaurant/restaurant-menu';
import { RestaurantReviews } from '@/components/restaurant/restaurant-reviews';
import { Card } from '@/components/ui/card';
import { getRestaurantById } from '@/lib/firebase/getRestaurantById';
import { getRestaurantMenu } from '@/lib/firebase/getRestaurantMenu';

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { id } = await params;
  const t = await getTranslations('restaurant_detail');

  const [restaurant, menu] = await Promise.all([getRestaurantById(id), getRestaurantMenu(id)]);

  if (!restaurant) {
    notFound();
  }

  return (
    <PageWidthWrapper>
      <div className="max-w-7xl mx-auto sm:py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <RestaurantHero restaurant={restaurant} />
          <RestaurantInfo restaurant={restaurant} />
          <Card className="md:col-span-1">
            <p className="p-4 sm:p-6">{restaurant.shortDescription}</p>
          </Card>
        </div>

        <RestaurantMenu menu={menu} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 h-fit">
            <Heading size="5" className="mb-4">
              {t('location')}
            </Heading>
            <div className="rounded-lg overflow-hidden border">
              <RestaurantMap
                address={`${restaurant.city} ${restaurant.street}`}
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS || ''}
              />
            </div>
          </Card>

          <RestaurantReviews />
        </div>
      </div>
    </PageWidthWrapper>
  );
};

export default RestaurantPage;
