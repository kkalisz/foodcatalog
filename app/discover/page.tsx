'use client';

import { Timestamp } from 'firebase/firestore';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { RestaurantCard } from '@/components/restaurant-card';
import EmptySearchContainer from '@/components/ui/containers/EmptySearchContainer';
import PageLoader from '@/components/ui/loader/PageLoader';
import { PageSizeWrapper } from '@/components/ui/wrapper';
import { usePublickRestaurants } from '@/data/hooks/usePublickRestaurants';
import { useSearchParams } from 'next/navigation';
import { Flex, Heading } from '@radix-ui/themes';
import HeaderSearchRestaurant from '@/components/ui/search/HeaderSearchRestaurantParam';

export default function DiscoverPage() {
  const { loading, resteurants, setSearchQuery, searchQuery } = usePublickRestaurants();
  const { t } = useTranslation();
  const params = useSearchParams();
  const searchParams = params.get('search');

  if (loading && resteurants.length === 0) {
    return <PageLoader loadingText={t('discover_page.loading')} />;
  }

  return (
    <main className="min-h-screen bg-background">
      {loading && resteurants.length === 0 ? (
        <EmptySearchContainer
          tittle={t('discover_page.no_results')}
          description={t('discover_page.try_adjusting')}
        />
      ) : (
        <PageSizeWrapper>
          <Flex direction="column" gap="2" pt="4">
            <Heading size="7">{t('discover_page.header')}</Heading>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('discover_page.subheader')}
            </p>
            Wyszukiwana rzecz:{<Heading>{searchParams?.toLocaleUpperCase()}</Heading>}
            <HeaderSearchRestaurant icon={<Search />} placeholder={'szukaj'} />
          </Flex>

          <Flex direction="row" gap="2">
            {resteurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.createdAt}
                restaurant={{
                  ...restaurant,
                  createdAt: Timestamp.fromMillis(restaurant.createdAt),
                }}
              />
            ))}
          </Flex>
        </PageSizeWrapper>
      )}
    </main>
  );
}
