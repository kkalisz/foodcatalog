import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import RestaurantSiteGalery from '@/components/galery/restaurant-site-galery';
import { RestaurantHero } from '@/components/restaurant/restaurant-hero';
import { RestaurantInfo } from '@/components/restaurant/restaurant-info';
import { RestaurantMap } from '@/components/restaurant/restaurant-map';
import { RestaurantMenu } from '@/components/restaurant/restaurant-menu';
import { RestaurantReviews } from '@/components/restaurant/restaurant-reviews';
import { Card } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { defaultGallery } from '@/data/constants/defaultyGallery';
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
      <div className="max-w-7xl mx-auto sm:py-8">
        <Stack gap={8}>
          <Grid cols={2} gap={8}>
            <RestaurantHero restaurant={restaurant} />
            <RestaurantInfo restaurant={restaurant} />
            <Card className="md:col-span-1">
              <p className="p-4 sm:p-6">{restaurant.shortDescription}</p>
            </Card>
          </Grid>
          <RestaurantSiteGalery gallery={defaultGallery} />
          <RestaurantMenu menu={menu} />

          <Grid cols={3} gap={8}>
            <Section title={t('location')} className="md:col-span-1">
              <Card className="p-0 overflow-hidden border h-64">
                <RestaurantMap
                  address={`${restaurant.city} ${restaurant.street}`}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS || ''}
                />
              </Card>
            </Section>

            <RestaurantReviews />
          </Grid>
        </Stack>
      </div>
    </PageWidthWrapper>
  );
};

export default RestaurantPage;
