'use client';

import { useState } from 'react';

import { Flex, Heading } from '@radix-ui/themes';
import { Timestamp } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { PageHeightWrapper } from '@/components/common/page-height-wrapper';
import PageLoader from '@/components/common/page-loader';
import DiscoverEmptyRestaurants from '@/components/discover/discover-empty-restaurants';
import { RestaurantCard } from '@/components/restaurant/restaurant-card';
import FiltersDiscoveryPage from '@/components/search/filters-discovery-page';
import EmptySearchContainer from '@/components/ui/containers/EmptySearchContainer';
import { usePublicRestaurants } from '@/data/hooks/usePublickRestaurants';

export default function DiscoverPage() {
  const t = useTranslations();
  const params = useSearchParams();
  const searchParams = params.get('search');
  const searchedValueParams = params.get('serched');
  // Initialize directly from URL params so first fetch already uses the correct filter
  const [currentSearch, setCurrentSearch] = useState(searchedValueParams ?? '');
  const { loading, restaurants } = usePublicRestaurants('', currentSearch);
  if (loading) {
    return <PageLoader loadingText={t('discover_page.loading')} />;
  }

  return (
    <PageHeightWrapper>
      {loading && restaurants.length === 0 ? (
        <EmptySearchContainer
          title={t('discover_page.no_results')}
          description={t('discover_page.try_adjusting')}
        />
      ) : (
        <div className="w-full">
          <Flex direction="column" gap="2">
            <Heading size="7">{t('discover_page.header')}</Heading>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('discover_page.subheader')}
            </p>
            {t('discover_page.search_term')}
            {searchParams ? <Heading>{searchParams?.toLocaleUpperCase()}</Heading> : null}
            <Flex direction="column" gap="2">
              <FiltersDiscoveryPage
                onSearchChange={setCurrentSearch}
                curentySearch={currentSearch}
              />
            </Flex>
          </Flex>
          {!restaurants.length && <DiscoverEmptyRestaurants />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full pt-4">
            {restaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.createdAt}
                restaurant={{
                  ...restaurant,
                  createdAt: Timestamp.fromMillis(restaurant.createdAt),
                }}
              />
            ))}
          </div>
        </div>
      )}
    </PageHeightWrapper>
  );
}
